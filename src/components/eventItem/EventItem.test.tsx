import { IEvent } from 'common/types';
import { shallow } from 'enzyme';
import EventItem from './EventItem.view';

const event: IEvent = {
  id: 'EVT_2',
  name: 'Atletico Madrid vs Malaga',
  markets: [
    {
      id: 'MKT_3',
      name: 'Team to Win',
      selections: [
        {
          id: 'SEL_6',
          name: 'Atletico',
          price: 1.4,
        },
        {
          id: 'SEL_7',
          name: 'Malaga',
          price: 3.05,
        },
      ],
    },
  ],
};

test('renders', () => {
  const wrapper = shallow(<EventItem event={event} />);
  expect(wrapper.exists()).toBe(true);
});

test('renders markets', () => {
  const wrapper = shallow(<EventItem event={event} />);
  expect(wrapper.find('Market').length).toBe(1);
});
