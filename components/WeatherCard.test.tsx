import { render, screen } from '@testing-library/react';
import WeatherCard from '@components/dashboard/WeatherCard';
import { Provider } from 'react-redux';
import { store } from '@store/index';

describe('WeatherCard', () => {
  it('renders loading state', () => {
    render(
      <Provider store={store}>
        <WeatherCard />
      </Provider>
    );
    expect(screen.getByText(/Loading/i)).toBeInTheDocument();
  });
});
