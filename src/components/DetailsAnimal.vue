<template>
<div>

        <nav>

        <a class="nav_buttons" href="/"> <img src="../assets/img/back.svg" alt="Retour"> </a>
    
        <h1> <span> Fiche</span> <span> {{boucle}}</span>  </h1>
    
        <button tabindex="1" class="nav_buttons" v-if="fiche === 'info'" @click="disabled = (disabled + 1)%2" > <img src="../assets/img/edit.svg" alt="Modifier la fiche"> </button> 

        <button tabindex="1" v-if="fiche === 'medical'" @click="btnAddTreatment = !btnAddTreatment" class="nav_buttons btn_create" > <img src="../assets/img/treatment.svg" alt="Ajouter un traitement">  </button> 

      </nav>

      <div class="tab">
<button class="tablinks" v-on:click="switchFiche('info')" > Fiche info</button>
<button class="tablinks"  v-on:click="switchFiche('medical')"  > Fiche medical</button>
</div>

<!-- boutons affichage du fiche médical ou fiche info -->
 <ficheInfos v-if="fiche === 'info'"
    :id_animal="id_animal" 
    :disabled="disabled"  
    @changeBoucle="changeBoucleNav"
    @changeDisabled="changeValueDisabled"
></ficheInfos>

<ficheTreatment
v-if="fiche === 'medical'"
:id_animal="id_animal" 
:btnAddTreatment="btnAddTreatment"
 @change_btnAddTreatment="changeValueBtnAddTreatment"

>
    


</ficheTreatment>


<!-- composant fiche médical -->

<!-- composant fiche info par défaut -->
</div>
</template>
<style src="../assets/css/style.css"></style>
<style src="../assets/css/css_variable.css"></style>
<style src="../assets/css/details.css"></style>


<script>
import ficheInfos from "./Fiche_Infos"
import ficheTreatment from "./Fiche_Traitements"


    export default {
        components: {ficheInfos, ficheTreatment},
        data() {
            return {
                fiche: 'info',
                disabled: 1,
                boucle : '',
                id_animal: this.$route.params.id,
                btnAddTreatment : false,

                }
            },



        methods: {
            switchFiche(arg){

                this.fiche = arg;

            },
            changeBoucleNav(newBoucle)
            {
                console.log(newBoucle);
                console.log("je m'active");
                this.boucle = newBoucle;
            },
            changeValueDisabled()
            {
                this.disabled = (this.disabled + 1)%2;
            },
            changeValueBtnAddTreatment(){

                 this.btnAddTreatment = !this.btnAddTreatment;

            }


        }
    }

        
    
</script>