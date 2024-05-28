import React, { useEffect, useState } from 'react';
import newton from '../assets/icon/NEWTon.jpg';
import { getAboutData } from '../services/aboutService';

const AboutPage = () => {
  const [aboutData, setAboutData] = useState({ description: '' });
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutData = async () => {
      try {
        const data = await getAboutData();
        console.log('Fetched data:', data); 
        setAboutData(data);
      } catch (error) {
        console.error('Failed to fetch AboutData', error);
        setError('Failed to load about data');
      }
    };

    fetchAboutData();
  }, []);

  return (
    <div className="about_page" id="about">
      <div className="container1">
        <h1 className="title">About Me</h1>
      </div>

      <div className="myself">
        <div className="description">
          {error ? <p>{error}</p> : <p>{aboutData.description}</p>}
        </div>

        <div className="profile">
          <img className="picture" src={newton} alt="profile" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
