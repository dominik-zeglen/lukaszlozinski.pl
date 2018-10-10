import * as React from 'react';

import './style.scss';

interface ISectionProps {
  title: string;
}

export const Section: React.SFC<ISectionProps> = ({children, title}) => (
  <section className="section">
    <h2 className="section__header">{title}</h2>
    {children}
  </section>
);
export default Section;
