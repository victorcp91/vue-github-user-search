import { shallow } from 'vue-test-utils';
import Logo from '../../../../src/components/main/components/Logo';

describe('Logo.test.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Logo,{
            computed: {
                getUserData: () => false,
                getSearchStatus: () => false,
                isSearching: () => false
            },
            methods: {
                clearUser: () => false,
            }
        })
    })

    it('should show default img on load', () => {
        wrapper.setData({imgDefault: 'default'});    
        expect(wrapper.find('.header__logo').attributes().src).toBe('default');
    });

    it('should show profile photo after get user', () => {
        wrapper.setComputed({
            getUserData: {
                avatar_url: 'profile_img'
            }
        });
        expect(wrapper.find('.header__logo').attributes().src).toBe('profile_img');
    });

    it('should show user name if it has', () => {
        wrapper.setComputed({
            getUserData: {
                name: 'User name'
            }
        });
        expect(wrapper.find('.user-name').text()).toBe('User name');
    });

    it('should tell you if the user is not found', () => {
        wrapper.setComputed({
            getSearchStatus: false
        });
        expect(wrapper.find('.message').text()).toBe('Sorry, not found =(');
    });

    it('must inform if user is being searched', () => {
        wrapper.setComputed({
            isSearching: true
        });
        expect(wrapper.find('.searching').text()).toBe('Searching...');        
    });


})