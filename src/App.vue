<script setup>
  import { RouterView } from 'vue-router'
  import HeaderPage from '@/components/HeaderPage.vue'
  import FooterPage from '@/components/FooterPage.vue'

  import PocketBase from 'pocketbase'

</script>

<template>
  <HeaderPage />

  <main class="bg-fond">
    <Suspense>
      <RouterView />
    </Suspense>
  </main>

  <FooterPage />
</template>