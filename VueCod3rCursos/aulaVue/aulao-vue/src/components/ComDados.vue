<!-- <script> -->
<!-- // Options API
// export default{
//    data: function(){
//     return{        
//             nomeProduto: 'Caderno',
//             codProduto: '#123456'
//     }
//    } -->
   
    
<!-- // }

//Composition API

// export default{
//     setup:function(){
//         const nomeProduto =  'Lapis';
//         const codProduto = '#one23'; -->

<!-- //         return{
//             nomeProduto, codProduto
//         }
//     }
// } -->

<!-- </script> -->

<!-- FORMA MAIS COMUM -->
 <script setup>
     const nomeProduto =  'Apontador';
     const codProduto = '#98648';

</script>

<template>
    <div class="componente">
        <h1>Com Dados</h1>
        <p>Nome: {{ nomeProduto }} - Código: {{ codProduto }}</p>
    </div>

</template>
