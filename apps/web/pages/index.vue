<template>
  <div v-if="isLoggedIn">You are logged in</div>
  <div v-else>Please <NuxtLink id="loginLink" to="/auth"> login</NuxtLink></div>


  <InputText v-model="filters.name" placeholder="Search by name" />
  <DataTable  filterDisplay="row" :value="data" :total-records="meta.total" @page="onPage($event)" lazy paginator :rows="meta.perPage" :rowsPerPageOptions="[5, 10, 20, 50]" tableStyle="min-width: 50rem">
    <Column field="name" header="Name"></Column>
</DataTable>

</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { AuthService } from '../services/auth.service';
import { PostsService } from '../services/posts.service.ts'
const authService = new AuthService();
const postsService = new PostsService();
export default defineComponent({
  name: 'Home',
  data() {
    return {
      isLoggedIn: false,
      data: [],
      filters: {
        name: null,
      },
      meta: {
        perPage: 5,
        page: 1, 
        total: 100,
        totalPages: 0,
        sortBy: '_id',
        sortOder: 'DESC',
      }
    };
  },
  methods: {
    async onPage(event) {
      console.log(event)
      this.meta.page = event.page + 1;
      this.meta.perPage = event.rows;
      await this.getData();
    },
    
    async getData() {
      let filetrs = {};
      for (const key in this.filters) {
        if (this.filters[key]) {
          filetrs[key] = this.filters[key];
        }
      }
      
      const res = await postsService.findPaginated({
        filter: filetrs,
        meta: this.meta as any,
      });
      this.data = res.data;
      this.meta = {
        ...res.meta,
        page: parseInt(res.meta.page) ,
        perPage: parseInt(res.meta.perPage),
        total: parseInt(res.meta.total)
      }
      
      console.log(res);
    },
  },
  mounted() {
    this.isLoggedIn = authService.isLoggedIn();
    this.getData()
  },
});
</script>
