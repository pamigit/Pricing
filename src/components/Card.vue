<template>
    <div class="card mb-4 shadow-sm">
        <div class="card-header">
            <button v-on:click="$emit('del-card', card.id)" type="button" class="close" aria-label="Close">
                <span class="text-danger" aria-hidden="true">&times;</span>
            </button>
            <h4 class="my-0 font-weight-normal">{{card.title}}</h4>
        </div>
        <div class="card-body">
            <!--<h1 class="card-title pricing-card-title">${{card.price}} <small class="text-muted">/ mo</small></h1>
            <ul class="list-unstyled mt-3 mb-4">
                <li v-for="(description, index) in card.descriptions" v-bind:key="index">
                    {{description}}
                </li>
            </ul>-->
            <div class="mt-3 mb-4">
                <img :src="card.thumbnailUrl" alt="thumbnail" />
            </div>
            <button type="button" class="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    props: ["card"]
}
</script>