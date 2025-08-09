import React from 'react'
import styles from './keysystem.module.css'

export default function KeySystemPage(): React.JSX.Element {
  return (
    <main className={styles.main}>
      <div className={styles.headerBar}>
        <a href="/" className={styles.backLink}>← Back to Home</a>
      </div>

      <section className={styles.hero}>
        <h1 className={styles.title}>
          Get Your <span className={styles.accent}>Rift</span> Key
        </h1>
        <p className={styles.subtitle}>
          Choose your preferred method to get your Rift script key. Rift NOW available for lifetime access!
        </p>
      </section>

      <section className={styles.cardsSection}>
        <div className={styles.cardsGrid}>
          <div className={`${styles.card} ${styles.recommended}`}>
            <div className={styles.cardBadge}>RECOMMENDED</div>
            <div className={styles.cardIcon}>★</div>
            <h3 className={styles.cardTitle}>Exploitingis.FUN | Premium</h3>
            <ul className={styles.featuresList}>
              <li>Instant key delivery</li>
              <li>Premium support</li>
              <li>No Ads</li>
            </ul>
            <a
              href="https://discord.gg/exploitingisfun"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.accentButton}
            >
              Get Exploitingis.FUN | Premium
            </a>
            <p className={styles.helperText}>Best value • No waiting time</p>
          </div>

          <div className={styles.card}>
            <div className={styles.cardIcon}>⏻</div>
            <h3 className={styles.cardTitle}>Work.Ink</h3>
            <ul className={styles.featuresList}>
              <li>24 hour access</li>
              <li>100% free method</li>
              <li>2 Checkpoints</li>
            </ul>
            <a
              href="https://ads.luarmor.net/get_key?for=WorkInk-IggXmdgSootD"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.ghostButton}
            >
              Get Free Key
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}


