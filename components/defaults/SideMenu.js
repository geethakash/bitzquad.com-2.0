import React from 'react';

function SideMenu({ MenuOpen, setMenuOpen }) {
  return (
    <>
      <div className="sidemenu__wrapper">
        <div
          className="sidemenu__backdrop"
          onClick={() => setMenuOpen(false)}
        ></div>
        <div className="sidemenu__container">
          <div className="sidemenu__header">
            <button
              onClick={() => setMenuOpen(false)}
              className="sidemenu__header__closebutton"
            >
              <svg
                width="39"
                height="39"
                viewBox="0 0 39 39"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M37.9375 1.5625L19.75 19.75M19.75 19.75L1.5625 37.9375M19.75 19.75L37.9375 37.9375M19.75 19.75L1.5625 1.5625"
                  stroke="#3F3F46"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="sidemenu__content">
            <div className="sidemenu__content_items">
              <div className="sidemenu__content_item">
                <a href="#">Home</a>
              </div>
              <div className="sidemenu__content_item">
                <a href="#">Services</a>
              </div>
              <div className="sidemenu__content_item">
                <a href="#">About Us</a>
              </div>
              <div className="sidemenu__content_item">
                <a href="#">Projects</a>
              </div>
              <div className="sidemenu__content_item">
                <a href="#">Team</a>
              </div>
              <div className="sidemenu__content_item">
                <a href="#">Contact</a>
              </div>
            </div>
            <div className="sidemenu__content_resources">
              <h4>Resources</h4>
              <a className="">Github</a>
              <a className="">YouTube</a>
              <a className="">Blog</a>
              <a className="">Acadamy</a>
            </div>
          </div>
          <div className="sidemenu__footer">
            <div className="social-links">
              <a href="#">LinkedIn</a>
              <a href="#">Facebook</a>
              <a href="#">Instagram</a>
              <a href="#">Twitter</a>
            </div>
            <div className="multilingual">En</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SideMenu;
