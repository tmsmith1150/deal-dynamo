import Link from 'next/link';
import Hero from '@/components/UserHero';
import InfoBoxes from '@/components/UserInfoBoxes';


const HomePage = () => {
  return (  <div><h1 className='text-2xl'>Welcome</h1>
    <Link href='/products'>See all floor sample products</Link>
    <Hero />
    <InfoBoxes/>
    </div>
   );
}
 
export default HomePage;