<template>
  <div class="header">
    <h1 class="header__title">GitHub User Search</h1>
    <img class="header__logo" :src="getUserData ? getUserData.avatar_url : imgDefault">
    <div class="header__feedback">
      <div v-if="getUserData" class="user-name">{{getUserData.name}}</div>
      <div v-if="!getSearchStatus" class="message">Sorry, not found =(</div>
      <div v-if="isSearching" class="searching">Searching...</div>
    </div>    
  </div>  
</template>

<script>

import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      imgDefault: 'https://image.flaticon.com/icons/png/512/25/25231.png'
    }
  },
  methods:{
    ...mapActions({
      clearUser: 'clearUser'
    })
  },
  computed: {
    ...mapGetters({
      getUserData: 'getUserData',
      getSearchStatus: 'getSearchStatus',
      isSearching: 'isSearching'
    })
  },
  created(){
    this.clearUser();
  }
}
    
</script>

<style lang="scss" scoped>
.header{
  &__title{
    font-size: 40px;
    font-weight: bold;
  }
  &__logo{
    max-width: 200px;
    width: 80%;
    margin: 0 10%;
  }
  &__feedback{
    height: 35px;
    width: 100%;
    max-width: 280px;
    margin:20px auto 0px auto;
    text-align: center;
    font-size:30px;
  }
}  
</style>

