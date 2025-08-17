import React from 'react'
import styles from './keysystem.module.css'

export default function KeySystemPage(): React.JSX.Element {
  return (
    <main className={styles.main}>
      <nav className={styles.headerBar} role="navigation" aria-label="Breadcrumb">
        <a 
          href="/" 
          className={styles.backLink}
          aria-label="Go back to homepage"
        >
          ← Back to Home
        </a>
      </nav>

      <header className={styles.hero}>
        <h1 className={styles.title}>
          Get Your <span className={styles.accent}>Exploitingis.FUN</span> Key
        </h1>
        <p className={styles.subtitle}>
          Choose your preferred method to get your Exploitingis.FUN script key. Exploitingis.FUN NOW available for lifetime access!
        </p>
      </header>

      <section className={styles.cardsSection} aria-labelledby="key-methods-title">
        <h2 className="sr-only" id="key-methods-title">Available Key Methods</h2>
        <div className={styles.cardsGrid} role="grid" aria-label="Key acquisition methods">
          <article className={`${styles.card} ${styles.recommended}`} role="gridcell" aria-labelledby="premium-title">
            <div className={styles.cardBadge} aria-label="Recommended option">RECOMMENDED</div>
            <div className={styles.cardIcon} aria-hidden="true">★</div>
            <h3 className={styles.cardTitle} id="premium-title">Exploitingis.FUN | Premium</h3>
            <ul className={styles.featuresList} aria-label="Premium features">
              <li>Instant key delivery</li>
              <li>Premium support</li>
              <li>No Ads</li>
            </ul>
            <a
              href="https://discord.gg/exploitingisfun"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accentButton}
              aria-label="Get Premium access via Discord"
            >
              Get Exploitingis.FUN | Premium
            </a>
            <p className={styles.helperText} aria-label="Additional premium information">Best value • No waiting time</p>
          </article>

          <article className={styles.card} role="gridcell" aria-labelledby="workink-title">
            <div className={styles.cardIcon} aria-hidden="true">⏻</div>
            <h3 className={styles.cardTitle} id="workink-title">Work.Ink</h3>
            <ul className={styles.featuresList} aria-label="Work.Ink features">
              <li>24 hour access</li>
              <li>100% free method</li>
              <li>2 Checkpoints</li>
            </ul>
            <a
              href="https://ads.luarmor.net/get_key?for=WorkInk-IggXmdgSootD"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostButton}
              aria-label="Get free key via Work.Ink (external site)"
            >
              Get Free Key
            </a>
          </article>
        </div>
      </section>
    </main>
  )
}


