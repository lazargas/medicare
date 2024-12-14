'use client'
import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';
import axios from 'axios';

const RegistrationForm = ({ user, userData }: any) => {
  const [formData, setFormData] = useState({
    full_name: user.name || '',
    email: user.email || '',
    phone_number: userData.phone_number || '',
    country: userData.country || 'India',
    state: userData.state || '',
    city: userData.city || '',
    work_category: userData.work_category || '',
    specialisation: userData.specialisation || '',
    designation: userData.designation || '',
    organization: userData.organization || '',
    council_registration_name: userData.council_registration_name || '',
    council_registration_number: userData.council_registration_number || '',
    dont_remember: userData.dont_remember || false,
    terms_accepted: userData.terms_accepted || false,
    privacy_policy_accepted: userData.privacy_policy_accepted || false
  });

  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e: any) => {
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
      if (window)
        window.location.href = '/success';
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const inputClassName = "mt-1 block w-[80%] md:w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-sm";
  const labelClassName = "block text-sm font-medium text-gray-700";

  return (
    <div className="min-h-screen bg-gray-50 w-full py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] sm:max-w-2xl mx-auto bg-white p-4 sm:p-6 rounded-lg shadow-md">
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
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Australia">Australia</option>
                  <option value="Germany">Germany</option>
                  <option value="France">France</option>
                  <option value="China">China</option>
                  <option value="Japan">Japan</option>
                  <option value="Brazil">Brazil</option>
                  <option value="Russia">Russia</option>
                  <option value="South Africa">South Africa</option>
                  <option value="Mexico">Mexico</option>
                  <option value="Italy">Italy</option>
                  <option value="Spain">Spain</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="South Korea">South Korea</option>
                  <option value="Saudi Arabia">Saudi Arabia</option>
                  <option value="Netherlands">Netherlands</option>
                  <option value="Turkey">Turkey</option>
                  <option value="Switzerland">Switzerland</option>
                  <option value="Argentina">Argentina</option>
                  <option value="Sweden">Sweden</option>
                  <option value="Norway">Norway</option>
                  <option value="Singapore">Singapore</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Thailand">Thailand</option>
                  <option value="Philippines">Philippines</option>
                  <option value="Malaysia">Malaysia</option>
                  <option value="Vietnam">Vietnam</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="Bangladesh">Bangladesh</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="Nepal">Nepal</option>
                  <option value="Bhutan">Bhutan</option>
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
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Manipur">Manipur</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Dadra and Nagar Haveli and Daman and Diu">Dadra and Nagar Haveli and Daman and Diu</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Lakshadweep">Lakshadweep</option>
                  <option value="Puducherry">Puducherry</option>
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
                  <option value="AYUSH/ISM">AYUSH/ISM</option>
                  <option value="Dietician">Dietician</option>
                  <option value="Hospital/Diagnostic/Healthcare Administration">Hospital/Diagnostic/Healthcare Administration</option>
                  <option value="Media">Media</option>
                  <option value="Nurse">Nurse</option>
                  <option value="Others/Patient/Non Medical Professional">Others/Patient/Non Medical Professional</option>
                  <option value="Pharma/Device/Medical Industry Professional">Pharma/Device/Medical Industry Professional</option>
                  <option value="Physiotherapist">Physiotherapist</option>
                  <option value="Student">Student</option>
                  <option value="Technician/Paramedical">Technician/Paramedical</option>
                  <option value="Chemist/Pharmacist">Chemist/Pharmacist</option>
                  <option value="Dentistry">Dentistry</option>
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
                  <option value="Dermatology">Dermatology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Nephrology">Nephrology</option>
                  <option value="Pulmonology">Pulmonology</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Rheumatology">Rheumatology</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="ENT">ENT</option>
                  <option value="Urology">Urology</option>
                  <option value="Anesthesiology">Anesthesiology</option>
                  <option value="Hematology">Hematology</option>
                  <option value="Pathology">Pathology</option>
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
                  <option value="Andhra Pradesh Medical Council">Andhra Pradesh Medical Council</option>
                  <option value="Arunachal Pradesh Medical Council">Arunachal Pradesh Medical Council</option>
                  <option value="Assam Medical Council">Assam Medical Council</option>
                  <option value="Bihar Medical Council">Bihar Medical Council</option>
                  <option value="Chhattisgarh Medical Council">Chhattisgarh Medical Council</option>
                  <option value="Delhi Medical Council">Delhi Medical Council</option>
                  <option value="Goa Medical Council">Goa Medical Council</option>
                  <option value="Gujarat Medical Council">Gujarat Medical Council</option>
                  <option value="Haryana Medical Council">Haryana Medical Council</option>
                  <option value="Himachal Pradesh Medical Council">Himachal Pradesh Medical Council</option>
                  <option value="Jammu & Kashmir Medical Council">Jammu & Kashmir Medical Council</option>
                  <option value="Jharkhand Medical Council">Jharkhand Medical Council</option>
                  <option value="Karnataka Medical Council">Karnataka Medical Council</option>
                  <option value="Kerala Medical Council">Kerala Medical Council</option>
                  <option value="Madhya Pradesh Medical Council">Madhya Pradesh Medical Council</option>
                  <option value="Maharashtra Medical Council">Maharashtra Medical Council</option>
                  <option value="Manipur Medical Council">Manipur Medical Council</option>
                  <option value="Meghalaya Medical Council">Meghalaya Medical Council</option>
                  <option value="Mizoram Medical Council">Mizoram Medical Council</option>
                  <option value="Nagaland Medical Council">Nagaland Medical Council</option>
                  <option value="Odisha Medical Council">Odisha Medical Council</option>
                  <option value="Punjab Medical Council">Punjab Medical Council</option>
                  <option value="Rajasthan Medical Council">Rajasthan Medical Council</option>
                  <option value="Sikkim Medical Council">Sikkim Medical Council</option>
                  <option value="Tamil Nadu Medical Council">Tamil Nadu Medical Council</option>
                  <option value="Telangana Medical Council">Telangana Medical Council</option>
                  <option value="Tripura Medical Council">Tripura Medical Council</option>
                  <option value="Uttar Pradesh Medical Council">Uttar Pradesh Medical Council</option>
                  <option value="Uttarakhand Medical Council">Uttarakhand Medical Council</option>
                  <option value="West Bengal Medical Council">West Bengal Medical Council</option>
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
              {loading ? 'Editing...' : 'Edit Profile'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrationForm;