<template>
  <div class="login-page1">
    <div class="content-container">
      <div class="hero-full">
        <div>
          <div class="footer-title1">
            <h2>Make your dreams a</h2>
            <h1>Reality</h1>
          </div>
          <div class="swiper-container">
            <swiper
              :modules="[Pagination, Autoplay]"
              :slides-per-view="3"
              :pagination="{ clickable: true }"
              :autoplay="{ delay: 2000, disableOnInteraction: false }"
              @swiper="onSwiper"
              @slideChange="onSlideChange"
            >
              <swiper-slide v-for="(item, index) in items" :key="index">
                <div class="img-container">
                  <img class="img-slide" :src="item.image" />
                </div>
              </swiper-slide>
            </swiper>
          </div>
        </div>
      </div>

      <div class="hero-full2">
        <div class="login-box1">
          <v-card
            class="mx-auto pa-12 pb-8"
            elevation="8"
            max-width="45vw"
            max-height="70vh"
            rounded="lg"
            background-color="transparent"
            color="rgb(196, 168, 121)"
          >
            <div class="head">
    <div class="logo d-sm-left-0">
      <img id="logo-1" src="/images/logo1.png" />
      <img id="logo-2" src="/images/logo.png" alt="" />
    </div>
  </div>
            <div class="text-subtitle-1 text-medium-emphasis">Account</div>

            <v-text-field
              width="25vw"
              density="compact"
              placeholder="Email address"
              prepend-inner-icon="mdi-email-outline"
              variant="outlined"
              v-model="email"
              :error="!isValidEmail && email.length > 0"
              :error-messages="!isValidEmail && email.length > 0 ? 'Invalid email format' : ''"
            ></v-text-field>

            <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
              Password
            </div>

            <v-text-field
              width="25vw"
              :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
              :type="visible ? 'text' : 'password'"
              density="compact"
              placeholder="Enter your password"
              prepend-inner-icon="mdi-lock-outline"
              variant="outlined"
              v-model="password"
              @click:append-inner="visible = !visible"
            ></v-text-field>

            <!-- Login Button (disabled if fields are invalid) -->
            <v-btn
              @click="login"
              class="mb-8"
              color="#D79110"
              size="large"
              variant="tonal"
              block
              :disabled="!canSubmit"
            >
              Log In
            </v-btn>
          </v-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const email = ref("");
const password = ref("");
const visible = ref(false);

const isValidEmail = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email.value);
});

const canSubmit = computed(() => {
  return isValidEmail.value && password.value.length > 0;
});

const items = ref([
  { name: "Ganesh", image: "/images/real-estate-1.jpg" },
  { name: "Ramesh", image: "/images/real-estate-2.jpg" },
  { name: "Harish", image: "/images/real-estate-3.jpg" },
  { name: "Ganesh", image: "/images/real-estate-4.jpg" },
  { name: "Ganesh", image: "/images/real-estate-5.jpg" },
  { name: "Ganesh", image: "/images/real-estate-6.jpg" },
  { name: "Ganesh", image: "/images/real-estate-7.jpg" },
  { name: "Ganesh", image: "/images/real-estate-8.jpg" },
]);

const onSwiper = (swiper) => {
  console.log("Swiper instance:", swiper);
};

const onSlideChange = (swiper) => {
  console.log("Slide changed to index:", swiper.activeIndex);
};

const router = useRouter();
const login = () => {
  router.push("/login");
};

onMounted(() => {
  console.log("Component mounted");
  console.log("Number of items:", items.value.length);
});
</script>

<style scoped>
.content-container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 20px;
  /* margin-top: 5%; */
}

.hero-full{
  margin-top: 10%;
}
.hero-full2 {
  flex: 1;
  min-width: 300px;
}

.swiper-container {
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  /* border-radius: 10px; */
}

.img-container {
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #FAEAD7;
  /* border-radius: 10px; */
}

.login-page1 {
  /* margin-top: 5vw; */
  height: 100vh;
  background-color: antiquewhite

}

.img-slide {
  width: 90%;
  height: 100%;
  /* margin-block: 10px; */
  object-fit: cover;
  border-radius: 10px
  
}

.footer-title1 h2 {
  font-size: 3vw;
  color: rgb(131, 105, 105);
}

.footer-title1 {
  display: flex;
  margin-left: 20px;
}

.footer-title1 h1 {
  font-size: 3vw;
  color: #FFAC12;
  margin-left: 1vw;
}

.login-box1 {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15vh;
}

.v-card {
  margin: 0 auto;
  max-width: 300px;
  width: 100%;
}

@media (max-width: 768px) {
  .content-container {
    flex-direction: column;
    align-items: center;
  }

  .footer-title1 h2 {
    font-size: 10vw;
  }

  .footer-title1 h1 {
    font-size: 10vw;
  }

  .img-slide {
    height: 250px;
  }

  .login-box1 {
    width: 500px;
  }
  .mx-auto {
    width: 400px;

  }
  .login-page1 {
  /* margin-top: 5vw; */
  height: 200vh;
  width: 200vw;
  background-color: antiquewhite

}

}
</style>