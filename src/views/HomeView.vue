<script setup>
import LogoIcon from '@/components/icons/logo.vue'
</script>


<template>
  <div>
    <img src="/img/homemural.webp" alt="image présentation" >

  <div class="bg-principale p-3 mb-5 flex justify-between items-center">
  <h2 class="ml-9">Soldes Halloween, commandez avant le 31/10/2023 et profitez d’une remise de 10% sur votre première paire de lunettes et de 25% sur votre deuxième paire de lunettes</h2>
  <button class=" bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer">
    <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/catalogue">Découvrir</RouterLink>
  </button>
</div>
  </div>

  <!-- partie découverte -->

<div class="ml-12 mb-9"><h2 class="h1 text-[18px]">Explorez l'infini des possibilités</h2>
</div>

<div class="grille lg:mb-16 mr-28">

    <div class=" border-2 border-home-guide col-span-5 col-start-2  bg-opacity-90 text-footer mb-8 lg:py-20 py-8 px-6  flex flex-col items-center justify-center">
     <p class="mt-5 mb-6 ">TaVue est une marque française de lunettes haut de gamme, dédiée à l'élégance et à l'individualité. Notre mission est de vous offrir des lunettes de qualité, fabriquées en France. Vous pouvez personnaliser vos lunettes pour exprimer votre style unique. Découvrez nos collections exceptionnelles et créez des lunettes qui reflètent votre personnalité.</p>

       <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/catalogue">Customiser</RouterLink>
    </button>
   </div>

<div class=" col-span-6 col-start-7">
       <img src="/img/card1.webp" alt="illustration">
  </div>
</div>


<!-- presentation lunettes -->
<div class="ml-12 mb-9"><h2 class="h1 text-[18px]">Des personnalisations stylistiques illimités</h2>
</div>

<div class="grille lg:mb-10 mr-28">

<div class=" col-span-3 col-start-3">
       <img class="bg-card-bleu p-10" src="/img/lunette6.webp" alt="illustration">
       <div class="bg-home-guide mt-4 p-4">
        <h1 class=" text-center h2 font-bold mt-5 px-14">Formes</h1>
        <p class="text-center px-4 body text-[14px]">Des designs modernes, classiques, et tout ce qui se trouve entre les deux. Trouvez la forme qui correspond à votre style.</p>
      </div>
</div>

<div class=" col-span-3 col-start-6">
       <img class="bg-bouton p-10" src="/img/lunette4.webp" alt="illustration">
       <div class="bg-home-guide mt-4 p-4">
        <h1 class=" text-center h2 font-bold mt-5 px-14">Couleurs</h1>
        <p class="text-center px-4 body text-[14px]">Des palettes vibrantes et sobres pour le cadre, les verres et les branches. Personnalisez chaque détail pour qu'il reflète votre goût.</p>
      </div>
</div>

<div class=" col-span-3 col-start-9">
       <img class="bg-footer p-10" src="/img/lunette5.webp" alt="illustration">
       <div class="bg-home-guide mt-4 p-4">
        <h1 class=" text-center h2 font-bold mt-5 px-14">Textures</h1>
        <p class="text-center px-4 body text-[14px]"> Des finitions en acier brossé, en cuir luxueux, en céramique élégante et bien plus encore. Ressentez la qualité sous vos doigts.</p>
      </div>
</div>

</div>


<div class="flex justify-center items-center mb-10">
  <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer">
    <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/custom">Composer</RouterLink>
  </button>
</div>

<!-- partie made in france  -->
<div class="ml-12 mb-9"><h2 class="h1 text-[18px]">L'élégance à la française, des lunettes made in France</h2>
</div>

<div class="grille lg:mb-16 mr-28">

  <div class=" col-span-6 col-start-2">
       <img src="/img/card2.webp" alt="illustration">
  </div>

    <div class="col-span-5 col-start-8 border-2 border-home-guide bg-opacity-90 text-footer mb-8 lg:py-16 py-8 px-14  flex flex-col items-center justify-center">
     <p class="mt-5 mb-6 ">
      Chez TaVue, nous croyons en la beauté de la simplicité.
      Nos lunettes sont fabriquées et certifiées en France avec une attention méticuleuse aux détails, alliant le raffinement français à un design contemporain car pour nous il est important de nous sentir proche de vous.
     Nos lunettes sont fabriquées avec des matériaux d’artisans locaux car nous jugeons important la valorisation du travail local et de bonne qualité
     </p>

       <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/custom">Customiser</RouterLink>
    </button>
   </div>

</div>

<!-- inclusion des card depuis pocketbase normalement -->
<div class="ml-12 mb-9"><h2 class="h1 text-[18px]">Les tendances du moment</h2>
</div>

<div class=" grille lg:mb-10 mr-28">

<div class="col-span-3 col-start-3 flex flex-col items-center">
  <img class="bg-card-vert p-10 pt-16" src="/img/lunette.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 130€</p>

    <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/catalogue">Acheter</RouterLink>
    </button>
  </div>
</div>


<div class="col-span-3 col-start-6 flex flex-col items-center">
  <img class="bg-fond shadow-lg p-10 pt-16" src="/img/lunette1.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 110€</p>

    <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/catalogue">Acheter</RouterLink>
    </button>
  </div>
</div>

<div class="col-span-3 col-start-9 flex flex-col items-center">
  <img class="bg-card-bleu shadow-lg p-10 pt-16" src="/img/lunette2.webp" alt="illustration">
  <div class="bg-footer bg-opacity-20 shadow-lg pb-10 pl-10 pr-10 pt-4 flex flex-col items-center">
    <h1 class="text-center mb-3 h1 text-[20px] font-medium">Occularia modèle soleil</h1>
    <p class="body text-[14px]">A partir de 110€</p>

    <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6">
      <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/catalogue">Acheter</RouterLink>
    </button>
  </div>
</div>

</div>

<!-- le club -->
<div class="px-72 text-center mb-10 mt-20"> 
  <h1 class="h2">Rejoins le TaVueClub pour bénéficier d’offres exclusives et de réductions, pour ton adhésion reçoit une réduction de 40% sur ta seconde commande.
Pour s’y inscrire c’est par ici:</h1></div>
<div class="flex justify-center items-center mb-10">
  <button class="bg-bouton rounded-lg px-5 py-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer">
    <RouterLink class=" text-footer hover:no-underline hover:text-footer" to="/custom">Rejoindre</RouterLink>
  </button>
</div>

<!-- La newsletter -->

<div class="ml-12 mb-9"><h2 class="h1 text-[18px]">Explorez l'infini des possibilités</h2>
</div>

<div class="grille mb-11 mr-28">

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


<div class="flex flex-col items-center justify-center">
  <LogoIcon />
<h1 class=" mb-12 h1 text-[18px] text-center ">TaVue : L'Élégance à la Française, Personnalisée pour Toi.</h1>
</div>


<!-- mural -->
<div>
  <img class="bg-card-bleu shadow-lg p-10 pt-16" src="/img/mural.webp" alt="illustration">

</div>


</template>
