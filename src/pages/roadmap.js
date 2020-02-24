import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

function Roadmap() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={siteConfig.title}
            description="Description will go into a meta tag in <head />">
            <main>
                <div className={styles.respIframeContainer}>
                <iframe
                    src="https://trello.com/b/XdUBlbIq.html" 
                    className={styles.respIframe}
                />
                </div>
            </main>
        </Layout>
    );
}

export default Roadmap;

