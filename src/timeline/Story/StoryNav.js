import React from 'react';
import './StoryNav.css';
import { Avatar } from '@mui/material';

function StoryNav({ stories }) {
  return (
    <div className="storyNav">
      {stories.map((story, index) => (
        <div key={index} className="storyNav__item">
          <Avatar src={story.image} alt={story.user} />
          <span>{story.user}</span>
        </div>
      ))}
    </div>
  );
}

export default StoryNav;
