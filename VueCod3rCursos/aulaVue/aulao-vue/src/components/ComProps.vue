<script setup>

import {defineProps} from "vue"

defineProps({
    item:String,
    preco:Number
})


</script>


<template>
    <div class="componente">
        <h1>Componente com PROPS</h1>
        <p>Item: {{ item }} - Preço: (R${{ preco.toFixed(2) }})</p>
    </div>
</template>

