import { TabBar } from "@/components"
import { cookies } from "next/headers"

export const metadata = {
  title: 'Coockies page',
  description: 'Coockies count'
}

export default async function CoockiesPage() {

  const cookieStorage = await cookies();
  const cookieTab = Number(cookieStorage.get('selectedTab')?.value ?? '1');

  return (
    <div className="gird grid-cols-1 sm:grid-cols-2 gap-3 rounded">
      <div className="flex flex-col">
        <span className="text-3xl">Tabs</span>
        <TabBar currentTab={cookieTab}/>
      </div>
    </div>
  )
}
