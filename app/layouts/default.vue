<script setup lang="ts">
import Footer from '../components/Footer.vue'
import Header from '../components/Header.vue'
import "../assets/main.css";

</script>

<template>
  <body class="bg-ctp-base h-screen">
    <div>
      <Header />
      <slot />
      <Footer />
    </div>
  </body>
</template>
