import { ISelectionContext } from 'common/types';
import { FC } from 'react';
import styles from './BetSlipItem.module.scss';

type IProps = {
  selection: ISelectionContext;
  onClickRemove: (selectionId: string) => void;
  isLatest: boolean;
};

const BetSlipItem: FC<IProps> = ({
  selection,
  onClickRemove: onClickDelete,
  isLatest,
}) => {
  return (
    <>
      <div className="mb-4">
        <div className="text-center">
          <div className="color-primary">{selection.marketName}</div>
          <div>{selection.name}</div>
          <div className="font-weight-bold">{selection.price}</div>
          <div
            className={styles.remove}
            onClick={() => onClickDelete(selection.id)}
          >
            Delete
          </div>
        </div>
      </div>
      {!isLatest && <hr />}
    </>
  );
};

export default BetSlipItem;
