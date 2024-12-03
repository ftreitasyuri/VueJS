<script setup>
import PrimeiroComponente from './components/PrimeiroComponente.vue';
import ComDados from './components/ComDados.vue';
import ComDadosReativosPrimitivos from './components/ComDadosReativosPrimitivos.vue';
import ComDadosReativosNaoPrimitivos from './components/ComDadosReativosNaoPrimitivos.vue';
import DataBind from './components/DataBind.vue';
// import ComProps from './components/ComProps.vue';
import ComProps from './components/ComProps.vue';
import EscutaEvento from './components/EscutaEvento.vue';

</script>

<template>
  <header>
      Vue
  </header>
  <EscutaEvento/>
  <ComProps item="Borracha" v-bind:preco="2.91"/>
  <ComProps item="Carderno" :preco="10.51"/>
  <DataBind/>  
  <ComDadosReativosNaoPrimitivos/>
  <ComDadosReativosPrimitivos/>
  <ComDados/>
  <PrimeiroComponente/>
  
  
  
</template>

 