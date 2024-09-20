<template>
<div>
    <div class="hero-full">
        <v-img src="/images/house.png" alt=""></v-img>
        <div class="hero-title">
            <h1 class="text">Beautiful<br>homes made<br>for you</h1>
            <p>Lorem, ipsum dolor sit amet <br> consectetur adipisicing elit. Qui voluptatum <br> vitae necessitatibus eligendi deserunt <br> veniam officia, provident quia eum quae.</p>
            <div class="hero-box">
                <v-btn  @click="listings" class="hero-btn" append-icon="mdi-arrow-right-thin" variant="plain">See all listing</v-btn>
            </div>
        </div>
    </div>
</div>
</template>



<script setup>
const router = useRouter();
const listings = () => {
  router.push("#places"); 
};
</script>



<style scoped>
.hero-full{
    position: relative;
    margin-top: 5vw;
}
.hero-title{
    position: absolute;
    top: 15%;
    left: 5%;
}
.hero-title h1{
    font-size: 6vw;
    color: white;
    line-height: 6vw;
}
.hero-title h1:hover{
    color: #ffffff;
    transition: 2s;
    font-size: 6.5vw;
    text-shadow: 0 0 3px #000000, 0 0 3px #8a8ab2;
}
.hero-title p{
    font-size: 1.5vw;
    color: white;
    margin-top:5%;
}
.hero-title p:hover{
    color: #FFB901;
    transition: 2s;
    text-shadow: 0 0 3px #000000, 0 0 5px #212123;
}
.hero-box{
    height: 10vw;
    width: 80vw;
    margin-inline: 5%;
    background-color: white;
    margin-top: 11.5%;
}
.hero-btn{
    color: black;
    margin: 2%;
    font-weight: 800;
}
:deep(.mdi-arrow-right-thin::before){
    content: "\F19B0";
    color: #FFAC12;
}
</style>