import Link from 'next/link';
import UserHero from '@/components/UserHero';
import UserInfoBoxes from '@/components/UserInfoBoxes';

const UserHomePage = () => {
    return ( 
        <div>
            <Link href='/products'>See all floor sample products</Link>
            <UserHero />
            <UserInfoBoxes/>
        </div>
     );
}
 
export default UserHomePage;