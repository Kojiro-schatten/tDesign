import React from 'react'
import './Hero.scss'

type Props = {
  className?: string
}

export const Hero: React.FC = () => {
  return (
    <div className="hero-container">
      <div className="hero-image">
        <a href="/">Tomari Co-Text</a>
        <div className="hero-wrapper">
          <div className="hero-main-text">
            <p className="">ここのメインテキストは</p>
          </div>
          <div className="hero-sub-text">
            <p>
              めーちゃめちゃ重要。
              <br />
              何を一番伝えたいでしょうか。
            </p>
            <p>
              ここのテキスト何を入れようか。
              <br />
              今日のご飯は何にしようか。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
