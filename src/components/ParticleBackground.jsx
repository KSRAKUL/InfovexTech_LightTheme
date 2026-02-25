"use client"
import React, { useEffect, useRef } from 'react'
import styles from './ParticleBackground.module.css'

const ParticleBackground = () => {
    const canvasRef = useRef(null)

    useEffect(() => {
        const canvas = canvasRef.current
        const ctx = canvas.getContext('2d')
        let animationFrameId
        let particles = []
        let mouse = { x: null, y: null }

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
            initParticles()
        }

        class Particle {
            constructor() {
                this.reset()
            }

            reset() {
                this.x = Math.random() * canvas.width
                this.y = Math.random() * canvas.height
                this.size = Math.random() * 2 + 1
                this.baseX = this.x
                this.baseY = this.y
                this.density = Math.random() * 30 + 1
                this.angle = Math.random() * Math.PI * 2
                this.velocity = Math.random() * 0.02 + 0.01
                this.distance = Math.random() * 100 + 50

                // Brand colors: Teal to Purple
                const colors = ['#6C63FF', '#00C9A7', '#B19EEF', '#295eff']
                this.color = colors[Math.floor(Math.random() * colors.length)]
            }

            update() {
                // Vortex movement
                this.angle += this.velocity
                const targetX = canvas.width / 2 + Math.cos(this.angle) * (this.distance + (mouse.x ? (mouse.x - canvas.width / 2) * 0.1 : 0))
                const targetY = canvas.height / 2 + Math.sin(this.angle) * (this.distance + (mouse.y ? (mouse.y - canvas.height / 2) * 0.1 : 0))

                const dx = targetX - this.x
                const dy = targetY - this.y
                this.x += dx * 0.05
                this.y += dy * 0.05

                // Mouse interaction (push)
                if (mouse.x != null && mouse.y != null) {
                    let mdx = mouse.x - this.x
                    let mdy = mouse.y - this.y
                    let mDistance = Math.sqrt(mdx * mdx + mdy * mdy)
                    let forceDirectionX = mdx / mDistance
                    let forceDirectionY = mdy / mDistance
                    let maxDistance = 150
                    let force = (maxDistance - mDistance) / maxDistance
                    if (force < 0) force = 0

                    if (mDistance < maxDistance) {
                        this.x -= forceDirectionX * force * 5
                        this.y -= forceDirectionY * force * 5
                    }
                }
            }

            draw() {
                ctx.fillStyle = this.color
                ctx.beginPath()
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
                ctx.closePath()
                ctx.fill()
            }
        }

        const initParticles = () => {
            particles = []
            const particleCount = Math.floor((canvas.width * canvas.height) / 8000)
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle())
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            particles.forEach(p => {
                p.update()
                p.draw()
            })
            animationFrameId = requestAnimationFrame(animate)
        }

        const handleMouseMove = (e) => {
            mouse.x = e.x
            mouse.y = e.y
        }

        const handleMouseLeave = () => {
            mouse.x = null
            mouse.y = null
        }

        window.addEventListener('resize', resize)
        window.addEventListener('mousemove', handleMouseMove)
        canvas.addEventListener('mouseleave', handleMouseLeave)

        resize()
        animate()

        return () => {
            window.removeEventListener('resize', resize)
            window.removeEventListener('mousemove', handleMouseMove)
            canvas.removeEventListener('mouseleave', handleMouseLeave)
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className={styles.canvas}
        />
    )
}

export default ParticleBackground
