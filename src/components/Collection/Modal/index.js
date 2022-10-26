import "./style.css";
import closeButton from "../../../assets/CloseButton.png";
import { Traits } from "./Traits";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Modal = ({ handleClose, show, image, title, attributes }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div id="background" className={showHideClassName}>
      <section id="modal" className="modal-main">
        <div className="modal-title">
          <span className="modal-name">{title}</span>
          <img
            className="close"
            alt="close"
            src={closeButton}
            onClick={handleClose}
          />
        </div>

        <LazyLoadImage
          className="modal-image"
          alt="MegaKong"
          src={`https://ipfs.io/ipfs/${image.substr(7)}`}
        />

        <Traits traits={attributes} />
      </section>
    </div>
  );
};

export default Modal;
