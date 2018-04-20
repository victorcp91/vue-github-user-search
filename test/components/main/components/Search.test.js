import { shallow } from 'vue-test-utils';
import Search from '../../../../src/components/main/components/Search';

describe('Seach.test.js', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(Search,{
            computed: {
                getUserData: () => false,
            },
            methods: {
                searchUser: () => false,
                clearUser: () => false
            }
        })
    });

    it('should show search option if no user has been chosen', () => {
        expect(wrapper.find('.search__btn').exists()).toBe(true);
    });

    it('should search inputed value on search button click', () => {
        const spy = jest.fn();
        wrapper.setData({ userName: 'User name' });
        wrapper.vm.$on('search', spy);
        wrapper.find('.search__btn').trigger('click');
        expect(spy).toHaveBeenCalledTimes(1);
    });

    it('should show view profile option when found user', () => {
        wrapper.setComputed({
            getUserData: () => true
        });
        expect(wrapper.find('.view-profile-btn').text()).toBe('VIEW PROFILE');   
    });

    it('should forget searched user on cancel button click', () => {
        wrapper.setData({ userName: 'User name' });
        wrapper.setComputed({
            getUserData: () => true
        });
        wrapper.find('.cancel-btn').trigger('click');
        expect(wrapper.vm.userName).toBe('');
    }); 

});