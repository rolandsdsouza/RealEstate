<template>
    <div class="black">
        <div class="black-content">
            <hr>
            <h1>You’re in good hands</h1>
            <p>Torquatos nostros? quos dolores eos, qui dolorem<br>ipsum per se texit, ne ferae quidem se repellere,<br> idque instituit docere sic: omne animal, simul atque integre <br>iudicante itaque aiunt hanc quasi involuta <br>aperiri, altera occulta quaedam et <br>voluptatem accusantium doloremque.</p>
            <v-btn @click="more" class="black-btn" append-icon="mdi-arrow-right-thin">Learn more</v-btn>
        </div>
    </div>
</template>



<style scoped>
.black{
    width: 100%;
    background-image: linear-gradient( to right,#FFAC12, black);
}
.black-content{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.black-content hr{
    width: 10vw;
    height: 4px;
    background-image: linear-gradient( to right,#FFAC12, black);
    border: 1px;
    border-radius: 10px;
    margin-top: 15%;
}
.black-content h1{
    font-size: 4vw;
    color: white;
}
.black-content p{
    font-size: 1.5vw;
    color: rgb(177, 171, 171);
    align-items: center;
}
.black-btn{
    background-color: #FFAC12;
    font-weight: 700;
    margin-top: 2%;
    margin-bottom: 5%;
}
:deep(.mdi-arrow-right-thin::before){
    content: "\F19B0";
    color: white;
}
@media (max-width: 768px) {
    .black-content h1{
    font-size: 7vw;
    color: white;
}
.black-content p{
    font-size: 2vw;
    color: white;
}




}
</style>

<script setup>
const router = useRouter();
const more = () => {
router.push("#footer");  
};
</script>