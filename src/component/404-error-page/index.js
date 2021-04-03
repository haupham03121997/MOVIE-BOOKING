import React from 'react';
import {  withRouter } from 'react-router-dom'
import './style.scss';

function NotFoundError(props) {
  const {history } = props
  const handleClick  = () =>{
    history.push('/')
  }

  return (
    <div className='page-not-found'>
      <div id="particles" className="particles">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <main>
        <section>
          <h1>Page Not Found!</h1>
          <div>
            <span>4</span>
            <span className="circle">0</span>
            <span>4</span>
          </div>
          <p>
              We are unable to find the page
            <br />
              you're looking for.
          </p>
          <div>
            <button onClick={handleClick}>Back to Home Page</button>
          </div>
        </section>
      </main>
    </div>
  );
}

export default  withRouter(NotFoundError) ;