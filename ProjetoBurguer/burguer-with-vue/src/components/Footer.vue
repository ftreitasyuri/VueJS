<template>
    <div id="footer">
        <p>Make your burguer &copy;2024</p>
    </div>
</template>
<script>
    export default{
        name:'Footer',
        components:{

        },
        data(){
            return{
                nome:'Rodapé'
            }
        }
    }
</script>

<style scoped>

#footer{
    height: 200px;
    background-color: #222;
    border-top: 4px solid #111;
    color: #FCBA03;
    display: flex;
    align-items: center;
    justify-content: center;
}

</style>