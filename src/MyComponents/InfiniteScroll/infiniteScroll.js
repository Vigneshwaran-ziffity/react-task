// InfiniteScroll.js
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
 
const InfiniteScroll = ({ loadMore, hasMore, isLoading }) => {
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      if (scrollHeight - scrollTop <= clientHeight + 5) { // Trigger when near bottom
        if (hasMore && !isLoading) {
          loadMore();
        }
      }
    };
 
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [loadMore, hasMore, isLoading]);
 
  return null;
};
 
InfiniteScroll.propTypes = {
  loadMore: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};
 
export default InfiniteScroll;
