<template>
  <v-sheet class="d-flex align-center justify-between" :style="{ backgroundColor: 'rgb(29, 32, 65)' }" :rounded="isMobile ? '0' : 't-lg'">

    <v-row no-gutters class="w-100">
      <v-col cols="10" class="px-2 px-md-4 py-4 py-md-2">
        <h1 class="text-white text-body-1 text-md-h4 font-weight-bold">OUR KANBAN BOARD</h1>
  </v-col>
      <v-col cols="2" class="px-2 px-md-4 py-4 py-md-2 text-center">
        <a @click.prevent="logout" href="#" class="text-body-1 text-md-h4 font-weight-bold">LOGOUT</a>
      </v-col>
      <v-spacer></v-spacer>
    </v-row>
  </v-sheet>
</template>

<script setup>
import { computed } from 'vue'
import { useDisplay } from 'vuetify'
import { useRouter } from 'vue-router'

const display = useDisplay()
const isMobile = computed(() => display.mobile.value)

const router = useRouter()

const logout = () => {
  localStorage.removeItem('user-info'); // ลบข้อมูลผู้ใช้
  router.push({ name: 'HomeView' }).then(() => {
    window.location.reload(); // รีเฟรชหน้าเพื่อให้แน่ใจว่าออกจากระบบจริง ๆ
  });
};
</script>




