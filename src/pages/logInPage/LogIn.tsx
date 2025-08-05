import React from "react"
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import { useCombinedStore } from "../../zustand/useCombinedStore"
import "./logIn.css"
import { Link, useNavigate } from "react-router-dom"
import Input from "../../components/Input"
import Button from "../../components/Button"

type LoginFormInputs = {
  email: string
  password: string
}
const LogIn = () => {
  const { logIn } = useCombinedStore()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    console.log("Form submitted:", data)
    const { email, password } = data
    const success: boolean = logIn(email, password)
    if (success) {
      navigate("/")
    } else {
      setError("email", {
        type: "manual",
        message: "email is wrong",
      })
      setError("password", {
        type: "manual",
        message: "",
      })
    }
  }
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LoginFormInputs>()
  return (
    <div className="w-full h-[100vh] flex flex-col sm:flex-row justify-between items-center  bg-[#4CA48E] sm:bg-white ">
      <div className="mobile-img-wrapper sm:hidden basis-0 grow "></div>
      <div className="w-full form-wrapper  basis-0 grow-[2]  sm:flex-1 sm:flex sm:justify-center sm:items-center">
        <form
          className="w-full sm:w-[375px] h-full  mx-auto p-4 pt-[40px] rounded-t-[30px] sm:rounded-[30px] shadow space-y-4 bg-white "
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
                  message: "Password should be at least 6 characters long",
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
            className="w-full bg-primary text-white mb-[5px] py-2 rounded hover:bg-primary/50"
          >
            Log In
          </Button>
          <Link to={"/register"}>
            <Button className="w-full bg-primary text-white mb-[5px] py-2 rounded hover:bg-primary/50">
              Sign Up
            </Button>
          </Link>
        </form>
      </div>
      <div className="desktop-img-wrapper hidden sm:block basis-0 grow  sm:flex-1 "></div>
    </div>
  )
}
export default LogIn
