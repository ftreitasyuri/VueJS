<template>  
  
  <div class="main-container" >
    <Banner/>
    <BurgerForm/>
    <!-- <Banner :logoBanner="imagemBanner" :altBanner="alt"/>   -->
    <!-- :logo="logoSRC" :alt="app_name" -->
    
  </div>
</template>

<script>
import Banner from '../components/Banner.vue'
import BurgerForm from '../components/BurgerForm.vue'


  export default{
    name:'HomeVue',
    props:[],
    components:{
      Banner,
      BurgerForm
    },
    data(){
      return{
        imagemBanner: "../../public/img/burger.jpg",
        alt: 'Banner da página'
      }
    }
  }

</script>


<script>

</script>