"use client"
import React, { memo } from 'react';

interface Tag {
  _id: string;
  name: string;
}

interface TagListProps {
  tags?: Tag[];
}

const TagList = ({ tags = [] }: TagListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <a
          key={tag._id}
          href={`/tags/${tag.name}`}
          className="px-4 py-1.5 bg-gray-50 text-gray-700 text-sm rounded-full 
                   border border-gray-200 hover:border-red-200
                   hover:bg-red-50 hover:text-red-900
                   transition-all duration-300 ease-in-out
                   shadow-sm hover:shadow-md"
        >
          {tag.name}
        </a>
      ))}
    </div>
  );
};

export default memo(TagList);