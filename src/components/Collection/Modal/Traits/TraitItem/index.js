import "./style.css";

export const TraitItem = ({ item }) => {
  return (
    <div className="container">
      <h6 className="trait-type">{item.trait_type}</h6>
      <h6 className="trait-value">{item.value}</h6>
    </div>
  );
};
