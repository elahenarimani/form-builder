import { MdInput } from "react-icons/md";
import { GoMultiSelect } from "react-icons/go";
import { PiSlidersHorizontal } from "react-icons/pi";
const ElementPalette = () => {
  return (
    <div className="w-full md:min-w-[340px] md:min-h-screen  md:max-w-[340px]  px-[18px] border border-[#444444] rounded-[5px] py-[11px]">
      <div className="w-full h-[175px]  grid grid-cols-2 md:flex-start justify-items-center items-start gap-[10px] py-[10px] md:gap-[15px]">
        <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
          <MdInput size={30} color="#fff" />
        </div>
        <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
          <GoMultiSelect size={30} color="#fff" />
        </div>
        <div className="w-full md:w-[140px] min-h-[70px] md:min-h-[70px] bg-[#1ABC9C] rounded-[10px] flex justify-center items-center">
          <PiSlidersHorizontal size={30} color="#fff" />
        </div>
      </div>
    </div>
  );
};
export default ElementPalette;
