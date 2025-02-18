import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-amber-900 mb-8 text-center">Contact Us</h1>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-semibold text-amber-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Email</h3>
                  <p className="text-amber-700">info@hsrada.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Phone</h3>
                  <p className="text-amber-700">+91 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-amber-700 mt-1" />
                <div>
                  <h3 className="font-semibold text-amber-900">Address</h3>
                  <p className="text-amber-700">
                    123 Chocolate Street<br />
                    Mumbai, Maharashtra 400001<br />
                    India
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-amber-900">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-amber-900">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-amber-900">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="mt-1 block w-full rounded-md border-amber-300 shadow-sm focus:border-amber-500 focus:ring focus:ring-amber-200"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-amber-700 text-white px-6 py-3 rounded-md hover:bg-amber-800 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Contact;