import { ISelection } from 'common/types';
import { shallow } from 'enzyme';
import Selection from './Selection.view';

jest.mock('hooks', () => {
  return {
    useBetSlipContext: () => ({
      addBet: jest.fn(),
      removeBet: jest.fn(),
      selections: [],
    }),
  };
});

const selection: ISelection = {
  id: 'SEL_6',
  name: 'Atletico',
  price: 1.4,
};

test('renders', () => {
  const wrapper = shallow(
    <Selection
      selection={selection}
      marketName="market"
      onlyTwoItems={false}
    />,
  );
  expect(wrapper.exists()).toBe(true);
  expect(wrapper.find('[data-test="name"]').text()).toBe(selection.name);
  expect(wrapper.find('[data-test="price"]').text()).toBe(
    selection.price.toString(),
  );
});
