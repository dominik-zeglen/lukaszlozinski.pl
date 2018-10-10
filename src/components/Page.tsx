import * as React from 'react';

import Navbar from './Navbar';

interface IPageProps {
  scrollPosition: number;
}

export const Page: React.SFC<IPageProps> = ({scrollPosition}) => (
  <div className="page">
    <Navbar scrollPosition={scrollPosition} />
  </div>
);
export default Page;
