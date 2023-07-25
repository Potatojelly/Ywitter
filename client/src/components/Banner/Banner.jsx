import React, { memo } from 'react';
import styles from './Banner.module.css'

const Banner = memo(({text,isAlert}) => {

    return (
        <>
            {text && (
                <p className={`${styles.banner} ${isAlert ? styles.bannerRed : styles.bannerGreen}`}>
                    {text}
                </p>
            )

            }
        </>
    )
}) 
export default Banner;

