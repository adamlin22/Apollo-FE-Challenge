import "./style.css";
import { TraitItem } from "./TraitItem";

export const Traits = ({ traits }) => {
  return (
    <div className="traits">
      {traits.map(
        (trait) =>
          trait.value && <TraitItem key={trait.trait_type} item={trait} />
      )}
    </div>
  );
};
