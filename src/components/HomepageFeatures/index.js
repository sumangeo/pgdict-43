import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'BCC PGD ICT 43 Alumni',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        This platform has been created exclusively for alumni. Once we have completed our studies, we will join the ranks of alumni. Therefore, it is important to remember one another and stay connected through this platform. It serves as a means to foster and maintain our connections.
      </>
    ),
  },
  {
    title: 'Focus on Study',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        This website is designed for the purpose of sharing class materials and promoting regular studying. It provides a convenient platform for easily finding and accessing study materials.
      </>
    ),
  },
  {
    title: 'Project Demonstration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        This project is a personal endeavor aimed at showcasing the knowledge and skills acquired during the PGDICT 43 course. It serves as a practice ground where we can apply and further enhance what we have learned.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
