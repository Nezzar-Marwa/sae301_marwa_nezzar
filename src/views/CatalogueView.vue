<script setup>
import LogoIcon from '@/components/icons/logo.vue'
</script>

<template>
  <div>
<div class="ml-12 mb-9">
  <h2 class="h1 text-[18px]">Créez une paire de lunette qui vous ressemble, vous êtes le designer</h2>
   <p class="h2 font-normal">Vous pouvez partir d’une base et personnaliser de la manière que vous voulez votre paire de lunette, selon une grande variété de combinaisons de couleurs et de textures</p>
</div>

<div class=" grille mb-16 ">
<div class="col-span-3 col-start-5 flex flex-col items-center">
  <img class="bg-fond shadow-lg p-10 pt-20" src="/img/lunette2.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Vitra modèle classique</h1>
    <p class="body text-[14px]">A partir de 70€</p>

    <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
 </div>
</div>

<div class="ml-12 mb-9"><h2 class="h2">Sinon, achetez nos modèles pré-crées pour être à la pointe de la mode</h2>
</div>

<div class=" grille lg:mb-10 mr-28">

  <div class="col-span-3 col-start-3 flex flex-col items-center">
  <img class="bg-principale p-10 pt-16" src="/img/lunette6.webp" alt="illustration">
    <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
       <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
     <p class="body text-[14px]">A partir de 130€</p>

     <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
            <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
       </button>
      </div>
    </div>

  <div class="col-span-3 col-start-6 flex flex-col items-center">
      <img class="bg-bouton shadow-lg p-10 pt-16" src="/img/lunette4.webp" alt="illustration">
        <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
         <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
           <p class="body text-[14px]">A partir de 110€</p>

          <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
</div>

<div class="col-span-3 col-start-9 flex flex-col items-center">
  <img class="bg-footer shadow-lg p-10 pt-16" src="/img/lunette5.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 110€</p>

    <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
</div>
    

<div class="col-span-3 col-start-3 flex flex-col items-center">
  <img class="bg-card-vert p-10 pt-16" src="/img/lunette.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 130€</p>

    <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
</div>

<div class="col-span-3 col-start-6 flex flex-col items-center">
  <img class="bg-fond shadow-lg p-10 pt-16" src="/img/lunette1.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 110€</p>

    <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
</div>

<div class="col-span-3 col-start-9 flex flex-col items-center">
  <img class="bg-card-bleu shadow-lg p-10 pt-16" src="/img/lunette2.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 110€</p>

    <button class="bg-bouton rounded-lg  px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class="hover:no-underline hover:text-footer" to="/custom">Acheter</RouterLink>
    </button>
  </div>
</div>

</div>

<div class="flex flex-col items-center justify-center pb-6">
  <LogoIcon /> 
<h1 class="  h1 text-[18px] text-center ">TaVue : L'Élégance à la Française, Personnalisée pour Toi.</h1>
</div>


</div>
  </template>
  