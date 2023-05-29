import Header from '../components/Header';
import Services from '../components/Services';
import Contracts from '../components/Contracts';
import FAQ from '../components/FAQ';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
  <div>
    <Header />
    <Services />
    <Contracts />
    <FAQ />
  </div>
  )
}
