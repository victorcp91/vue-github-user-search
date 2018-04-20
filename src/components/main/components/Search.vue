<template>
  <div class="search">
    <div v-if='!getUserData'>
      <input placeholder="Enter user name" class="search__input" v-model="userName" type="text">
      <button @click="search" :disabled="userName==''" class="search__btn">SEARCH</button>
    </div>
    <div v-else>
      <router-link class="view-profile-btn" :to="{ name: 'details', params: { userName } }">
        VIEW PROFILE
      </router-link>
      <br>
      <button class="cancel-btn" @click="cancel">CANCEL</button>
    </div>
  </div>  
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  data () {
    return {
      userName: ''  
    }
  },
  computed: {
    ...mapGetters({
      getUserData: 'getUserData'
    })
  },
  methods:{
    ...mapActions({
      searchUser: 'searchUser',
      clearUser: 'clearUser'
    }),
    search() {
      this.searchUser(this.userName);
      this.$emit('search');
    },
    cancel() {
      this.clearUser();
      this.userName= '';
    }    
  }
};
    
</script>

<style lang="scss" scoped>
.search{
  margin-top: 10px;
  &__input{
    width: 100%;
    max-width: 200px;
    height: 25px;
    border:1px solid black;
    padding-left: 5px;
    border-right: none;
  }
  &__btn,.view-profile-btn,.cancel-btn{
    background-color: black;
    color: white;
    font-weight: bold;
    border:1px solid black;
    border-left: none;
    padding:6px;
    margin-left:-5px; 
    cursor:pointer;
    &:disabled{
      background-color: gray;
    }
  }
  .cancel-btn{
    margin-top:20px;
    background-color: white;
    color:black;
    border:1px solid black;
  }
}
</style>

