<script setup>
import logo from "../assets/logo.svg"
</script>

<template>
  <div class="register-page h-screen">
    <div class="container mx-auto sm:px-0 px-4">
      <div class="register-box h-[90vh]">
        <div class="box-logo">
            <img :src="logo" alt="logo testpro gurlan">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.register-page {
  background: url("../assets/background.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 10% 60%;
}

.register-box {
  background: rgba(255, 255, 255, 0.37);
  box-shadow: 2px 2px 103px -7px rgba(0, 0, 0, 0.04);
  backdrop-filter: blur(40px);
  border-radius: 12px;
}
</style>
