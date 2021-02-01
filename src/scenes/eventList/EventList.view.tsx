import { FC } from 'react';
import { useRequest } from 'hooks';
import { eventService } from 'services';
import { Layout, EventItem } from 'components';

const EventList: FC = () => {
  const { data, loading, error } = useRequest(eventService.getEvents);

  return (
    <Layout loading={loading} error={error}>
      {data?.map((event, index) => {
        if (event.markets.length === 0) return null;
        return <EventItem key={index} event={event} />;
      })}
    </Layout>
  );
};

export default EventList;
