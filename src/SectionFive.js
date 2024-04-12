import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareInstagram, faSquareFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './index.css';

const Team = () => {
  const teamMembers = [
    {
      name: 'Akhilesh Prajapati',
      job: 'Editor & Photographer',
      socialHandles: [
        {
          icon: faSquareInstagram,
          link: 'https://www.instagram.com/',
        },
        {
          icon: faSquareFacebook,
          link: 'https://www.facebook.com/',
          color: '#1877F2',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/',
        },
      ],
    },
    {
      name: 'Akhilesh Prajapati',
      job: 'Editor & Photographer',
      socialHandles: [
        {
          icon: faSquareInstagram,
          link: 'https://www.instagram.com/',
        },
        {
          icon: faSquareFacebook,
          link: 'https://www.facebook.com/',
          color: '#1877F2',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/',
        },
      ],
    },
    {
      name: 'Akhilesh Prajapati',
      job: 'Editor & Photographer',
      socialHandles: [
        {
          icon: faSquareInstagram,
          link: 'https://www.instagram.com/',
        },
        {
          icon: faSquareFacebook,
          link: 'https://www.facebook.com/',
          color: '#1877F2',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/',
        },
      ],
    },
    {
      name: 'Akhilesh Prajapati',
      job: 'Editor & Photographer',
      socialHandles: [
        {
          icon: faSquareInstagram,
          link: 'https://www.instagram.com/',
        },
        {
          icon: faSquareFacebook,
          link: 'https://www.facebook.com/',
          color: '#1877F2',
        },
        {
          icon: faLinkedin,
          link: 'https://www.linkedin.com/',
        },
      ],
    },
  ];

  return (
    <div className="teamContainer fullSideMarginPadding">
      <div className="teamHeading">
        <h3 className="commonHeadingCenter">Meet Our Teams</h3>
      </div>
      <div className="teamProfile">
        {teamMembers.map((member, index) => (
          <div key={index} className={`team${index + 1} commonSpace`}>
            <div className={`team${index + 1}Profile allTeamProfileSpace`}>
              <img src="./logo/akhilesh.jpg" alt="" className="commonTeamProfile" />
            </div>
            <div className="commonDetailCenter">
              <div className={`team${index + 1}Name`}>
                <h3 className="commonDetailSpace">{member.name}</h3>
              </div>
              <div className={`team${index + 1}Job`}>
                <p className="commonDetailSpace">{member.job}</p>
              </div>
              <div className={`team${index + 1}SocialHandel commonTeamSciHnd commonDetailSpace`}>
                <div className="commonSocialHandel">
                  {member.socialHandles.map((socialHandle, index) => (
                    <a key={index} href={socialHandle.link} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon icon={socialHandle.icon} style={{ color: socialHandle.icon === 'faSquareFacebook' ? '#1877F2' : socialHandle.icon === 'faLinkedin' ? '#0A66C2' : '#E4405'}} className="socialIcon fa-brands" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Team;