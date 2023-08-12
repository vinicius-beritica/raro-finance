import { Button } from '../Button';
import { Card } from '../Card';
import { List } from '../List';
import './style.css';

export const Main = () => {
  return (
    <>
      <main className="main-content">
        <div className="list-cards">
          <Card />
          <Card />
          <Card />
          <Button />
        </div>
        <div className="div-list">
          <List />
        </div>
      </main>
    </>
  );
};
