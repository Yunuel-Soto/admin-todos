'use client';

import { useSession } from "next-auth/react";
import { useEffect } from "react";

export default function ProfilePage() {

    useEffect(() => {
      console.log('Cliente side');
    }, [])

    const { data:session } = useSession();
    
  return (
    <div>
        <h1>Cliente side</h1>
        <hr />
        <div className="flex flex-col">
            <span>{session?.user?.name ?? 'No name'}</span>
            <span>{session?.user?.email ?? 'No email'}</span>
            <span>{session?.user?.image ?? 'No image'}</span>
        </div>
    </div>
  )
}
