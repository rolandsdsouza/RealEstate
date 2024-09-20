<template>
    <div class="footer-page">
        <div class="footer-title1">
            <h2>Make your dreams a</h2>
            <h1>Reality</h1>
        </div>
        <div class="footer-info">
            <div class="logo">
                <div class="logo-box">
                    <NuxtLink to="#home">
                    <img src="/images/logo1.png" alt="">
                    <img src="/images/logo.png" alt="">
                    </NuxtLink>
                    <NuxtLink to="https://www.instagram.com/" target="_blank">
                    <img class="social" src="/images/Social.png" alt="">
                    </NuxtLink>
                </div>
            </div>
            <div class="info">
                <h1>Quick Links</h1>
                <NuxtLink class="info-p"to="#home"><p >Home</p></NuxtLink>
                <NuxtLink class="info-p"to="#about"><p >About</p></NuxtLink>
                <NuxtLink class="info-p"to="#places"><p >Services</p></NuxtLink>
                <NuxtLink class="info-p"to="#footer"><p >Contact</p></NuxtLink> 
            </div>
            <div class="info">
                <h1>Support</h1>
                <NuxtLink class="info-p"to="/terms"><p >Terms&Conditions</p></NuxtLink>
                <NuxtLink class="info-p"to="/policy"><p >Privacy Policy</p></NuxtLink>
            </div>
        </div>
    </div>
</template>


<style scoped>
.footer-page{
    background-color: rgb(0, 0, 0);
    flex-wrap: wrap;

}
.footer-title1 h2{
    font-size: 4vw;
    color: white;
    margin-left: 10vw;
}
.footer-title1{
    display: flex;
}
.footer-title1 h1{
    font-size: 4vw;
    color: #FFAC12;
    margin-left: 1vw;
}
.footer-btn{
    height: 5vw;
    width: 25vw;
    background-color: #FFAC12;
    color: black;
    font-weight: 700;
    margin-top: 1.5vw;
    margin-left: 10vw;
    padding: 10px;
    font-size: 2vw;
}
:deep(.mdi-arrow-right-thin::before){
    content: "\F19B0";
    color: #e5e1da;
}
.footer-info{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 5%;
}
.logo{
    background-color: #000000;
}
.info{
    margin-top: 4vw;
    width: 250px;
    background-color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 10%;
}
.logo-box{
    align-items: center;
    justify-content: space-around;
    margin-left: 20%;
}
.logo-box img{
    height: 30px;
    margin-left: 5px;
}
.info h1{
    font-size: 2vw;
    color: white;
    font-weight: 600;
}
.info p{
    font-size: 2vw;
    color: #63615f;
    text-decoration: none;
}
.info-p{
    text-decoration: none;
}
.social{
    margin-top: 20px;
}
</style>
