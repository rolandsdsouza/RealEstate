<template>
  <div style="width: 100%; max-width: 500px; margin: 0 auto">
    <h2>Swiper Test</h2>
    <swiper
      :modules="[Navigation, Pagination, Autoplay]"
      :slides-per-view="3"
      :navigation="true"
      :pagination="{ clickable: true }"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(item, index) in items" :key="index">
        <div
          style="
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f0f0;
          "
        >
          <!-- <h1>{{ item.name }}</h1> -->
          <br />
          <img class="img-slide" :src="item.image" />
          <br />

          <!-- <p>{{ item.rating }}</p> -->
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const items = ref([
  {
    name: "Ganesh",
    image: "/images/realestate-1.jpg",
    rating: "5",
  },
  {
    name: "Ramesh",
    image: "/images/realestate-2.jpg",
    rating: "5",
  },
  {
    name: "HArish",
    image: "/images/realestate-3.jpg",
    rating: "5",
  },
  {
    name: "Ganesh",
    image: "/images/realestate-4.jpg",
    rating: "5",
  },
  {
    name: "Ganesh",
    image: "/images/realestate-5.jpg",
    rating: "5",
  },
  {
    name: "Ganesh",
    image: "/images/realestate-6.jpg",
    rating: "5",
  },
  {
    name: "Ganesh",
    image: "/images/realestate-7.jpg",
    rating: "5",
  },
  {
    name: "Ganesh",
    image: "/images/realestate-8.jpg",
    rating: "5",
  },
]);

const onSwiper = (swiper) => {
  console.log("Swiper instance:", swiper);
};

const onSlideChange = (swiper) => {
  console.log("slide changed to index:", swiper.activeIndex);
};

onMounted(() => {
  console.log("Component mounted");
  console.log("Number of items:", items.value.length);
});
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 250px;
}
.img-slide{
  width: 150px;
  height: 200px;
}
</style>
