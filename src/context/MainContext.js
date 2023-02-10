import { createContext } from "react";
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export const MainContext = createContext()






export function MainContextProvider({children}){



  function refreshEQData(){
    setLoading(true);
    const getData = async () => {
        const data = await axios.get(API_URL);
        setEQList(data.data.result)
        setLoading(false);
        toast.success("Sayfa Yenilendi")
      };
      getData()
  }



    const API_URL = "https://api.orhanaydogdu.com.tr/deprem/live.php?limit=15";
    const [loading,setLoading] = useState(true);
    const [eqList,setEQList] = useState([]);
  
    useEffect(() => {
      const getData = async () => {
        const data = await axios.get(API_URL);
        setEQList(data.data.result)
        setLoading(false);

      };
      getData()
    },[])




    const data = {
        loading,
        setLoading,
        eqList,
        setEQList,
        refreshEQData
    }








    return(
        <MainContext.Provider value={data}>
            {children}
        </MainContext.Provider>
    )

}


