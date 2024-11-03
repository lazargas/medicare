import Link from 'next/link';
import React from 'react'
import "@/styles/grid.css";

type Props = {
    blogs: any[],
    title:string
}

const Grid = (props: Props) => {
    const { blogs,title } = props;
    return (
        <div className='flex flex-col' >
        <h1 className="title">{title}</h1>
        <div className="grid">
            {blogs.map((blog: any) => (
                <Link key={blog._id} href={`/blog/${blog._id}`}>
                    <div className="card">
                        <img
                            src={blog.thumbnail}
                            alt="thumbnail"
                            className="thumbnail"
                        />
                        <div className="content">
                            <h2 className="blog-title">{blog.title}</h2>
                            <p className="blog-content">{blog.content}</p>
                        </div>
                    </div>
                </Link>
            ))}
        </div>
        </div>
    )
}

export default Grid