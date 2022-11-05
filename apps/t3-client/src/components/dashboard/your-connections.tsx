import { useState } from 'react';
import ProfileCard from '../search-page/profile-card/profile-card';
import ListColumn from './list-column';

const YourConnections = () => {
  return (
    <section className="flex min-h-[100vh] w-full flex-wrap text-center">
      <ListColumn isMentors />
      <ListColumn />
    </section>
  );
};

export default YourConnections;
