import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-16">
            <div className="border-gray-300 h-10 w-10 animate-spin rounded-full border-4 border-t-blue-600" />  
        </div>
    );
};


export default LoadingSpinner;