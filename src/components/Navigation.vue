<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
    <h5 class="my-0 mr-md-auto font-weight-bold">Bakery Perutan</h5>
    <nav class="my-2 my-md-0 mr-md-3"  id="nav">
      <router-link class="p-2 text-dark" to="/"><a>Pricing</a></router-link> 
      <router-link class="p-2 text-dark" to="/features"><a>Features</a></router-link> 
      <router-link class="p-2 text-dark" to="/enterprise"><a>Enterprise</a></router-link> 
      <router-link class="p-2 text-dark" to="/support"><a>Support</a></router-link>
    </nav>
    <a class="btn btn-outline-primary" href="#">Sign up</a>
  </div>
</template>

<script>
export default {
  name: 'navigation',
  
}
</script>

<style scoped>
 
</style>
