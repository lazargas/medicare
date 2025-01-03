"use client"
import React, { useState, useEffect } from 'react';
import { Search, Menu, X } from 'lucide-react';
import "@/styles/Searchbar.css";

interface Tag {
  name: string;
  category: string;
}

interface SearchNavProps {
  tags: Tag[];
  blogs: any[];
  categories:any[];
}

const SearchNav: React.FC<SearchNavProps> = ({ tags, ...props }) => {
  const categories = props.categories;
  const [blogs, setBlogs] = useState(props.blogs);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [filteredTags, setFilteredTags] = useState<any[]>(categories);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  

  // Group tags by category
  const groupedCategories = React.useMemo(() => {
  const grouped = filteredTags.reduce((acc, category) => {
    if (!acc[category.main_category]) {
      acc[category.main_category] = new Set<string>();
    }
    acc[category.main_category].add(category.secondary_category);
    return acc;
  }, {} as Record<string, Set<string>>);

  // Convert Sets to arrays with proper type assertion
  return Object.fromEntries(
    Object.entries(grouped).map(([key, set]) => [
      key, 
      Array.from(set as Set<string>)
    ])
  );
}, [filteredTags]) as Record<string, string[]>;
 
  const handleSearchResultClick = (blog: any) => {
    const id = blog._id;
    if (window) {
      window.location.href = `/blog/${id}`;
    }
  }

  function onCategorySelect(category: any) {
    window.location.href = `/categories/${category}`
  }

  const handleSearch = (query: string) => {
    setSearchQuery(query);

    if (query.trim() === '') {
      setBlogs(blogs);
      setSearchResults([]);
      return;
    }

    const searchTerms = query.toLowerCase().split(' ');

    const results = blogs.filter((blog: any) => {
      const searchableText = `${blog.title} ${blog.content}`.toLowerCase();
      return searchTerms.every(term => searchableText.includes(term));
    });

    setSearchResults(results);
    setBlogs(results);
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      handleSearch(searchQuery);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const sortedCategories = Object.keys(groupedCategories).sort();

  return (
    <div className="w-full px-[1.5rem]">
      {/* Search Bar */}
      <div className="relative mb-6">
        <div className="relative">
          <input
            type="text"
            className="w-full pl-10 pr-4 py-2 border-b-2 border-gray-200 focus:border-blue-600 outline-none transition-colors"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setIsSearchFocused(true)}
            onBlur={() => setTimeout(() => setIsSearchFocused(false), 200)}
          />
          <Search className="absolute left-2 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Search Results Preview - Mobile Optimized */}
        {isSearchFocused && searchQuery && searchResults.length > 0 && (
          <div className="absolute z-50 left-0 right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-[60vh] overflow-auto">
            {searchResults.slice(0, 5).map((blog, index) => (
              <div
                onClick={() => handleSearchResultClick(blog)}
                key={index}
                className="p-3 sm:p-4 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
              >
                <h4 className="font-semibold text-gray-900 mb-1 truncate text-sm sm:text-base">
                  {blog.title}
                </h4>
                <p className="text-xs sm:text-sm text-gray-600 line-clamp-2">
                  {blog.content}
                </p>
              </div>
            ))}
            {searchResults.length > 5 && (
              <div className="p-2 text-center text-xs sm:text-sm text-gray-500">
                {searchResults.length - 5} more results
              </div>
            )}
          </div>
        )}
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center space-x-2 text-gray-600 hover:text-gray-900"
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
          <span>Categories</span>
        </button>
      </div>

      {/* Categories - Desktop */}
      <div className="hidden md:flex flex-wrap gap-6 rounded-lg bg-[#F0F8FF] p-2 rounded-[4px]">
        {sortedCategories.map((category,index) => (
          <div key={`${category}${index}`} className="group relative">
            <div className="cursor-pointer py-2 px-3 hover:bg-gray-50 rounded-md transition-colors">
              <div className="flex items-center justify-center" >
                <h3 className="font-semibold ">{category} </h3>
                <svg width="33" height="15" viewBox="0 0 33 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8.932 5.748L10.036 4.632L14.56 9.204L19.084 4.632L20.188 5.748L14.56 11.388L8.932 5.748Z" fill="black" />
                </svg>

              </div>

            </div>

            <div className="hiding-scrollbar absolute max-h-[300px] overflow-scroll invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white shadow-lg rounded-md mt-1 py-2 w-48 z-40 transition-all duration-200 ease-in-out left-0">
              {groupedCategories[category].map((subCategory:any,index:any) => (
                <button
                  key={`${subCategory}${index}`}
                  onClick={() => onCategorySelect?.(subCategory)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 transition-colors"
                >
                  {subCategory}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Categories - Mobile */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-4 bg-white rounded-lg p-4 border border-gray-200">
            {sortedCategories.map((category,index) => (
              <div key={`${category}${index}`} className="space-y-2">
                <h3 className="font-semibold text-gray-800 text-sm">
                  {category}
                </h3>
                <div className="pl-4 space-y-2">
                  {groupedCategories[category].map((subCategory:string,index:any) => (
                    <button
                    key={`${subCategory}${index}`}
                      onClick={() => {
                        onCategorySelect?.(subCategory);
                        setIsMobileMenuOpen(false);
                      }}
                      className="block w-full text-left text-sm text-gray-600 hover:text-blue-600 py-1"
                    >
                      {subCategory}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchNav;