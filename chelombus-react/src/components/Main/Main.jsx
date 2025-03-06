import './Main.css';
import * as Icons from '../../assets/Icons';

const options = [
    {
        title: 'ZINC',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'blue'
    },
    {
        title: 'Enamine',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'orange'
    },
    {
        title: 'OTHER',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac purus nec diam laoreet sollicitudin.',
        color: 'blue'
    }
];

function Option({ title, text, color }) {
    return (
        <div className={`option ${color || ''}`}>
            <div className="option-title face face1">{title}</div>
            <div className="face face2">
                <div className="option-text">{text}</div>
                <div className='button-container'>
                    <div className="option-btn">
                        <div className="btn-text">
                            VIEW
                            <Icons.MdOutlineKeyboardDoubleArrowRight className='icon' />
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
}

function Main() {
    return (
        <div className='main'>
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
    );
}

export default Main;
