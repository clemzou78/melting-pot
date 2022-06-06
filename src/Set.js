import gabel from "./gabel.jpg";
import schale from "./schale_klein.jpg";
import schalelang from "./schale_lang.jpg";
import schalegross from "./schale_gross.jpg";
import teller from "./teller.jpg";
import caquelon from "./caquelon.jpg";

const Set = () => {
    return (
        <>
        <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:'10px',margin:'10px',marginTop:'70px'}}>        
            <img src={gabel} style={{width:'98%'}}/>
            <img src={schale}  style={{width:'98%'}}/>
            <img src={schalelang}  style={{width:'98%'}}/>
            <img src={schalegross} style={{width:'98%'}}/>
            <img src={teller} style={{width:'98%'}}/>
            <img src={caquelon}  style={{width:'98%'}}/>
        </div>
        <div>
            <p style={{fontSize:'30px',margin:'20px'}}>
            Melting Pot ist ein Projekt, das im Jahre 2022 entstand. Es ist ein Fondue Set, das als Anstoss dient, das als selbstverständlich geltende Konstrukt nationaler Identität kritisch zu hinterfragen. Durch die schonungslose Neugestaltung vertrauter Formen und Ästhetiken des Fondues ermuntert es zu einer realitätsnäheren, inklusiveren Interpretation von Schweizer Identität.
<br/><br/><br/>
Produktdetails<br/><br/>
Produkttyp: Fondue-Set<br/>
Umfang: Caquelon, Fondue Gabeln, Teller, Schalen<br/>
Herkunft: Zürich, Schweiz<br/>
Material: Aufgebauter Caquelon-Ton<br/>
Farbe: Weiss<br/>
Beschichtung: Innen- und Aussenseite glasiert, Unterseite matt<br/>
Fassungsvermögen: 3 Liter
            </p>
            <p style={{textAlign:'right',fontFamily:'gt_sectra',fontSize:'30px',marginRight:'20px',marginTop:'130px',fontStyle:'italic'}}>Preis auf Anfrage</p>
        </div>
        </>
    )
}
export default Set;