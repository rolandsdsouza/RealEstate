<template>
    <div class="page-1">
        <div class="testimony-box">
            <v-carousel show-arrows="hover"  cycle interval="3000">
                <v-carousel-item>
                    <div class="carousel-group">
                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. 
                                Nobis necessitatibus, autem dolorem
                                 quibusdam eaque eos voluptas laudantium 
                                 atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit. 
                                Nobis necessitatibus, autem dolorem 
                                quibusdam eaque eos voluptas laudantium
                                 atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet
                                consectetur adipisicing elit.
                                 Nobis necessitatibus, autem dolorem 
                                 quibusdam eaque eos voluptas laudantium 
                                 atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>

                <v-carousel-item>
                    <div class="carousel-group">
                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Nobis necessitatibus,
                                  autem dolorem quibusdam eaque eos voluptas 
                                  laudantium atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet 
                                consectetur adipisicing elit.
                                 Nobis necessitatibus, autem dolorem 
                                 quibusdam eaque eos voluptas laudantium
                                  atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur 
                                adipisicing elit. Nobis necessitatibus,
                                 autem dolorem quibusdam eaque eos voluptas
                                 laudantium atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>

                <v-carousel-item>
                    <div class="carousel-group">
                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Nobis necessitatibus, 
                                 autem dolorem quibusdam eaque eos voluptas
                                  laudantium atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Nobis necessitatibus,
                                  autem dolorem quibusdam eaque eos voluptas
                                   laudantium atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>

                        <div class="box-1">
                            <hr>
                            <p>Lorem ipsum dolor sit amet consectetur
                                 adipisicing elit. Nobis necessitatibus,
                                  autem dolorem quibusdam eaque eos voluptas 
                                  laudantium atque error minima.</p>
                            <div class="box-black">
                                <img class="black-image" src="/images/Oval.png" alt="">
                                <div class="box-box">
                                    <h1>Lara Madrigal</h1>
                                    <p>Designer</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </v-carousel-item>
            </v-carousel>
        </div>
    </div>
</template>

<style scoped>
.page-1 {
    background-color: aliceblue;
}

.testimony-box {
    display: flex;
    justify-content: center;
    height: 100%;
}

.carousel-group {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: nowrap;
}

.box-1 {
    /* width: 200px; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex: 1 0 30%; 
    /* background-color: #FFAC12 */
    /* width: 20%; */
}

.box-1 hr {
    width: 30vw;
    height: 4px;
    background-image: linear-gradient(to right, #FFAC12, black);
    border: 1px;
    border-radius: 10px;
    margin-top: 10%; 
}

.box-1 p {
    width: 30vw;
    font-size: 1.5vw;
    font-weight: 700;
}

.box-black {
    background-color: black;
    margin-top: 2vw;
    display: flex;
    margin-bottom: 1%; 
    width: 30vh;
}

.black-image {
    margin-top: 5%;
    margin-left: 10px;
    width: 5vw;
    height: 5vw;
    margin-bottom: 5%; 
}

.box-box {
    width: 20%;
}

.box-box h1 {
    width: 100px;
    color: rgb(255, 255, 255);
    font-size: 2vw;
    margin-top: 1vw; 
    margin-left: 4vw;
}

.box-box p {
    color: #b0aeaa;
    font-size: 2vw;
    margin-left: 4vw;
}


@media (max-width: 1200px) {
    .box-1 {

        flex: 1 0 50%; 
    }
    /* .box-1 hr{
        width: 250px;
        margin-bottom: 30px
    }
    .box-1 p{
        width: 200px;
        margin-bottom: 30px;
        font-size: 3.5vw;
    }
    .box-box h1{
        font-size: 4vw;
    } */
}
.box-black {
    background-color: black;
    margin-top: 2vw;
    display: flex;
    margin-bottom: 1%; 
    width: 30vw;
}

@media (max-width: 544px) {
    .box-1 {
        flex: 1 0 100%; 
    }
     .box-1 hr{
        width: 250px;
        margin-bottom: 30px
    }
    .box-1 p{
        width: 250px;
        margin-bottom: 30px;
        font-size: 3.5vw;
    }
    .box-box h1{
        font-size: 4vw;
    }
    .box-black {
    background-color: black;
    margin-top: 2vw;
    display: flex;
    margin-bottom: 1%; 
    width: 30vh;
}
}
</style>