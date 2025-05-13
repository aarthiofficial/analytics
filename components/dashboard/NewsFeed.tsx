import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNews } from '@features/news/newsSlice';
import Loader from '@components/common/Loader';

export default function NewsFeed() {
  const dispatch = useDispatch();
  const { articles, loading, error } = useSelector((state: any) => state.news);

  useEffect(() => {
    dispatch(fetchNews('technology'));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Latest News</h2>
      {articles && articles.map((article: any, index: number) => (
        <div key={index} className="mb-4">
          <h3 className="font-semibold">{article.title}</h3>
          <p className="text-sm">{article.summary}</p>
        </div>
      ))}
    </div>
  );
}
