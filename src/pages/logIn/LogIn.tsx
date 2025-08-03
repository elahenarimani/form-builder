import React from "react";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { useCombinedStore } from "../../zustand/useCombinedStore";
import { useNavigate } from "react-router-dom";
type LoginFormInputs = {
  email: string;
  password: string;
};
const LogIn = () => {
  const { logIn } = useCombinedStore();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Form submitted:", data);
    const { email, password } = data;
    const success:boolean = logIn(email, password); 
    if (success) {
      navigate("/");
    }else {
      setError("email", {
        type: "manual",
        message: "email is wrong",
      });
      setError("password", {
        type: "manual",
        message: "",
      });
    }
  };
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  return (
    <div className="w-full h-[100vh] flex justify-center items-center p-4">
      <form
        className="w-[350px] mx-auto p-4 border rounded shadow space-y-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div>
          <label className="block mb-[5px]">Email</label>
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => (
              <Input
                valueState={field.value}
                onChangeHandler={field.onChange}
                placeholder="example@example.com"
                type="email"
                className="w-full border rounded px-3 py-2"
                ariaLabel="email"
              />
            )}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>
        <div>
          <label className="block mb-[5px]">Password</label>
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password should be at least 6 characters long"
              },
              validate: {
                hasNumberAndLetter: (value) =>
                  /^(?=.*[A-Za-z])(?=.*\d)/.test(value) ||
                  "Password must contain at least one letter and one number",
                hasSpecialChar: (value) =>
                  /[!@#$%^&*]/.test(value) ||
                  "Include at least one special character like !@#$%^&*",
              },
            }}
            render={({ field }) => (
              <Input
                valueState={field.value}
                onChangeHandler={field.onChange}
                placeholder="Required"
                type="password"
                className="w-full border rounded px-3 py-2"
                ariaLabel="password"
              />
            )}
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-[5px]">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/50"
        >
          Log In
        </Button>
         <Button
          
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/50"
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default LogIn;
