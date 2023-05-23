import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from "../components/Button";

function ButtonPage() {
    const handleClick = () => {
        
    };

    return (
    <div>
        <div>
            <Button primary className='mb-5' onClick={handleClick}><GoBell />click me!</Button>
        </div>
        <div>
            <Button secondary onMouseEnter={handleClick}><GoCloudDownload />hi</Button>
        </div>
        <div>
            <Button success><GoDatabase />I am pretty</Button>
        </div>
        <div>
            <Button warning outline rounded>You</Button>
        </div>
        <div>
            <Button danger rounded>Love</Button>
        </div>
        <div>
            <Button outline></Button>
        </div>
    </div>
    );
}

export default ButtonPage;