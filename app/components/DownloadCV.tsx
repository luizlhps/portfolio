'use client';
import React from 'react';
import { Button } from './Bases';

export const DownloadCV = () => {
  const handleDownload = () => {
    const path = '/cv.pdf';

    const link = document.createElement('a');
    link.href = path;
    link.setAttribute('download', 'cv.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Button onClick={handleDownload} className='mt-8 px-10 max-sm:text-sm'>
      CV
    </Button>
  );
};
