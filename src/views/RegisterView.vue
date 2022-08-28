<script setup>
import logo from "../assets/logo.svg";
import user from "../assets/user.svg";
import call from "../assets/call.svg";
import grid from "../assets/grid.svg";
</script>

<template>
  <div class="register-page h-screen">
    <div
      class="container h-screen flex items-center justify-center mx-auto sm:px-0 px-4"
    >
      <div class="register-box font-main pt-6 pb-11 px-12">
        <div class="box-logo mt-8">
          <img :src="logo" alt="logo testpro gurlan" />
        </div>
        <div class="box-form">
          <h1 class="form-title font-black text-dark text-4xl mt-20">
            Ro'yxatdan o'tish <span class="mark text-main">.</span>
          </h1>
          <form class="form mt-16">
            <div class="form-first-line mb-6 grid grid-cols-2 gap-x-8">
              <div
                class="input flex flex-row border-2 border-gray rounded-xl items-center"
              >
                <img :src="user" class="px-4" alt="user testpro" />
                <input
                  type="text"
                  class="w-full bg-transparent py-3 outline-none"
                  placeholder="Ismingiz*"
                  required
                />
              </div>
              <div
                class="input flex flex-row border-2 border-gray rounded-xl items-center"
              >
                <img :src="user" class="px-4" alt="user testpro" />
                <input
                  type="text"
                  class="w-full bg-transparent py-3 outline-none"
                  placeholder="Familiyangiz*"
                  required
                />
              </div>
            </div>
            <div class="form-next-line">
              <div
                class="input mb-6 flex flex-row border-2 border-gray rounded-xl items-center"
              >
                <img :src="call" class="px-4" alt="call testpro" />
                <input
                  type="text"
                  class="w-full bg-transparent py-3 outline-none"
                  placeholder="Telefon raqamingiz*"
                  pattern="^[0-9 ()+-]+$"
                  required
                />
              </div>
              <div
                class="input mb-6 flex flex-row border-2 border-gray rounded-xl items-center"
              >
                <img :src="grid" class="px-4" alt="grid testpro" />
                <input
                  type="text"
                  class="w-full bg-transparent py-3 outline-none"
                  placeholder="Kurs nomi*"
                  required
                />
              </div>
              <div class="textarea">
                <textarea
                  class="border-2 p-6 outline-none border-gray rounded-xl w-full bg-transparent min-h-[150px] max-h-[160px]"
                  placeholder="Qo'shimcha"
                ></textarea>
              </div>
            </div>
            <button
              class="form-submit transition hover:bg-slate-900 rounded-md w-full bg-dark text-white font-medium mt-8 py-4"
            >
              JO'NATISH
            </button>
          </form>
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

@media (max-width: 552px) {
  .register-box {
    padding-left: 20px;
    padding-right: 20px;
    padding-top: 10px;
  }
}

@media (max-width: 436px) {
  .form-first-line {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    gap: 24px;
  }

  .form-title {
    margin-top: 40px;
    font-size: 30px;
  }

  .form {
    margin-top: 30px;
  }
}
</style>
