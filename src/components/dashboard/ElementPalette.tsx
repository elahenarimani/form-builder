// import { DndContext } from "@dnd-kit/core";
// import { MdInput } from "react-icons/md";
// import { GoMultiSelect } from "react-icons/go";
// import { PiSlidersHorizontal } from "react-icons/pi";
// import { useDraggable } from '@dnd-kit/core';
// const ElementPalette = () => {
//     const { attributes, listeners, setNodeRef } = useDraggable({ id: 'input' });
//   return (
//     <div className="w-full md:min-w-[340px] md:min-h-screen  md:max-w-[340px]  px-[18px] border border-[#444444] rounded-[5px] py-[11px]">
//       <div className="w-full h-[175px]  grid grid-cols-2 md:flex-start justify-items-center items-start gap-[10px] py-[10px] md:gap-[15px]">
//           <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
//             <MdInput size={30} color="#fff" />
//           </div>
//           <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
//             <GoMultiSelect size={30} color="#fff" />
//           </div>
//           <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
//             <PiSlidersHorizontal size={30} color="#fff" />
//           </div>
//       </div>
//     </div>
//   );
// };
// export default ElementPalette;
import { useDraggable } from "@dnd-kit/core";
import { MdInput } from "react-icons/md";
import { GoMultiSelect } from "react-icons/go";
import { PiSlidersHorizontal } from "react-icons/pi";
const ElementPalette = () => {
  const inputDraggable = useDraggable({ id: "input" });
  const selectDraggable = useDraggable({ id: "select" });
  const rangeDraggable = useDraggable({ id: "range" });
  return (
    <div className="w-full md:min-w-[340px] md:min-h-screen md:max-w-[340px] px-[18px] border border-[#444444] rounded-[5px] py-[11px]">
      <div className="w-full grid grid-cols-2 justify-items-center items-start gap-[10px] py-[10px] md:gap-[15px]">
        <div
          ref={inputDraggable.setNodeRef}
          {...inputDraggable.attributes}
          {...inputDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <MdInput size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Input</span>
        </div>
        <div
          ref={selectDraggable.setNodeRef}
          {...selectDraggable.attributes}
          {...selectDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <GoMultiSelect size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Select</span>
        </div>
        <div
          ref={rangeDraggable.setNodeRef}
          {...rangeDraggable.attributes}
          {...rangeDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <PiSlidersHorizontal size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Range slider</span>
        </div>
      </div>
    </div>
  );
};
export default ElementPalette;
