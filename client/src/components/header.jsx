import React, { useState } from 'react'
import logo from '../assets/images/HODLINFO.8f78fc06.png'
import telegramLogo from '../assets/images/telegram.png'

export default function Header(props) {

    const [count, setCount] = useState(true);

    return (
        <div style={{ padding: "20px 30px 0px" }}>
            <div className='align-items-center justify-content-sm-center row'>
                <div className='text-center-sm col-12 col-sm-7 col-md-5 col-lg-4'>
                    <a href="/">
                        <div className='padding-none text-center-xs col-12 col-sm-12 col-md-11 col-lg-11'>
                            <img src={logo} className='fiat-logo' style={{ padding: '10px' }} />
                        </div>
                    </a>
                    <p className="col-12 text-center-xs" style={{ fontFamily: "Oswald, sans-serif", marginTop: '-18px', opacity: ' 0.8', fontSize: '18px', color: 'gray' }}>
                        Powered By

                        <a className="footer-text-link" rel="nofollow" target="_blank" href="https://www.finstreet.in/" style={{ color: "rgb(61, 198, 193)" }}> Finstreet</a>
                    </p>
                </div>

                <div className="text-center padding-none col-12 col-sm-12 col-md-2 col-lg-4">
                    <div className="btn-group">
                        <button type="button" aria-haspopup="true" aria-expanded="false" className="header-button dropdown-toggle btn btn-secondary">INR</button>

                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu"><a value="INR" tabIndex="0" role="menuitem" className="dropdown-item" href="/BTC-INR">INR</a></div>
                    </div>

                    <div className="btn-group">
                        <button type="button" aria-haspopup="true" aria-expanded="false" className="header-button dropdown-toggle btn btn-secondary">BTC</button>

                        <div tabIndex="-1" role="menu" aria-hidden="true" className="dropdown-menu">
                            <a value="BTC" tabIndex="0" role="menuitem" className="dropdown-item" href="/BTC-INR">BTC</a>
                            <a value="ETH" tabIndex="0" role="menuitem" className="dropdown-item" href="/ETH-INR">ETH</a>
                            <a value="USDT" tabIndex="0" role="menuitem" className="dropdown-item" href="/USDT-INR">USDT</a>
                            <a value="XRP" tabIndex="0" role="menuitem" className="dropdown-item" href="/XRP-INR">XRP</a>
                            <a value="TRX" tabIndex="0" role="menuitem" className="dropdown-item" href="/TRX-INR">TRX</a>
                            <a value="DASH" tabIndex="0" role="menuitem" className="dropdown-item" href="/DASH-INR">DASH</a>
                            <a value="ZEC" tabIndex="0" role="menuitem" className="dropdown-item" href="/ZEC-INR">ZEC</a>
                            <a value="XEM" tabIndex="0" role="menuitem" className="dropdown-item" href="/XEM-INR">XEM</a>
                            <a value="IOST" tabIndex="0" role="menuitem" className="dropdown-item" href="/IOST-INR">IOST</a>
                            <a value="WIN" tabIndex="0" role="menuitem" className="dropdown-item" href="/WIN-INR">WIN</a>
                            <a value="BTT" tabIndex="0" role="menuitem" className="dropdown-item" href="/BTT-INR">BTT</a>
                            <a value="WRX" tabIndex="0" role="menuitem" className="dropdown-item" href="/WRX-INR">WRX</a>
                        </div>
                    </div>

                    <div className="btn-group"><a target="_blank" href="https://wazirx.com/invite/sp7pvbt6?utm_source=finstreet&amp;utm_medium=affiliate&amp;utm_campaign=regnow-btn" type="button" aria-haspopup="true" aria-expanded="false" className="header-button btn btn-secondary">BUY BTC</a></div>
                </div>

                <div className="right-header col-12 col-sm-12 col-md-5 col-lg-4">
                    <div className="d-inline-flex flex-wrap align-items-center justify-content-center">
                        <div className="progress-bar-wrapper">
                            <svg className="CircularProgressbar " viewBox="0 0 100 100" data-test-id="CircularProgressbar"><path className="CircularProgressbar-trail" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" strokeWidth="8" fillOpacity="0" style={{ strokeDasharray: " 289.027px, 289.027px", strokeDashoffset: "0px" }}></path><path className="CircularProgressbar-path" d="M 50,50 m 0,-46 a 46,46 0 1 1 0,92 a 46,46 0 1 1 0,-92" strokeWidth="8" fillOpacity="0" style={{ strokeDasharray: "289.027px, 289.027px", strokeDashoffset: "91.5251px" }}></path><text className="CircularProgressbar-text" x="50" y="50">41</text></svg>
                        </div>

                        <a href="/connect/telegram" className='color-white'>
                            <div className='d-flex telegram-logo-text header-telegram-button btn align-items-center pointer color-white'>
                                <div className="d-inline-block">
                                    <img src={telegramLogo} className='telegram-logo' />
                                </div>
                                <div className="text-nowrap d-inline-block color-white">Connect Telegram</div>
                            </div>
                        </a>

                        <div className="margin-10 d-inline-block">
                            <label className="switch">
                                <input type="checkbox" checked={count} onChange={()=> undefined} onClick={(e) => {
                                    setCount(e.target.checked)
                                    props.toggleTheme(e.target.checked);
                                }} /><span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
