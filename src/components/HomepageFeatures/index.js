import React from 'react';
import styles from './styles.module.css';

const HeroList = [
  {
    image: './img/logo.png',
    title: 'Docs',
    url: '/docs/intro'
  },
  {
    image: './img/logo.png',
    title: 'FAQ',
    url: '/docs/faq'
  },
  {
    image: './img/logo.png',
    title: 'Blog',
    url: '/blog'
  }
]
function Hero({ image, title, url }) {
  return (
    <div class="article-card article-card-hover">
      <a href={url}>
        <div class="content">
          <p class="title">{title}</p>
        </div>
        <img src={image} />
      </a>
    </div>
  );
}

export function HomepageFeatures() {
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

export function HomepageHeros() {
  return (
    <section className={styles.features}>
      <div className="landingHeroCenter">
        {HeroList.map((props, idx) => (
          <Hero key={idx} {...props} />
        ))}
      </div>
    </section>
  )
}
