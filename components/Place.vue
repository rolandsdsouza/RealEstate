<template>
    <div class="place-page">
        <div class="place-line">
            <hr>
            <h1>Find your next place to live</h1>
        </div>
        <div class="place-info">
            <div class="info-line1 ">
                <div class="house-1 mx-2 my-2 rounded-xl ">
                    <img src="/images/house-1.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                     <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div class="house-1 mx-2 my-2 rounded-xl ">
                    <img src="/images/house-2.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                    <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                    
                </div>
                <div class="house-1 mx-2 my-2 rounded-xl">
                    <img src="/images/house-3.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                    <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div class="house-1 mx-2 my-2 rounded-xl">
                    <img src="/images/house-4.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                     <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div class="house-1 mx-2 my-2 rounded-xl">
                    <img src="/images/house-5.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                     <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
                <div class="house-1 mx-2 my-2 rounded-xl">
                    <img src="/images/house-1.png" alt="">
                    <h1>Malto House</h1>
                    <hr>
                     <div class="house-icons1">
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Bed.svg" alt="">
                            <h1>1</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Shower.svg" alt="">
                            <h1>2</h1>
                        </div>
                        <div class="house-flex">
                            <img class="house-icons" src="/images/Size.svg" alt="">
                            <h1>3</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.place-page{
    width: 100%;
}
.place-line hr{
    width: 15vw;
    height:5px;
    background-image: linear-gradient( to right,#FFAC12, black);
    border: 1px;
    border-radius: 10px;
    margin-top: 5%;
    margin-left: 10%;
}
.place-line h1{
    margin-left: 10%;
    margin-top: 1%;
    font-size: 6vw;
}
.place-info{
    width: 80%;
    height: 30%;
    margin-inline: 10%;
    margin-top: 2%;
    align-items: center;
}
.info-line1{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.house-1{
    width: 300px;
    height: 40%;
    background-color: rgb(222, 227, 227);
    box-shadow: 5px 10px rgba(125, 123, 123, 0.408) ;
}
.house-1 img{
    width: 100%;
    height: 60%;
}
.house-1 h1{
    font-size: 3vw;
    padding: 10px;
    margin-left: 20px;
    font-weight: 600;
}
.house-1 hr{
    height: 2px;
    background-color: #c2bfbb;
    border: 1px;
}
.house-icons1{
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
}
.house-icons1 h1{
    font-size: 35px;
    margin-top: -10px;
}
.house-flex img{
    padding: 5px;
    /* margin-left: 1px; */
    width: 40px;
    height: 40px;
}
.house-flex{
    display: flex;
}
@media (max-width: 768px) {
    .house-1 h1{
    font-size: 8vw;
    padding: 10px;
    margin-left: 20px;
    font-weight: 600;
}
.place-line h1{
    margin-left: 10%;
    margin-top: 1%;
    font-size: 7vw;
}


}

</style>