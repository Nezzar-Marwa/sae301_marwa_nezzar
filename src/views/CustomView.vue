<script setup>
  import { ref,onMounted } from 'vue'


  import lunettebase from "@/components/lunettebase.vue"

      // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

 let listeLunette = ref()
 let listecouleur = ref()
 let listematiere = ref()
 let listetype = ref()

 let selectedColor = ref()


 onMounted(async()=>{
    listeLunette.value = await pb.collection("lunettes").getFullList({sort: 'nom'})
    listecouleur.value = await pb.collection("couleur").getFullList({sort: 'nom'})
    listematiere.value = await pb.collection("matiere").getFullList({sort: 'nom_matiere'})
    listetype.value = await pb.collection("type").getFullList({sort: 'forme'})
 })

 
//  const colorSelected=(color) => {
//     selectedColor.value = color
//  }
 

const colorValues = ref({
  cadre: 'tqm8lso9dlr8fss', // Valeur par défaut pour cadre
  branche: 'p1xoqpnindch0x0', // Valeur par défaut pour branches
  verre: 'ppbyudaq3kzqs1j', // Valeur par défaut pour verres
  matiere: 'usbfo0x1sc56ilj',
  type: 'ixht1qz8tvkf7po',
  // Ajoutez d'autres éléments ici avec leurs valeurs par défaut
});

const setColorValue = (element, colorId) => {
    colorValues[element] = colorId;

    const lunetteData = {
    [element]: colorId,
};
pb.collection('Lunettes').create(lunetteData)
};


</script>


<template>

    <!-- Titres -->
    <div class="p-3 ">
      <h1 class="h1 text-[18px] pl-24">TaVue: Laissez parler votre créativité</h1>
      <h2 class="h2 pl-24">A partir de 70€</h2>
      <h2 class="h2 pl-24">Vitra</h2>
    </div>

    <!-- cadre avec image dedan -->
    <div class="flex mb-12 ">
    <div class="bg-custom pb-20 pl-28 ml-4 pr-20 pt-28 col-span-8 col-start-1">
        <lunettebase />
    </div>

   <table>
    <tbody>
        <tr>
            <td>
             <div>
                <h1 class="mb-1 h2 ml-14">type de monture</h1>

            <div class="flex mx-32 mb-11">
                <div class=" mr-4">
                <button class="bg-fond border-2  rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Rond</h1>
                    <p class="body text-[12px]"> à partir de 70€</p>
                </button>
              </div>

            <div>
                <button class="bg-fond border-2 rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Carré</h1>
                    <p class="body text-[12px]"> à partir de 70€</p>
                </button>
            </div>
            </div>
        </div>
        </td>

        </tr>


        <tr>
            <td>
             <div>
                <h1 class="mb-1 h2 ml-14">Choix du matériel du cadre</h1>

            <div class="flex  mx-32 ">
                <div class="">
                <button class="bg-fond border-2 mr-8 rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Cuir</h1>
                    <p class="body text-[12px]"> à partir de 70€</p>
                </button>
            </div>

            <div>
                <button class="bg-fond border-2 rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Métal</h1>
                    <p class="body text-[12px]"> à partir de 100€</p>
                </button>
            </div>
            </div>


            <div class="flex mx-32 mb-3 ">
                <div class="">
                <button class="bg-fond border-2 mr-4  rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Plastique solide</h1>
                    <p class="body text-[12px]"> à partir de 80€</p>
                </button>
            </div>

            <div>
                <button class="bg-fond border-2 rounded-lg px-5 py-2 text-footer font-medium hover:bg-violet_v hover:text-footer mt-6 focus:bg-violet_v" >
                    <h1 class="h2">Aluminium</h1>
                    <p class="body text-[12px]"> à partir de 70€</p>
                </button>
            </div>
            </div>
        </div>
        
        <div>
            <button class="bg-bouton border-2 ml-56 border-bouton px-5 pt-3 pb-2 text-footer font-medium hover:bg-bouton-hover hover:text-footer mt-6 focus:bg-bouton-hover" >
                <h1 class="h2">Ajouter au panier</h1>
                <RouterLink to="/custom"></RouterLink>
            </button>
            </div>
        </td>
        </tr>

        

    </tbody>
</table>



