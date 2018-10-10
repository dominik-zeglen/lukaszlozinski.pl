import * as React from 'react';

import Hero from './Hero';
import Navbar from './Navbar';

interface IPageProps {
  heroText: string;
  scrollPosition: number;
}

export const Page: React.SFC<IPageProps> = ({heroText, scrollPosition}) => (
  <div className="page">
    <Navbar scrollPosition={scrollPosition} />
    <Hero text={heroText} />
  </div>
);
export default Page;
