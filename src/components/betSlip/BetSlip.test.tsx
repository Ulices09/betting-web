import { shallow } from 'enzyme';
import BetSlip from './BetSlip.view';

jest.mock('hooks', () => {
  return {
    useBetSlipContext: () => ({
      removeBet: jest.fn(),
      selections: [
        {
          id: 'SEL_3',
          name: 'Ronaldo',
          price: 1.15,
          marketName: 'market',
        },
        {
          id: 'SEL_4',
          name: 'Messi',
          price: 1.3,
          marketName: 'market',
        },
        {
          id: 'SEL_5',
          name: 'Bale',
          price: 1.35,
          marketName: 'market',
        },
      ],
    }),
  };
});

test('renders', () => {
  const wrapper = shallow(<BetSlip />);
  expect(wrapper.exists()).toBe(true);
});

test('renders items', () => {
  const wrapper = shallow(<BetSlip />);
  expect(wrapper.find('BetSlipItem').length).toBe(3);
});
