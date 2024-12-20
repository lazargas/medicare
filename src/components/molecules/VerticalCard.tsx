"use client"
import React, { useState } from 'react'
import "@/styles/VerticalCard.css";
import { MdDateRange } from "react-icons/md"
import Link from 'next/link'
import { DNA } from 'react-loader-spinner'


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
        <img src={blog.thumbnail} alt="img" />
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