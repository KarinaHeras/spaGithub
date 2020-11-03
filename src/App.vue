<template>
 
    <router-view/>
  </div>
</template>


<script>
import Inicio from './components/Inicio';
import SingleUser from './components/SingleUser'

export default {
   name: 'app',
  components: {
    SingleUser,
    Inicio
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
