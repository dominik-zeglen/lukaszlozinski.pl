import * as React from 'react';

import Hero from './Hero';
import Navbar from './Navbar';
import Section from './Section';

interface IPage {
  name: string;
  fields: Array<{
    name: string;
  value: string;
}>
}
interface IPageProps {
  data: {
    offers: {
      name: string;
      pages: IPage[]
    }
    siteElements: {
      pages: IPage[]
    }
  }
  heroText: string;
  scrollPosition: number;
}

export const Page: React.SFC<IPageProps> = ({data, heroText, scrollPosition}) => (
  <div className="page">
    <Navbar scrollPosition={scrollPosition} />
    <Hero text={heroText} />
    <main className="container">
      <Section title={data.offers.name}>
        {data.offers.pages.map(offer => offer.name)}
      </Section>
    </main>
  </div>
);
export default Page;
