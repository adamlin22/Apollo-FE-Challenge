import "./style.css";
import icon from "../../../assets/Icon.png";
import { useState } from "react";
import Modal from "../Modal";
import Card from "../../UI/Card";
import { LazyLoadImage } from "react-lazy-load-image-component";

const CollectionItem = ({ image, title, attributes }) => {
  const [show, setShow] = useState(false);

  const showModal = () => {
    setShow(true);
  };

  const hideModal = () => {
    setShow(false);
  };

  return (
    <Card>
      <LazyLoadImage
        className="card-image"
        alt="megakongs"
        src={`https://ipfs.io/ipfs/${image.substr(7)}`}
      />

      <h3 className="title">{title}</h3>

      <Modal
        show={show}
        handleClose={hideModal}
        image={image}
        title={title}
        attributes={attributes}
      />

      <button className="button" type="button" onClick={showModal}>
        <span className="button-label">View Metadata</span>
        <img src={icon} alt="plus" />
      </button>
    </Card>
  );
};

export default CollectionItem;
