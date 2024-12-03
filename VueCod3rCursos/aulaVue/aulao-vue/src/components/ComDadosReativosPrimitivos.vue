<script setup>
import {ref} from "vue"

    const nome = ref("Yuri")
    const idade = ref(27)

    function fazerAniversario(){
        idade.value += 1
    }

    function mudarNome(){
        if(nome.value === 'Yuri'){
            nome.value = "Rodrigo"
        }else{
            nome.value = "Yuri"
        }
        
    }
</script>

<template>
    <div class="componente"> 
        <h1>Com Dados Reativos e Primitivos</h1>
        <p>Nome: - {{ nome }} | Idade: {{ idade }}</p>
        <button  @click="fazerAniversario">Fazer Aniversário</button>
        <button style="margin-left: 10px;" v-on:click="mudarNome">Mudar Nome</button>
    </div>
    
</template>

