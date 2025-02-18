import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement actual password reset
    console.log('Reset password for:', email);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <main className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
          <div>
            <h2 className="text-center text-3xl font-bold text-amber-900">Check Your Email</h2>
            <p className="mt-2 text-center text-sm text-amber-700">
              We've sent password reset instructions to {email}
            </p>
          </div>
          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-amber-600 hover:text-amber-500"
            >
              Return to Login
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-amber-900">Reset Password</h2>
          <p className="mt-2 text-center text-sm text-amber-700">
            Enter your email address and we'll send you instructions to reset your password.
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email" className="sr-only">Email address</label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-amber-500" />
              </div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Send Reset Instructions
            </button>
          </div>

          <div className="text-center">
            <Link
              to="/login"
              className="font-medium text-amber-600 hover:text-amber-500"
            >
              Back to Login
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

export default ForgotPassword;