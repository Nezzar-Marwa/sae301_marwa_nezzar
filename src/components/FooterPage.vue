<script setup lang="ts">
	// import FacebookIcon from '@/components/icons/facebook.vue'


  import FacebookIcon from '../components/icons/facebook.vue'
  import InstagramIcon from '../components/icons/insta.vue'
  import YoutubeIcon from '../components/icons/ytb.vue'



</script>

<template>
    <footer class="grille space-y-6 bg-footer py-5 px-6 text-backgroundcolor">
      <div class="col-span-2 col-start-2 lg:mt-7 space-y-3 pb-4">
        <h4 class="h2 text-fond font-bold uppercase ">TaVue</h4>
        <address class="text-fond h2">
          4 place Tharradin<br />25200 Montbéliard<br />
          <a class="h2 text-fond hover:no-underline hover:text-bouton" href="mailto:conservatoire@agglo-belfort.fr">Tavue@support.fr</a>
        </address>
        <ul class="flex gap-4">
          <li>
            <a href="https://facebook.com" aria-label="facebook"><FacebookIcon /> </a>
          </li>
          <li>
            <a href="https://instagram.com" aria-label="instagram"><InstagramIcon /> </a>
          </li>
          <li>
            <a href="https://twitter.com" aria-label="twitter"><YoutubeIcon /> </a>
          </li>
          
        </ul>
      </div>


      <div></div>

      <nav class=" col-span-2 col-start-6 space-y-3">
        <ul>
          <h4 class="h2 text-fond font-bold uppercase mb-3">A propos</h4>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="/">page à propos</RouterLink></li>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="/">Nous contacter </RouterLink></li>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="/map">Nos magasins</RouterLink></li>
        </ul>
      </nav>

      <nav class=" col-span-2 col-start-10 space-y-3">
        <ul>
          <h4 class="h2 text-fond font-bold uppercase mb-3">Aspect légal</h4>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="#">mentions légales</RouterLink></li>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="#">conditions de vente </RouterLink></li>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="#">conditions d'utilisation</RouterLink></li>
          <li><RouterLink class="h2 text-fond hover:no-underline hover:text-bouton" to="#">politique de confidentialité</RouterLink></li>

        </ul>
      </nav>

    </footer>
  </template>