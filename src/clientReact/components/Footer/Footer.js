import React from 'react';
import {Link} from 'react-router-dom';

require('./Footer.scss');

const Footer = () => {
  return (
    <div className={'Footer mt-auto'}>
      <footer className="page-footer font-small teal pt-2">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center py-2">
            <div className="line text-light">
              <div className="line-border"><Link className="text-light" to={'/'}> Home</Link></div>
              <div className="line-border"><Link className="text-light" to={'/about'}> About</Link></div>
              <div className="line-border"><Link className="text-light" to={'/product'}> Games</Link></div>
              <div><Link className="text-light" to={'/article'}> Blog</Link></div>
            </div>
          </div>
        </div>
        <div className="container text-center">
          <div className="py-4">
            <div>
              <a className="fb-ic"> <i className="fa fa-facebook fa-lg white-text mr-md-5 mr-3"> </i></a>
              <a className="tw-ic"> <i className="fa fa-twitter fa-lg white-text mr-md-5 mr-3"></i></a>
              <a className="gplus-ic"> <i className="fa fa-google-plus fa-lg white-text mr-md-5 mr-3"></i> </a>
              <a className="li-ic"> <i className="fa fa-linkedin fa-lg white-text mr-md-5 mr-3"></i></a>
              <a className="ins-ic"> <i className="fa fa-instagram fa-lg white-text mr-md-5 mr-3"></i> </a>
              <a className="pin-ic"> <i className="fa fa-pinterest fa-lg white-text"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-copyright text-center py-3 text-light">© 2018 Copyright: Dream Team #1 with love</div>
      </footer>
    </div>
  );
};

export default Footer;
