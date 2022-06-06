import { useLocation } from 'react-router-dom';
import Slider from "react-slick";
import Flickity from 'react-flickity-component'

const AllOver=() => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    function importAll(r) {
        let images = {};
        r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
        return images;
      }
      
    const images = importAll(require.context('./sliderimg', false, /\.(png|jpe?g|svg)$/));

    console.log(images);

    const flickityOptions = {
        pageDots: false,
        lazyLoad:3
    }

    return(
    <>
    <div style={{marginTop:'85px',marginLeft:'15px',marginRight:'15px'}}>
        <span style={{fontSize:'30px',lineHeight:'28px'}}>pizza effect, the</span><br/>
        
        <span style={{fontSize:'30px',fontFamily:'gt_sectra'}}>/ˈpiːtsə, ɪˈfɛkt/</span>

        <div style={{display:'flex',gap:'30px',marginTop:'20px'}}>
            <div style={{fontFamily:'gt_sectra',fontSize:'30px'}}>
                Def.
            </div>
            <div style={{fontSize:'30px'}}>
            In religious studies and sociology, the pizza effect is the phenomenon of elements of a nation's or people's culture being transformed or at least more fully embraced elsewhere, then re-imported to their culture of origin, or the way in which a community's self-understanding is influenced by (or imposed by, or imported from) foreign sources.
            </div>
        </div>
        <div style={{marginTop:'80px'}}>
        <Flickity
            options={flickityOptions}
        >
            {Object.keys(images).map((i,idx) => (
               <img src={images[i]} style={{height:'55vh',maxWidth:'800px'}}/>
            ))}
        
        </Flickity>
        </div>
    </div>

    </>
)}

export default AllOver;