<template>


<div> <!-- class="tabcontent" -->
    <div class="interactions">   
        <h2 v-if ="disabled ==1"> Fiche information</h2>
        <h2 v-else> Modifier ci-dessous </h2>
    </div>

    <form  @submit.prevent="handleSubmitForm" class="form_flex" :class="disabled == 0 ?'input_edit' : ''">

        <input type="hidden" name="animalToUpdate" v-model="id_animal" > <!-- Pour savoir quel animal modifié-->

        <label for="boucle"> Boucle </label>
        <input id="boucle"  type="text"  name="boucle" v-model="animal.boucle" :disabled="disabled == 1" @keyup="parentBoucleNavChange">

        <label for="sexe"> Sexe </label>
        <input  id="sexe" type="text" name="gender" v-model="animal.gender" :disabled="disabled == 1">


        <label for="type"> BB | latière | Mixte </label>
        <select name="type-select" id="type" :disabled="disabled == 1" v-model="animal.type">
            <option  value="4">--Non mentionne--</option>
            <option  value="1">BB</option>
            <option  value="2">Laitiere</option>
            <option  value="3">Mixte</option>
        </select>

        <label id="label_date_naissance" for="date_naissance"> Date de naissance </label>
        <input id="date_naissance" type="text" name="birth" v-model="animal.birth" :disabled="disabled == 1">

        <button aria-label="sauvegarder mes changements" v-if="disabled == 0" id="save"> sauvegarder </button> 

    
    </form> 

        
 

</div>

</template>

<style src="../assets/css/infos.css"></style>


<script>
    import axios from "axios";
    export default {
        name: "ficheInfos",
        props: {
            id_animal: '' ,
            disabled: ''
        },
        data() {
            return {
                animal: {
                    boucle : "",
                    gender : "",
                    type :  "",
                    birth : "",
                    name_type:"",
                }
            }
        }, 
                
        created() {
              let apiURL = 'http://192.168.1.9:4000/animal/search/'+ this.id_animal;
            axios.get(apiURL).then(res => {
                this.animal = res.data.animaux[0];
                this.parentBoucleNavChange();
            }).catch(error => {
                console.log(error)
            });

        },                
                  
 
        methods: {
            handleSubmitForm() {

                console.log("je passe");
                 let apiURL = 'http://192.168.1.9:4000/animal/update';
                
                axios.post(apiURL, this.animal).then(() => {
                  this.animal = {
                    id: this.id_animal,
                    boucle: '',
                    gender: '',
                    type: '',
                    birth:''
                  }
                
                }).catch(error => {
                    console.log(error)
                });

                this.$emit('changeDisabled');

             },
             parentBoucleNavChange(){
                 console.log(this.animal.boucle);
                 this.$emit('changeBoucle', this.animal.boucle);
             },


        }
    }
        

           
    
</script>