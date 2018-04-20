import * as types from '../mutation-types';
import { getUserByUserName, getUserRepos } from '../../services/user'

const state = {
    userData: '',
    found: true,
    userRepos: '',
    searching: false
};

const getters = {
    getUserData: state => {
        if(state.userData===''){
            return false;
        }else{
            return state.userData;
        }        
    },
    getSearchStatus: state => state.found,
    getUserRepos: state => {
        if(state.userRepos===''){
            return false;
        }else{
            return state.userRepos;
        }        
    },
    isSearching: state => state.searching
};

const mutations = {
    [types.SET_USER](state, userData){        
        state.userData = userData; 
        state.found = true;      
    },
    [types.CLEAR_USER](state){
        state.userData = '';
    },
    [types.SET_NOT_FOUND](state){
        state.found = false;
    },
    [types.SET_USER_REPOS](state, userRepos){
        state.userRepos = userRepos;
    },
    [types.SET_SEARCHING_STATUS](state, status){
        state.searching = status;
    }
};

const actions = {
    searchUser({ commit }, userName){
        commit(types.SET_SEARCHING_STATUS,true);
        getUserByUserName(userName).then((response)=>{
            commit(types.SET_USER, response.data);
            commit(types.SET_SEARCHING_STATUS,false);
        }).catch(() => {
            commit(types.SET_NOT_FOUND);
            commit(types.SET_SEARCHING_STATUS,false);
        });         
    },
    clearUser({ commit }){
        commit(types.CLEAR_USER);
    },
    searchUserRepos({ commit }, userName){
        getUserRepos(userName).then((response)=>{
            if(response.data[0].id===33387350){
                searchUserRepos({ commit }, userName); 
            }else{
                commit(types.SET_USER_REPOS, response.data);
            }            
        }).catch(() => {
            console.log('No repository found =(');
        });         
    }
};

export default {
    getters,
    actions,
    mutations,
    state
};