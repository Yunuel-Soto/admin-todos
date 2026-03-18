// Admin Dashboard https://tailwindcomponents.com/component/dashboard-12
import { SideBar, TopMenu } from '@/components';
import { getServerSession } from 'next-auth';
import { authOPtions } from '../api/auth/[...nextauth]/route';

export default async function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  
  return (
    <>      
      <SideBar/>
      <div className="ml-auto mb-6 lg:w-[75%] 
        xl:w-[80%] 2xl:w-[85%] min-h-screen" 
        style={{ backgroundColor: '#DEDEDE' }}>
        <TopMenu/>
        <div className="px-6 pt-6 bg-white p-2 m-2 pb-5 rounded-2xl" 
          style={{ padding: '10px', margin: '10px', paddingBottom: '10px', borderRadius: '10px' }}>
          {children}
        </div>
      </div>
    </>
  );
}