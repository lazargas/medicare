import React from 'react'
import '@/styles/overlayComponent.css';
import SignIn from './SignIn';
type Props = {}
const OverlayWarning = (props: Props) => {
    return (
        <div className={`overlay-container`} >
            <div className="relative w-full max-h-full">
                <div className="relative bg-[#F0F8FF] shadow">
                    <div className="p-4 md:p-5">
                        <div className='flex flex-col gap-[1.5rem] justify-center items-center m-[2.5rem] text-center' >
                            <div>
                                <h1 className='text-xl md:text-xl font-sans' >To continue accessing our services, we kindly ask you to log in to your account. Please note that, as part of our service, we may share certain non-sensitive data with advertising companies to provide you with personalized ads and offers tailored to your interests.

Your privacy is important to us, and we handle your data responsibly. For more details on how your data is used, please refer to our Privacy Policy.
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

                            <div ><SignIn /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OverlayWarning