import { useDraggable } from "@dnd-kit/core";
import { MdInput } from "react-icons/md";
import { GoMultiSelect } from "react-icons/go";
import { PiSlidersHorizontal } from "react-icons/pi";
const Drag = () => {
  const inputDraggable = useDraggable({ id: "input" });
  const selectDraggable = useDraggable({ id: "select" });
  const rangeDraggable = useDraggable({ id: "range" });
  return (
    <div className="w-full top-0  h-[200px]  md:min-w-[340px]  md:min-h-screen md:max-w-[340px] px-[18px] border border-[#444444] rounded-[5px] py-[11px] bg-gray-50">
      <div className="w-full grid grid-cols-2 justify-items-center items-start gap-[10px] py-[10px] md:gap-[15px]">
        <div
          ref={inputDraggable.setNodeRef}
          {...inputDraggable.attributes}
          {...inputDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-primary rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <MdInput size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Input</span>
        </div>
        <div
          ref={selectDraggable.setNodeRef}
          {...selectDraggable.attributes}
          {...selectDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-primary rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <GoMultiSelect size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Select</span>
        </div>
        <div
          ref={rangeDraggable.setNodeRef}
          {...rangeDraggable.attributes}
          {...rangeDraggable.listeners}
          className="w-full md:w-[140px] min-h-[70px] bg-primary rounded-[10px] flex flex-col justify-center items-center cursor-move hover:opacity-90 transition"
        >
          <PiSlidersHorizontal size={30} color="#fff" />
          <span className="text-white text-sm mt-1">Range slider</span>
        </div>
      </div>
    </div>
  );
};
export default Drag;





// import React from "react";
// import { useForm, SubmitHandler, Controller } from "react-hook-form";
// import Input from "../../components/Input";
// import Button from "../../components/Button";
// type LoginFormInputs = {
//   email: string;
//   password: string;
// };
// const  LogIn = () => {
// //   const { handleSubmit, control } = useForm();
//    const {
//     control,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<LoginFormInputs>();
//   return (
//     <form  
//       className="max-w-sm mx-auto p-4 border rounded shadow space-y-4">
//       <div>
//         <label>Email</label>
//         <Controller
//         name="email"
//         control={control}
//         defaultValue="test"
//         rules={{ required: "" }}
//         render={({field}) => (
//           <Input
//             valueState={field.value}
//             onChangeHandler={field.onChange}
//             placeholder="مثال"
//             type="email"
//               className="w-full border rounded px-3 py-2"
//               ariaLabel="email"
//           />
//         )}
//       />
//       {errors.email && (
//           <p className="text-red-500 text-sm">{errors.email.message}</p>
//         )}
//       </div>

//       <div>
//         <label>Password</label>
//         <Controller
//          name="password"
//         control={control}
//         defaultValue="test2"
//         rules={{
//             required: "رمز عبور الزامی است",
//             minLength: { value: 6, message: "حداقل ۶ کاراکتر وارد کنید" },
//           }}
//         render={({ field }) => (
//           <Input
//             valueState={field.value}
//             onChangeHandler={field.onChange}
//             placeholder="ضروری"
//              type="password"
//               className="w-full border rounded px-3 py-2"
//               ariaLabel="password"
//           />
//         )}
//       />
//        {errors.password && (
//           <p className="text-red-500 text-sm">{errors.password.message}</p>
//         )}
//       </div>

//       {/* {errors.exampleRequired && <span>This field is required</span>} */}

//       <Button
//         type="submit"
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
//       >
//         enter
//       </Button>
//     </form>
//   );
// };

// export default  LogIn;





// import React from 'react';
// import { useForm } from 'react-hook-form';
// //  import Input from "../../components/Input";
//  function LogIn() {
//   const { register, handleSubmit, formState: { errors } } = useForm();
//   const onSubmit = (data :any) => console.log(data);
//   console.log(errors);
  
//   return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <input type="text" placeholder="First name" {...register("First name", {required: true, maxLength: 80})} />
//       <input type="text" placeholder="Email" {...register("Email", {required: true, pattern: /^\S+@\S+$/i})} />
//       <input type="tel" placeholder="Mobile number" {...register("Mobile number", {required: true, minLength: 6, maxLength: 12})} />

//       <input type="submit" />
//     </form>
//   );
// }
// export default LogIn;