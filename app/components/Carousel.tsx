'use client'

import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import styles from './carousel.module.css'

interface CarouselProps {
    slides: React.ReactNode[]
    options?: EmblaOptionsType
}

export const EmblaCarousel: React.FC<CarouselProps> = ({ slides, options }) => {
    const [emblaRef, emblaApi] = useEmblaCarousel(options)
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    const onSelect = useCallback((emblaApi: any) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev())
        setNextBtnDisabled(!emblaApi.canScrollNext())
    }, [])

    useEffect(() => {
        if (!emblaApi) return
        onSelect(emblaApi)
        emblaApi.on('reInit', onSelect)
        emblaApi.on('select', onSelect)
    }, [emblaApi, onSelect])

    return (
        <div className={styles.embla}>
            <div className={styles.embla__viewport} ref={emblaRef}>
                <div className={styles.embla__container}>
                    {slides.map((slide, index) => (
                        <div className={styles.embla__slide} key={index}>
                            {slide}
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.embla__buttons}>
                <button
                    className={`${styles.embla__button} ${styles.embla__button__prev}`}
                    onClick={scrollPrev}
                    disabled={prevBtnDisabled}
                >
                    &lt;
                </button>
                <button
                    className={`${styles.embla__button} ${styles.embla__button__next}`}
                    onClick={scrollNext}
                    disabled={nextBtnDisabled}
                >
                    &gt;
                </button>
            </div>
        </div>
    )
}
