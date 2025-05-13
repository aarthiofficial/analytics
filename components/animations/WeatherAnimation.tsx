import React from 'react';
import Lottie from 'lottie-react';
import weatherAnimationData from '../../public/lottie/weather.json';

export default function WeatherAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={weatherAnimationData} loop={true} />
    </div>
  );
}
