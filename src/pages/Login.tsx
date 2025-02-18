import React, { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { Mail, Lock } from 'lucide-react';

function Login() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({

    email: '',

    password: ''

  });

  const handleSubmit = (e: React.FormEvent) => {

    e.preventDefault();

    // Check for admin credentials

    if (formData.email === 'admin' && formData.password === 'admin') {

      navigate('/admin/dashboard');

    } else {

      // Handle regular user login

      console.log('Regular user login:', formData);

      navigate('/');

    }

  };

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-amber-900">Welcome Back</h2>
          <p className="mt-2 text-center text-sm text-amber-700">

            Don't have an account?{' '}
            <Link to="/signup" className="font-medium text-amber-600 hover:text-amber-500">

              Sign up
            </Link>
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-amber-500" />
                </div>
                <input

                  id="email"

                  name="email"

                  type="text"

                  required

                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"

                  placeholder="Email address"

                  value={formData.email}

                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}

                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-amber-500" />
                </div>
                <input

                  id="password"

                  name="password"

                  type="password"

                  required

                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"

                  placeholder="Password"

                  value={formData.password}

                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}

                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input

                id="remember-me"

                name="remember-me"

                type="checkbox"

                className="h-4 w-4 text-amber-600 focus:ring-amber-500 border-amber-300 rounded"

              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-amber-900">

                Remember me
              </label>
            </div>

            <div className="text-sm">
              <Link to="/forgot-password" className="font-medium text-amber-600 hover:text-amber-500">

                Forgot your password?
              </Link>
            </div>
          </div>

          <div>
            <button

              type="submit"

              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >

              Sign in
            </button>
          </div>
        </form>
      </div>
    </main>

  );

}

export default Login;
