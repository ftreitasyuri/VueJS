<template>
    <!-- PÁGINA DE EXEMPLO PARA USAR O VUE ROUTER -->
    <div class="main-container">
        <h1>{{ user }} {{ stars }} estrelas</h1>
        <h3>Comentário: {{ comentario }}</h3>
    </div>

</template>

<script>
    export default{
        name: 'FeedBack',
        data(){
            return{
                user: 'Lucas',
                comentario: 'Fiz um lanche X-TUDO que foi o melhor do mundo',
                stars: '5'
            }
        }
    }
</script>