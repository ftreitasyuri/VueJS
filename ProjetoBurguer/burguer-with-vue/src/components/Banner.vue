<template>
    <div id="main-banner">
        <h1>Monte seu hamburguer:</h1>
        <!-- <img id="banner" :src="logoBanner" :alt="altBanner"> -->
    </div>
</template>

<script>
    export default{
        name:'Banner',
        props: ["logoBanner","altBanner"],
        data(){
            return{
                nome: 'dados',
                
           
            }
        }
    }
</script>

<style scoped>

#main-banner{
    background-image: url('/img/burger.jpg');
    background-position: 0 -250px;
    background-size: cover;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

#main-banner h1{
    color: #fff;
    text-align: center;
    font-size: 60px;
    background-color: #222;
    padding: 20px 40px;
}

</style>