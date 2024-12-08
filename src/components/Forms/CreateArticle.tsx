"use client"
import React, { useState, useRef } from 'react';
import { AlertCircle, Upload, X } from 'lucide-react';
import axios from 'axios';
import { uploadToS3 } from '@/utils/utils';
import { postTags } from '@/lib/api';
interface Breadcrumb {
  level: string;
  text: string;
  link: string | null;
}
interface Tag {
  name: string;
  category: string;
}
interface FormData {
  title: string;
  content: string;
  URL: string;
  author_id: string;
  Image_URL: string;
  thumbnail: string;
  breadcrumbs: Breadcrumb[];
  tags: any[];
}
interface User {
  email: string;
  article_ids: string[];
  user_id: string;
  full_name: string;
}
const CreateArticleForm: React.FC<{ user: any }> = ({ user }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    content: '',
    URL: '',
    author_id: '',
    Image_URL: '',
    thumbnail: '',
    breadcrumbs: [
      { level: 'Level_1', text: 'Home', link: 'https://medicaldialogues.in/' }
    ],
    tags: []
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [uploadingImage, setUploadingImage] = useState(false);
  const [uploadingThumbnail, setUploadingThumbnail] = useState(false);
  const [imagePreview, setImagePreview] = useState('');
  const [thumbnailPreview, setThumbnailPreview] = useState('');
  const imageInputRef = useRef<HTMLInputElement>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleTagChange = (index: number, field: keyof Tag, value: string) => {
    setFormData(prev => {
      const newTags = [...prev.tags];
      newTags[index] = {
        ...newTags[index],
        [field]: value
      };
      return {
        ...prev,
        tags: newTags
      };
    });
  };
  const addTag = () => {
    setFormData(prev => ({
      ...prev,
      tags: [...prev.tags, { name: '', category: '' }]
    }));
  };
  const removeTag = (index: number) => {
    setFormData(prev => ({
      ...prev,
      tags: prev.tags.filter((_, i) => i !== index)
    }));
  };
  const handleBreadcrumbChange = (index: number, field: string, value: string) => {
    setFormData(prev => {
      const newBreadcrumbs = [...prev.breadcrumbs];
      newBreadcrumbs[index] = {
        ...newBreadcrumbs[index],
        [field]: value,
        level: `Level_${index + 1}`
      };
      return {
        ...prev,
        breadcrumbs: newBreadcrumbs
      };
    });
  };
  const addBreadcrumb = () => {
    if (formData.breadcrumbs.length < 4) {
      setFormData(prev => ({
        ...prev,
        breadcrumbs: [
          ...prev.breadcrumbs,
          { level: `Level_${prev.breadcrumbs.length + 1}`, text: '', link: '' }
        ]
      }));
    }
  };
  const removeBreadcrumb = (index: number) => {
    setFormData(prev => ({
      ...prev,
      breadcrumbs: prev.breadcrumbs.filter((_, i) => i !== index)
    }));
  };
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>, type: 'image' | 'thumbnail') => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setError('Please upload an image file');
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError('Image size should be less than 5MB');
      return;
    }
    try {
      if (type === 'image') setUploadingImage(true);
      else setUploadingThumbnail(true);
      const previewUrl = URL.createObjectURL(file);
      if (type === 'image') {
        setImagePreview(previewUrl);
      } else {
        setThumbnailPreview(previewUrl);
      }
      const imageUrl = await uploadToS3(file, type);
      setFormData(prev => ({
        ...prev,
        [type === 'image' ? 'Image_URL' : 'thumbnail']: imageUrl
      }));
      setError('');
    } catch (err) {
      setError('Failed to upload image');
      console.error('Upload error:', err);
      // Reset preview on error
      if (type === 'image') {
        setImagePreview('');
      } else {
        setThumbnailPreview('');
      }
    } finally {
      if (type === 'image') setUploadingImage(false);
      else setUploadingThumbnail(false);
    }
  };
  const removeImage = (type: 'image' | 'thumbnail') => {
    if (type === 'image') {
      setImagePreview('');
      setFormData(prev => ({ ...prev, Image_URL: '' }));
      if (imageInputRef.current) imageInputRef.current.value = '';
    } else {
      setThumbnailPreview('');
      setFormData(prev => ({ ...prev, thumbnail: '' }));
      if (thumbnailInputRef.current) thumbnailInputRef.current.value = '';
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      const userResponse = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email/${user.email}`);
      const userData = userResponse.data.data;
      const author_id = userData._id;
      const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/users/${author_id}${Math.random()}`;
      const tagIds: string[] = await postTags(formData.tags);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/articles`,
        {
          ...formData,
          author_id,
          URL,
          tags:tagIds
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      const articleData = response.data.data;
      await axios.put(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users`, {
        full_name: userData.full_name,
        email: userData.email,
        article_ids: [...userData.article_ids, articleData._id]
      });
      window.location.href = '/blog/success';
    } catch (error: any) {
      setError(error.response?.data?.error || 'Failed to create article');
    } finally {
      setLoading(false);
    }
  };
  const inputClassName = "mt-1 block w-[80%] md:w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-black focus:outline-none focus:ring-1 focus:ring-black text-sm";
  const labelClassName = "block text-sm font-medium text-gray-700";
  return (
    <div className="h-auto w-full bg-gray-50 py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-[95%] sm:max-w-2xl lg:max-w-4xl mx-auto bg-white p-4 sm:p-6 lg:p-8 rounded-lg shadow-md">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-6 sm:mb-8 text-center">
          Create New Article
        </h2>
        {error && (
          <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className={labelClassName}>Article Title *</label>
            <input
              type="text"
              name="title"
              required
              className={inputClassName}
              value={formData.title}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label className={labelClassName}>Content *</label>
            <textarea
              name="content"
              required
              rows={10}
              className={inputClassName}
              value={formData.content}
              onChange={handleInputChange}
            />
          </div>
          {/* Images Section */}
          <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Image Upload */}
            <div className="space-y-2">
              <label className={labelClassName}>Main Image</label>
              <div className="relative">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage('image')}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className="w-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      type="file"
                      ref={imageInputRef}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, 'image')}
                    />
                    <button
                      type="button"
                      onClick={() => imageInputRef.current?.click()}
                      className="flex items-center justify-center w-full space-x-2"
                      disabled={uploadingImage}
                    >
                      <Upload className="h-5 w-5" />
                      <span>{uploadingImage ? 'Uploading...' : 'Upload Image'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
            {/* Thumbnail Upload */}
            <div className="space-y-2">
              <label className={labelClassName}>Thumbnail</label>
              <div className="relative">
                {thumbnailPreview ? (
                  <div className="relative">
                    <img
                      src={thumbnailPreview}
                      alt="Thumbnail Preview"
                      className="w-full h-48 object-cover rounded-md"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage('thumbnail')}
                      className="absolute top-2 right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </div>
                ) : (
                  <div className=" w-full border-2 border-dashed border-gray-300 rounded-md p-4 text-center">
                    <input
                      type="file"
                      ref={thumbnailInputRef}
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => handleImageUpload(e, 'thumbnail')}
                    />
                    <button
                      type="button"
                      onClick={() => thumbnailInputRef.current?.click()}
                      className="flex items-center justify-center w-full space-x-2"
                      disabled={uploadingThumbnail}
                    >
                      <Upload className="h-5 w-5" />
                      <span>{uploadingThumbnail ? 'Uploading...' : 'Upload Thumbnail'}</span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Breadcrumbs Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className={labelClassName}>Breadcrumbs</label>
              {formData.breadcrumbs.length < 4 && (
                <button
                  type="button"
                  onClick={addBreadcrumb}
                  className="text-sm text-gray-600 hover:text-black"
                >
                  + Add Breadcrumb
                </button>
              )}
            </div>
            {formData.breadcrumbs.map((breadcrumb, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 items-start">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Text"
                    className={inputClassName}
                    value={breadcrumb.text}
                    onChange={(e) => handleBreadcrumbChange(index, 'text', e.target.value)}
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    type="url"
                    placeholder="Link (optional)"
                    className={inputClassName}
                    value={breadcrumb.link || ''}
                    onChange={(e) => handleBreadcrumbChange(index, 'link', e.target.value)}
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeBreadcrumb(index)}
                    className="text-red-500 hover:text-red-700 mt-1 px-2 py-1 rounded"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
          {/* Tags Section */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <label className={labelClassName}>Tags</label>
              <button
                type="button"
                onClick={addTag}
                className="text-sm text-gray-600 hover:text-black px-2 py-1 rounded hover:bg-gray-100"
              >
                + Add Tag
              </button>
            </div>
            {formData.tags.map((tag, index) => (
              <div key={index} className="flex flex-col sm:flex-row gap-4 items-start bg-gray-50 p-4 rounded-md">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Tag Name"
                    className={inputClassName}
                    value={tag.name}
                    onChange={(e) => handleTagChange(index, 'name', e.target.value)}
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Tag Category"
                    className={inputClassName}
                    value={tag.category}
                    onChange={(e) => handleTagChange(index, 'category', e.target.value)}
                  />
                </div>
                <button
                  type="button"
                  onClick={() => removeTag(index)}
                  className="text-red-500 hover:text-red-700 mt-1 px-2 py-1 rounded"
                >
                  Remove
                </button>
              </div>
            ))}
            {formData.tags.length === 0 && (
              <p className="text-sm text-gray-500 italic text-center bg-gray-50 p-4 rounded-md">
                No tags added. Click "Add Tag" to start adding tags.
              </p>
            )}
          </div>
          {/* Submit Button */}
          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto min-w-[200px] flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200"
            >
              {loading ? (
                <div className="flex items-center space-x-2">
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  <span>Creating Article...</span>
                </div>
              ) : (
                'Create Article'
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default CreateArticleForm;