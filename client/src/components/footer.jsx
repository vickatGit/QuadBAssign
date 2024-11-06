import React from 'react'

export default function Footer() {
    return (
        <div className="footer">
            <div className="d-flex align-items-center text-center">
                <div className="footer-text">Copyright © 2019</div>
                <div className="footer-text">HodlInfo.com</div>
                <div className="footer-text">Developed By <a rel="nofollow" href="https://www.quadbtech.com" target="_blank" style={{ color: 'rgb(61, 198, 193)' }}> QuadBTech</a></div>
                <div className="footer-text pointer" style={{ marginLeft: 'auto' }}><a href="mailto:support@hodlinfo.com" className="footer-text-link">Support</a></div>
            </div>
        </div >
    )
}
