import { addProduct, addTocart } from '../Action/profileAction';
import { ACTIONTYPE } from '../Constant/action-type';

const initialValues = {
  users: [],
  error: '',
  cartCount: 0,
  cartItems: [],
  isCartOpen: false,
}

export const profileReducer = (state = initialValues, { type, payload }) => {
  switch (type) {
    case ACTIONTYPE.SET_USERS:
      console.warn(payload, "from reducer");
      return { ...state, users: { ...payload } };

    case ACTIONTYPE.FETCH_USERS_REQUEST:
      console.warn(payload, "from reducer");
      return { ...state, users: { ...payload }, error: '' };

    case ACTIONTYPE.FETCH_USERS_SUCCESS:
      // Update the state with the fetched data
      return { ...state, users: payload, error: '' };

    case ACTIONTYPE.FETCH_USERS_FAILURE:
      // Update the state with the error message
      return { ...state, error: payload };

    default:
      return state; // Return the current state if action type is not recognized
  }
}

export const cartReducer = (state = initialValues, action) => {
  
  switch (action.type) {


    case ACTIONTYPE.ADD_TO_CART:
  return {
    ...state,
    cartCount: state.cartCount + 1,
    cartItems: [...state.cartItems, action.payload] // Add the entire product data to cartItems
  };


    case ACTIONTYPE.TOGGLE_CART:

      return {
        ...state,
        isCartOpen: action.payload
      };

    case ACTIONTYPE.ADD_PRODUCT:
     
      const newItemId = action.payload.id;
      const existingItemIndex = state.cartItems.findIndex(item => item.id === newItemId);

      if (existingItemIndex !== -1) {
        // If the item already exists, create a new array with the updated item
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex] = {
          ...updatedCartItems[existingItemIndex],
          quantity: updatedCartItems[existingItemIndex].quantity + 1
        };

        return {
          ...state,
          cartItems: updatedCartItems
        };
      } else {
        // If the item doesn't exist, add it to the cartItems array
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload]
        };
      }



    case ACTIONTYPE.REMOVE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter(item => item.id !== action.payload)
      };

    case ACTIONTYPE.INCREMENT_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: item.quantity + 1 };
          }
          return item;
        })
      };

    case ACTIONTYPE.DECREMENT_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.map(item => {
          if (item.id === action.payload) {
            return { ...item, quantity: Math.max(0, item.quantity - 1) };
          }
          return item;
        }).filter(item => item.quantity !== 0)
      };



    default:
      return state;
  }
};
