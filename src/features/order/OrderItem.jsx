import PropTypes from "prop-types";
import { formatCurrency } from "../../utils/helpers";

function OrderItem({ item, isLoadingIngredients, ingredients  }) {
  const { quantity, name, totalPrice } = item;

  console.log(isLoadingIngredients);
  return (
    <li className="py-3 space-y-1">
      <div className="flex items-center justify-between gap-4 text-sm">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="text-sm capitalize italic text-stone-500">
        {isLoadingIngredients ? "Loading..." : ingredients.join(", ")}
      </p>
    </li>
  );
}

// Define prop types
OrderItem.propTypes = {
  item: PropTypes.shape({
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,
  isLoadingIngredients: PropTypes.bool.isRequired, // Corrected type to just boolean
  ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default OrderItem;
