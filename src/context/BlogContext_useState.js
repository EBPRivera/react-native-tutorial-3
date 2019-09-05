import React, { useState } from 'react';

const BlogContext = React.createContext(); // responsible for moving information from the blog post provider

export const BlogProvider = ({children}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  const addBlogPost = () => {
    setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}`}]);
  }

  return <BlogContext.Provider
    value={{ data: blogPosts, addBlogPost: addBlogPost}} // The prop name should be 'value'
  >
    {children}
  </BlogContext.Provider>
};

export default BlogContext;
