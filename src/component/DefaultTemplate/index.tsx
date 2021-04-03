import React, { Fragment } from 'react';
import Footer from '../Footer';
import Header from '../Header';

function DefaultTemplate(props : any) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  )
}

export default DefaultTemplate;
