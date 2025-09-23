import React, { useState } from 'react';
import BlogItem from './blog-item';
import Pagination from './pagination';
import blogData from '../../../data/blog-data';


const BlogGridMain = ({position}) => {
    const blogItemShow = 4;
    const [currentPage, setCurrentPage] = useState(0);
    const totalPages = Math.ceil(blogData.length / blogItemShow);
    const startIndex = currentPage * blogItemShow;
    const endIndex = startIndex + blogItemShow;
    const currentBlogItems = blogData.slice(startIndex, endIndex);
    const handleNextPage = () => {
        if (currentPage < totalPages - 1) {
        setCurrentPage(currentPage + 1);
        }
    };
    const handlePrevPage = () => {
        if (currentPage > 0) {
        setCurrentPage(currentPage - 1);
        }
    };

    return (
        <>
	        <div className="two__columns section-padding-three">
                <div className="container">
                    <div className="row">
                        <BlogItem currentBlogItems={currentBlogItems} />
                    </div>
                    <Pagination
                        currentPage={currentPage}
                        handlePrevPage={handlePrevPage}
                        totalPages={totalPages}
                        handleNextPage={handleNextPage}
                        setCurrentPage={setCurrentPage}
                        position={position || "center"}
                    />
                </div>
            </div>
        </>
    );
};

export default BlogGridMain;