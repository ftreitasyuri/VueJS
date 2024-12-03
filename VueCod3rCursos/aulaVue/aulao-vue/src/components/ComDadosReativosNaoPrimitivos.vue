<script setup>
import {reactive} from "vue"

    const pessoa = reactive({nome: "Joana", idade: 65})

    // const nome = ref("Yuri")
    // const idade = ref(27)

    function fazerAniversario(){
        pessoa.idade += 1
    }

    function mudarNome(){
        if(pessoa.nome === 'Joana'){
            pessoa.nome = "Ana Maria"
        }else{
            pessoa.nome = "Joana"
        }
        
    }
</script>

<template>
    <div class="componente"> 
        <h1>Com Dados Reativos Não Primitivos</h1>
        <p>Nome: - {{ pessoa.nome }} | Idade: {{ pessoa.idade }}</p>
        <button  @click="fazerAniversario">Fazer Aniversário</button>
        <button style="margin-left: 10px;" v-on:click="mudarNome">Mudar Nome</button>
    </div>
    
</template>
