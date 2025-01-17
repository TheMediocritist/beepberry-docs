import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import HomepageDiagram from '@site/src/components/HomepageDiagram';
import HomepageVideos from '@site/src/components/HomepageVideos';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--dark', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        {/*<p className="hero__subtitle">{siteConfig.tagline}</p>*/}
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://shop.sqfmi.com/products/beepberry">
            Order Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} by SQFMI x Beeper`}
      description="Beepberry by SQFMI x Beeper">
      <HomepageHeader />
      <main>
        <HomepageDiagram />
        <HomepageFeatures />
        <HomepageVideos />
      </main>
    </Layout>
  );
}
