
// App.jsx
import React from 'react';
import SignIn from './components/auth/SignIn';
import SignUp from './components/SignUp';
import AuthDetails from './components/AuthDetails';
import  './App.css';
import { WeatherApp } from './components/WeatherApp/WeatherApp';

const App = () => {
  return (
    <div className='App'>
      <SignIn/>
      <SignUp/>
      
      <AuthDetails/>
      
    </div>
  );
};

export default App;
