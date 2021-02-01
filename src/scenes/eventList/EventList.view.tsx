import { FC } from 'react';
import { useRequest } from 'hooks';
import { eventService } from 'services';
import { EventItem } from 'components';

const EventList: FC = () => {
  const { data, loading, error } = useRequest(eventService.getEvents);

  return (
    <div className="container">
      {data?.map((event, index) => {
        if (event.markets.length === 0) return null;
        return <EventItem key={index} event={event} />;
      })}
    </div>
  );
};

export default EventList;
