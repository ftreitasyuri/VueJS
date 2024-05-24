<template>
  
    <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->
    <div class="wrapper">
      <NavBar :logo="logoSRC" :alt="app_name"/>

      <router-view/>

      <Footer />
    </div>
    
  </header>
  
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default{
  name:'App',
  components:{
    NavBar,
    Footer
  },
  data(){
    return{
      nome: 'Testes',
      logoSRC: "/img/logo.png",
      app_name:"Imagem do logo tipo"

    }

  }
  
}

</script>

<style>

*{
  font-family: Arial, Helvetica, sans-serif;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.main-container{
  margin: 50px 0px;
  min-height: 250px;
  /* max-height: 724px; */
  /* border: 1px solid red; */

}


h1{
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
/* 
@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  } */


</style>
