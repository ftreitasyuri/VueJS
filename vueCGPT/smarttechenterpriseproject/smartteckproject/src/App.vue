<script setup>
import Navbar from './components/Navbar.vue';
import Rodape from './components/Rodape.vue';


</script>

<template>
  <section id="app" class="h-screen w-screen 
                  
                  grid grid-col-1 grid-rows-20                  
                  
  ">  


    <div class="row-span-1 "><Navbar/></div>
    <div class="row-span-1 grid justify-center items-center -mb-24 font-bold">
      <h1 class="text-4xl  border-b-4 text-fifth border-fifth">Consultoria de TI</h1>      
    </div>
    <div class="row-span-10 mt-24"><router-view /></div>
    
    <div class="row-span-1"><Rodape/></div>

    
    
  </section>
  
 
</template>


<style scoped>
/* Você pode adicionar estilos adicionais aqui */
</style>


