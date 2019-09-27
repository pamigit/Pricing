<template>
  <div id="app">
      <transition name="moveInUp">
        <router-view />
      </transition>
  </div>
</template>

<script>
export default {
  

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
  .moveInUp-enter-active{
    animation: fadeIn 1.5s ease-in;
  }
  @keyframes fadeIn{
    0%{
      opacity: 0;
    }
    50%{
      opacity: 0.5;
    }
    100%{
      opacity: 1;
    }
  }
</style>
