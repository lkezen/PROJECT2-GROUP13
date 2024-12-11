import React from 'react';

const VideoSection = () => {
  return (
    <section className="video-section">
      <h3>Check Out Our Latest Design Tips!</h3>
      <iframe
        width="1200"
        height="675"
        src="https://www.youtube.com/embed/sVi2pdF1aIc"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </section>
  );
};

export default VideoSection;
