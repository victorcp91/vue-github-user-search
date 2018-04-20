<template>
  <ul v-if="getUserRepos" class="repository-list">
      <li v-for="(item,index) in getUserRepos" :key="item.id">
        <a :href="item.html_url" target="_blank">{{index+1}} - {{item.name}}</a>
      </li>
  </ul>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  props:['userName'],
  computed: {
    ...mapGetters({
      getUserRepos: 'getUserRepos'
    }),
  },
  created(){
    this.searchUserRepos(this.userName);
  },
  methods:{
    ...mapActions({
      searchUserRepos: 'searchUserRepos'
    })
  }
}
</script>

<style lang="scss" scoped>
.repository-list{
  list-style: none;
  
  li{
    padding:8px 0;
    a{
      color:black;
      font-weight: bold;
    }
  }
}
</style>