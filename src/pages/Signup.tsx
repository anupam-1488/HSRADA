import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, Lock, User } from 'lucide-react';
import { Form, FormikProvider, useFormik } from 'formik';

function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  interface FormValues {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
  }

  const formik=useFormik<FormValues>({
    initialValues: {
      email: '',
      password: '',
      name:'',
      confirmPassword:""
    },
    onSubmit: (values) => {
      console.log(values); 
      // if (success) {
        //     if (formData.email === 'admin') {
        //       navigate('/admin/dashboard');
        //     } else {
        //       // If user has active orders, show home page
        //       navigate('/');
        //     }
        //   } else {
        //     alert('Invalid credentials');
        //   }
    }

  })
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    // TODO: Implement actual signup
    console.log('Signup:', formData);
    navigate('/login');
  };

  return (
    <main className="min-h-screen bg-amber-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <FormikProvider value={formik}>
    <Form onChange={formik.handleChange} onSubmit={formik.handleSubmit}>
      <div className="max-w-md w-full space-y-8 bg-white p-8 rounded-lg shadow-md">
        <div>
          <h2 className="text-center text-3xl font-bold text-amber-900">Create an Account</h2>
          <p className="mt-2 text-center text-sm text-amber-700">
            Already have an account?{' '}
            <Link to="/login" className="font-medium text-amber-600 hover:text-amber-500">
              Sign in
            </Link>
          </p>
        </div>
        
        {/* <form className="mt-8 space-y-6" onSubmit={handleSubmit}> */}
          <div className="rounded-md shadow-sm space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Full Name</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Full Name"
                  // value={formData.name}
                  // onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
            </div>

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
                  // value={formData.email}
                  // onChange={(e) => setFormData({ ...formData, email: e.target.value })}
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
                  // value={formData.password}
                  // onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                />
              </div>
            </div>

            <div>
              <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-amber-500" />
                </div>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 px-3 py-2 border border-amber-300 placeholder-amber-500 text-amber-900 focus:outline-none focus:ring-amber-500 focus:border-amber-500"
                  placeholder="Confirm Password"
                  // value={formData.confirmPassword}
                  // onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                />
              </div>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-amber-600 hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500"
            >
              Create Account
            </button>
          </div>
        {/* </form> */}
      </div>
      </Form>
      </FormikProvider>
    </main>
  );
}

export default Signup;