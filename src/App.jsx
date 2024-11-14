import React from 'react';
import './App.css';
import Header from './Componet/Header';
import Balance from './Componet/Balance';
import IncomeExpenses from './Componet/IncomeExpenses';
import TransactionList from './Componet/TransactionList';
import AddTransaction from './Componet/AddTransaction';
import { GlobalProvider } from './Context/GlobalState';

function App() {
    return (
        <GlobalProvider>
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <AddTransaction />
            </div>
        </GlobalProvider>
    );
}

export default App;
