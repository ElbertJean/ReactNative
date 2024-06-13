  import { useState } from 'react';
  import Router from '@/src/routes/Router';
import { StatusBar } from 'react-native';

  const HomeScreen = () => {
    return (
      <>
        <StatusBar backgroundColor="#2C9050" barStyle="light-content"/>
          <Router/>
      </>
    );
  }

  export default HomeScreen;
