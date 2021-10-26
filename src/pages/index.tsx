import type { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';
import Header from './components/Header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Open Source School</title>
      </Head>

      <Header />

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2
       px-4 rounded"
      >
        Button
      </button>
    </div>
  );
};

export default Home;
