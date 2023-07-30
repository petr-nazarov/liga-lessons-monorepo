<template>
  <div class="surface-card p-4 shadow-2 border-round w-full lg:w-6">
    <div class="text-center mb-5">
      <div class="text-900 text-3xl font-medium mb-3">Welcome Back</div>
      <span class="text-600 font-medium line-height-3"
        >Don't have an account?</span
      >
      <a class="font-medium no-underline ml-2 text-blue-500 cursor-pointer"
        >Create today!</a
      >
    </div>
    <Form :fields="fields" :actions="actions" />
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from 'types';
const authService = new AuthService();
export default defineComponent({
  name: 'Login',
  data() {
    return {
      fields: [
        {
          name: 'username',
          value: 'username',
          type: 'text',
          label: 'Username',
          placeholder: 'Username',
          required: true,
        },
        {
          name: 'password',
          value: '',
          type: 'text',
          label: 'Password',
          placeholder: 'Password',
          required: true,
        },
      ],
      actions: [
        {
          label: 'Sign In',
          icon: 'pi pi-user',
          type: 'success',
          action: async <CreateUserDto>(data) => {
            await authService.login(data);
          },
        },
      ],
    };
  },
  methods: {
    login() {},
  },
});
</script>
