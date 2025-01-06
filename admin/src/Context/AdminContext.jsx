import { createContext, useState } from "react";

export const AdminContext = createContext();

const AdminContextProvider = props => {

    const [Admintoken , setAdminToken] = useState('');

    const value = {

        Admintoken,
        setAdminToken

    }

    return (

        <AdminContext.Provider value={value}>

            {props.children}

        </AdminContext.Provider>

    )

}

export default AdminContextProvider;