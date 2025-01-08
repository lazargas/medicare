import React from 'react'
import '@/styles/overlayComponent.css';
import SignIn from './SignIn';
import Link from 'next/link';
type Props = {
    type?:'not logged in' | 'not registered';
}
const OverlayWarning = (props: Props) => {
    return (
        <div className={`overlay-container`} >
            <div className="relative w-full max-h-full">
                <div className="relative bg-[#F0F8FF] shadow">
                    <div className="p-4 md:p-5">
                        <div className='flex flex-col gap-[1.5rem] justify-center items-center m-[2.5rem] text-center' >
                            <div>
                                {/* Desktop Version */}
      <h1 className="hidden md:block text-xl font-sans">
        To continue accessing our services, we kindly ask you to
        {props.type === 'not logged in' ? ' log in to your account' : ' Complete your Registration'}.
        Please note that, as part of our service, we may share certain non-sensitive data 
        with advertising companies to provide you with personalized ads and offers tailored 
        to your interests.
        <br /><br />
        Your privacy is important to us, and we handle your data responsibly. 
        For more details on how your data is used, please refer to our{' '}
        <a href="/tnc" className="text-blue-700 hover:text-blue-900 underline">
          Privacy Policy
        </a>
        .
      </h1>

      {/* Mobile Version */}
      <h1 className="block md:hidden text-xl font-sans space-y-4">
        <span className="block">
          To access all website content, please register for an account. 
          By using this website, you agree to our{' '}
          <a href="/tnc" className="text-blue-700 hover:text-blue-900 underline">
            Terms of Service
          </a>
          {' '}and{' '}
          <a href="/tnc" className="text-blue-700 hover:text-blue-900 underline">
            Privacy Policy
          </a>
          .
        </span>
        <span className="block mt-4">
          We may collect and use your personal information as described in our Privacy Policy.
        </span>
      </h1>
                                <button
                                    type="button"
                                    className="hidden absolute top-[10px] end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="authentication-modal"
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>

                            <div >
                                {
                                    props.type==='not logged in' ? <SignIn /> :
                                    <a href={'/profile#complete'} className="flex items-center justify-center gap-[1rem] bg-[#d8e7ff] font-semibold text-[18px] text-black hover:text-white px-4 py-2 rounded-[20px] hover:bg-blue-700 transition duration-200" type="submit">
                                     Complete Your Profile
                                    </a>
                                }
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverlayWarning