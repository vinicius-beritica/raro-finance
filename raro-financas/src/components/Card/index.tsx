import arrowUp from '../../assets/chart-icon-outline-trending-up.svg';
import arrowDown from '../../assets/chart-icon-outline-trending-down.svg';
import iconCoin from '../../assets/$.svg';
import './style.css';

interface PropCard {
  income: number;
  expense: number;
  balance: number;
}
export const Card = ({ income, expense, balance }: PropCard) => {
  let valueCard: number = 0;
  if (income) {
    valueCard = income;
  } else if (expense) {
    valueCard = expense;
  } else {
    valueCard = balance;
  }
  const formatValue = Number(valueCard.toFixed(2)).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  const parts = formatValue.split(',');
  const numInt = parts[0];
  const numFloat = parts[1];

  return (
    <>
      <div className="card-content">
        <span className="txt-enter-up">
          {income
            ? 'Entradas'
            : expense
            ? 'Saídas'
            : balance || balance <= 0
            ? 'Saldo'
            : null}
        </span>
        <div
          className={
            income
              ? 'arrow-up'
              : expense
              ? 'arrow-down'
              : balance || balance <= 0
              ? 'bg-balance'
              : ''
          }
        >
          <img
            src={
              income
                ? arrowUp
                : expense
                ? arrowDown
                : balance || balance <= 0
                ? iconCoin
                : ''
            }
            alt=""
          />
        </div>
      </div>
      <div className="txt-value">
        {numInt},<span>{numFloat}</span>
      </div>
    </>
  );
};
