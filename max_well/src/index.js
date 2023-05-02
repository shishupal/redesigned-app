
import {createRoot} from 'react-dom/client';
import './index.css';
import App from './App';
import  {Provider} from './context/UrlContext';


const  root = createRoot(document.getElementById('root'));
root.render(
    <Provider>
        <App />
    </Provider>
    
);
