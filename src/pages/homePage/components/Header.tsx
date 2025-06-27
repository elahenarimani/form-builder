import React from 'react';
import { CgSearch, CgProfile } from 'react-icons/cg';
import { FaRegQuestionCircle } from "react-icons/fa";
import { FaTableCellsLarge } from "react-icons/fa6";
import Button from '../../../components/Button';


const Header = () => {
  return (
    <div className='w-full h-[50px] flex justify-between items-center bg-[#444444] px-[18px] text-white'>
      <div className='max-w-[120px] h-full hidden lg:flex justify-start items-center gap-[10px] flex-1 '>
        <div className=' w-[30px] h-[30px] hover:cursor-pointer'><CgSearch className='w-full h-full'/></div>
        <Button className='w-[26px] h-[26px]' disabled={true}><FaRegQuestionCircle className='w-full h-full'/></Button>
        <Button className='w-[26px] h-[26px]' disabled={true}><FaTableCellsLarge className='w-full h-full'/></Button>
      </div>
      <div className='lg:hidden w-[30px] h-[30px] hover:cursor-pointer'><CgSearch className='w-full h-full'/></div>
      <div className='w-[30px] h-[30px] hover:cursor-pointer '><img  src='/image/logo.jpg'  alt="Brand logo" className='w-full h-full' aria-label='logo image'/></div>
      <Button  className='w-[30px] h-[30px] hover:cursor-pointer '><CgProfile className='w-full h-full' /></Button>
    </div>
  );
};

export default Header;
