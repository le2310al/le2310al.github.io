<script setup lang="ts">
import Button from './volt/Button.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <footer class="text-center mt-6">
    <Button as="a" icon=github aria-label="GitHub" href="https://github.com/le2310al/le2310al.github.io"
            target="_blank" rel="noopener" class="m-2 text-ctp-base" variant="text" size="large" >
      <template #default>
        <font-awesome-icon icon="fa-brands fa-github-alt fa-2xl" class="text-ctp-blue"/>
      </template>
    </Button>
    <Button as="a" icon=github aria-label="GitHub" href="https://www.linkedin.com/in/le2310al/"
            target="_blank" rel="noopener" class="m-2"  variant="text" size="large" >
      <template #default>
        <font-awesome-icon icon="fa-brands fa-square-linkedin fa-2xl" class="text-ctp-blue" />
      </template>
    </Button>
  </footer>
</template>
