<template>
    <div class="componente">    
        <h1>Componente que escuta evento</h1>
        <p>Total: R${{ total }}</p>
        <div class="lista">
            <EmiteEvento item="Item:1" :preco="1.99" @foiAdicionado="atualizaTotal"/>
            <EmiteEvento item="Item:2" :preco="5.50" @foiAdicionado="atualizaTotal"/>
            <EmiteEvento item="Item:3" :preco="10.45" @foiAdicionado="atualizaTotal"/>
        </div>
    </div>
</template>

<script setup>

import EmiteEvento from './EmiteEvento.vue';

import {ref} from 'vue'

const total = ref(0)

function atualizaTotal(p){
    const valor = total.value + p
    total.value = +valor.toFixed(2)
}

</script>

<style scoped>

.lista{
    display: flex;
    justify-content: space-between;
}

</style>