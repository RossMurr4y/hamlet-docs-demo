import React from 'react';
import Layout from '@theme/Layout';

function Hello() {
    return (
      <Layout title="Hello">
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '50vh',
            fontSize: '20px',
          }}>
          <p>
            this is ross testing
          </p>
        </div>
      </Layout>
    );
  }

module.exports = Hello;
