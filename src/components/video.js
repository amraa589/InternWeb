import React,{useState} from "react"
import { Button,Modal } from 'react-bootstrap'

const Video = ({url,index}) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="video-container">
                <div className="video">
                    <a>
                        <img class="img-fluid z-depth-1"  variant="primary" onClick={handleShow} src="https://mdbootstrap.com/img/screens/yt/screen-video-1.jpg"/>
                    </a>
                </div>
            </div>

        <Modal show={show} onHide={handleClose }>
            <Modal.Body>
                <div class="embed-responsive embed-responsive-16by9">
                    <iframe width="100%" height="400px" src={url}
                    class="embed-responsive-item"
                    title="YouTube video player" frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; 
                    encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen></iframe>
                </div>
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
        </Modal>
        </>
    ) 
}

export default Video
