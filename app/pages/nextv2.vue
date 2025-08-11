<script setup lang="ts">
 import { onMounted } from 'vue'
 import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
 onMounted(() => {
   window.location.href = 'https://gist.githubusercontent.com/le2310al/682a8f002f386317376e982a5a3cc20c/raw/69ded6678db43cd2fad2464e80abba79338cde3f/contact.vcf'
})
</script>

<template>
  <p  class="text-center text-ctp-green mt-8 text-xl">
    Loading Cyborg Contact <font-awesome-icon icon="fa-solid fa-spinner" />
  </p>
</template>

