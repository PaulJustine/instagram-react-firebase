import React, { useState } from "react";
import Post from "./posts/Post";
import Sugesstions from './Sugesstions';
import StoryNav from './Story/StoryNav';
import "./Timeline.css";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "hemnathx_",
      postImage: 'https://wallpapers.com/images/featured/arijit-singh-q307hnimzo1z26ct.jpg',
      likes: 750,
      timestamp: "2d",
    },
    {
      user: "alfin.johnson",
      postImage: 'https://img.etimg.com/thumb/width-1600,height-900,imgsize-53246,resizemode-75,msid-113165247/news/politics-and-nation/thalapathy-vijays-tvk-officially-registered-as-a-political-party-by-eci.jpg',
      likes: 420,
      timestamp: "12h",
    },
    {
      user: "Paul.justin",
      postImage: 'https://images.filmibeat.com/ph-big/2020/02/sreenath-bhasi_1581071419160.jpg',
      likes: 360,
      timestamp: "1d",
    },
    {
      user: "Shubham",
      postImage: 'https://w0.peakpx.com/wallpaper/843/190/HD-wallpaper-mohanlal-spadikam-malayalam-movie.jpg',
      likes: 850,
      timestamp: "29min",
    },
    {
      user: "Shushma",
      postImage: 'https://th.bing.com/th/id/OIF.KB2ddADAaLwM6t5dyjGAvA?rs=1&pid=ImgDetMain',
      likes: 650,
      timestamp: "40min",
    },
  ]);

  const stories = [
    { user: "hemnathx_", image: "https://lh3.googleusercontent.com/a/ACg8ocLckpLvXS4cVy6-O8wdIdi32n9JcvpKhxDHeL_47lYlvVLM7t0=s288-c-no" },
    { user: "alfin.johnson", image: "https://burst.shopifycdn.com/photos/dark-haired-man-in-brown-leather-jacket.jpg?width=1000&format=pjpg&exif=0&iptc=0" },
    { user: "Paul.justin", image: "https://img.freepik.com/free-photo/smiley-man-relaxing-outdoors_23-2148739334.jpg?semt=ais_hybrid" },
    { user: "Shubham", image: "https://thumbs.dreamstime.com/b/portrait-handsome-smiling-young-man-folded-arms-smiling-joyful-cheerful-men-crossed-hands-isolated-studio-shot-172869765.jpg" },
    { user: "Shushma", image: "https://i.pinimg.com/736x/85/28/18/852818bba5543c81875aae7bd112b932.jpg" },
    { user: "Roshan", image: "https://i.pinimg.com/originals/a5/57/92/a55792b318e62044c88d3c0bdb8e635a.jpg" },
    { user: "Joshva", image: "https://images3.alphacoders.com/962/962473.jpg" },
    // Add more stories here
  ];

  return (
    <div className="timeline">
      <div className="timeline__left">
        <StoryNav stories={stories} />
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              key={post.user}
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Sugesstions />
      </div>
    </div>
  );
}

export default Timeline;
