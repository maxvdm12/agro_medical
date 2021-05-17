<template>
<div>
    
   <navBar  @event_from_navBar="switchDisplayCreate"></navBar> 
    <!-- @event = v-on et ça fait le lien avec le composant navBar. Quand je click sur ajouter, la reponse vient ici et demande de lancer la fonction switch -->
   <createAnimal @event_add_animal="add_animal" v-if="btnNavCreateClicked == true" ></createAnimal>

<div id="search_container">
        <label for="search">Recherche boucle </label>
        <input tabindex="1" id="search" type="tel" name="search" v-model="search" placeholder=" 1234">
</div>

  <div class="container_cards" >  
        <router-link v-for="animal in filteredAnimals" :key="animal.id" :to="{name: 'details', params: {id: animal.id, boucle: animal.boucle}}" > {{ animal.boucle }}</router-link>
  </div>


</div>
</template>

<style src="../assets/css/animal.css"></style>
<style src="../assets/css/style.css"></style>
<style src="../assets/css/css_variable.css"></style>



<script>
import axios from "axios";
import navBar from "./NavBar";
import createAnimal from './CreateAnimal';

    export default {
        name: "listAnimal",
        components: {createAnimal, navBar},
                data() {
            return {

                Animals : [],
                btnNavCreateClicked: false,
                search: '',
            }
                
            },  computed: {
    filteredAnimals() {
        if (this.search.length === 0 )
        {
            return this.Animals.animaux;

        }
        else{
      return this.Animals.animaux.filter(animal => {
        return animal.boucle.match(this.search);
      })
      }
    }
  },
        created() {
            let apiURL = 'http://192.168.1.9:4000/';
            axios.get(apiURL).then(res => {
                this.Animals = res.data;
            }).catch(error => {
                console.log(error)
            });
        },

        
         methods: {
            switchDisplayCreate()
            {
                console.log('je suis dans le switch');
                this.btnNavCreateClicked = !this.btnNavCreateClicked;
   
            },

            add_animal(animal){
                console.log(animal);

                this.Animals.animaux.push(animal);

                this.switchDisplayCreate(false);

            }
 



            
            }

        }


</script>
