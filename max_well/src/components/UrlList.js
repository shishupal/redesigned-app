
import {useContext} from "react";
import UrlContext from '../context/UrlContext';

function UrlList ()  {
  const {url} = useContext(UrlContext);
 
return ( <div>{JSON.stringify(url)}</div> );
}

export default UrlList;