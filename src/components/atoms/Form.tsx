"use client";
import { BlogContext } from '@/context/BlogContext';
import { getTags, postBlog } from '@/lib/api';
import { imageToBase64 } from '@/utils/utils';
import React, { useContext, useEffect, useState } from 'react';
import placeholder from '@/assets/Images/placeholder.jpg';
import Image from 'next/image';
import { set } from 'mongoose';
import { Audio } from 'react-loader-spinner'

interface FormProps {
    user: any
}

const Form: React.FC<FormProps> = ({ user }) => {
    const [thumbnail, setThumbnail] = useState<string>("");
    const [status, setStatus] = useState<boolean>(false);
    const [uploading, setUploading] = useState<boolean>(false);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [tags, setTags] = useState<string[]>([]);
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [tagId, setTagId] = useState<any>([]);
    const { state } = useContext(BlogContext);
    const [loader, setLoader] = useState<boolean>(false);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            setUploading(true);
            if (e.target.files) {
                const thumbnailString = await imageToBase64(e.target.files[0]);
                setThumbnail(thumbnailString);
            }
        } catch (e: unknown) {
            console.log(e);
        }
        finally {
            setUploading(false);
        }
    };

    const handleTagChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault();
        const value = e.target.value;
        const tagList = value.split(",");
        setTags(tagList);
    }


    const handleSubmit = async (e: React.FormEvent) => {
        try {
            setLoader(true);
            e.preventDefault();
            const blog = {
                thumbnail: thumbnail,
                title,
                content,
            };
            const response: boolean = await postBlog(blog, tags, user);
            setStatus(response);
        } catch (e: unknown) {
            console.log(e);
        }
        finally {
            setLoader(false);
        }

    };

    return (
        <>
            {
                loader ? <Audio /> :
                    status ? <div className="bg-green-200 p-4 rounded-lg">Blog successfully created</div> :
                        <form
                            className="flex flex-col p-6 gap-[0.25rem] bg-white shadow-md rounded-lg w-full max-w-md"
                            onSubmit={handleSubmit}
                        >
                            <label className="flex flex-col items-center gap-[0.25rem] ">
                                <span className="text-gray-700 font-medium mb-1 self-start">Thumbnail:</span>
                                {
                                    thumbnail === "" ? <Image
                                        className='w-full h-[256px] m-[1rem] rounded-lg object-cover shadow-md'
                                        src={placeholder} alt="" /> : <img src={thumbnail} alt="uploaded image" />
                                }
                                <input
                                    className=" self-start border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    onChange={(e) => handleFileChange(e)}
                                    type="file" name="image" accept="image/*" required></input>
                            </label>
                            <label className="flex flex-col">
                                <span className="text-gray-700 font-medium mb-1">Title:</span>
                                <input
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    type="text"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </label>

                            <label className="flex flex-col">
                                <span className="text-gray-700 font-medium mb-1">Content:</span>
                                <textarea
                                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    value={content}
                                    onChange={(e) => setContent(e.target.value)}
                                />
                            </label>
                            <label className="flex flex-col">
                                <span className="text-black font-medium mb-1">Tags:</span>
                                <textarea
                        className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        value={tags}
                        onChange={(e) => handleTagChange(e)}
                    />

                            </label>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md transition duration-150 ease-in-out"
                            >
                                Submit
                            </button>
                        </form>
            }
        </>
    );
};

export default Form;
