"use client"
import React from 'react'
import GridScan from './GridScan'
import styles from './NeuralBackground.module.css'

const NeuralBackground = () => {
    return (
        <div className={styles.wrapper}>
            <GridScan
                lineThickness={1}
                linesColor="#1a1a3e"
                scanColor="#6366F1"
                scanOpacity={0.35}
                gridScale={0.1}
                lineStyle="solid"
                lineJitter={0.05}
                scanDirection="pingpong"
                scanDuration={3.0}
                scanDelay={2.5}
                scanGlow={0.4}
                scanSoftness={2}
                scanPhaseTaper={0.9}
                noiseIntensity={0.008}
                sensitivity={0.55}
                enablePost={true}
                bloomIntensity={0}
                chromaticAberration={0.001}
            />
        </div>
    )
}

export default NeuralBackground
