'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'
import { EmblaCarousel } from './components/Carousel'

interface Game {
  id: string
  name: string
  image: string
  status: string
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [games, setGames] = useState<Game[]>([])

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    const fetchGames = async () => {
      try {
        const response = await fetch('/games.json')
        const gamesData = await response.json()
        setGames(gamesData)
      } catch (error) {
        console.error('Failed to fetch games:', error)
      }
    }
    
    checkMobile()
    fetchGames()
    window.addEventListener('resize', checkMobile)
    setIsLoaded(true)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const generateGameCard = (game: Game) => (
    <article className={styles.gameCard} key={game.id} role="article" aria-labelledby={`game-title-${game.id}`}>
      <div className={styles.gameIcon}>
        <img 
          src={game.image} 
          alt={`${game.name} game thumbnail`}
          loading="lazy"
          decoding="async"
        />
        <div className={styles.gameInfoOverlay}>
          <h3 className={styles.gameTitle} id={`game-title-${game.id}`}>{game.name}</h3>
          <span 
            className={styles.gameStatusOperational}
            role="status"
            aria-label={`Game status: ${game.status}`}
          >
            <span className={styles.statusDot} aria-hidden="true"></span>
            {game.status.charAt(0).toUpperCase() + game.status.slice(1)}
          </span>
        </div>
      </div>
    </article>
  )

  const gameCards = games.map(generateGameCard)

  return (
    <>
      <nav className={styles.nav}>
        <div className={styles.navContainer}>
          <div className={styles.logo}>exploitingis.FUN</div>
          <div className={styles.navLinks}>
            <a href="/keysystem" className={styles.navLink}>Key System</a>
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

      <section className={`${styles.hero} ${isLoaded ? styles.loaded : ''}`}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>
            exploitingis<span className={styles.funText}>.FUN</span>
          </h1>
          <p className={styles.subtitle}>
            The Ultimate Roblox Scripting Experience
          </p>
          <p className={styles.description}>
            Free Roblox scripts that are easy to use and understand.
          </p>
          
          <div className={styles.buttonGroup}>
            <a 
              href="https://discord.gg/ARzg6Mqcxa" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={styles.primaryButton}
              aria-label="Join the exploitingis.FUN Discord server"
            >
              Join the Discord
            </a>
            <button 
              className={styles.secondaryButton}
              aria-label="Learn more about exploitingis.FUN"
            >
              Learn More
            </button>
          </div>
        </div>

        <div className={styles.heroVisual} role="img" aria-label="Code example showcase">
          <div className={styles.glowOrb} aria-hidden="true"></div>
          <div className={styles.codeBlock} role="code" aria-label="Example Lua script code">
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <span className={styles.codeTitle}>exploitingis.FUN</span>
            </div>
            <div className={styles.codeContent}>
              <div className={styles.codeLine}>
                <span className={styles.codeKeyword}>loadstring</span>
                <span className={styles.codeOperator}>(</span>
                <span className={styles.codeString}>game:HttpGet</span>
                <span className={styles.codeOperator}>(</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.codeString}>"https://cdn.exploitingis.fun/loader"</span>
              </div>
              <div className={styles.codeLine}>
                <span className={styles.codeOperator}>))()</span>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className={styles.gamesSection} aria-labelledby="games-section-title">
        <div className={styles.container}>
          <h2 className={styles.gamesSectionTitle} id="games-section-title">
            Our Arsenal: Now Supporting {games.length} Games
          </h2>
          <p className={styles.gamesSectionSubtitle}>
            Each script is meticulously scripted and tested to ensure you have the best and safest experience.
          </p>
          
          {isMobile ? (
            <div className={styles.carouselWrapper} role="region" aria-label="Games carousel">
              <EmblaCarousel slides={gameCards} options={{ loop: true }} />
            </div>
          ) : (
            <div className={styles.gamesGrid} role="grid" aria-label="Supported games grid">
              {gameCards}
            </div>
          )}
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