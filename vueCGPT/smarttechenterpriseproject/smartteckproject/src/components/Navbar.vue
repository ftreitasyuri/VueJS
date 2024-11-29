<template>
  <nav class="bg-primary text-white p-4">
    <!-- Container Responsivo -->
    <div class=" mx-auto flex items-center justify-between
                
    ">
      <!-- Logo -->
      
        <img class="w-32 md:w-40 md:h-30 lg:w-52"
        src="../assets/images/logoTech.png" alt="Logotipo">
      

      <!-- Menu (Desktop) -->
      <ul class="hidden md:flex space-x-4
      lg:text-3xl md:text-3xl
      ">
        <li><a href="#" class="hover:text-gray-200">Home</a></li>
        <li><a href="#" class="hover:text-gray-200">Serviços</a></li>
        <li><a href="#" class="hover:text-gray-200">Contato</a></li>
      </ul>

      <!-- Botão Menu (Mobile) -->
      <button
        @click="toggleMenu"
        class="block md:hidden text-white focus:outline-none z-10"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Menu Mobile -->
    <div
      v-show="menuOpen"
      class="md:hidden mt-4 bg-primary space-y-2 p-4 rounded-lg"
    >
      <a href="#" class="block hover:text-gray-200">Home</a>
      <a href="#" class="block hover:text-gray-200">Serviços</a>
      <a href="#" class="block hover:text-gray-200">Contato</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "Navbar",
  data() {
    return {
      menuOpen: false, // Controla o estado do menu mobile
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
  },
};
</script>
