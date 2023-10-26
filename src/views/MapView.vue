<script setup>

  import LogoIcon from '@/components/icons/logo.vue'
//  import MapOsm from '../../src/components/MapOSM.vue'
  import MapOsm from '@/components/MapOSM.vue'

</script>

<template>
    <div class="pt-8 mb-11">
        <h1 class="h1 text-[20px] mb-8 ml-3">Retrouvez nos magasins près de chez vous</h1>

        <MapOsm />
    </div>

    <div class="flex flex-col items-center justify-center mb-11">
  <LogoIcon /> 
<h1 class=" mb-12 h1 text-[18px] text-center ">TaVue : L'Élégance à la Française, Personnalisée pour Toi.</h1>
</div>


    <div class="grille mr-28">

<div class="col-span-5 col-start-2 bg-home-guide bg-opacity-90 text-footer mb-8  px-14  flex flex-col items-center justify-center">
 <p class="text-center mb-6">Nos lunettes vous plaisent ? restez informé sur toutes nos nouveautés et bénéficiez de réductions exclusives en vous abonnant à notre newsletter</p>

 <form>
  <input class="h2 block pl-2 mb-2 body mx-auto border rounded-lg border-bouton" style="max-width: 300px;" placeholder="Votre mail ici">
     <button class="block px-5 py-2 bg-bouton rounded-lg hover:bg-bouton-hover  mx-auto" type="submit">
       <i class="body text-[14px]  not-italic">Valider</i>
     </button>
 </form>
</div>

<div class=" col-span-6 col-start-7 ">
   <img src="/img/newsletter.webp" alt="illustration">
</div>

</div>
</template>