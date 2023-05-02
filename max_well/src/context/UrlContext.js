import { createContext , useState, useCallback } from "react";
import { fetchURLList,updateURL} from '../apiCall/api';

 const  UrlContext = createContext();
 
 export function Provider({children}) {
   
    const [url, setUrl] = useState([])

    const fetchUrlList =useCallback( async ()=> {
        const response =await fetchURLList();
        const urlsInfo = [...url,...response];
            setUrl(urlsInfo);
    },[]);
  


    const updateUrl  = async (id) =>{ 
  
        const response = await updateURL(id);
       
        const updated= url.map((info)=>{
                if(info.id === response['id']){
                   console.log (Object.assign(info, {date:response['date']}))
                 
                    return  Object.assign(info, {date:response['date']});
                   
                }
                else{
                    return info;
            }
            });
      
      
    setUrl(updated);
    fetchUrlList();
    }

const valueToShare = {
    url,
    fetchUrlList,
    updateUrl
    
}

return (<UrlContext.Provider value={valueToShare}>
    {children}
</UrlContext.Provider>
)
 }

 export default UrlContext;