import React from 'react'
import styles from './resellers.module.css'

export default function ResellersPage(): React.JSX.Element {
  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>exploitingis.FUN</div>
          <div className={styles.navLinks}>
            <a href="/" className={styles.navLink}>Home</a>
            <a href="/keysystem" className={styles.navLink}>Key System</a>
            <a href="https://discord.gg/ARzg6Mqcxa" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Discord</a>
          </div>
        </div>
      </nav>
    
      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <h1 className={styles.title}>
              Resellers
            </h1>
            <p className={styles.subtitle}>
              Trusted partners providing exploitingis.FUN keys through secure and convenient channels.
            </p>
            <p className={styles.description}>
              Our authorized resellers offer reliable access to exploitingis.FUN with dedicated support and multiple payment options.
            </p>
          </div>
        </section>

        <section className={styles.cardsSection} aria-labelledby="resellers-title">
          <div className={styles.container}>
            <h2 className={styles.cardsSectionTitle} id="resellers-title">
              Authorized Resellers
            </h2>
            <p className={styles.cardsSectionSubtitle}>
              Choose from our verified partners for a seamless purchasing experience.
            </p>
            
            <div className={styles.cardsGrid} role="grid" aria-label="Authorized resellers">
              <article className={`${styles.card} ${styles.featured}`} role="gridcell" aria-labelledby="gckeys-title">
                <div className={styles.cardBadge} aria-label="Featured reseller">FEATURED</div>
                <div className={styles.cardIcon} aria-hidden="true">🔑</div>
                <div className={styles.cardContent}>
                  <h3 className={styles.cardTitle} id="gckeys-title">GCKeys</h3>
                  <ul className={styles.featuresList} aria-label="GCKeys features">
                    <li>24/7 support</li>
                    <li>Wide support of payment methods</li>
                    <li>Instant key delivery</li>
                    <li>Secure transactions</li>
                  </ul>
                  <a
                    href="https://gckeys.cc/products/exploiting-is-fun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.primaryButton}
                    aria-label="Visit GCKeys store"
                  >
                    Visit GCKeys
                  </a>
                  <p className={styles.helperText} aria-label="Additional GCKeys information">Trusted partner • Verified seller</p>
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
