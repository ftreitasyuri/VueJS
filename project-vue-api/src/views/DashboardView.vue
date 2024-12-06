<template>
    <div class="container mx-auto mt-8">
        <h1 class="text-2xl font-bold mb-4">Usuários</h1>
        <ul>
            <li v-for="user in users" :key="user.id" class="mb-2">
                {{ user.name }} ({{ user.email }})
            </li>
        </ul>
    </div>
</template>

<script>
import api from '../api';

export default {
    data() {
        return {
            users: [],
        };
    },
    async mounted() {
        try {
            const response = await api.get('/client');
            this.users = response.data;
        } catch (error) {
            console.error('Erro ao carregar usuários:', error);
        }
    },
};
</script>
