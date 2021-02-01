import { shallow } from 'enzyme';
import Drawer from './Drawer.view';

test('renders', () => {
  const wrapper = shallow(<Drawer isOpen={false} onClickClose={() => {}} />);
  expect(wrapper.exists()).toBe(true);
});

test('calls onClickClose', () => {
  const onClickClose = jest.fn();
  const wrapper = shallow(<Drawer isOpen={true} onClickClose={onClickClose} />);
  expect(onClickClose).not.toBeCalled();
  wrapper.find('img').simulate('click');
  expect(onClickClose).toBeCalled();
});
