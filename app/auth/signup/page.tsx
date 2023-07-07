'use client';

import React, { FormEvent, useState } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { InvalidInputMessage, FormDataAuth } from '../index.interface';
import { useRouter } from 'next/navigation';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Link from 'next/link';

const defaultInvalidValue = {
  name: null,
  email: null,
  password: null
}

function SignUpPage() {
  const [errorMessage, setErrorMessage] = useState<InvalidInputMessage>(defaultInvalidValue);
  const [loading, setLoading] = useState(false);

  const navigate = useRouter();

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    // @ts-ignore
    const { name, email, password }: FormDataAuth = form.elements;

    const formData = {
      name: name.value,
      email: email.value,
      password: password.value
    }

    // Reset error message
    setErrorMessage(defaultInvalidValue);

    // Validasi formData
    if (formData.name.length < 3) {
      setErrorMessage((prevState) => ({
        ...prevState,
        name: 'Name must be at least 3 characters',
      }));
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage((prevState) => ({
        ...prevState,
        email: 'Invalid email',
      }));
      return;
    }

    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password:
          'Password must contain a digit, symbol & uppercase letter',
      }));
      return;
    }

    // Handle API signup
    setLoading(true);
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).then((res) => res.json());

      if (response.status === 201) {
        // Tindakan setelah berhasil sign up, misalnya alihkan ke halaman lain
        navigate.push('/auth/login');
      } else {
        setErrorMessage((prevState) => ({
          ...prevState,
          server: response.message
        }));
      }
    } catch (error) {
      console.log({ error });
      setErrorMessage((prevState) => ({
        ...prevState,
        server: (error as Error).message
      }));
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen">
      <div className="relative container h-full px-4 lg:px-10 py-24">
        <div className="flex md:gap-10 h-full items-center">
          <button
            type="button"
            className="absolute top-4 left-4 md:left-10 flex gap-2 items-center font-semibold sm:text-lg text-tertiary-bold"
            onClick={() => navigate.back()}
          >
            <BiArrowBack fontSize={24} /> Back
          </button>
          {/* Left column container with background*/}
          <div className="hidden md:flex basis-[50%] justify-center text-right">
            <div>
              <h1 className="text-2xl lg:text-3xl font-semibold text-gray-700 leading-[50px] lg:leading-[60px]">
                Welcome to
                <br />
                <span className="text-4xl lg:text-6xl text-tertiary">
                  Resume Builder
                </span>
              </h1>
              <p className="text-lg">
                You can <b>CREATE, SAVE & GET</b> client!
              </p>
            </div>
          </div>
          {/* Right column container with form */}
          <div className="w-full max-w-[500px] mx-auto md:mx-0 md:basis-[50%]">
            <h1 className="font-semibold text-gray-700 text-center">
              Welcome to
              <br />
              <span className="text-xl text-tertiary">
                Resume Builder
              </span>
            </h1>
            <form className="mt-4 space-y-4" action="#" onSubmit={handleSignup}>
              <div>
                <label
                  htmlFor="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your Fullname
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Jhon Doe"
                  required
                />
                {errorMessage.name && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorMessage.name}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="name@company.com"
                  required
                />
                {errorMessage.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorMessage.email}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
                {errorMessage.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errorMessage.password}
                  </p>
                )}
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                      required
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                      Accept terms & policy
                    </label>
                  </div>
                </div>
              </div>
              {errorMessage?.server && (
                <p className="text-red-500 text-xs">
                  {errorMessage.server}
                </p>
              )}
              <button
                disabled={loading}
                type="submit"
                className="w-full text-white bg-tertiary hover:bg-tertiary-bold focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:hover:bg-tertiary disabled:opacity-50"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters
                    fontSize={24}
                    className="mx-auto animate-spin"
                  />
                ) : 'Sign Up'}
              </button>
              <p className="text-sm font-light text-gray-500">
                Do have an account yet?{" "}
                <Link
                  href="/auth/login"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignUpPage