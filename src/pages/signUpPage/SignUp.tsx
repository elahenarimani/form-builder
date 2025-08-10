import React from "react"
import { useNavigate } from "react-router-dom"
import { useForm, SubmitHandler, Controller } from "react-hook-form"

import Input from "../../components/Input"
import Button from "../../components/Button"
import { useCombinedStore } from "../../zustand/useCombinedStore"
type signUpFormInputs = {
  email: string
  password: string
  confirmPassword: string
}
const SignUp = () => {
  const { signUp } = useCombinedStore()
  const navigate = useNavigate()
  const onSubmit: SubmitHandler<signUpFormInputs> = (data) => {
    const success = signUp(data.email, data.password)
    if (success) {
      alert("Sign-up successful! Now log in")
      navigate("/login")
    } else {
      setError("email", {
        type: "manual",
        message: "This email is already registered",
      })
    }
  }
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors },
    getValues,
  } = useForm<signUpFormInputs>()
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
        <Controller
          name="confirmPassword"
          control={control}
          defaultValue=""
          rules={{
            required: "Please confirm your password",
            validate: (value) =>
              value === getValues("password") || "Passwords do not match",
          }}
          render={({ field }) => (
            <Input
              valueState={field.value}
              onChangeHandler={field.onChange}
              placeholder="Confirm your password"
              type="password"
              className="w-full border rounded px-3 py-2"
              ariaLabel="confirm-password"
            />
          )}
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-[5px]">
            {errors.confirmPassword.message}
          </p>
        )}
        <Button
          type="submit"
          className="w-full bg-primary text-white py-2 rounded hover:bg-primary/50"
        >
          Sign Up
        </Button>
      </form>
    </div>
  )
}

export default SignUp
