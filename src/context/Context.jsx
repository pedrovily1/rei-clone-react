import { useState, createContext } from "react";


const Context = createContext()

export const Provider = ({children}) => {
    const [example, setExample] = useState(null)


    // functions can also go here

    return <Context.Provider value={{
        example,
        setExample,
    }}>
        {children}
    </Context.Provider>
}



export default Context

