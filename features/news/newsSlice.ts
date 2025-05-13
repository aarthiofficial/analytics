import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface NewsState {
  articles: any[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};

export const fetchNews = createAsyncThunk('news/fetchNews', async (category: string) => {
  const response = await axios.get(`https://newsapi.org/v2/top-headlines?category=${category}&country=us&apiKey=${process.env.NEXT_PUBLIC_NEWS_API_KEY}`);
  return response.data.articles.map((article: any) => ({
    title: article.title,
    summary: article.description,
  }));
});

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchNews.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchNews.fulfilled, (state, action) => {
      state.loading = false;
      state.articles = action.payload;
    });
    builder.addCase(fetchNews.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Error fetching news';
    });
  }
});

export default newsSlice.reducer;
