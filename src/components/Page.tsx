import * as React from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import Section from './Section';

interface IPageProps {
  heroText: string;
  scrollPosition: number;
}

export const Page: React.SFC<IPageProps> = ({heroText, scrollPosition}) => (
  <div className="page">
    <Navbar scrollPosition={scrollPosition} />
    <Hero text={heroText} />
    <main className="container">
      <Section title="Oferta">dupa</Section>
    </main>
  </div>
);
export default Page;
