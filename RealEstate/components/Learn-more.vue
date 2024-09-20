<template>
  <div class="good-hands1">
    <v-row>
      <v-col cols="12" lg="6">
        <div class="section-1">
          <hr />
          <h1>You're in good hands</h1>
          <p>
            Torquatos nostros? quos dolores eos,<br />
            qui dolorem ipsum per se texit, ne ferae quidem <br />se repellere,
            idque instituit docere sic:<br />
            omne animal, simul atque integre iudicante itaque <br />aiunt hanc
            quasi involuta aperiri, altera occulta<br />
            quaedam et voluptatem accusantium doloremque.
          </p>
          <v-btn @click="more" class="good-hands-btn" append-icon="mdi-arrow-right-thin"
            >Learn more</v-btn
          >
        </div>
      </v-col>
      <v-col cols="12" lg="6">
        <div class="section-2">
          <img src="/images/Learnmore.png" alt="" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.good-hands1 {
  background-color: white;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
.section-2 {
  display: flex;
  justify-content: center;
}
.section-2 img {
  margin-top: 10%;
  width: 100%;
}
.section-1 {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.section-1 hr {
  width: 10vw;
  height: 5px;
  background-image: linear-gradient(to right, #ffac12, black);
  border: 1px;
  border-radius: 10px;
  margin-top: 10%;
}
.section-1 h1 {
  font-size: 4vw;
}
.section-1 p {
  font-size: 1.5vw;
}
.good-hands-btn {
  width: 20vw;
  height: 5vw;
  color: white;
  background-color: black;
  padding: 10px;
  margin-top: 2%;
  font-size: 2vw;
}
:deep(.mdi-arrow-right-thin::before) {
  content: "\F19B0";
  color: #ffac12;
}
</style>

<script setup>
const router = useRouter();
const more = () => {
router.push("#footer");  
};
</script>