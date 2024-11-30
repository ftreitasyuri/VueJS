<template>
  <nav class="bg-primary text-white flex items-center border-b-2 justify-between sm:p-4
                          
              
  ">
    <!-- Logo -->
    <div>
      <img class="w-32 md:w-40 md:h-30 lg:w-52" src="../assets/images/logoTech.png" alt="Logotipo">
    </div>

    <!-- Menu (Desktop) -->
    <ul class="hidden sm:flex space-x-4 text-xl sm:text-2xl">
      <li><a href="#" class="hover:text-gray-200">Home</a></li>
      <li><a href="#" class="hover:text-gray-200">Quem Somos</a></li>
      <li><a href="#" class="hover:text-gray-200">Contato</a></li>
    </ul>

    <!-- Botão do menu mobile -->
    
      <button
        class="block sm:hidden flex-end text-2xl focus:outline-none z-10"
        @click="toggleMenu"
      >
        <i class="fa-solid fa-bars m-4"></i> 
      </button>
    

    <!-- Menu (Mobile) -->
    <ul
      :class="menuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full' "
      class="flex-row w-screen text-xl z-10 bg-primary h-screen border
             absolute top-0 left-0 transition-all duration-500 ease-in-out"
    >
      <li class="my-4 mx-4" @click="backMenu">
        <a href="#"><i class="fa-solid fa-arrow-rotate-left"></i></a>
      </li>
      <li class="my-4 mx-4"><a href="#" class="hover:text-gray-200">Home</a></li>
      <li class="my-4 mx-4"><a href="#" class="hover:text-gray-200">Quem Somos</a></li>
      <li class="my-4 mx-4"><a href="#" class="hover:text-gray-200">Contato</a></li>
    </ul>
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
      this.menuOpen = !this.menuOpen; // Alterna entre abrir e fechar o menu
    },
    backMenu() {
      this.menuOpen = false; // Fecha o menu ao clicar no botão "voltar"
    },
  },
};
</script>
