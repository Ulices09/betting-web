import { shallow } from 'enzyme';
import Loader from './Loader.view';

test('renders', () => {
  const wrapper = shallow(<Loader />);
  expect(wrapper.exists()).toBe(true);
});
