<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <div class="min-h-screen bg-gray-100 flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-4xl font-bold text-blue-600 mb-4">
        Bem-vindo ao Vue com Tailwind CSS!
      </h1>
      <p class="text-gray-700">
        Este é um projeto básico para começar.
      </p>
      <button
        class="mt-6 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        @click="alerta"
      >
        Clique aqui
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    alerta() {
      alert('Você clicou no botão!');
    },
  },
};
</script>

<style scoped>
/* Você pode adicionar estilos adicionais aqui */
</style>



