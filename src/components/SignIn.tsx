import * as React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

type FormData = {
    email: string;
    password: string;
  };
  
    

export default function SignIn() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    
      const onSubmit = (data: FormData) => {
       
        console.log(data);
      };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold'>Sign In</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome back! Please sign in
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Email
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
              placeholder='Enter your email'
              type='email'
              {...register('email', { required: 'Email is required' })}
            />
          </label>
          {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
        </div>
        <div className='mt-8'>
          <label className='text-lg font-medium'>
            Password
            <input
              className='w-full border-1 border-gray-100 rounded-xl p-3 mt-1 bg-transparent'
              placeholder='Enter your password'
              type='password'
              {...register('password', { required: 'Password is required',
              minLength:{
                value:4,
                message: 'Password must be at least 4 characters long',
              },
              pattern: {
                value: /^(?=.*[!@#$%^&]).{4,}$/,
                message: 'Password must contain a special character',
              }
             })}
            />
          </label>
          {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
        </div>
        <div className='mt-8 flex justify-between items-center'>
          <div>
            <input type='checkbox' id='remember' />
            <label htmlFor='remember' className='ml-2 font-medium text-base'>
              Remember me
            </label>
          </div>
          <button className='font-medium text-base text-violet-500'>
            Forgot Password
          </button>
        </div>
        <div className='mt-8 flex flex-col gap-y-4 '>
          <Link to='/dashboard' className=' text-center active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>
            Sign in
          </Link>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Don't have an account?</p>
          <Link to='/' className='text-violet-500 text-base font-medium ml-2' type='submit'>
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
  }

