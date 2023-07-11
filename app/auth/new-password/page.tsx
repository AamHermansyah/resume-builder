'use client';

import { Loading } from '@/components/ui/loading';
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation';
import { BiArrowBack } from 'react-icons/bi';
import { InvalidInputMessage } from '../index.interface';
import { FormEvent, useEffect, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import Cookies from 'js-cookie';
import { json } from '@/utils/json';

const defaultInvalidValue = {
  name: null,
  email: null,
  password: null
}

function NewPasswordPage() {
  const [errorMessage, setErrorMessage] = useState<InvalidInputMessage>(defaultInvalidValue);
  const [loading, setLoading] = useState(false);
  const [loadingFetch, setLoadingFetch] = useState(false);
  const { data, status } = useSession();
  const navigate = useRouter();
  const token = Cookies.get('token');

  const handleSignup = async (e: FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    // @ts-ignore
    const { password }: FormDataAuth = form.elements;

    const formData = {
      name: data?.user?.name,
      email: data?.user?.email,
      password: password.value
    }

    // Reset error message
    setErrorMessage(defaultInvalidValue);

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
        Cookies.set('token', response.token);
        localStorage.setItem('user', json(response.user));
        navigate.push('/builder');
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

  useEffect(() => {
    if (status === 'authenticated') {
      const fetchData = async () => {
        // Handle API signup
        setLoadingFetch(true);
        try {
          const response = await fetch(`/api/auth/user?email=${data.user?.email}`, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            }
          }).then((res) => res.json());

          if (response?.token && response?.status === 200) {
            Cookies.set('token', response.token);
            localStorage.setItem('user', json(response.user));
            navigate.push('/builder');
          } else {
            setLoadingFetch(false);
          }
        } catch (error) {
          alert(`Error: ${(error as Error)?.message}`);
        }
      }

      fetchData();
    }
  }, [status, token])

  if (status === 'loading' || loadingFetch) return <Loading />

  if (status === 'unauthenticated') {
    navigate.push('/auth/login');
    return null;
  }

  return (
    <section>
      <div className="relative container flex items-center w-full h-full px-4 lg:px-10 py-24 min-h-screen">
        <div className="w-full flex md:gap-10 h-full">
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
                Set your
                <br />
                <span className="text-4xl lg:text-6xl text-tertiary">
                  PASSWORD
                </span>
              </h1>
              <p className="text-lg">
                Self safety is priority
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
              {errorMessage?.server && (
                <p className="text-red-500 text-xs">
                  {errorMessage.server}
                </p>
              )}
              <button
                disabled={loading}
                type="submit"
                className="w-full text-white bg-tertiary hover:bg-tertiary-bold focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center disabled:hover:bg-tertiary disabled:opacity-50"
              >
                {loading ? (
                  <AiOutlineLoading3Quarters
                    fontSize={24}
                    className="mx-auto animate-spin"
                  />
                ) : 'Save New Pasword'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewPasswordPage