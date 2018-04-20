<template>
  <div class="details">
    <div class="header">
      <h3>GitHub Profile</h3>
    </div>
    <div class="avatar">
      <img class="avatar__img" :src="getUserData.avatar_url">
      <div class="avatar__text">
        <h1 class="user-name">@{{userName}}</h1>
        <h2 class="name">{{getUserData.name}}</h2>
        <router-link class="new-search" :to="{ name: 'home' }">
        NEW SEARCH
        </router-link>
      </div>      
    </div> 
    <repository></repository>
  </div>  
</template>

<script>
import repository from './components/Repository';
import { mapGetters, mapActions } from 'vuex';

export default {
  props:['userName'],
  computed: {
    ...mapGetters({
      getUserData: 'getUserData',
      getUserRepos: 'getUserRepos'
    }),
  },
  created(){
    this.searchUser(this.userName);
    this.searchUserRepos(this.userName);
  },
  methods:{
    ...mapActions({
      searchUser: 'searchUser',
      searchUserRepos: 'searchUserRepos'
    })
  },
  components: {
    repository
  }
}
</script>

<style lang="scss" scoped>
  .details{
    display: block;
    text-align: left;
    width:100%;
    max-width: 600px;
    margin:0 auto;
    .header{
      width: 100%;
      height: 80px;
      margin: -50px auto 20px auto;
      background-color: black;
      h3{
        display: block;
        color:white;
        text-align: center;
        font-size: 30px;
        padding-top: 23px;
      }
    }
    .avatar{
      &__img{
        width:25%;
        display: inline-block;
      }
      &__text{
        display: inline-block;
        vertical-align: top;
        width:70%;
        .user-name,.name{
          margin:5px 10px 5px 5px;
        }
        .new-search{
          margin-top:20px;
          background-color: white;
          color:black;
          border:2px solid black;
          text-decoration: none;
          padding:5px;
          font-weight: bold;
          float:right;
          margin-top:40px;
        }
      }
    }
  }
</style>
