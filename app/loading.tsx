// loading.js
'use client'
import { useState, useEffect } from 'react';

export default function Loading() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); // Hide the loading animation after 2 seconds
    }, 3000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      {isVisible && (
        <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center bg-gray-100 bg-opacity-95 transition-opacity">
          <div className="flex space-x-2">
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-200"></div>
            <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-400"></div>
          </div>
        </div>
      )}
    </>
  );
}
