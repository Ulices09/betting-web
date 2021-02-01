import { FC } from 'react';
import { IMarket } from 'common/types';
import { Selection } from '../../components';

type IProps = {
  market: IMarket;
  isLatest: boolean;
};

const Market: FC<IProps> = ({ market, isLatest }) => {
  return (
    <>
      <div className="mb-3 px-4">
        <h6 className="color-primary mb-3">{market.name}</h6>
        <div className="row d-flex justify-content-between">
          {market.selections.map((selection, index) => (
            <Selection
              key={index}
              selection={selection}
              onlyTwoItems={market.selections.length === 2}
              marketName={market.name}
            />
          ))}
        </div>
      </div>
      {!isLatest && <hr />}
    </>
  );
};

export default Market;
