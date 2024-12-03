<script setup>
import {ref} from "vue"
const valor = ref('Digite aqui para ver o V-MODEL em ação')
</script>

<template>
    <div class="componente">
        <h1>Componente com Data Biding</h1>
        <!-- One way data binding -->
        <!-- <input type="text" :value="valor"> -->
         {{ valor }}
        <br>

        <!-- Two way data binding -->
        <!-- <input type="text" v-bind:value="valor" 
        @input="(e)=>valor = e.target.value"> -->

        <input type="text" v-model="valor">


    </div>
</template>

