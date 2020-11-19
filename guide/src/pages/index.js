import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

import ParticlesBg from 'particles-bg'
const features = [
  {
    title: 'A General Guide',
    imageUrl: 'img/undraw_save_to_bookmarks_y708.svg',
    description: (
      <>
        A handbook that describes concrete ways to make exploring/contributing to large codebases less intimidating.
      </>
    ),
  },
  {
    title: 'Community Specific Guidelines',
    imageUrl: 'img/undraw_community_8nwl.svg',
    description: (
      <>
        A central repository of Community specific guidelines laid down by the maintainers, and personal stories and experiences
        of fellows who've contributed to various open source communities in the past.
      </>
    ),
  },
  {
    title: 'Live Playground',
    imageUrl: 'img/undraw_code_review_l1q9.svg',
    description: (
      <>
        Users can play around with code snippets and run them through a debugger. They can also generate UML diagrams, call graphs and much more.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (

    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <>
    <ParticlesBg num={4} type="circle" bg={true} />
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
    </>
  );
}

export default Home;
