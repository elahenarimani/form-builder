// import React from 'react'
// import { useDroppable } from '@dnd-kit/core';
// const MainForm = ({ elements }: { elements: string[] }) => {
//     const { setNodeRef } = useDroppable({ id: 'drop-area' });
//   return (
//     <div  ref={setNodeRef} className='main-form w-full min-h-screen border border-[#444444] rounded-[5px] py-[11px]'>
//         <h2 className="text-lg font-bold mb-4">فرم</h2>
//       {elements.map((el, index) => (
//         <div key={index} className="mb-2">
//           {el === 'input' && <input type="text" className="border p-2 w-full" />}
//         </div>
//       ))}
//     </div>
//   )
// }

// export default MainForm
import { useDroppable } from "@dnd-kit/core";

type MainFormProps = {
  elements: string[];
};

const MainForm = ({ elements }: MainFormProps) => {
  const { setNodeRef } = useDroppable({ id: "drop-area" });
  return (
    <div
      ref={setNodeRef}
      className="main-form w-full min-h-screen border border-[#444444] rounded-[5px] py-[20px] px-[15px] bg-gray-50"
    >
      <h2 className="text-lg font-bold mb-4">My Form</h2>
      {elements.map((el, index) => (
        <div key={index} className="mb-4" >
          {el === "input" && (
            <input
              type="text"
              className="border p-2 w-full rounded"
              placeholder="Enter text"
            />
          )}
          {el === "select" && (
            <select className="border p-2 w-full rounded">
              <option>Choose an option</option>
              <option>Choose an option</option>
              <option>Choose an option</option>
            </select>
          )}
          {el === "range" && (
            <input type="range" min={0} max={100} className="w-full" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MainForm;
