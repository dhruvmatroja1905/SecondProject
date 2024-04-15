import {ACTIONTYPE} from '../Constant/action-type'

export const setUser = (userId) => {
  return {
      type: ACTIONTYPE.SET_USERS,
      payload: userId,
    };
};


// Action creator
export const addTocart = (productData) => ({
  type: ACTIONTYPE.ADD_TO_CART,
  payload: productData
});

  
  export const fetchUserDataRequest = (userId) => ({
    type: ACTIONTYPE.FETCH_USERS_REQUEST,
    payload: userId,
  });

  export const fetchUserFailure = (error) => {
    return {
      type: ACTIONTYPE.FETCH_USERS_FAILURE,
      payload: error
    };
  }

  export const toggleCart = (isOpen) => ({
    
    type: ACTIONTYPE.TOGGLE_CART,
    payload: isOpen
  });

  export const addProduct = (item) => ({
   
    type: ACTIONTYPE.ADD_PRODUCT,
    payload: item
  });


  
  export const removeProduct = (itemId) => ({
    type: ACTIONTYPE.REMOVE_PRODUCT,
    payload: itemId
  });

  const incrementProduct = (itemId) => ({
    type: ACTIONTYPE.INCREMENT_PRODUCT,
    payload: itemId
  });

  
  const decrementProduct = (itemId) => ({
    type: ACTIONTYPE.DECREMENT_PRODUCT,
    payload: itemId
  });
  
  
  