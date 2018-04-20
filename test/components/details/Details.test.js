import { shallow } from 'vue-test-utils';
import Details from '../../../src/components/details/Details';

describe('Details.test.js', () => {
    let wrapper;

    beforeEach(() => {
        const userData = {
            avatar_url: 'avatar_url',
            name: 'name',
            userName: 'userName'
        }
        wrapper = shallow(Details,{
            computed: {
                getUserData: () => userData,
                getUserRepos: () => true
            },
            propsData: {
                userName: 'userName'
            },
            methods: {
                searchUser: () => true,
                searchUserRepos: () => true
            }
        });
    });

    it('should show user photo', () => {
        expect(wrapper.find('.avatar__img').attributes().src).toBe('avatar_url');
    });

    it('should show user name', () => {
        expect(wrapper.find('.user-name').text()).toBe('@userName'); 
    });

    it('should show name', () => {
        expect(wrapper.find('.name').text()).toBe('name'); 
    });

});
