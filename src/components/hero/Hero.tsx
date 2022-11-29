import React from 'react'
import css from './Hero.module.css';
import HeroImage from '../../assets/hero.png';
import {RiShoppingBagFill} from 'react-icons/ri'
import {BsArrowRight} from 'react-icons/bs'

const Hero = () => {
    return (
        <div className={css.container}>



            {/* left side */}
            <div className={css.hero__sides}>
                <span className={css.text1}>skin protection cream</span>

                <div className={css.text2}>
                    <span>Trendy Collection</span>
                    <span>Seedily say has suitable disposal and boy. Exercise joy man children and rejoiced.</span>
                </div>
            </div>


            {/* middle side hero image */}
            <div className={css.wrapper}>
                <div className={css.blueCircle}></div>
                    <img src={HeroImage} alt="" width={600} />
                    <div className={css.cart2}>
                        <RiShoppingBagFill />

                        <div className={css.signup}>
                            <span>Best Signup offers</span>

                            <div>
                                <BsArrowRight />
                            </div>

                        </div>
                    </div>
                
            </div>


            {/* right side */}
            <div className={css.hero__sides}>
                <div className={css.traffic}>
                    <span>1.5m</span>
                    <span>Monty Traffic</span>
                </div>

                <div className={css.customers}>
                    <span>100k</span>
                    <span>Happy Costumer</span>
                </div>
            </div>
        </div>
    )
}

export default Hero
