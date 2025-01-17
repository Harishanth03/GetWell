import { createContext, useEffect, useState } from "react";
import axios from "axios";


export const AppContext = createContext();

const AppContextProvider = props => 
{

    const currencySymbol = 'LKR ';

    const backendURL = import.meta.env.VITE_BACKEND_URL;

    const [doctors , setDoctor] = useState([]);

    const value = {

        doctors,
        currencySymbol

    }

    const getDoctorsData = async() => {

        try
        {

            const {data} = await axios.get(backendURL + `/api/doctor/list`);

            if(data.success)
            {

                setDoctor(data.doctors)

            }

        }
        catch(error)
        {

            console.log(error)

        }
    }

    useEffect(() => {

        getDoctorsData()

    },[])
    return (
        
        <AppContext.Provider value={ value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider;
