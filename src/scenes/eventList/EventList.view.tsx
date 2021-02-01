import { FC } from 'react';
import { useRequest } from 'hooks';
import { eventService } from 'services';

const EventList: FC = () => {
  const { data, loading, error } = useRequest(eventService.getEvents);

  return (
    <div className="container">
      <h1>Event List</h1>
    </div>
  );
};

export default EventList;
