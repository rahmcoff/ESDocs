import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';

const recentPosts = require("../../../.docusaurus/docusaurus-plugin-content-blog/default/blog-post-list-prop-default.json");

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


export function HomepageHeros() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const urlMetadata = require('url-metadata');
    const lastBlogPost = recentPosts.items[0]; // Define lastBlogPost here

    urlMetadata(lastBlogPost.permalink)
      .then((metadata) => {
        var url = metadata.image.replace(/([^:]\/)\/+/g, '$1');
        // var url = "https://docs.escapesimulator.com/assets/images/rooms-52065626059047bd095c366315dfd968.jpg";
        const urlObject = new URL(url);
        setImageUrl(urlObject.pathname);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    const lastBlogPost = recentPosts.items[0]; // Define lastBlogPost here as well
    return (
      <section className={styles.features}>
        <div className="landingHeroCenter">
          {HeroList.map((props, idx) => (
            <Hero key={idx} {...props} />
          ))}
          <Hero image={imageUrl} title={lastBlogPost.title} url={lastBlogPost.permalink} />
        </div>
      </section>
    );
  }
}