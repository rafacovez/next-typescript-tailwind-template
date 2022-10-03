import React from 'react'
import Image from 'next/image'
import bottleImg from '../images/product-1942.png'
import styles from '../styles/Landing.module.css'

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.LandingText}>
        <h3 className={styles.LandingSubheading}>Don Julio</h3>
        <h1 className={styles.LandingHeading}>
          1942
          <sup className={styles.LandingHeadingSup}>®</sup>
          Tequila
        </h1>
        <p className={styles.LandingPara}>
          Celebrated in exclusive cocktail bars, restaurants and nightclubs, the
          iconic Don Julio 1942® Tequila is the choice of connoisseurs around
          the globe. Produced in small batches and aged for a minimum of two and
          a half years, Don Julio 1942® Tequila is handcrafted in tribute to the
          year that Don Julio González began his tequila-making journey.
        </p>
        <button className={styles.LandingButton}>Buy now</button>
        <h5 className={styles.LandingMadeInText}>Made in Mexico</h5>
      </div>
      <div className={styles.LandingImage}>
        <Image src={bottleImg} alt="1942 tequila bottle" />
      </div>
    </div>
  )
}
