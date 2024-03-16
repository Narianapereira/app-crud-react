import { Routes } from './src/router';
import React from 'react';
import { NativeBaseProvider } from 'native-base';


export default function App() {
  return (
    <NativeBaseProvider>
      <Routes/>
    </NativeBaseProvider>
  );
}

