// import React from 'react';
// import './App.css';
// import Header from './components/Header';
// import ElementPalette from './components/dashboard/ElementPalette';
// import MainForm from './components/dashboard/MainForm';
// import { useState } from 'react';
// import { DndContext } from '@dnd-kit/core';
// function App() {
//   const [elements, setElements] = useState<string[]>([]);
//     const handleDrop = (event: any) => {
//     const { active, over } = event;
//     if (over && over.id === 'drop-area') {
//       setElements([...elements, active.id]);
//     }
//   };
//   return (
//     <DndContext className="App " onDragEnd={handleDrop}>
//       <Header/>
//       <main className='w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center px-[18px] py-[18px] gap-[10px] md:gap-[50px]'>
//         <ElementPalette/>
//         <MainForm/>
//       </main>
//     </DndContext>
//   );
// }

// export default App;
import './App.css';
import Header from './components/Header';
import ElementPalette from './components/dashboard/ElementPalette';
import MainForm from './components/dashboard/MainForm';
import { useState } from 'react';
import { DndContext } from '@dnd-kit/core';
function App() {
  const [elements, setElements] = useState<string[]>([]);
    const handleDrop = (event: any) => {
    const { active, over } = event;
    if (over && over.id === 'drop-area') {
      setElements([...elements, active.id]);
    }
  };
   return (
   <div className="App ">
     <DndContext   onDragEnd={handleDrop}>
      <Header/>
      <main className='w-full md:w-11/12 lg:w-4/5 md:ml-auto md:mr-auto h-full flex flex-col md:flex-row-reverse justify-start md:justify-between items-center px-[18px] py-[18px] gap-[10px] md:gap-[50px]'>
        <ElementPalette/>
        <MainForm elements={elements} />
      </main>
    </DndContext>
   </div>
  );
}
export default App;