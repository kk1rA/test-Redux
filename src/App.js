import React from "react";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { addCustomerAction, removeCustomerAction } from "./store/customerReduser";
import { fetchCustomers } from "./asyncAction/customers";

function App() {

  const dispatch = useDispatch();
  const cash = useSelector(state => state.cash.cash);
  const customers = useSelector(state => state.customers.customers);

  const addCash = (cash) => {
    dispatch({type: 'ADD_CASH', payload: cash})
  }
  const getCash = (cash) => {
    dispatch({type: 'GET_CASH', payload: cash})
  }

  const addCustomer = (name) => {
    const customer = {
      name: name,
      id: Date.now(),
    }
    dispatch(addCustomerAction(customer));
  }
  const removeCustomer = (customer) => {
    dispatch(removeCustomerAction(customer.id))
  };

  return (
    <div className={"app"}>
      <div style={{marginTop: 10}}>{cash}</div>
      <div style={{margin: 10, padding: 10}}>
        <button 
          style={{marginRight: 10}}
          onClick={() => addCash(Number(prompt()))}>
            Пополнить
        </button>
        <button onClick={() => getCash(Number(prompt()))}>Снять</button>
      </div>
      <div style={{margin: 10, padding: 10}}>
        <button 
          style={{marginRight: 10}}
          onClick={() => addCustomer(String(prompt()))}>
            Добавить Клиента
        </button>
        <button onClick={() => dispatch(fetchCustomers())}>Добавить Клиентов из базы</button>
      </div>
      <div>
      {
        customers.length > 0 
        ? 
        <div>
          { customers.map( (customer) => (
            <div onClick={() => removeCustomer(customer)} key={customer.id}>{customer.name}</div>
          ))}
        </div>
        : <h4>Нет пользователей</h4>
      }
      </div>
    </div>
  );
}

export default App;
