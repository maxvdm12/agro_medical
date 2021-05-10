<template>

    <form class="form_add" @submit.prevent="handleSubmitForm">


        <label for="boucle">Boucle </label>
        <input id="boucle" type="text" name="boucle" v-model="animal.boucle" placeholder="4 derniers numéro de la boucle">

        <label for="sexe">Sexe  </label>
        <input id="sexe" type="text" name="sexe" v-model="animal.gender" placeholder=" Sexe : M ou F">

        <label for="type"> BB | latière | Mixte </label>
        <input id="type" type="text" name="type" v-model="animal.type" placeholder="BB ou laitière">

        <label for="birth"> Date de naissance  </label>
        <input id="birth" type="text" name="date_naissance" v-model="animal.birth" placeholder="Date_naissance">

        <button >Créer la fiche</button>

      </form>
</template>



<script>
import axios from "axios";
    export default {
        name: "createAnimal",
        data() {
            return {
                animal: {
                    boucle : "",
                    gender : "",
                    type :  "",
                    birth : ""
                }
            }
        },
        methods: {
            handleSubmitForm() {

     
                 let apiURL = 'http://192.168.1.9:4000/add/animal';
                
                axios.post(apiURL, this.animal).then(() => {
                  this.animal = {
                    boucle: '',
                    gender: '',
                    type: '',
                    birth:''
                  }
                  
                  
                  
                
                }).catch(error => {
                    console.log(error)
                });
                console.log(this.animal)
               this.$emit('event_add_animal', this.animal)
             }
        }
    }
</script>