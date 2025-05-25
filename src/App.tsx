import React from 'react';
import './App.css';
import Header from './components/Header';
import ElementPalette from './components/dashboard/ElementPalette';
import MainForm from './components/dashboard/MainForm';

function App() {
  return (
    <div className="App ">
      <Header/>
      <main className='w-full h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center px-[18px] py-[18px] gap-[10px] md:gap-[50px]'>
        <ElementPalette/>
        <MainForm/>
      </main>
    </div>
  );
}

export default App;
