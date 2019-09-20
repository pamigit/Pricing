<template>
    <div class="container">
        <div class="card-deck mb-3 text-center">
            <Card v-for="card in cards" v-bind:key="card.id" v-bind:card="card" />
        </div>
    </div>
</template>

<script>
import Card from "./Card"

export default {
    name: "Cards",
    components: {
        Card
    },
    data() {
        return {
            cards: [
                {
                    id: 1,
                    title: "Free",
                    price: 0,
                    descriptions: ["10 users included", "2 GB of storage", "Email support", "Help center access"]
                },
                {
                    id: 2,
                    title: "Pro",
                    price: 15,
                    descriptions: ["20 users included", "10 GB of storage", "Priority email support", "Help center access"]
                },
                {
                    id: 3,
                    title: "Enterprise",
                    price: 29,
                    descriptions: ["30 users included", "15 GB of storage", "Phone and email support", "Help center access"]
                }
            ]
        }
    }
}
</script>