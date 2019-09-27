<template>
    <div>
        <Navigation />
        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
            <h1 class="display-4">Enterprise</h1>
            <p class="lead">This is a enterprise text!!!</p>
        </div>
        <Footer />
    </div>
</template>

<script>
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
export default {
  name: 'enterprise',
  components: {
    Navigation,
    Footer
  }
}
</script>

<style scoped>

</style>