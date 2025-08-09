<script setup lang="ts">
import Avatar from '../components/volt/Avatar.vue';
import Fieldset from '../components/volt/Fieldset.vue';
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
</script>

<template>
  <body class="text-center text-ctp-text">
  <div>
    <Avatar image="images/avatar_too.jpeg" class="m-8 max-w-full h-auto object-contain" size="xlarge" shape="circle" />
    <Fieldset legend="About" toggleable class="ml-20 mr-20">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Fieldset>
    <Fieldset class="ml-20 mr-20">
      <template #legend>
        <div class="flex items-center pl-2">
          <font-awesome-icon icon="fa-solid fa-mobile-screen-button" shape="circle" />
          <span class="font-bold p-2">ADHD Companion App</span>
        </div>
      </template>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Fieldset>
  </div>
  </body>
</template>