</div>


   <!-- Configurateur de couleur -->
   <div class=" pb-8">
    <!-- choix couleur cadre -->
    <div class="ml-5 mb-3">
        <h1 class="mb-2 h2">Choix de la couleur du cadre</h1>


    <div class="flex">
        <div>   
       <button @click="setColorValue('cadre', 't6jmw6axxunskql')"  class="ml-1 mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-fond rounded-xl shadow" onclick="cadre.style.fill='#FCF9F6' "></div>
       </button>
        </div>

        <div>   
       <button @click="setColorValue('cadre', 'p1xoqpnindch0x0')" class=" mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-footer rounded-xl shadow" onclick="cadre.style.fill='#0F1020' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('cadre', 'g6b7grdafz2io8o')"  class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-principale rounded-xl" onclick="cadre.style.fill='#885A89' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('cadre', '86xe0w8u7555sji')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-bouton rounded-xl" onclick="cadre.style.fill='#D1B490' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('cadre', '3uh8fyjcjpb53zr')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-card-vert rounded-xl" onclick="cadre.style.fill='#8AA8A1' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('cadre', 'o8i6ogsp82qp3ld')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-card-bleu rounded-xl" onclick="cadre.style.fill='#8D8FAC' "></div>
       </button>
        </div>
    </div> 

    <div class="flex">
        <div class="ml-14">
       <button @click="setColorValue('cadre', 'c33un8m2sy8ie7p')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-marron rounded-xl" onclick="cadre.style.fill='#734343' "></div>
       </button>
        </div>   

        <div>
       <button @click="setColorValue('cadre', 'i4q648ay2cbaq4b')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-rose rounded-xl" onclick="cadre.style.fill='#D467A8' "></div>
       </button>
        </div>   

        <div>
       <button @click="setColorValue('cadre', 'q28thc67i976p2b')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-rouge rounded-xl" onclick="cadre.style.fill='#E64A4A' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('cadre', 'tqm8lso9dlr8fss')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-argent rounded-xl" onclick="cadre.style.fill='#928F8F' "></div>
       </button>
        </div>

    </div>

    </div>

        <!-- choix couleur branches -->

        <div class="ml-5 mb-3">
        <h1 class="mb-2 h2">Choix de la couleur des branches</h1>
        <div class="flex">
        <div>   
       <button @click="setColorValue('branche', 't6jmw6axxunskql')"  class="ml-1 mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-fond rounded-xl shadow" onclick="branche.style.fill='#FCF9F6' "></div>
       </button>
        </div>

        <div>   
       <button @click="setColorValue('branche', 'p1xoqpnindch0x0')" class=" mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-footer rounded-xl shadow" onclick="branche.style.fill='#0F1020' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('branche', 'g6b7grdafz2io8o')"  class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-principale rounded-xl" onclick="branche.style.fill='#885A89' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('branche', '86xe0w8u7555sji')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-bouton rounded-xl" onclick="branche.style.fill='#D1B490' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('branche', '3uh8fyjcjpb53zr')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-card-vert rounded-xl" onclick="branche.style.fill='#8AA8A1' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('branche', 'o8i6ogsp82qp3ld')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-card-bleu rounded-xl" onclick="branche.style.fill='#8D8FAC' "></div>
       </button>
        </div>
    </div> 

    <div class="flex">
        <div class="ml-14">
       <button @click="setColorValue('branche', 'c33un8m2sy8ie7p')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-marron rounded-xl" onclick="branche.style.fill='#734343' "></div>
       </button>
        </div>   

        <div>
       <button @click="setColorValue('branche', 'i4q648ay2cbaq4b')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-rose rounded-xl" onclick="branche.style.fill='#D467A8' "></div>
       </button>
        </div>   

        <div>
       <button @click="setColorValue('branche', 'q28thc67i976p2b')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-rouge rounded-xl" onclick="branche.style.fill='#E64A4A' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('branche', 'tqm8lso9dlr8fss')" class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-argent rounded-xl" onclick="branche.style.fill='#928F8F' "></div>
       </button>
        </div>

    </div>

    </div>


        <!-- choix couleur des verres -->
    <div class="ml-5 mb-3">
        <h1 class="mb-2 h2">Choix de la couleur des verres</h1>

    <div class="flex">
        <div>   
       <button @click="setColorValue('verre', 'ac4lxuaybuilpka')" class="ml-1 mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-rose_v rounded-xl shadow" onclick="verre1.style.fill='#CFA49A', verre2.style.fill='#CFA49A' "></div>
       </button>
        </div>

        <div>   
       <button @click="setColorValue('verre', '2k6t46fk65uutxk')"  class=" mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-transparent rounded-xl shadow" onclick="verre1.style.fill='#E7E4DF', verre2.style.fill='#E7E4DF' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('verre', 'rupe9rdkr0m98pf')"  class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-violet_v rounded-xl" onclick="verre1.style.fill='#CC9EBA', verre2.style.fill='#CC9EBA' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('verre', 'ez5fd8fwqzmof7m')"  class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-bleu_v rounded-xl" onclick="verre1.style.fill='#9EAEC1', verre2.style.fill='#9EAEC1' "></div>
       </button>
        </div>

        <div>
       <button @click="setColorValue('verre', 'ppbyudaq3kzqs1j')"  class="mr-3 rounded-xl   ">
        <div class="h-7 w-7 bg-noir rounded-xl" onclick="verre1.style.fill='#1D1D1B', verre2.style.fill='#1D1D1B' "></div>
       </button>
        </div>
    </div> 
    </div>

   </div>


<pre>{{ listeLunette }}</pre>
<pre>{{ listecouleur }}</pre>
<pre>{{ listematiere }}</pre>
<pre>{{ listetype }}</pre>


  </template>
  