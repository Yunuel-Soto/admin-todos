import { Item } from '@/components'
import { getServerSession } from 'next-auth'
import { authOPtions } from '../api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation';

export default async function DashboardPage() {

    const session = await getServerSession(authOPtions);

    if(!session) {
        redirect('/api/auth/signin');
    }

    const userName = session?.user?.name;
    const userImage = session?.user?.image;
    const userEmail = session?.user?.name;

    return (
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
            <Item title={'Usuario conectado S-side'}>
                <div className='flex flex-col'>
                    <span>{userName}</span>
                    <span>{userImage}</span>
                    <span>{userEmail}</span>
                </div>
            </Item>
        </div>
    )
}

