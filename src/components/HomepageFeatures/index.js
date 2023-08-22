import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '28 fine crafted Pine rooms',
    image: './img/ES_compilation_screen.png',
    description: (
      <>
        Pine Studio made 29 rooms for you to escape with variety of themes.
        From Space to Victorian era, you will find your cup of tea.
      </>
    ),
  },
  {
    title: '2 full fledged DLCs',
    image: './img/bannerDlcs.png',
    description: (
      <>
        Explore additional in-house rooms made by Pine and our friends at Somnium Games
      </>
    ),
  },
  {
    title: 'More than 3000 community rooms',
    image: './img/ES_Community-Made_rooms.png',
    description: (
      <>
        Explore a vast universe of 3000+ community designed rooms 
      </>
    ),
  },
];

function Feature({image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} role="img" style={{objectFit: "contain"}} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
