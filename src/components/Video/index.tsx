// prettier-ignore
import React, {useState} from "react";
import Modal from "react-bootstrap/Modal";
// prettier-ignore
function Video(){
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
  <>
      {/* prettier-ignore */}
    <div className="head container">
        <div className="row">
            <div className="col-md-7 d-flex align-items-center order-2 order-md-1">
                <div>
                    <h1>Are you ready for our magic</h1>
                    <p>Times are changing, just like all of us. As time passes, we mature, we are getting wiser, and at the same time, we get busier and tend to lose focus on what matters most to us. <br/><br/>
                        We are here to remind people that Nature is still an essential factor to us all; what we do here is inspired by the cultural factor offered by mother nature through mythology. <br/><br/> Every time we say, &#8220;Let&#39;s spread some magic!&#8220; we develop a new bridge that connects us back with our roots.
                    </p>
                    <a href="/dashboard" className="btn-main">
                        Mint here
                        <img className="img-fluid btn-arrow" src="/arrow-right.svg" alt="arrow"/>
                    </a>
                </div>
            </div>
            <div className="col-md-5 text-center text-lg-left order-1 order-md-2">
                <a className="magician-wrapper" onClick={handleShow}>
                    <img className="img-fluid" alt="magician" src="/magician.png" />
                    <img className="img-fluid play-btn-bg" alt="magician" src="/play-background.png" />
                    <img className="img-fluid play-btn" alt="magician" src="/play_button.png" />
                </a>
                <Modal show={show} size="lg" onHide={handleClose} aria-labelledby="contained-modal-title-vcenter" centered>

                    <Modal.Body>
                        <div className='embed-container'>
                            <iframe src='https://www.youtube.com/embed/wCh11fjscEk?rel=0' frameBorder='0'
                                    allowFullScreen></iframe>
                        </div>
                    </Modal.Body>
                </Modal>
            </div>

        </div>
    </div>
  </>
  );
}

export default Video;
