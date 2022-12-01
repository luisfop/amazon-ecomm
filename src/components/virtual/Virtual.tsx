import React from 'react'
import css from './Virtual.module.css';
import Shade from '../../assets/shade.png'
import ReactCompareImage from 'react-compare-image';

import After from '../../assets/after.png'
import Before from '../../assets/before.png'

const Virtual = () => {
    return (
        <div className={css.Virtual}>
            <div className={css.left}>
                <span>Virtual try on</span>
                <span>Never Buy the wrong Shade again!</span>
                <span>Try now!</span>
                <img src={Shade} alt="" />
            </div>

            <div className={css.right}>
                <div className={css.wrapper}>

                    <ReactCompareImage leftImage={Before} rightImage={After} />
                </div>
            </div>

        </div>
    )
}

export default Virtual
