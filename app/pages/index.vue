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
        Born in Germany, raised in the US, educated in the UK and working ... at your company?
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
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      </p>
    </Fieldset>
    <Fieldset class="ml-20 mr-20">
      <template #legend>
        <div class="flex items-center pl-2">
          <font-awesome-icon icon="fa-solid fa-robot" shape="circle" />
          <span class="font-bold p-2">NExT v2 Implant</span>
        </div>
      </template>
      <p>
       I self-installed a <a href="https://dangerousthings.com/product/next-v2/?srsltid=AfmBOopy0mqvxNtu1pJLIUN4bo66JD-
       2UjyhTnDsBOn9abLYGkc7HwSy" class="text-ctp-blue">subdermal implant</a> containing both a 13.56MHz NFC and 125kHz RFID chip between my left
        thumb and index finger. </p>
      <p>My new magic tricks include entering my carpark by encouragingly petting the gate sensor
        and making others believe I truly did punch my digits into their phone at the speed of <s>high frequency transmission</s>
        light.
      </p>
      <p>If we don't have the pleasure of meeting in person, check out my <a href="/nextv2" class="text-ctp-blue"> .vcf </a>!
      </p>
    </Fieldset>
  </div>
  </body>
</template>
