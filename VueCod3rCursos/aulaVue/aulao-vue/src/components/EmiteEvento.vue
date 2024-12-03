<template>
    <div class="componente">
        <h1>Componente que Emite Evento</h1>
        <p>{{ item }} - Preço: (R${{ preco.toFixed(2) }})</p>
        <button @click="adicionar">Adicionar ao Carrinho</button>
    </div>
</template>


<script setup>

import {defineProps, defineEmits} from "vue"

const props = defineProps({
    item:String,
    preco:Number
})

const emit = defineEmits(["foiAdicionado"])

function adicionar() {
    emit("foiAdicionado", props.preco)
}

</script>



