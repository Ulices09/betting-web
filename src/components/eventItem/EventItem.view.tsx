import { IEvent } from 'common/types';
import { FC } from 'react';
import { Market } from './components';
import styles from './EventItem.module.scss';

type IProps = {
  event: IEvent;
};

const EventItem: FC<IProps> = ({ event }) => {
  return (
    <div className="row justify-content-center mb-4 p-2">
      <div className={`${styles.event} col-12 col-lg-6 rounded p-0`}>
        <div className="px-3 pt-3 text-center">
          <h5>{event.name}</h5>
        </div>
        <hr />
        <div className="pb-3 pt-2">
          {event.markets.map((market, index) => (
            <Market
              key={index}
              market={market}
              isLatest={index === event.markets.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventItem;
