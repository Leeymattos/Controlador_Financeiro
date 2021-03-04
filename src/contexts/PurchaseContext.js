import {createContext, useState} from 'react'

export const PurchaseContext = createContext()

export function PurchaseProvider({children}){
  const [userIdSelected, setUserIdSelected] = useState('')

  return(
    <PurchaseContext.Provider
    value={{
      setUserIdSelected,
      userIdSelected
    }}
    >
      {children}
    </PurchaseContext.Provider>
  )

}