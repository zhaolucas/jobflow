import React from 'react';
import JobCard from '../components/JobCard';
import RandomQuote from '../components/RandomQuote';

export default function Home() {
  return (
    <div>
      <h1>HomePage</h1>
      <JobCard />
      <RandomQuote />
      <JobCard />
      <RandomQuote />
    </div>
  );
}
