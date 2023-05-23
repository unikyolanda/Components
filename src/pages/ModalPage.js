import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
    const [showModal, setShowModal] = useState(false);

    const handleClick = () => {
        setShowModal(true);
    };

    const handleClose = () => {
        setShowModal(false);
    };
    const actionBar = <div>
        <Button onClick={handleClose} primary>I Accept</Button>
    </div>
    const modal = <Modal onClose={handleClose} actionBar={actionBar}>
        <p>
            Here is an important agreement for you to accept
        </p>
    </Modal>

    return(
        <div className="relative">
            <Button onClick={handleClick} primary>
                Open Modal
            </Button>
            {showModal && modal }
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed molestie scelerisque cursus. Vivamus ex lorem, suscipit at nunc in, viverra viverra metus. Nam viverra laoreet ultrices. Aenean ex erat, laoreet non magna eget, convallis egestas augue. Proin ornare finibus egestas. Sed quis posuere orci, quis blandit est. Cras auctor arcu et augue pretium, id fringilla nulla porta. Duis nunc risus, dignissim vel lacinia in, ornare ut ligula. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ullamcorper leo erat, feugiat tempor velit feugiat eu. Nam tincidunt at nulla vitae bibendum. Phasellus massa urna, euismod eu maximus vel, hendrerit eget nisl. Aenean porttitor vehicula euismod. Suspendisse vel ultrices neque, in mollis urna. Curabitur tempus arcu in odio laoreet malesuada. In maximus pulvinar dapibus.
            </p>
        </div>
    );
}

export default ModalPage;