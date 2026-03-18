'use client'

import { setCookie } from "cookies-next";
import { useState } from "react"

interface Props { 
  currentTab?: number,
  tabOptions?: number[]
}

export const TabBar = ({currentTab = 1, tabOptions = [1,2,3,4]} : Props) => {
  const [selected, setSelected] = useState(currentTab > 6 || currentTab < 1 ? 1 : currentTab);

  const onTabSelected = (tab: number) => {
    setSelected(tab);
    setCookie('selectedTab', tab.toString());
  }

  return (
    <div className={`grid w-full ${'grid-cols-' + tabOptions.length} space-x-2 rounded-xl bg-gray-200 p-2`}>
      {
        tabOptions.map((item, index) => (
          <div key={index}>
            <input checked={selected === item} onChange={() => {}} type="radio" id={`${item}`} className="peer hidden" />
            <label onClick={() => onTabSelected(item)} className="transition-all duration-200 block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                {item}
            </label>
          </div>
        ))
      }
    </div>
  )
}