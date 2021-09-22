import React from 'react';

const Common = () => {
  return (
    <div>
      <main role="main" id="main">
        <div class="video_container">
          <div class="main_visual">
            <iframe
              width="100%"
              height="1000vh"
              src="https://www.youtube.com/embed/dmPHbxpfKMs"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Common;
