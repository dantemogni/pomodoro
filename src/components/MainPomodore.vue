<template>
    <div class="main shadow">
        <!-- 
            Al apretar "Start", se eliminan los atributos 'disabled'
            Cuando se aprieta "Start", se cambia el nombre del boton a Pausa.    
         -->
        <div>
            <span class="p-title">POMODORO TIMER</span>
            <span class="p-clock">25:00</span>
        </div>
        <button type="button" class="btn btn-primary item-main start-p">Start</button>
        <button type="button" class="btn btn-outline-secondary item-main add-five" disabled>Add 5'</button>
        <button type="button" class="btn btn-outline-danger item-main stop-p" disabled>Stop</button>
    </div>
</template>

<script>
export default {
  name: 'MainPomodore',
}
</script>
<style>
.p-title{
    font-size: 0.7em;
}
.p-clock{
    font-size: 4em;
    display: block;
}
.main{
    margin: 0 auto;
    grid-column: 3 / 7;
    grid-row: 3 / 7;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    gap: 8px 15px;
    border-radius: 15px;
    padding: 30px;
    border: 1px solid #e0e0e0;
    background-color: #fff;
}
.add-five, .stop-p{
    flex: 1 3 15%;
}
.start-p{
    flex: 1 1 100%;
}
</style>