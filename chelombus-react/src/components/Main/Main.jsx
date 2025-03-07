import './Main.css';
import * as Icons from '../../assets/Icons';
import zincLogo from '../../assets/zinc-logo.png';
import enamineLogo from '../../assets/enamine-logo.png';
import otherLogo from '../../assets/chelombus-logo.png';
import tmap from '../../assets/tmap.png';

const options = [
    {
        title: zincLogo,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'blue'
    },
    {
        title:  enamineLogo,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'orange'
    },
    {
        title: otherLogo,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'blue'
    }
];

function Option({ title, text, color }) {
    return (
        <div className="option">
            <div className="face face1"> 
                <div className="option-btn">
                        <div className="btn-text">
                            VIEW
                            <Icons.MdOutlineKeyboardDoubleArrowRight className='icon' />
                        </div>
                    </div>  
                <div className="option-text">{text}</div>
                <div className='button-container'>
                    
                </div>
            </div>
            <div className={`face face2 ${color || ''}`}>
                    <img src={title} alt="" />
            </div>
        </div>
    );
}

function Main() {
    return (
        <div className='main'>
            <div className="cards">
              <div className="choose-title">
                <h4>CHOOSE A DATABASE TO START</h4>
                <p>ldkf slkdfj sdflkjsdlfk sdlskdfsdklaskldfjaslkd ksldflskfj sdfj
                    aksdlfjlskdflksdf ñsdlfkj
                </p>
            </div>
            <div className="databases">
                {options.map((option, index) => (
                    <Option key={index} {...option} />
                ))}
            </div>  
            </div>
            <div className="map">
                <div className="mapBox">
                    <div className="map-text-container">
                        <h4>MAKING OF THE TMAP</h4>
                        <div className="map-text">
                            lsdkfjlsdkfjaldksjfña flksdjfñalskfj dslfkjñlfkj 
                            sdfkjfdldk dijflsdkfjldkfjgldkfjg lkdfjgldkfgj dfg lkfjg 
                             dldfksldfkjlsdfkjlkdfj dkfjlkjf
                             lsdkfjlsdkfjaldksjfña flksdjfñalskfj dslfkjñlfkj 
                            sdfkjfdldk dijflsdkfjldkfjgldkfjg lkdfjgldkfgj dfg lkfjg 
                             dldfksldfkjlsdfkjlkdfj dkfjlkjf
                        </div>
                        <div className="map-btn">
                            HOW TO USE
                        </div>
                    </div>
                    <img src={tmap} alt=""/>
                </div>
            </div>
        </div>
    );
}

export default Main;
