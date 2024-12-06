<template>
    <div class="flex flex-col items-center justify-center h-screen bg-gray-100">
        <form @submit.prevent="login" class="bg-white p-8 rounded shadow-md w-96">
            <h1 class="text-2xl font-bold mb-4">Login</h1>
            <div class="mb-4">
                <label class="block text-gray-700">Email</label>
                <input v-model="email" type="email" placeholder="Digite seu email" class="w-full border rounded p-2" />
            </div>
            <div class="mb-4">
                <label class="block text-gray-700">Senha</label>
                <input v-model="password" type="password" placeholder="Digite sua senha"
                    class="w-full border rounded p-2" />
            </div>
            <button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
                Entrar
            </button>
        </form>
    </div>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            email: '',
            password: '',
        };
    },
    methods: {
        async login() {
            try {
                const response = await api.post('/login', {
                    email: this.email,
                    password: this.password,
                });
                const token = response.data.data.token;

                // Certifique-se de que o token está sendo armazenado no localStorage
                if (token) {
                    localStorage.setItem('token', token);
                    this.$router.push('/dashboard');
                } else {
                    console.error('Token não recebido da API.');
                }
            } catch (error) {
                console.error('Erro no login:', error);
            }
        }

    },
};
</script>
