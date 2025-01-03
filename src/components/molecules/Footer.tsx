"use client"
import React, { memo } from 'react';
import { Facebook, Twitter, Youtube, Instagram } from 'lucide-react';
import HorizontalCard from './HorizontalCard';
import Link from 'next/link';
type Props = {
  blogs: any[];
}
const Footer = ({ blogs }: Props) => {
  return (
    <footer className="bg-navy-900 p-[1rem] mt-[1rem] bg-[#d8e7ff]  text-white">
      <div className="flex items-center justify-center flex-col">
        <div className="grid grid-cols-1 md:grid-cols-4 px-[1.5rem] gap-8 p-[0.75rem]">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">ABOUT US</h2>
            <p className="text-black mb-6">
            Welcome to Doctor News Daily, your trusted source for accurate healthcare updates, medical breakthroughs, and wellness insights. We simplify complex medical research, ensuring accessibility and credibility. Our expert team delivers transparent, research-backed content to empower informed health decisions. Stay informed, stay healthy with Doctor News Daily.            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-blue-600 p-2 rounded-full hover:bg-blue-700">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-sky-500 p-2 rounded-full hover:bg-sky-600">
                <Twitter size={20} />
              </a>
              <a href="#" className="bg-red-600 p-2 rounded-full hover:bg-red-700">
                <Youtube size={20} />
              </a>
              <a href="#" className="bg-pink-600 p-2 rounded-full hover:bg-pink-700">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          {/* Contacts Section */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">CONTACTS</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <span className="text-black">Sky One, Pune, Maharashtra, 411006, IND</span>
              </p>
              <div className="space-y-1">
                <p className="text-black">Info@doctornewsdaily.com</p>
                <p className="text-black">Support@doctornewsdaily.com</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">ADS & LEGAL</h2>
            <div className="space-y-4">
              <p className="flex items-center gap-2">
                <Link href={`/`} className="text-black">Advertise</Link>
              </p>
              <p className="flex items-center gap-2">
                <Link href={`/`} className="text-black">Advertise Policy</Link>
              </p>
              <p className="flex items-center gap-2">
                <Link href={`/tnc`} className="text-black">Terms And Condition</Link>
              </p>
              <p className="flex items-center gap-2">
                <Link href={`/`} className="text-black">Privacy Policy</Link>
              </p>
              <p className="flex items-center gap-2">
                <Link href={`/`} className="text-black">Editorial Policy</Link>
              </p>
            </div>
          </div>
          {/* Popular News Section */}
          <div>
            <h2 className="text-2xl text-black font-bold mb-4">POPULAR NEWS</h2>
            <div className="space-y-4">
              {blogs.map((item, index) => {
                return (
                  <HorizontalCard key={`${item.created_at}${index}`} blog={item} tag='' />
                )
              })}
            </div>
          </div>
        </div>
        {/* Bottom Bar */}
        <div className=" w-full border-t border-gray-400">
          <div className="flex flex-col md:flex-row justify-between items-center p-[0.75rem]">
            <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-black font-[8px] md:font-[16px] ">About</a>
              <a href="#" className="text-black font-[8px] md:font-[16px] ">Terms & Conditions</a>
              <a href="#" className="text-black font-[8px] md:font-[16px] ">Privacy Policy</a>
            </div>
            <p className="text-gray-400">Copyright © 2024 Doctor News Daily</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default memo(Footer);