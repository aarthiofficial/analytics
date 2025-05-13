import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface FinanceState {
  data: any;
  loading: boolean;
  error: string | null;
}

const initialState: FinanceState = {
  data: null,
  loading: false,
  error: null,
};

export const fetchFinance = createAsyncThunk('finance/fetchFinance', async (symbol: string) => {
  const response = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.NEXT_PUBLIC_FINANCE_API_KEY}`);
  const timeSeries = response.data['Time Series (5min)'];
  const chartData = Object.keys(timeSeries).map(time => ({
    time,
    value: parseFloat(timeSeries[time]['1. open'])
  })).reverse();
  return { price: chartData[chartData.length - 1].value, chartData };
});

const financeSlice = createSlice({
  name: 'finance',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFinance.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchFinance.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchFinance.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Error fetching finance data';
    });
  }
});

export default financeSlice.reducer;
