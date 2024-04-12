import React from 'react';

const SectionSix = () => {
  const youtubeData = {
    link: 'https://www.youtube.com/@glossypicturefactoryofficial',
    image: 'ENGAGEMENT/mirror.jpg',
    caption: 'Let\'s Connect On YouTube',
  };

  const instagramData = {
    heading: 'INSTAGRAM',
    posts: [
      {
        column: 'postCol1 Instacols',
        images: [
          { src: 'HALDI/DSC_2642.JPG', alt: '' },
          { src: 'HALDI/DSC_2643.JPG', alt: '' },
          { src: 'MEHNDI/_DSC1530.JPG', alt: '' },
        ],
      },
      {
        column: 'postCol2 Instacols',
        images: [
          { src: 'PREWEDDING/DSC_3964.jpg', alt: '' },
          { src: 'HALDI/Frame.JPG', alt: '' },
          { src: 'MEHNDI/_DSC1738.JPG', alt: '' },
        ],
      },
      {
        column: 'postCol3 Instacols',
        images: [
          { src: 'HALDI/DSC_2642.JPG', alt: '' },
          { src: 'HALDI/DSC_2643.JPG', alt: '' },
          { src: 'MEHNDI/_DSC1530.JPG', alt: '' },
        ],
      },
    ],
  };

  return (
    <div className="sectionSix fullSideMarginPadding">
      <div className="youtubeInsta">
        <div className="youtube">
          <a href={youtubeData.link} target="_blank">
            <div className="youtubeVideo">
                <img src={youtubeData.image} alt={youtubeData.caption} />
            </div>
            <div className="youtubeCaption">
              <img src="logo/youtube.png" alt="" />
              <h2 className="caption">{youtubeData.caption}</h2>
            </div>
          </a>
        </div>
        <div className="insta">
          <div className="instaHeading">
            <h3>{instagramData.heading}</h3>
          </div>
          <div className="InstaPosts">
            {instagramData.posts.map((post, index) => (
              <div key={index} className={post.column}>
                {post.images.map((img, idx) => (
                    <img src={img.src} alt={img.alt} />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionSix;