"use client"
import React, { memo, useState } from 'react'
import "@/styles/HorizontalCard.css";
import { MdDateRange } from "react-icons/md"
import Link from 'next/link'
import { DNA } from 'react-loader-spinner'
import Image from 'next/image';
type Props = {
  variant?: string;
  blog: any;
  tag?: string;
}
const HorizontalCard = (props: Props) => {
  const { variant, blog, tag } = props;
  const [loader, setLoader] = useState<boolean>(false);
  const date = new Date(blog.created_at).toLocaleString("en-US", { timeZone: 'Asia/Kolkata' });
  const handleClick = () => {
    setLoader(true);
  }
  return (
    <Link href={`/blog/${blog._id}`} onClick={() => handleClick()}>
      {loader ? (
        <div className='card-loader'>
          <DNA
            visible={true}
            height="80"
            width="80"
            ariaLabel="dna-loading"
            wrapperStyle={{}}
            wrapperClass="dna-wrapper"
          />
        </div>
      ) : (
        <div className="single-post-list-wrap">
          <div className="media">
            <div className="media-left">
              <Image src={blog.thumbnail} alt="img" loading='lazy' height={54} width={90} />
            </div>
            <div className="media-body">
              <div className="details">
                <div className="post-meta-single mt-3">
                  <ul>
                    <li className="date-container">
                      <svg stroke="currentColor" fill="#000" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0z"></path><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20a2 2 0 0 0 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"></path></svg>
                      <p className='date' >{date}</p>
                    </li>
                  </ul>
                </div>
                <h6 className="">
                  <div className='title' >
                    {blog.title}
                  </div>
                </h6>
              </div>
            </div>
          </div>
        </div>
      )}
    </Link>
  )
}
export default memo(HorizontalCard)