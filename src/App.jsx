// App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store.jsx';
import WeatherComponent from './components/WeatherComponent.jsx';

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Weather App</h1>
        <WeatherComponent />
      </div>
    </Provider>
  );
};

export default App;
