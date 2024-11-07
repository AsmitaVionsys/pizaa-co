// import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'; // Import PropTypes
import Button from '../../ui/Button'
import { decreaseItemQuantity, increaseItemQuantity } from './cartSlice';

const UpdateItemQuantity = ({ pizzaId, currentQuantity }) => {
  const dispatch = useDispatch();

  return (
    <div className='flex gap-1 items-center md:gap-3'>
      <Button type='round' onClick={() => dispatch(decreaseItemQuantity(pizzaId))}>-</Button>
      <span className='font-medium text-sm'>{currentQuantity}</span>
      <Button type='round' onClick={() => dispatch(increaseItemQuantity(pizzaId))}>+</Button>
    </div>
  );
};

// Define prop types for the component
UpdateItemQuantity.propTypes = {
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired, // The current quantity of the pizza in the cart
};

export default UpdateItemQuantity;
