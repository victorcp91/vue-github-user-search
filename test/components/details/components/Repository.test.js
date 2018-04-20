import { shallow } from 'vue-test-utils';
import Repository from '../../../../src/components/details/components/Repository';

describe('Repository.test.js', () => {
    let wrapper;

    beforeEach(() => {
        const userRepo = [
            {
                id: 100,
                html_url: 'html_url_1',
                name: 'name_1'
            },
            {
                id: 200,
                html_url: 'html_url_2',
                name: 'name_2'
            }
        ];
        wrapper = shallow(Repository,{
            computed: {
                getUserRepos: () => userRepo
            },
            methods: {
                searchUserRepos: () => true
            }
        });
    });

    it('should show user repository list',() => {
        expect(wrapper.findAll('.repository-list li').at(0).text()).toBe('1 - name_1');
        expect(wrapper.findAll('.repository-list li').at(1).text()).toBe('2 - name_2');
    });

    it('should link to user repositories',()=>{
        expect(wrapper.findAll('.repository-list li a').at(0).attributes().href).toBe('html_url_1');
        expect(wrapper.findAll('.repository-list li a').at(1).attributes().href).toBe('html_url_2');
    });

});