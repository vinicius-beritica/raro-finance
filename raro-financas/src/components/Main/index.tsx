import { ButtonTransaction } from '../Button';
import { Footer } from '../Footer';
import { Header } from '../Header';
import { List } from '../List';
import { ModalTransaction } from '../Modal';
import './style.css';
import Modal from 'react-modal';
import { Item } from '../../types/item';
import { Card } from '../Card';
import { useState } from 'react';
import React from 'react';
import data from '../../data/data.json';
Modal.setAppElement('#root');

export const Main = () => {
  const SumValues = (type: string): number => {
    const valuesSum = data.reduce((acc, obj) => {
      return obj.type === type ? acc + obj.value : acc;
    }, 0);
    return valuesSum;
  };
  const [income, setIcome] = useState(SumValues('+'));
  const [expense, setExpense] = useState(SumValues('-'));
  const [modalIsOpen, setIsOpen] = React.useState(false);
  const [list, SetList] = useState<Item[]>(Object(data));

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const addItem = (item: Item) => {
    const newList = [...list];
    newList.push({
      name: item.name,
      date: item.date,
      category: item.category,
      value: item.value,
      type: item.type
    });
    SetList(newList);
    closeModal();
    let incomeCount = income;
    let expenseCount = expense;
    if (item.type === '+') {
      incomeCount += Number(newList[newList.length - 1].value);
    } else {
      expenseCount += Number(newList[newList.length - 1].value);
    }
    setIcome(incomeCount);
    setExpense(expenseCount);
  };

  return (
    <>
      <Header />
      <main className="main-content">
        <div className="list-cards">
          <div className="card">
            <Card income={income} expense={0} balance={0} />
          </div>
          <div className="card">
            <Card income={0} expense={expense} balance={0} />
          </div>
          <div className="card">
            <Card income={0} expense={0} balance={income - expense} />
          </div>
          <ButtonTransaction prop={openModal} />
        </div>
        <div className="div-list">
          <List list={list} />
        </div>
      </main>
      <Footer />
      <ModalTransaction
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        addItem={addItem}
      />
    </>
  );
};
