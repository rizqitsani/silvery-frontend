import { FormProvider, useForm } from 'react-hook-form';

import Button from '@/components/Button';
import Input from '@/components/forms/Input';
import PasswordInput from '@/components/forms/PasswordInput';
import Seo from '@/components/Seo';
import UnstyledLink from '@/components/links/UnstyledLink';
import ButtonLink from '@/components/links/ButtonLink';
import toast from 'react-hot-toast';
import axiosClient from '@/lib/axios';
import { useAuthDispatch } from '@/contexts/AuthContext';
import { useRouter } from 'next/router';
import { defaultToastMessage } from '@/lib/constant';

export default function SignInPage() {
  const router = useRouter();

  const dispatch = useAuthDispatch();

  const methods = useForm();
  const { handleSubmit } = methods;

  const handleLogin = (data) => {
    let tempToken;

    toast.promise(
      axiosClient
        .post('/auth/login', data)
        .then((res) => {
          const { token } = res.data.data;
          tempToken = token;
          localStorage.setItem('token', token);

          return axiosClient.get('/auth/info');
        })
        .then((user) => {
          dispatch('LOGIN', { ...user.data.data, token: tempToken });
          router.replace('/');
        }),
      {
        ...defaultToastMessage,
        success: 'Berhasil! Anda bisa masuk ke akun anda',
      }
    );
  };

  return (
    <>
      <Seo templateTitle='Masuk' />

      <div className='mx-auto'>
        <div className='flex flex-col justify-center min-h-screen px-4 py-8 sm:px-10 bg-gray-50 lg:px-8'>
          <div className='sm:mx-auto sm:w-full sm:max-w-md'>
            <UnstyledLink href='/'>
              <span className='sr-only'>Logo Silvery</span>
              <img
                className='w-auto h-12 mx-auto sm:h-16'
                src='/images/logo.png'
                alt='Logo'
              />
            </UnstyledLink>
            <h1 className='mt-6 text-2xl font-extrabold text-center text-gray-900 sm:text-3xl lg:text-4xl'>
              Masuk ke akun Anda
            </h1>
          </div>

          <div className='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
            <div className='px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10'>
              <FormProvider {...methods}>
                <form
                  className='space-y-4'
                  onSubmit={handleSubmit(handleLogin)}
                >
                  <Input
                    label='Email'
                    id='email'
                    type='email'
                    validation={{
                      required: 'Email tidak boleh kosong',
                      pattern: {
                        value:
                          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: 'Email tidak valid',
                      },
                    }}
                  />

                  <PasswordInput
                    label='Password'
                    id='password'
                    validation={{
                      required: 'Password tidak boleh kosong',
                      minLength: {
                        value: 8,
                        message: 'Password harus lebih dari 8 karakter',
                      },
                    }}
                  />

                  <div>
                    <Button variant='primary' isFullWidth>
                      Masuk
                    </Button>
                  </div>
                </form>
              </FormProvider>

              <div className='mt-6'>
                <div className='relative'>
                  <div className='absolute inset-0 flex items-center'>
                    <div className='w-full border-t border-gray-300'></div>
                  </div>
                  <div className='relative flex justify-center text-sm'>
                    <span className='px-2 text-gray-500 bg-white'>
                      Belum punya akun?
                    </span>
                  </div>
                </div>

                <div className='mt-6'>
                  <ButtonLink href='/signup' variant='light' isFullWidth>
                    Buat Akun
                  </ButtonLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}