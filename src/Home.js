import { Link, useLocation } from 'react-router-dom';
import background from './chasstube.jpeg';
import gabelanimate from './gabel_animation.gif';
import caquelon from './caquelon_animation.gif';
import schale from './schale_animation.gif';
import schalelang from './schale_lang_animation.gif';
import teller from './teller_animation.gif';
import schaleklein from './schale_klein_animation.gif';
import { useCallback, useEffect, useLayoutEffect, useRef } from 'react';
import "./flickity.css";
const Home = () => {
    useEffect(()=>document.getElementById('home').scrollTo(600,0),[])
    const myRef=useRef(null);
    return (
        <div style={{top:'58px',bottom:'0px',overflow:'scroll',marginTop:'56px',left:'-50%'}} id="home">
            <div style={{position:'relative'}}>
            <img src={background} style={{height:'calc(100vh - 60px)',minWidth:'100%',objectFit:'cover',position:'relative'}}/>
            <div style={{overflow:'hidden'}}>
            <Link to="/in-use" style={{position:'absolute',top:'30%',left:'10%',overflow:'hidden'}}>
                <img src={gabelanimate} className="img"/>
            </Link>
            <Link to="/all-over-the-world" style={{position:'absolute',top:'15%',left:'45%',overflow:'hidden'}}>
                <img src={schale} className="img"/>
            </Link>
            <Link to="/myth" style={{position:'absolute',top:'40%',left:'80%'}}>
                <img src={caquelon}className="img"/>
            </Link>
            <Link to="/echo" style={{position:'absolute',top:'60%',left:'145%'}}>
                <img src={schalelang}  className="img"/>
            </Link>            
            <Link to="/receipts" style={{position:'absolute',top:'30%',left:'175%'}}>
                <img src={teller} className="img"/>
            </Link>
            
            <Link to="/in-the-news" style={{position:'absolute',top:'60%',left:'210%'}} id="in_the_news">
                <img src={schaleklein} className="img"/>
            </Link>
            </div>
            </div>
        </div>
    );

}

export default Home;