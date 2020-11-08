<template>
  <div class="row  listcard" id="listcard">
  <nav class="navbar navbar-expand-md justify-content-between navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" routerLink="/"
      >Usuarios GitHub<span class="text-orange">APP</span>
      <span class="success" v-if="searcherStatus"> Success: {{ searcherStatus.success }}</span> 
  <span  class="error" v-if="searcherStatus"> Fails: {{ searcherStatus.fails }}</span>
      </a> 
  <form class="form-inline">
    <input type="text" name="gh-username" placeholder="Search for a GitHub username......" v-model="nickname" v-on:keydown.13="submit">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit" @click="submit">Search</button>
  </form>
</nav>
      <div class="card text-align card" v-for="infoDetail in info" :key="infoDetail">
        <img class="img-fluid card-image" :src="infoDetail.avatar_url" alt="Card image cap">
        <div class="card-body">
          <h4 class="card-text">{{ infoDetail.login }}</h4>
          <router-link  class="btn" :to="{path: '/single/' + infoDetail.login + '/false'}">User Detail</router-link> </div>
      </div>
    </div>
</template>
<script>
import axios from 'axios'

export default {
    name: 'Home',
    data(){
        return{
            info: null, 
            nickname:'',
            searcherStatus: null,

        }
    },
    mounted () {
      this.searcherStatus = this.$store.state.searcher
    axios
      .get('https://api.github.com/users')
      .then(response => (this.info = response.data))
        .catch(error => console.log(error))
    },
    methods: {
    submit () {
  let nick = this.nickname
  let url = '/single/'+ nick + '/true'
      this.$router.push(url) 

    }
    }
}
</script>



<style lang="scss">
html{
   overflow-y: scroll; 
   overflow-x: hidden;
}
body{
    background-color: #e7eaeb;
  
    

   
}
.text-orange{

color:#ff8300;
}
.listcard{
    padding-top: 3rem;
}
.card {
  display: grid;
  grid-template-columns: 300px;
  grid-template-rows: 210px 210px 80px;
  grid-template-areas: "image" "text" "stats";
  border-radius: 18px;
  background: #f5f3f1;
  box-shadow: 5px 5px 15px rgba(184, 184, 184, 0.9);
  font-family: roboto;
  text-align: center;
height: 26rem;
  transition: 0.5s ease;
  cursor: pointer;
  margin:30px;
}
.card-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
}

.card-text-h4{
    text-align: center;
padding-top: 5rem;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;

}
span {
  text-transform: capitalize;
}
.btn{
    color: #ebe6e1;
    background-color:#ff8300; 
    font-family: Arial, Helvetica, sans-serif;
       padding: 0;
text-align: center;
line-height: 2rem;
height: 2rem;
  width:10rem;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-size: 8px;
  font-weight: 500;
  letter-spacing: 0.2em;
  color: #ffffff;
  cursor: pointer;
  outline: none;
}

 .btn:hover {
  background-color: #ffd84e;
}

.error{
  padding-left: 1rem;
    font-size: 1rem;

}
.success{
  padding-left: 1rem;
  font-size: 1rem;
}
@media screen and (max-width: 480px) {
  .navbar {
    height: 11.7rem !important;
}
  .card-image {
  width: 100% !important;
  height: 20rem;
}
.card {
  
 display: block;
  margin: 2.5rem;
  max-width: 70rem;
  width: 100%;
  height: 32rem !important;
  font-size: 0.9rem;
}
.card-text-h4{
    padding-top: 0;
}
.listcard{
    padding-top: 11.7rem;
}
.btn{
    margin: 0rem !important;
}
a{
  font-size: 0.9rem;
}
input{
  margin-right: 0.3rem;
  margin-bottom: 0.3rem;
}
.success{
  display: block;
  padding-left: 1rem;
  font-size: 0.9rem;
}
.error{
  display: inline-block;
  font-size: 0.9rem;
  margin-left: 0.3rem;
}


}
</style>