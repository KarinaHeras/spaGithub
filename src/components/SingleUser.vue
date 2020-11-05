<template>
<div>
<div class="row  listcard" id="listcard">
      <div class="card text-align card">
        <img class="img-fluid card-image" v-if="info.avatar_url" :src="info.avatar_url" alt="Card image cap">
        <div class="card-body">
          <h4   v-if="info.login" class="card-text">{{ info.login }}</h4>
          <p   v-if="info.followers" class="card-text-p">{{ info.followers }} <span>Follower</span></p>
          <p   v-if="info.following" class="card-text-p">{{ info.following }} <span> Following</span></p>
          <router-link class="btn":to="{path: '/'}">Back</router-link>
</div>
        </div>
    </div>
</div>
</template>


<script>
import axios from 'axios'
export default {
    name: 'SingleUser',
    data(){
        return{
          info: {login:false},
            profile: null, 
            searcher: false,
        }
    },
  mounted (){
    this.profile = this.$route.params.id 
    this.searcher = this.$route.params.searcher == 'true'
    axios
      .get(`https://api.github.com/users/${this.profile}`)
      .then(response => (this.info = response.data))
      .then(this.submit)
        .catch(this.fail)
    },
    //contador
     methods: {
    async submit () {
      if(this.searcher && this.info.login){
          this.$store.state.searcher.success++
        }
    },
    async fail(){
      this.$store.state.searcher.fails++
      this.info.login = 'Usuario no encontrado'
    }
    }
    

  }
</script>


<style lang="scss">
.listcard{
  justify-content: center;
  padding-top: 5rem;
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
height: 32rem!important;
  transition: 0.5s ease;
  cursor: pointer;
  margin:30px !important;
}
.card-image {
  grid-area: image;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  margin: 0 auto;
  max-width: 70rem;
  width: 100%;
}


h4{
    text-align: center;
padding-top: 6rem;
font-weight: bold;
font-family: Arial, Helvetica, sans-serif;
  text-transform: uppercase;

}
p{
    text-align: center;
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
  margin: 1rem;
  text-align: center;
  line-height: 2rem;
  height: 2rem;
  width:10rem;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 0.2em;
  color: #ffffff;
  cursor: pointer;
}

 .btn:hover {
  background-color: #ffd84e;
}
.btn-router{
  color: #ebe6e1;
  background-color:#ff8300; 
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  text-align: center;
  line-height: 3rem;
  box-sizing: border-box;
  border: transparent;
  border-radius: 60px;
  font-size: 8px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.2em;
  color: #ffffff;
  cursor: pointer;
  outline: none;
  width: 8rem;
  height: 2rem;


}
@media screen and (max-width: 480px) {
  .navbar {
    height: 11.7rem;
}
  .card-image {
  
  width: 99%;
  height: 20rem;
}
.card {
  
 display: block;
  margin: 2.5rem;
  max-width: 70rem;
  width: 100%;
  height: 27rem;
}
h4{
    padding-top: 0;
}
.listcard{
    padding-top: 11rem;
}
}
</style>