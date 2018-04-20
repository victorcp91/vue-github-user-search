import { shallow } from 'vue-test-utils';
import Start from '../../../src/components/main/Start';

describe('Start.test.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Start);
    });

    it('should match html structure', () => {
        expect(wrapper.element).toMatchSnapshot();
    });
});