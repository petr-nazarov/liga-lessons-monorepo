<template>
  <Message v-if="error" severity="error" @close="() => error = null">{{ error }}</Message>
  <template v-for="field in fields">
    <FormInput v-if="field.type == 'text'" :field="field" :key="field.name" />
  </template>
  <div>
    <template v-for="action in actions">
      <Button
        :label="action.label"
        :icon="action.icon"
        :severity="action.type"
        :loading="isLoading"
        @click="applyAction(action)"
      ></Button>
    </template>
  </div>
</template>
<script lang="ts">
import { Field, Action } from '../../types/form.types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { PropType } from 'vue';

export default {
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true,
    },
    actions: {
      type: Array as PropType<Action[]>,
      required: false,
    },
  },
  data() {
    return {
      isLoading: false,
      error: null,
    };
  },
  methods: {
    async applyAction(action: Action) {
      this.isLoading = true;
      try {
        const data = this.fields.reduce((acc, field) => {
          acc[field.name] = field.value;
          return acc;
        }, {});
        await action.action(data);
      } catch (error) {
        console.log(error.message);
        this.error = error.message;
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>
