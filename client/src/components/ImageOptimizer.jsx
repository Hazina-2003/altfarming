// src/components/ImageOptimizer.jsx
import React from 'react';

const ImageOptimizer = ({ 
  src, 
  alt, 
  className = '', 
  fallbackSrc = '/src/assets/placeholder.jpg',
  ...props 
}) => {
  const handleError = (e) => {
    e.target.src = fallbackSrc;
  };

  return (
    <img 
      src={src} 
      alt={alt}
      className={className}
      onError={handleError}
      loading="lazy"
      {...props}
    />
  );
};

export default ImageOptimizer;