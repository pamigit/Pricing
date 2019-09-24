<template>
    <div class="container">
        <p v-if="cards.length < 1" class="empty-table">No cards!!!</p>
        <div v-else class="card-deck mb-3 text-center">
            <Card v-for="card in cards" v-bind:key="card.id" v-bind:card="card" v-on:del-card="deleteCard"/>
        </div>
    </div>
</template>

<script>
import Card from "./Card"
import axios from "axios"

export default {
    name: "Cards",
    components: {
        Card
    },
    data() {
        return {
            cards: []
        }
    },
    created() {
        axios.get("https://jsonplaceholder.typicode.com/photos?_limit=12")
            .then(res => this.cards = res.data)
            .catch(err => console.log(err));
    },
    methods: {
        deleteCard(id) {
            axios.delete("https://jsonplaceholder.typicode.com/photos/${id}")
                .then(res => this.cards = this.cards.filter(card => card.id !== id))
                .catch(err => console.log(err));
        }
    }
}
</script>

<style scoped>
    .empty-table {
        text-align: center;
    }
</style>