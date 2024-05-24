<template>
    <div>
        <p>Componente de Mensagem</p>
        <div id="container-geral">
            <form id="burger-form">
                <div class="input-container">
                    <label for="nome">Nome do cliente:</label>
                    <input type="text" id="nome" name="nome" v-model="nome" placeholder="Digite o seu nome">
                </div>

                <div class="input-container">
                    <label for="pao">Escolha o Pão:</label>
                    <select name="pao" id="pao" v-model="pao">
                        <option value="">Selecione o seu pão</option>
                        <option v-for="pao in paes" :key="pao.id" :value="pao.tipo">{{pao.tipo}}</option>
                    </select>
                </div>

                <div class="input-container">
                    <label for="carne">Escolha a carne do seu burger:</label>
                    <select name="carne" id="carne" v-model="carne">
                        <option value="">Selecione a carne</option>
                        <option v-for="carne in carnes" :key="carne.id"  :value="carne.tipo">{{ carne.tipo }}</option>
                    </select>
                </div>

                <div id="opcionais-container" class="input-container">
                    <label  id="opcionais-title" for="opcionais-title">Selecione os opcionais:</label>
                    <div class="checkbox-container" v-for="opcional in opcionaisData" :key="opcional.id">
                        <input type="checkbox" name="opcionais" v-model="opcionais" :value="opcional.tipo">
                        <span>{{ opcional.tipo }}</span>
                      
                   
                
                    </div>
                </div>

                <div class="input-container">
                    <input type="submit" class="submit-btn" value="Criar meu burguer">
                </div>

                
            </form>
        </div>
    </div>
</template>

<script>
export default{
    name:'BurgerForm',
    data(){
        return{
            paes: null,
            carnes: null,
            opcionaisData: null,
            nome: null,
            carne: null,
            opcionais:[],
            status: "Solicitado",
            msg: null
        }
    },
    // Criando a requisição no backend FAKE para pegar os ingredientes
    methods:{
        async getIngredientes(){
            const req = await fetch("http://localhost:3000/ingredientes")
            const data = await req.json()

            // Pegando os valores do banco fake e colocando no data() da aplicação
            this.paes = data.paes
            this.carnes = data.carnes
            this.opcionaisData = data.opcionais
            // console.log(data)
        },

        async getStatus(){
            const req = await fetch("http://localhost:3000/status")
            const data2 = await req.json()

            
            // console.log(data2)
        },

        async getBurgers(){
            const req = await fetch("http://localhost:3000/burgers")
            const data3 = await req.json()

            
            // console.log(data3)
        }
    },
    mounted(){
        this.getIngredientes()
        this.getStatus()
        this.getBurgers()
    }
  
}
</script>

<style scoped>

/* #container-geral{
    max-width: 400px;
} */

#burger-form{
    border: 1px solid red;
    width: 400px;
    margin: 0 auto;
}

.input-container{
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label{
    font-weight: bold;
    margin-bottom: 15px;
    color: #222;
    padding: 5px 10px;
    border-left: 4px solid #FCBA03;
}

input, select{
    padding: 5px 10px;
    width: 200px;
}

#opcionais-container{
    flex-direction: row;
    flex-wrap: wrap;
}

#opcionais-title {
    width: 100%;
  }


.checkbox-container {
    /* display: flex; */
    align-items: flex-start;
    width: 100%;
    margin-bottom: 20px;
    
    /* border: solid 1px red; */
  }

.checkbox-container span,
.checkbox-container input {
    width: auto;
    /* border: solid 1px green; */
    margin-top: 10px;
  }

.checkbox-container span {
    /* margin-left: 6px; */
    padding: 5px;
    font-weight: bold;
  }

.submit-btn {
    background-color: #222;
    color:#fcba03;
    font-weight: bold;
    border: 2px solid #222;
    padding: 10px;
    font-size: 16px;
    margin: 0 auto;
    cursor: pointer;
    transition: .5s;
  }

.submit-btn:hover {
    background-color: transparent;
    color: #222;
  }

</style>