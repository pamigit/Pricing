<template>
  <div>
    <Navigation />
    <Title />
    <Cards />
    <Footer />
  </div>
</template>

<script>
import Title from "../components/Title"
import Cards from "../components/Cards"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
export default {
  name: 'pricing',
  components: {
    Title,
    Cards,
    Navigation,
    Footer
  }
}
</script>
