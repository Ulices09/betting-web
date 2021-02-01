import { useBetSlipContext } from 'hooks';
import { FC } from 'react';
import { BetSlipItem } from './components';

const BetSlip: FC = () => {
  const { selections, removeBet } = useBetSlipContext();

  const handleRemoveItem = (selectionId: string) => {
    removeBet(selectionId);
  };

  return (
    <div className="container">
      {selections.map((selection, index) => (
        <BetSlipItem
          key={index}
          selection={selection}
          onClickRemove={handleRemoveItem}
          isLatest={index === selections.length - 1}
        />
      ))}
    </div>
  );
};

export default BetSlip;
