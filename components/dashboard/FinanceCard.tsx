import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFinance } from '@features/finance/financeSlice';
import Loader from '@components/common/Loader';
import LineChart from '@components/charts/LineChart';

export default function FinanceCard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.finance);

  useEffect(() => {
    dispatch(fetchFinance('AAPL'));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Stock Data</h2>
      {data && (
        <>
          <p className="mb-2">Price: ${data.price}</p>
          <LineChart data={data.chartData} />
        </>
      )}
    </div>
  );
}
