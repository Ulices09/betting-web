import { shallow } from 'enzyme';
import Layout from './Layout.view';

test('renders', () => {
  const wrapper = shallow(<Layout />);
  expect(wrapper.exists()).toBe(true);
});

test('renders content', () => {
  const wrapper = shallow(
    <Layout>
      <div id="content">test</div>
    </Layout>,
  );

  expect(wrapper.find('#content')).toBeDefined();
});

test('renders error', () => {
  const error = 'oh no!';

  const wrapper = shallow(
    <Layout error={error}>
      <div id="content">test</div>
    </Layout>,
  );

  expect(wrapper.find('#content').exists()).toBeFalsy();
  const errorAlert = wrapper.find('.alert');
  expect(errorAlert.exists()).toBeTruthy();
  expect(errorAlert.text()).toBe(error);
});

test('renders loader', () => {
  const wrapper = shallow(
    <Layout loading={true}>
      <div id="content">test</div>
    </Layout>,
  );

  expect(wrapper.find('#content').exists()).toBeFalsy();
  expect(wrapper.find('Loader').exists()).toBeTruthy();
});
