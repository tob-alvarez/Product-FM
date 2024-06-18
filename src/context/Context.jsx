import { createContext, useState } from "react";

export const EcommerceContext = createContext();

// eslint-disable-next-line react/prop-types
const ProviderEcommerce = ({children}) => {

    const [cantidad, setCantidad] = useState(0)

    const agregarAlCarro = (count) =>{
        setCantidad(count)
    }

  return (
    <EcommerceContext.Provider
        value={{
            cantidad,
            agregarAlCarro
        }}
    >
        {children}
    </EcommerceContext.Provider>
  )
}

export default ProviderEcommerce