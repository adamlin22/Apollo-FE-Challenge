import "./style.css";
import CollectionItem from "./CollectionItem";

const Collection = ({ data }) => {
  return (
    <div>
      <h6 className="user-name">Mark McKenzie</h6>
      <h3 className="collection-name">MegaKongs Collection</h3>
      <div className="collection">
        {data.map((item) => (
          <CollectionItem
            key={item.metadata.name}
            image={item.metadata.image}
            title={item.metadata.name}
            attributes={item.metadata.attributes}
          />
        ))}
      </div>
    </div>
  );
};

export default Collection;
