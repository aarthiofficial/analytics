import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from '@features/weather/weatherSlice';
import Loader from '@components/common/Loader';
import WeatherAnimation from '@components/animations/WeatherAnimation';

export default function WeatherCard() {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state: any) => state.weather);

  useEffect(() => {
    dispatch(fetchWeather('New York'));
  }, [dispatch]);

  if (loading) return <Loader />;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-4 bg-white dark:bg-gray-900 rounded shadow">
      <h2 className="text-xl font-bold mb-2">Current Weather</h2>
      {data && (
        <div>
          <p className="text-lg">{data.city}</p>
          <p>{data.temperature} °C</p>
          <p>{data.description}</p>
          <WeatherAnimation />
        </div>
      )}
    </div>
  );
}
