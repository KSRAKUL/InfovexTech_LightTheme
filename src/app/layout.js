import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import SplashScreen from '@/components/SplashScreen'
import NeuralBackground from '@/components/NeuralBackground'

export const metadata = {
    title: 'Infovex Technologies | Next-Level Digital Solutions',
    description: 'Building digital excellence with precision. Custom web development, software solutions, and automation services.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <NeuralBackground />
                <SplashScreen />
                <Navbar />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    )
}
