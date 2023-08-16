import arrowUp from '../../assets/trending-up.svg';
import arrowDown from '../../assets/chart-icon-outline-trending-down.svg';
import check from '../../assets/icon-outline-check.svg';
import cancel from '../../assets/icon-outline-x.svg';
import { Input } from '../Input';
import './style.css';
import { useState } from 'react';
import { Item } from '../../types/item';
import { NumericFormat } from 'react-number-format';
import InputMask from 'react-input-mask';

interface PropsModal {
  isOpen: boolean;
  onRequestClose: (isOpen: boolean) => void;
  addItem: (item: Item) => void;
}

export const ModalTransaction = ({
  isOpen,
  onRequestClose,
  addItem
}: PropsModal) => {
  const [inputName, setInputName] = useState('');
  const [inputDate, setInputDate] = useState('');
  const [inputCategory, setInputCategory] = useState('');
  const [inputValue, setInputValue] = useState(parseFloat(''));
  const [transaction, setTransaction] = useState<'+' | '-'>('+');
  const [error, setError] = useState('');

  const handleDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputDate(value);

    // Validação do mês
    const month = parseInt(value.substr(3, 2));
    if (month < 1 || month > 12) {
      setError('O mês deve estar entre 1 e 12');
      return;
    }
    // Validação do dia
    const day = parseInt(value.substr(0, 2));
    if (day < 1 || day > 31) {
      setError('O dia deve estar entre 1 e 31');
      return;
    }
    setError('');
  };

  if (isOpen) {
    return (
      <>
        <form
          action=""
          onSubmit={e => {
            e.preventDefault();
            setInputName('');
            setInputDate('');
            setInputCategory('');
            setInputValue(parseInt(''));
            addItem({
              name: inputName,
              date: inputDate,
              category: inputCategory,
              value: inputValue,
              type: transaction
            });
          }}
        >
          <div className="content">
            <div className="modal-form">
              <h1 className="txt-h1">Nova transação</h1>
              <section className="sc-inputs">
                <div className="field-input">
                  <label className="label-input">Nome</label>
                  <Input
                    text={'Digite o nome da sua transação'}
                    type="text"
                    value={inputName}
                    onChange={e => setInputName(e.target.value)}
                  />
                </div>
                <div className="field-input">
                  <label className="label-input">Data</label>
                  <InputMask
                    mask="99/99/9999"
                    maskChar={null}
                    placeholder={'Selecione a data da transação'}
                    type="text"
                    value={inputDate}
                    onChange={handleDate}
                    className="input"
                  />
                  {error && <div>{error}</div>}
                </div>
                <div className="field-input">
                  <label className="label-input">Categoria</label>
                  <Input
                    text={'Digite a categoria da sua transação'}
                    type="text"
                    value={inputCategory}
                    onChange={e => setInputCategory(e.target.value)}
                  />
                </div>
                <div className="field-input">
                  <label className="label-input" htmlFor="valor">
                    Valor
                  </label>
                  <NumericFormat
                    id="valor"
                    required
                    placeholder={'Digite o valor da sua transação'}
                    onValueChange={values => {
                      const { value } = values;
                      setInputValue(parseFloat(value));
                    }}
                    value={inputValue}
                    thousandSeparator={'.'}
                    decimalSeparator={','}
                    decimalScale={2}
                    prefix={'R$ '}
                    className="input"
                  />
                </div>
                <div className="field-input">
                  <label className="label-input">Tipo</label>
                  <div className="type-radio">
                    <div className="input-radio">
                      <input
                        type="radio"
                        className="btn-radio"
                        name="btn-radio"
                        required
                        onChange={e => {
                          if (e.target.checked) setTransaction('+');
                        }}
                      />
                      <img src={arrowUp} />
                      <label className="label-input">Entrada</label>
                      <input
                        className="btn-radio"
                        type="radio"
                        name="btn-radio"
                        onChange={e => {
                          if (e.target.checked) setTransaction('-');
                        }}
                      />
                      <img src={arrowDown} />
                      <label className="label-input">Saída</label>
                    </div>
                  </div>
                </div>
              </section>
              <div className="ft-button">
                <button
                  className="btn-can"
                  onClick={() => {
                    onRequestClose(isOpen);
                    setInputName('');
                    setInputDate('');
                    setInputCategory('');
                    setInputValue(parseInt(''));
                  }}
                >
                  <img src={cancel}></img>Cancelar
                </button>

                <button className="btn-add" type="submit">
                  <img src={check}></img>Adicionar
                </button>
              </div>
            </div>
          </div>
        </form>
      </>
    );
  }
  return <></>;
};
