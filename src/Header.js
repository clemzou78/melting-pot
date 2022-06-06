import { Link, useLocation } from 'react-router-dom';
import useSound from 'use-sound';
import soundoff from './sound_off.svg'
const Header = () =>{
    
    const location=useLocation()

    console.log(location.pathname);
    return (
        <div className="Header" style={{overflow:'hidden',position:'fixed',top:'0px'}}>
              <div className="title" style={{width:'100%'}}>
                <p><Link to ="/" style={{textDecoration:'none'}}>MELTING POT </Link>
                <span className="subtitle">
                    {location.pathname ==="/all-over-the-world" && "all over the World"}
                    {location.pathname ==="/in-the-news" && "in the News"}
                    {location.pathname ==="/receipts" && "Receipts"}
                    {location.pathname ==="/myth" && "the Myth"}
                    {location.pathname ==="/the-set" && "the Set"}
                </span></p>
              </div>
              
              {location.pathname==='/' &&
              <div style={{textAlign:'right',width:'500px',display:'flex',alignItems:'center',justifyContent:'flex-end',marginRight:'20px'}}>
                <Link to="/the-set"><span style={{color:'#E0C47A',fontSize:'40px'}}>SET</span></Link>
               <img src={soundoff} style={{height:'35px',marginLeft:'30px'}}/>
              </div>}
            </div>
    )
}

const BoopButton = () => {
};


export default Header;