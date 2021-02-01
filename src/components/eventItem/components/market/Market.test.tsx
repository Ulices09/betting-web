import { IMarket } from 'common/types';
import { shallow } from 'enzyme';
import Market from './Market.view';

const market: IMarket = {
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
};

test('renders', () => {
  const wrapper = shallow(<Market market={market} isLatest={false} />);
  expect(wrapper.exists()).toBe(true);
});

test('renders selections', () => {
  const wrapper = shallow(<Market market={market} isLatest={false} />);
  expect(wrapper.find('Selection').length).toBe(2);
});

test('renders hr', () => {
  const wrapper = shallow(<Market market={market} isLatest={false} />);
  expect(wrapper.find('hr').exists()).toBeTruthy();
});

test('does not render hr', () => {
  const wrapper = shallow(<Market market={market} isLatest={true} />);
  expect(wrapper.find('hr').exists()).toBeFalsy();
});
