import React from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from 'jwt-decode';
import useCurrentUser from './useCurrentUser';
import { useCreateUser } from '../../Services/User/hooks';

const SignIn = () => {
  const navigate = useNavigate();
  const { setCurrentUser } = useCurrentUser();
  const { mutate: createUser } = useCreateUser();

  const handleLogin = (data) => {
    const userObject = jwtDecode(data.credential);

    createUser(
      { email: userObject.email, nickname: userObject.given_name },
      {
        onSuccess: () => {
          setCurrentUser({ email: userObject.email, nickname: userObject.given_name });
          navigate('/');
        },
      },
    );
  };

  return (
    <div className="w-full justify-center flex">
      <div className="flex flex-col mt-32 w-[400px]">
        <GoogleLogin onSuccess={handleLogin} text="continue_with" width={400} />

        <hr className="mt-32" />

        <form className="mt-2">
          <div className="flex flex-col mt-2">
            <label className="my-1 font-semibold">Email</label>
            <input className="w-full border border-gray-600 p-1 rounded-md" />
            <p className="mt-1.5 text-gray-400 text-sm tracking-wide">
              Use an organization email to easily collaborate with teammates.
            </p>
          </div>

          <div className="flex flex-col mt-2">
            <label className="my-1 font-semibold">Login Code</label>
            <input className="w-full border border-gray-600 p-1 rounded-md" />
          </div>

          <button className="mt-6 w-full bg-blue-600 rounded-md py-2 text-white font-semibold">
            Continue with login code
          </button>

          <p className="mt-20 text-gray-400 text-sm tracking-wide text-center">
            By continuing you acknowledge that you understand and agree to the Terms of Services and
            Privacy Policy.{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
