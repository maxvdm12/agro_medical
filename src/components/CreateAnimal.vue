<template>

    <form class="form_add" @submit.prevent="handleSubmitForm">


        <label for="boucle">Boucle </label>
        <input id="boucle" type="text" name="boucle" v-model="animal.boucle" placeholder="4 derniers numéro de la boucle">

        <label for="sexe">Sexe  </label>
        <input id="sexe" type="text" name="sexe" v-model="animal.gender" placeholder=" Sexe : M ou F">

        <label for="type"> BB | laitière | Mixte </label>
        <select name="type-select" id="type" v-model="animal.type">
            <option value="4">--Selectionner un choix--</option>
            <option value="1">Laitière</option>
            <option value="2">BB</option>
            <option value="3">Mixte</option>
        </select>



        <label for="birth"> Date de naissance  </label>
        <input id="birth" type="text" name="date_naissance" v-model="animal.birth" placeholder="Date_naissance">

        <button aria-label="Créer une nouvelle fiche animal" >Créer la fiche</button>


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
                },

                type_animal : []
            }
        },
        created() {
            let apiURL = 'http://192.168.1.9:4000/type';
            axios.get(apiURL).then(res => {
                this.type_animal = res.data.type;
            }).catch(error => {
                console.log(error)
            });
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