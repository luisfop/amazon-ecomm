import React from 'react'
import css from './Footer.module.css'
import Logo from '../../assets/logo.png'
import { InboxIcon, PhoneIcon, LocationMarkerIcon, LoginIcon, UsersIcon, LinkIcon } from '@heroicons/react/outline'

const Footer = () => {
    return (
        <div className={css.cFooterWrapper}>
            <hr />
            <div className={css.cFooter}>
                <div className={css.logo}>
                    <img src={Logo} alt="" />
                    <span>Amazon</span>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Contact Us</span>
                        <span className={css.pngLine}>
                            <LocationMarkerIcon className={css.icon} />
                            <span>St Coronel Osorio, 111, SP 12900-150</span>
                        </span>
                    </div>

                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                        <span>+55 11 4033-4728</span>
                    </span>

                    <span className={css.pngLine}>
                        <PhoneIcon className={css.icon} />
                        <a href="mailto:support@amazon.com">support@amazon.com</a>
                    </span>

                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LoginIcon className={css.icon} />
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>


                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Company</span>
                        <span className={css.pngLine}>
                            <UsersIcon className={css.icon} />
                            <span>About us</span>
                        </span>
                    </div>
                </div>

                <div className={css.block}>
                    <div className={css.detail}>
                        <span>Account</span>
                        <span className={css.pngLine}>
                            <LinkIcon className={css.icon} />
                            <span>Safety Privacy & terms</span>
                        </span>
                    </div>
                </div>
            </div>


            <div className={css.copyRight}>
                <span>CpoyRight 2022 by Amazzon</span>
                <span>All rights reserved</span>
            </div>
        </div>
    )
}

export default Footer
