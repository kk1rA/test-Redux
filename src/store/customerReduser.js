const defaultState = {
    customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER';
const ADD_MANY_CUSTOMER = 'ADD_MANY_CUSTOMER';
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER';

export const customReducer = (state = defaultState, action) => {
    switch (action.type) {
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]}
      case ADD_MANY_CUSTOMER:
          return {...state, customers: [...state.customers, ...action.payload]}
      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)}
      default:
        return state;
    }
}

export const addCustomerAction = (customer) => ({type: ADD_CUSTOMER, payload: customer});
export const removeCustomerAction = (id) => ({type: REMOVE_CUSTOMER, payload: id});
export const addManyCustomersAction = (customers) => ({type: ADD_MANY_CUSTOMER, payload: customers});