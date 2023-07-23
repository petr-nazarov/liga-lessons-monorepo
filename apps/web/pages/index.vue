<template>
  <div v-if="isLoggedIn">You are logged in</div>
  <div v-else>Please <NuxtLink to="/auth"> login</NuxtLink></div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AuthService } from '../services/auth.service';
const authService = new AuthService();
export default defineComponent({
  name: 'Home',
  data() {
    return {
      isLoggedIn: false,
    };
  },
  mounted() {
    this.isLoggedIn = authService.isLoggedIn();
  },
});
</script>
