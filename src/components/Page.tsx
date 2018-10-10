import * as React from 'react';

import {IPage} from '../utils';
import Hero from './Hero';
import Navbar from './Navbar';
import Offer from './Offer';
import Section from './Section';

interface IPageProps {
  data: {
    offers: {
      name: string;
      pages: IPage[];
    };
    siteElements: {
      pages: IPage[];
    };
  };
  scrollPosition: number;
}

export const Page: React.SFC<IPageProps> = ({data, scrollPosition}) => (
  <div className="page">
    <Navbar scrollPosition={scrollPosition} />
    <Hero
      text={
        data.siteElements.pages
          .filter(page => page.slug === 'hero')[0]
          .fields.filter(field => field.name === 'content')[0].value
      }
    />
    <main className="container">
      <Section title={data.offers.name}>
        {data.offers.pages.map((offer, offerIndex) => (
          <Offer offer={offer} reverse={offerIndex % 2 === 1} key={offer.id} />
        ))}
      </Section>
    </main>
  </div>
);
export default Page;
