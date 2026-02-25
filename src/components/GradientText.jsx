"use client"
import styles from './GradientText.module.css'

export default function GradientText({
    children,
    colors = ["#7C3AED", "#A78BFA", "#C084FC"],
    animationSpeed = 8,
    showBorder = false,
    className = ""
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
        backgroundSize: '300% 100%',
        animationDuration: `${animationSpeed}s`,
    }

    return (
        <span
            className={`${styles.gradientText} ${className} ${showBorder ? styles.border : ''}`}
            style={gradientStyle}
        >
            {children}
        </span>
    )
}
