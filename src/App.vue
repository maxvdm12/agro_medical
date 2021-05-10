<template>
<div>
    <!-- Nav bar -->

    <!-- Router view -->

      <router-view></router-view>

</div>
</template>




<script>


import listAnimal from './components/ListAnimal';
import navBar from './components/NavBar';


    export default{
        name:'app',
        
        components: {navBar, listAnimal},
        data(){ return {
                
                btnNavCreateClicked: false,
                Animals: []


            }
        },



    }
    


</script>

