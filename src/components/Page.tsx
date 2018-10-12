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

  const contactForm = getPageBySlug(data.siteElements.pages, 'form');
  const contactFormFields = getPageFields(contactForm);

  const contactInfo = getPageBySlug(data.siteElements.pages, 'contact-info');
  const contactInfoFields = getPageFields(contactInfo);

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
        <Section id="kontakt" title={contactFormFields.title}>
          <div className="contact">
            <div className="contact__info">
              <h4 className="contact__info-header">{contactInfo.name}</h4>
              <div className="contact__info-email">
                <a href={'mailto:' + contactInfoFields.email}>
                  {contactInfoFields.email}
                </a>
              </div>
              <div className="contact__info-phone">
                <a href={'tel:' + contactInfoFields.phone}>
                  {contactInfoFields.phone}
                </a>
              </div>
            </div>
            <form onSubmit={() => undefined}>
            <div className="contact__form">
              <div className="contact__form-helper-text">
                {contactFormFields.text}
              </div>
              <div className="form-control">
                <input name="firstName" placeholder="Imię" />
              </div>
              <div className="form-control">
                <input name="lastName" placeholder="Nazwisko" />
              </div>
              <div className="form-control">
                <input name="email" placeholder="Adres e-mail" type="email" />
              </div>
              <div className="form-control">
                <input name="phone" placeholder="Numer telefonu" type="phone" />
              </div>
              <div className="form-control textarea-control">
                <textarea name="content" placeholder="Treść wiadomości" />
              <button className="button" type="submit">Wyślij</button>
              </div>
            </div>
          </form>
          </div>
        </Section>
      </main>
    </div>
  );
};
export default Page;
