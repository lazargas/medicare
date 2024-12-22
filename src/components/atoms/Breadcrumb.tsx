'use client'
import React, { memo } from 'react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';

interface BreadcrumbItem {
  level: string;
  text: string;
  link: string | null;
}

interface BreadcrumbsProps {
  breadcrumbs?: BreadcrumbItem[];
}

const Breadcrumbs = ({ breadcrumbs = [] }: BreadcrumbsProps) => {
  return (
    <nav className="flex items-center space-x-1 text-sm text-gray-600">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={item.level}>
          {index > 0 && <ChevronRight className="w-4 h-4 text-gray-400" />}
          {item.link ? (
            <Link href={`/`} className="hover:text-blue-600 transition-colors">
              {item.text}
            </Link>
          ) : (
            <span className="text-gray-900">{item.text}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default memo(Breadcrumbs);