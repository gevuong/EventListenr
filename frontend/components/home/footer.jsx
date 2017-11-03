import React from 'react';

const Footer = () => {
  return (
    <div>
      <div className="bottomDivider"></div>
      <footer className='footerContainer'>
        <div className="links">
          <div className="github-linkedin">
            <a href="https://github.com/gevuong"><i className="fa fa-github fa-3x"></i></a>
          </div>
          <div className="github-linkedin">
            <a href="https://www.linkedin.com/in/george-vuong/"><i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i></a>
          </div>
        </div>
        <div>
          <p className="footer-copyright">2017 EventListenr</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
