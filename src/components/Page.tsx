import * as React from 'react';

import {getPageBySlug, getPageFields, IPage} from '../utils';
import Hero from './Hero';
import Navbar from './Navbar';
import Offer from './Offer';
import RichText from './RichText';
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

export const Page: React.SFC<IPageProps> = ({data, scrollPosition}) => {
  const aboutMe = getPageBySlug(data.siteElements.pages, 'o-mnie');
  const aboutMeFields = getPageFields(aboutMe);
  return (
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
        <Section id="o-mnie" title={aboutMe.name}>
          <div className="about-me">
            <div className="about-me__image-container">
              <img
                className="about-me__image"
                src={'/static/' + aboutMeFields.image}
              />
            </div>
            <div className="about-me__content">
              <RichText content={aboutMeFields.content} />
            </div>
          </div>
        </Section>
        <Section id="oferta" title={data.offers.name}>
          {data.offers.pages.map((offer, offerIndex) => (
            <Offer
              offer={offer}
              reverse={offerIndex % 2 === 1}
              key={offer.id}
            />
          ))}
        </Section>
      </main>
    </div>
  );
};
export default Page;
