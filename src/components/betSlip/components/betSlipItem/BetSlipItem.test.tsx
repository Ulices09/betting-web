import { ISelectionContext } from 'common/types';
import { shallow } from 'enzyme';
import BetSlipItem from './BetSlipItem.view';

const selection: ISelectionContext = {
  id: 'SEL_3',
  name: 'Ronaldo',
  price: 1.15,
  marketName: 'market',
};

test('renders', () => {
  const wrapper = shallow(
    <BetSlipItem
      selection={selection}
      onClickRemove={() => {}}
      isLatest={false}
    />,
  );
  expect(wrapper.exists()).toBeTruthy();
  expect(wrapper.find('hr').exists()).toBeTruthy();
});

test('does not render hr', () => {
  const wrapper = shallow(
    <BetSlipItem
      selection={selection}
      onClickRemove={() => {}}
      isLatest={true}
    />,
  );

  expect(wrapper.find('hr').exists()).toBeFalsy();
});

test('calls onClickRemove', () => {
  const onClickRemove = jest.fn();

  const wrapper = shallow(
    <BetSlipItem
      selection={selection}
      onClickRemove={onClickRemove}
      isLatest={true}
    />,
  );

  expect(onClickRemove).not.toBeCalled();
  wrapper.find('[data-test="remove"]').simulate('click');
  expect(onClickRemove).toBeCalled();
});
