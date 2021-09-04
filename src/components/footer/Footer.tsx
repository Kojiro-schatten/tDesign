import React from 'react'
import './Footer.scss'

const Link = require('react-router-dom').Link

const linkData = [
  ['home', '/home'],
  ['service', '/service'],
  ['person', '/person'],
  ['work', '/work'],
]

export const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top-wrapper">
          <div className="footer-justify-wrapper">
            <div className="footer-left-item">
              <h3 className="footer-top-text">Tomarigi</h3>
            </div>
            <div className="footer-right-item">
              <h4 className="footer-top-text">Follow us</h4>
              <div className="footer-sns">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  インスタグラム
                </Link>
              </div>
              <div className="footer-sns">
                <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
                  ツイッター
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-left-wrapper">
            <div className="footer-left-sitemap">
              <ul className="footer-sitemap-list">
                {linkData.map((link) => (
                  <li className="footer-sitemap-item">
                    <Link
                      to={link}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      {link[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="footer-right-wrapper">
            <div className="footer-right-sitemap">
              <ul className="footer-sitemap-list">
                {linkData.map((link) => (
                  <li className="footer-sitemap-item">
                    <Link
                      to={link}
                      style={{ textDecoration: 'none', color: 'white' }}
                    >
                      {link[0]}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
