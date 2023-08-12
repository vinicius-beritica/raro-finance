import { CardBalance } from '../Card-Balance';
import { CardDown } from '../Card-Down';
import { CardUp } from '../Card-Up';
import './style.css';
export const Card = () => {
  return (
    <>
      <div className="card">
        <CardUp />
      </div>
      <div className="card">
        <CardDown />
      </div>
      <div className="card">
        <CardBalance />
      </div>
    </>
  );
};
