import React from 'react'
import styles from './keysystem.module.css'

export default function KeySystemPage(): React.JSX.Element {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>exploitingis.FUN</div>
          <div className={styles.navLinks}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/resellers" className={styles.navLink}>Resellers</a>
            <a href="https://discord.gg/ARzg6Mqcxa" target="_blank" rel="noopener noreferrer" className={styles.discordIcon} aria-label="Join our Discord server">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
            </a>
          </div>
        </div>
      </nav>
    
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Get Your <span className={styles.funText}>Exploitingis.FUN</span> Key
            </h1>
            <p className={styles.subtitle}>
              Choose your preferred method to get your Exploitingis.FUN script key.
            </p>
            <p className={styles.description}>
              Exploitingis.FUN is available for lifetime access!
            </p>
          </div>
        </section>

        <section className={styles.cardsSection} aria-labelledby="key-methods-title">
          <div className={styles.container}>
            <h2 className={styles.cardsSectionTitle} id="key-methods-title">
              Available Key Methods
            </h2>
            <p className={styles.cardsSectionSubtitle}>
              Each method is carefully designed to provide you with the best experience possible.
            </p>
            
            <div className={styles.cardsGrid} role="grid" aria-label="Key acquisition methods">
              <article className={`${styles.card} ${styles.recommended}`} role="gridcell" aria-labelledby="premium-title">
                <div className={styles.cardBadge} aria-label="Recommended option">RECOMMENDED</div>
                <div className={styles.cardIcon} aria-hidden="true">★</div>
                <div className={styles.cardContent}>
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
                    className={styles.primaryButton}
                    aria-label="Get Premium access via Discord"
                  >
                    Get Exploitingis.FUN | Premium
                  </a>
                  <p className={styles.helperText} aria-label="Additional premium information">Best value • No waiting time</p>
                </div>
              </article>

              <article className={styles.card} role="gridcell" aria-labelledby="workink-title">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="workink-title">Work.Ink</h3>
                  <ul className={styles.featuresList} aria-label="Work.Ink features">
                    <li>24 hour access</li>
                    <li>100% free method</li>
                    <li>3 Checkpoints</li>
                  </ul>
                  <a
                    href="https://ads.luarmor.net/get_key?for=WorkInk-IggXmdgSootD"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                    aria-label="Get free key via Work.Ink (external site)"
                  >
                    Get Free Key
                  </a>
                </div>
              </article>

              <article className={styles.card} role="gridcell" aria-labelledby="rinku-title">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="rinku-title">Rinku</h3>
                  <ul className={styles.featuresList} aria-label="Rinku features">
                    <li>24 hour access</li>
                    <li>100% free method</li>
                    <li>2 Checkpoints</li>
                  </ul>
                  <a
                    href="https://ads.luarmor.net/get_key?for=Rinku-ENEvgwqKmNcx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                    aria-label="Get free key via Rinku (external site)"
                  >
                    Get Free Key
                  </a>
                </div>
              </article>

              <article className={styles.card} role="gridcell" aria-labelledby="lootlabs-title">
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="lootlabs-title">LootLabs</h3>
                  <ul className={styles.featuresList} aria-label="LootLabs features">
                    <li>24 hour access</li>
                    <li>100% free method</li>
                    <li>1 Checkpoint</li>
                  </ul>
                  <a
                    href="https://ads.luarmor.net/get_key?for=LootLabs-EmtKVZjpYZUJ"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.secondaryButton}
                    aria-label="Get free key via LootLabs (external site)"
                  >
                    Get Free Key
                  </a>
                </div>
              </article>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className={styles.container}>
            <p>&copy; 2025 exploitingis.FUN - All rights reserved.</p>
            <p className={styles.disclaimer}>
              This project is independently developed and is not affiliated with, endorsed by, or in any way officially connected with Roblox Corporation or Microsoft Corporation. All trademarks and registered trademarks are the property of their respective owners.
            </p>
            <p className={styles.educationalNote}>For educational purposes only.</p>
          </div>
        </footer>
      </main>
    </>
  )
}