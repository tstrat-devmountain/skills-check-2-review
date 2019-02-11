// initial state
const INITIAL_STATE = {
    inventory: [],
    name: ''
}

const SET_INVENTORY = 'SET_INVENTORY';
const ADD_PRODUCT = 'ADD_PRODUCT';


// reducer function
export default function reducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        
        case SET_INVENTORY:
            //  return Object.assign({}, state, { inventory: action.payload })
            return {...state, inventory: action.payload }
        
        case ADD_PRODUCT:
            const inventoryCopy = state.inventory.slice()
            inventoryCopy.push(action.payload);
            return { ...state,  inventory: inventoryCopy }
            
        default:
            return state;
    }
}




// actions

/* 
Action : {
    type: STRING
    payload : [ ... ] ///can be object, or string, or number.....
}
*/

export function setInventory(inventory) {
    return {
        type: SET_INVENTORY,
        payload: inventory
    }
}

export function addProduct(product) {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}