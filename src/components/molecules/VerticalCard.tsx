"use client"
import React, { useState } from 'react'
import "@/styles/VerticalCard.css";
import { MdDateRange } from "react-icons/md"
import Link from 'next/link'
import { DNA } from 'react-loader-spinner'
import Image from 'next/image';


type Props = {
  variant?: string;
  blog: any;
  tag?: string;
}

const VerticalCard = (props: Props) => {
  const { variant, blog } = props;
  const date = new Date(blog.created_at).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });



  return (
    <Link className='w-[100%]' href={`/blog/${blog._id}`} >

      <div className="single-post-wrap-vertical style-white">
        <div className="thumb">
          <div className='relative h-[100%] w-[100%]' >
            <Image src={blog.thumbnail || 'https://placehold.co/400/png'} alt="img" loading='lazy' height={172} width={286} />
          </div>
          {/* <div className="tag-base tag-blue" >
          {tag}
        </div> */}
        </div>
        <div className="details">
          <h6 className="">
            <div className='title' >
              {blog.title}
            </div>
          </h6>
          <div className="post-meta-single mt-3">
            <ul>
              <li className="date-container">
                <MdDateRange />
                <p className='date' >{date}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

    </Link>
  )
}

export default VerticalCard