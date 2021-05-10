<template>


<div id="fiche_info" > <!-- class="tabcontent" -->

    <div class="interactions">   
        <h2> Fiche Medical</h2>   
    </div>
      <form class="form_add" id="form_add_treatment" v-if="btnAddTreatment == true" @submit.prevent="handleSubmitForm">


        <label for="administration_datum"> Date d'administration </label>
        <input id="administration_datum" type="text" name="administration_datum" v-model="addTreatment.administration_datum" placeholder="JJ/MM/AAAA">

        <label for="medicament_name"> Nom médicament  </label>
        <input id="medicament_name" type="text" name="medicament_name" v-model="addTreatment.medicament_name" placeholder=" Nom du médicament">

        <label for="quantity"> Quantité  </label>
        <input id="quantity" type="text" name="quantity" v-model="addTreatment.quantity" placeholder="1,5,6,...">

        <label for="num_lot"> numéro du lot  </label>
        <input id="num_lot" type="text" name="num_lot" v-model="addTreatment.num_lot" placeholder="numéro de lot du médicament">

        <label for="reason"> raison d'administration </label>
        <input id="reason" type="text" name="reason" v-model="addTreatment.reason" placeholder="maladie, fièvre, ...">

        <button >Créer la fiche</button>

      </form>


                <div id="tablette_mobile_flex">
                    <div class="card-body"   v-for="treatment, index in treatments" :key="treatment.id">
                        <div id="card_id"> {{treatment.id}} </div>
                        <div id="card_datum"> <img src="../assets/img/injection_white-svg.svg" alt="piqure d'injection"> {{treatment.administration_datum }}  </div>
                        <div id="card_name_medic"> <img src="../assets/img/medicament-svg.svg" alt="photo d'un medicament cartoon">{{treatment.medicament_name }} </div>
                        <div id="card_num_lot">  <img src="../assets/img/tickets-svg.svg" alt="etiquette d'article">{{treatment.num_lot }} </div>
                        <div id="card_quant">  <img src="../assets/img/measuring-svg.svg" alt="balance"> {{treatments.quantity}} CC</div>   
                        <div id="card_reason"> <span>Symptômes | Maladies : </span> <span>{{treatment.reason }} </span></div>
                        <div id="card_action">
                            <a  class="btn_supp" @click="deleteTreatment(treatment.id, index)"> Supprimer </a> 
                        </div>

                    </div>
                </div>


 

</div>

</template>

<style src="../assets/css/medical.css"></style>


<script>
    import axios from "axios";
    export default {
        name: "ficheTraitement",
        props: {
            id_animal: '' ,
            btnAddTreatment: '',
        },
        data() {
            return {
                treatments: [],

                addTreatment: {
                    id_animal : this.id_animal,
                    administration_datum : '',
                    medicament_name : '',
                    quantity  : '',
                    num_lot : '',
                    reason : ''
                    

                }
            }
        }, 
        created() {
              let apiURL = 'http://192.168.1.9:4000/animal/search/treatment/'+ this.id_animal;
            axios.get(apiURL).then(res => {
                this.treatments = res.data.treats;
            }).catch(error => {
                console.log(error)
            });
        },
   
                  
 
        methods: {

             handleSubmitForm() {

     
                 let apiURL = 'http://192.168.1.9:4000/add/treatment';
                
                axios.post(apiURL, this.addTreatment).then(() => {
                  this.addTreatment = {
                    id_animal : this.id_animal,
                    administration_datum : '',
                    medicament_name : '',
                    quantity  : '',
                    num_lot : '',
                    reason : '',
                  }
                
                }).catch(error => {
                    console.log(error)
                });

                this.treatments.push(this.addTreatment);
                console.log("j'ai push");
                this.$emit('change_btnAddTreatment');


             },
             deleteTreatment(id_treatment, index){
                    let apiURL = 'http://localhost:4000/delete/treatment';
                    axios.post(apiURL, [id_treatment]).then(() => {
                
                }).catch(error => {
                    console.log(error)
                });
                console.log("je supprime dans le tableau");
                this.treatments.splice(index, 1);
               




             }


        }
    }
        

           
    
</script>