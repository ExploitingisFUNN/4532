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
            <a href="https://discord.gg/ARzg6Mqcxa" target="_blank" rel="noopener noreferrer" className={styles.navLink}>Discord</a>
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