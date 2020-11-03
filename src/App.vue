<template>
 
    <router-view/>
  </div>
</template>


<script>
import Home from './components/Home';
import SingleUser from './components/SingleUser'

export default {
   name: 'app',
  components: {
    SingleUser,
    Home
  },
  data: function(){
    return{
      username:''
    }

  }

  
}
</script>
<style lang="scss">
.navbar{
  height: 4rem;
}
.btn{

}
@media screen and (max-width: 480px) {
  .navbar{
  height: 8.7rem;
}
}
</style>
