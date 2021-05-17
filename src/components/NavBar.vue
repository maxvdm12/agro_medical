<template>
 <nav>
 
    <a class="nav_buttons" href="/"> <img src="../assets/img/back.svg" alt="Retour"></a>
    

    <h1> Animaux </h1>

    <a tabindex="2" v-on:click="switch_create()" class="nav_buttons"> <img src="../assets/img/add.svg" alt="Ajouter un animal"> </a> 



  </nav>
</template>
<style src="../assets/css/style.css"></style>


<script>
    export default {
        name:"navBar",

        data() {
            return {


            }
        },
        methods: {
            switch_create(){
                // Au click (v-on click), je lance ici et j'emets un event_from_navbar pour envoyer l'info qu'on a cliqué sur le bouton. on peut envoyer des variables si nécessaire

                this.$emit('event_from_navBar')



            }
        }
    }
</script>