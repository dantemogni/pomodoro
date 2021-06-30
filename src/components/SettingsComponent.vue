<template>
    <section class="settings">
        <div class="input-group  mb-3">
            <label for="rangeMinutes" class="form-label">Work Minutes: {{this.info.valueMinutes}}</label>
            <input v-model="info.valueMinutes" type="range" min="1" max="100" class="form-range" id="rangeMinutes">
        </div>
        <div class="input-group mb-3">
            <label for="rangeSessions" class="form-label">Sessions: {{this.info.valueSessions}}</label>
            <input v-model="info.valueSessions" type="range" min="1" max="100" class="form-range" id="rangeSessions">
        </div>
        <div class="input-group mb-3">
            <label for="rangeShortBreak" class="form-label">Short Break minutes: {{this.info.valueShortBreak}}</label>
            <input v-model="info.valueShortBreak" type="range" min="1" max="100" class="form-range" id="rangeShortBreak">
        </div>
            <div class="input-group mb-3">
            <label for="rangeLongBreak" class="form-label">Long Break minutes: {{this.info.valueLongBreak}}</label>
            <input v-model="info.valueLongBreak" type="range" min="1" max="100" class="form-range" id="rangeLongBreak">
        </div>
        <div class="buttons">
            <!-- <button 
                @click="clickBack"
                type="button" 
                class="settings-btn shadow item-main"><i class="fas fa-arrow-left"></i></button> -->
            <button 
                @click="clickBackAndSave"
                type="button" 
                class="btn btn-outline-secondary  shadow item-main">Apply</button>
                <button 
                @click="resetValues"
                type="button" 
                class="btn btn-outline-secondary  shadow item-main"
                :disabled="!this.hasChanged">Set Default</button>
            </div>
    </section>
</template>
<style>
.settings{
    justify-content: left;
    text-align: left;
}
</style>
<script>
export default {
    /**
     * TODO
     * Hacer que se conserven los datos al ingresar a la pantalla de settings
     */
    data(){
        return{
            info:{
                valueMinutes: 25,
                valueSessions:4,
                valueShortBreak:5,
                valueLongBreak:15,
            },
        }
    },
    computed:{
        isMinDefault(){
            return this.info.valueMinutes===25;
        },
        isMinShortBreakDefault(){
            return this.info.valueShortBreak===5;
        },
        isMinLongBreakDefaut(){
            return this.info.valueLongBreak===15;
        },
        isSessionsDefault(){
            return this.info.valueSessions===4;
        },
        hasChanged(){
            /**
             * Tells is something is not default value
             */
            return !(this.isMinDefault && this.isMinShortBreakDefault && this.isMinLongBreakDefaut && this.isSessionsDefault)
        },
    },
    methods:{
        createArrayWithConfigs(){
            /**
             * Returns an array with all the configs the user made
             */
            const arry = [];

            if(!this.isMinDefault){
                arry.push({min: this.info.valueMinutes});
            }
            if(!this.isMinShortBreakDefault){
                arry.push({sbr: this.info.valueShortBreak});
            }
            if(!this.isMinLongBreakDefaut){
                arry.push({lbr: this.info.valueLongBreak});
            }
            if(!this.isSessionsDefault){
                arry.push({ses: this.info.valueSessions});
            }
            
            return arry;
        },
        updateRoute(route){
            /**
             * Pushes a new route
             */
            this.$router.push(route);
        },
        clickBackAndSave(){
            /**
             * Saves the user configuration.
             * Creates an array with the user configs. and then
             * updates the url path with it
             */
            const configsArray = this.createArrayWithConfigs();

            let arryToObj = {};
            for(let config in configsArray){
                Object.assign(arryToObj,configsArray[config])
            }

            const routeConfig = {path: '/', query: arryToObj};
            this.updateRoute(routeConfig);
        },
        resetValues(){
            this.info.valueMinutes = 25;
            this.info.valueSessions = 4;
            this.info.valueShortBreak = 5;
            this.info.valueLongBreak = 15;
        },
        clickBack(){
            /**
             * Goes back by one step
             */
            this.$router.go(-1);
        },
    },
}
</script>
<style>
.buttons{
    display:flex;
    justify-content: space-evenly;
}
</style>