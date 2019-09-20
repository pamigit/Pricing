<template>
  <div id="app">
    <Navigation />
    <div class="container">
      <router-view/>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navigation from "./components/Navigation"
import Footer from "./components/Footer"
export default {
  components: {
    Navigation,
    Footer
  }
}
</script>

<style>
  html {
    font-size: 14px;
  }
  @media (min-width: 768px) {
    html {
      font-size: 16px;
    }
  }
  .container {
    max-width: 960px;
  }
  .pricing-header {
    max-width: 700px;
  }
  .card-deck .card {
    min-width: 220px;
  }
</style>
