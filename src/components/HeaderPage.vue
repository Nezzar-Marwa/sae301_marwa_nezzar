<script setup>
  import { ref, computed, watch, onMounted } from 'vue'
  import { RouterLink } from 'vue-router'

  import LogoIcon from '@/components/icons/logo.vue'
	
  const activeMenu = ref(false)

  function closeMenu() {
	  activeMenu.value = false
  }

  import { useRouter } from 'vue-router';
  const router = useRouter()

  // Import pocketbase
  import PocketBase from 'pocketbase'
  // Objet pocketBase
  const pb = new PocketBase("http://127.0.0.1:8090");

    // user connecté ? au départ faux
    let isConnected = ref(false)

    // Element de connexion
    let user = ref('')
    let psw = ref('')

    // User connecté
    let currentUser = ref()
    let avatar = ref()

    // Au montage du composant
onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()

})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://127.0.0.1:8090/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}


const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"HomeView"})
}
</script>

<template>
  <header class=" bg-fond text-footer h2 z-10 flex w-full translate-y-0 items-stretch justify-between px-6  transition-all duration-300 ease-in-out lg:py-0">
    <div class="flex items-center">
      <a href="/">
        <LogoIcon />
      </a>
    </div>

    <div class="flex items-center gap-4 lg:flex-row-reverse">

      <button class="relative z-10 flex h-5 w-8 flex-col justify-between lg:hidden" @click="activeMenu = !activeMenu"
      > 
        <div class="ease h-[2px] w-full transform rounded-full bg-footer transition duration-300" :class="{ 'translate-y-[9px] rotate-45 bg-fond': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-footer transition duration-300" :class="{ 'bg-fond opacity-0': activeMenu }"></div>
        <div class="ease h-[2px] w-full transform rounded-full bg-footer transition duration-300" :class="{ '-translate-y-[9px] -rotate-45 bg-fond': activeMenu }"></div>
      </button>

			<nav class=" opacity-0 fixed inset-0 z-999 h-screen w-screen bg-footer text-footer lg:text-footer transition-all duration-300 ease-in-out lg:visible lg:relative lg:pt-4 lg:flex lg:h-auto lg:w-auto lg:items-center lg:h3 lg:uppercase lg:tracking-wide lg:bg-fond lg:opacity-100"
      :class="{ '!visible opacity-100': activeMenu }"
      v-scroll-lock="activeMenu"
      >

		    <ul class=" h2 text-[15px] text-fond lg:text-footer  ml-24 lg:m-0 lg:flex">
		      <li class="menu-item"><RouterLink class="menu-link  text-footer hover:no-underline hover:text-bouton"  to="/catalogue" 
            @click="closeMenu">Les lunettes</RouterLink></li>

          <li class="menu-item"><RouterLink class="menu-link  text-footer hover:no-underline hover:text-bouton" to="/custom" 
            @click="closeMenu">Customiser</RouterLink></li>

          <li class="menu-item"><RouterLink class="menu-link  text-footer hover:no-underline hover:text-bouton" to="/map" 
            @click="closeMenu">Map</RouterLink></li>

          <li class="menu-item"><RouterLink class="menu-link  text-footer hover:no-underline hover:text-bouton" to="/custom" 
            @click="closeMenu">A propos</RouterLink></li>
		    </ul>

     <div class="text-center">             
      <span v-if="isConnected"> 
        <img :src="avatar" class="img-fluid" style="max-width:70px;" />
                <button class="btn btn-light border-bouton mr-2">
                  {{ currentUser.prenom_user }}
                </button>              
                <button class="btn bg-bouton hover:bg-bouton-hover ml-auto" type="button" @click="deconnect">
                    <i class="fa fa-sign-out"></i>
                  </button>
              </span>
        
        <form v-else >
           <input class="block pl-2 mb-2 body mx-auto border rounded-xs border-bouton " style="max-width: 300px;" placeholder="Login" v-model="user">
          <input class="block pl-2 mb-2 body mx-auto border rounded-xs border-bouton" style="max-width: 300px;" placeholder="Password" v-model="psw">
         <button class="block bg-bouton rounded-xs hover:bg-bouton-hover  px-2 mx-auto" 
            type="button" @click.prevent="connect">
           <i class="body text-[14px]  not-italic">Valider</i>
         </button>
       </form>
      </div>

		  </nav>
    </div>




  </header>
</template>