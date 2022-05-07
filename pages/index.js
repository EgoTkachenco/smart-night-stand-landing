import Head from 'next/head'

import Features from '../components/Features'
import Navigation from '../components/navigation'
import HomeHeader from '../components/HomeHeader'
import HomeAdvantages from '../components/HomeAdvantages'
import HomeCarousel from '../components/HomeCarousel'
import HomeSpecification from '../components/HomeSpecification'
import HomeForm from '../components/HomeForm'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TOOBLE</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <picture>
        <source media="(max-width: 400px)" srcSet="/images/header-xs.png" />
        <source media="(max-width: 960px)" srcSet="/images/header-sm.png" />
        <source media="(max-width: 1280px)" srcSet="/images/header-md.png" />
        <source media="(min-width: 1280px)" srcSet="/images/header-lg.png" />
        <img
          className="header-back"
          src="/images/header-lg.png"
          alt="header-back"
        />
      </picture>

      <Navigation />

      <HomeHeader />

      <HomeAdvantages />

      <Features />

      <HomeCarousel />

      <HomeSpecification />

      <HomeForm />

      <Footer />
    </div>
  )
}