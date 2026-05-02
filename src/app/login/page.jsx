'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const handleLoginFun =async (data) => {
    console.log(data, 'data')
    const {data:res,error} = await authClient.signIn.email({
      email:data.email,
      password:data.password,
      rememberMe:true,
      callbackURL:"/"
    })
    console.log(error, res)
  }
  
  return (
    <div className='container mx-auto min-h-[80vs] flex justify-center items-center bg-slate-100'>
      <div className='p-4 rounded-xl bg-white mt-20 mb-20'>
        <h2 className='font-bold text-3xl  text-center '>Login your account</h2>
        <form className='space-y-4' onSubmit={handleSubmit(handleLoginFun)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Email</legend>
            <input type="email" className="input"
              {...register('email',{
                required:"email field is required"
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
          <button className="btn btn-primary w-full">Login</button>
        </form>
        <p className='mt-6 mx-auto text-center'>
          Dont,t have an account?<Link href={'/register'} className='text-red-500'>Register</Link></p>
      </div>
    </div>
  );
};

export default LoginPage;