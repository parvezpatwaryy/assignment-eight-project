'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleRegisterFunc = (data) => {
    console.log(data, 'data')
    const { email, name, photo, password } = data;
    console.log(name,photo)
  }

  return (
    <div className='container mx-auto min-h-[80vs] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white'>
        <h2 className='font-bold text-3xl  text-center '>Register your account</h2>
        <form className='space-y-4' onSubmit={handleSubmit(handleRegisterFunc)}>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Your name</legend>
            <input type="text" className="input"
              {...register('name', {
                required: "Name field is required"
              })}
              placeholder="Type here name" />
            {errors.name && <p className="text-red-500">Name is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Photo URL</legend>
            <input type="text" className="input"
              {...register('photo', {
                required: "Photo URL field is required"
              })}
              placeholder="Type here photo url" />
            {errors.photo && <p className="text-red-500">Photo is required</p>}
          </fieldset>

          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input"
              {...register('email', {
                required: "email field is required"
              })}
              placeholder="Type here email" />
            {errors.email && <p className="text-red-500">Email is required</p>}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">password</legend>
            <input type="password" className="input"
              {...register('password', { required: true })}

              placeholder="Type here password" />
            {errors.password && <p className="text-red-500">Password is required</p>}
          </fieldset>

          <button className="btn btn-primary w-full">Register</button>
        </form>

      </div>
    </div>
  );
};

export default RegisterPage;