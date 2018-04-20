import { shallow, createLocalVue } from 'vue-test-utils';
import App from '../src/App';
import VueRouter from 'vue-router';

describe('App.test.js', () => {
    const localVue = createLocalVue();
    localVue.use(VueRouter);

    let wrapper;

    beforeEach(() => {
        wrapper = shallow(App, {
            localVue
        })
    });

    it('should match html structure', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});