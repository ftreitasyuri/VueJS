<script setup>
import Navbar from './components/Navbar.vue';
import ConteudoPrincipal from './components/ConteudoPrincipal.vue';
import Rodape from './components/Rodape.vue';
</script>

<template>
  <section class="h-screen w-screen 
                  
                  grid grid-col-1 grid-rows-20 
                  
                  
  ">  


    <div class="row-span-1 "><Navbar/></div>
    <div class="row-span-1 grid justify-center items-center -mb-24 font-bold">
      <h1 class="text-4xl  border-b-4 text-fifth border-fifth">Consultoria de TI</h1>      
    </div>
    <div class="row-span-10 mt-24"><ConteudoPrincipal/></div>
    
    <div class="row-span-1"><Rodape/></div>

    
    
  </section>
  
 
</template>

<!-- <script>

export default {
  methods: {
    alerta() {
      alert('Você clicou no botão!');
    },
  },
};
</script> -->

<style scoped>
/* Você pode adicionar estilos adicionais aqui */
</style>


