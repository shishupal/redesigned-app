import {useEffect} from "react";


import UrlHook from "./hooks/urlHook";
import UrlList from "./components/UrlList";
import UrlFetch from "./components/UrlFetch";




function App(){
    
    const {fetchUrlList,updateUrl} = UrlHook();
    const MINUTE_MS = 60*1000;
    useEffect(()=>{    
        fetchUrlList();
        const interval = setInterval(() => {
           
            updateUrl('google-status');
            updateUrl('amazon-status');
            fetchUrlList();
          }, MINUTE_MS);
        
         
         

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[fetchUrlList]);

    return (<div className="book-container">
        <UrlList/>
        <UrlFetch />
    </div>)
}

export default App;