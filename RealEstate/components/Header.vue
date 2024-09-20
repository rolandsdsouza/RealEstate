<template>
  <div class="head">
    <div class="logo d-sm-left-0">
      <img id="logo-1" src="/images/logo1.png" />
      <img id="logo-2" src="/images/logo.png" alt="" />
    </div>
    <div class="nav d-none d-md-block">
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#places">Services</a>
      <a href="#footer">contact</a>
    </div>
    <div class="menu d-block d-md-none">
      <button @click="toggleSidebar" class="menu-button">☰</button>
      <div :class="['sidebar', { open: isOpen }]">
        <button class="close-button" @click="toggleSidebar">×</button>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#places">Services</a></li>
          <li><a href="#footer">Contact</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  z-index: 1000;
  background-color: #656384;
}
.logo {
  padding: 2vw;
  width: 15vw;
  height: 10vw;
  display: flex;
}
#logo-1 {
  width: 2vw;
  height: 4vw;
}
#logo-2 {
  margin-top: 1.5vw;
  margin-left: 10px;
  width: 8vw;
  height: 2vw;
}
.nav {
  width: 70vw;
  padding: 3vw;
  justify-content: space-between;
}
.nav a {
  text-decoration: none;
  color: white;
  margin-inline: 1.5vw;
  font-size: 2vw;
}
.nav a:hover{
  color: #ffac12;
  transition: .5s;
  /* font-size: 2.5vw; */
}
.work-btn {
  color: black;
  background-color: #ffac12;
  margin-top: 2.3vw;
  margin-right: 1vw;
}

.menu-button {
  font-size: 30px;
  cursor: pointer;
  padding: 15px;
  color: white;
  text-align: center;
  width: 50px;
  border: none;
  top: 15px;
  left: 15px;
  z-index: 1000;
  margin-right: 5vw;
}
.menu-button:hover {
  color: #ffac12;
  transition: 2s;
  /* font-size: 35px; */
}

.sidebar {
  height: 100%;
  width: 250px;
  position: fixed;
  top: 0;
  left: -250px;
  background-color: #c5c3e5;
  overflow-x: hidden;
  transition: 0.3s;
  padding-top: 60px;
  z-index: 999;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
}

.sidebar li {
  padding: 15px 25px;
}

.sidebar a {
  text-decoration: none;
  font-size: 22px;
  color: #1d1b1b;
  display: block;
  transition: 0.3s;
}

.sidebar a:hover {
  color: #f1f1f1;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  font-size: 36px;
  margin: 15px;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
}

.content {
  margin-left: 50px;
  padding: 16px;
  transition: margin-left 0.3s;
}

.content.shifted {
  margin-left: 250px;
}

.sidebar.open {
  left: 0;
}


</style>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isOpen = !this.isOpen;
    },
  },
};
</script>
