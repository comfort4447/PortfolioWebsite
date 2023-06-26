import * as React from 'react';
import { useForm } from 'react-hook-form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'

const baseURL = "https://kiara-ugwu.onrender.com/auth/signup";

type FormData = {
    email: string;
    password: string;
  };
  
    

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormData>();
    
      const navigate = useNavigate();
      const onSubmit = (data: FormData) => {
       
        console.log(data);
       
      };

  return (
    <div className='bg-white px-10 py-10 rounded-3xl border-2 border-gray'>
      <h1 className='text-4xl font-semibold'>Sign Up</h1>
      <p className='font-medium text-lg text-gray-500 mt-4'>
        Welcome! Please sign up
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
        <div className='mt-8 flex flex-col gap-y-4'>
          <Link to='/signin' className='active:scale-[.98] text-center active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>
            Sign up
          </Link>
        </div>
        <div className='mt-8 flex justify-center items-center'>
          <p className='font-medium text-base'>Already have an account?</p>
          <Link to='/signin' className='text-violet-500 text-base font-medium ml-2' type='submit'>
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
  }

