import React from 'react';
import { Link } from 'react-router-dom';

import './thumbnails.scss';

interface ThumbnailProps {
  image: string;
  title: string;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ title, image }) => {
  return (
    <div className="w-48 h-32 p-4 dark:bg-gradient-180 dark:from-lgrey-0 dark:to-lgrey shadow-card2 hover:shadow-card4 hover:-translate-y-1 cursor-pointer rounded overflow-hidden flex justify-center transition">
      <Link to="/projects">
        <img className="h-full w-full" src={image} alt={title} />
      </Link>
    </div>
  );
};

export default Thumbnail;
