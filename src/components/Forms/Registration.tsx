'use client'
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';

const RegistrationForm = ({user}:any) => {
  const [formData, setFormData] = useState({
    full_name: user.name ||'',
    email: user.email || '',
    phone_number: '',
    country: 'India',
    state: '',
    city: '',
    work_category: '',
    specialisation: '',
    designation: '',
    organization: '',
    council_registration_name: '',
    council_registration_number: '',
    dont_remember: false,
    terms_accepted: false,
    privacy_policy_accepted: false
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e:any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
        const response = await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/users`,
          formData,
          {
            headers: {
              'Content-Type': 'application/json'
            }
          }
        );
        if(window)
        window.location.href = '/success';
      } catch (err:any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "mt-1 block w-[80%] md:w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-sm";
  const labelClassName = "block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50 w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] sm:max-w-2xl mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
           {
            user ?
            'Edit Profile'
            :
            'Registration'
           } 
        </h2>
        
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-6 gap-y-6">
            {/* Personal Information Section */}
            <div className="space-y-6 lg:space-y-4">
              <div>
                <label className={labelClassName}>Full Name *</label>
                <input
                  type="text"
                  name="full_name"
                  required
                  className={inputClassName}
                  value={formData.full_name}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClassName}>Email *</label>
                <input
                  type="email"
                  name="email"
                  required
                  className={inputClassName}
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClassName}>Phone Number</label>
                <input
                  type="tel"
                  name="phone_number"
                  className={inputClassName}
                  value={formData.phone_number}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClassName}>Country</label>
                <select
                  name="country"
                  className={inputClassName}
                  value={formData.country}
                  onChange={handleInputChange}
                >
                  <option value="India">India</option>
                </select>
              </div>

              <div>
                <label className={labelClassName}>State</label>
                <select
                  name="state"
                  className={inputClassName}
                  value={formData.state}
                  onChange={handleInputChange}
                >
                  <option value="">Select State</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>

              <div>
                <label className={labelClassName}>City</label>
                <input
                  type="text"
                  name="city"
                  className={inputClassName}
                  value={formData.city}
                  onChange={handleInputChange}
                />
              </div>
            </div>

            {/* Professional Information Section */}
            <div className="space-y-6 lg:space-y-4">
              <div>
                <label className={labelClassName}>Work Category</label>
                <select
                  name="work_category"
                  className={inputClassName}
                  value={formData.work_category}
                  onChange={handleInputChange}
                >
                  <option value="">Select Category</option>
                  <option value="Allopathy Doctor">Allopathy Doctor</option>
                  <option value="Researcher">Researcher</option>
                  <option value="Medical Professional">Medical Professional</option>
                </select>
              </div>

              <div>
                <label className={labelClassName}>Specialisation</label>
                <select
                  name="specialisation"
                  className={inputClassName}
                  value={formData.specialisation}
                  onChange={handleInputChange}
                >
                  <option value="">Select Specialisation</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Neurology">Neurology</option>
                  <option value="General Practice">General Practice</option>
                </select>
              </div>

              <div>
                <label className={labelClassName}>Designation</label>
                <input
                  type="text"
                  name="designation"
                  className={inputClassName}
                  value={formData.designation}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClassName}>Organization</label>
                <input
                  type="text"
                  name="organization"
                  className={inputClassName}
                  value={formData.organization}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label className={labelClassName}>Council Registration Name</label>
                <select
                  name="council_registration_name"
                  className={inputClassName}
                  value={formData.council_registration_name}
                  onChange={handleInputChange}
                >
                  <option value="N/A">N/A</option>
                  <option value="Delhi Medical Council">Delhi Medical Council</option>
                  <option value="Maharashtra Medical Council">Maharashtra Medical Council</option>
                </select>
              </div>

              <div>
                <label className={labelClassName}>Council Registration Number</label>
                <input
                  type="text"
                  name="council_registration_number"
                  className={inputClassName}
                  value={formData.council_registration_number}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Checkbox Section */}
          <div className="space-y-4 mt-8">
            <div className="flex items-center">
              <input
                type="checkbox"
                name="dont_remember"
                id="dont_remember"
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                checked={formData.dont_remember}
                onChange={handleInputChange}
              />
              <label htmlFor="dont_remember" className="ml-2 block text-sm text-gray-700">
                I don't have/remember my medical license ID at the moment
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="terms_accepted"
                id="terms_accepted"
                required
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                checked={formData.terms_accepted}
                onChange={handleInputChange}
              />
              <label htmlFor="terms_accepted" className="ml-2 block text-sm text-gray-700">
                I accept the Terms & Conditions
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="privacy_policy_accepted"
                id="privacy_policy_accepted"
                required
                className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black"
                checked={formData.privacy_policy_accepted}
                onChange={handleInputChange}
              />
              <label htmlFor="privacy_policy_accepted" className="ml-2 block text-sm text-gray-700">
                I accept the Privacy Policy
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto min-w-[200px] flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Registering...' : 'Register'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;