import Link from 'next/link';
import Hero from '@/components/UserHero';
import connectDB from '@/config/database';


const HomePage = () => {
  return (  <div><h1 className='text-2xl'>Welcome</h1>
    <Hero />
    </div>
   );
}
 
export default HomePage;