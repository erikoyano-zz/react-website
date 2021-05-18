import React from 'react'
import './Intro.css'
import profile from '../image-1.jpg'


function Intro() {
    return (
        <div className="intro">
            <div className="intro-container">
                <div className="intro-wrapper">
                <img className='profile' src="images/profile-pic.png" />
                <div className='text'>
                <h1 className='intro-title'>Minet (ミネ）</h1>
                <p>夫の転勤によりアメリカ、香港に在住。言葉と文化の壁の中、
                    ユーモアあふれる格闘？の中、３人娘をバイリンガルに。
                    帰国後８年間サラリーマンとして日本の文化に再び触れ、
                    バイリンガルの理想と現実の差を痛感。
                    自分の経験が役に立つと信じ、現在現在インターナショナルスクール幼稚部勤務。</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
