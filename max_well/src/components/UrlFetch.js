
import UrlHook from '../hooks/urlHook';

function UrlFetch (){

    const {updateUrl} = UrlHook();
   

        const handleClick=(e)=>{
            e.preventDefault();
            updateUrl(e.target.value);
        }
        
    return (
        <form >
            <div className="column">
               
                <button className="button is-info" 
                type="button" 
                onClick={handleClick}
                value="amazon-status">Amazon
                </button>
                <button className="button is-info" 
                type="button" 
                onClick={handleClick}
                value="google-status">Google
                </button>
               
            </div>
            <div className="column">
               
            </div>
</form>);
}

export default UrlFetch;