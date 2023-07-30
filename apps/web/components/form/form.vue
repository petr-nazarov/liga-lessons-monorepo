<template>
  <template v-for="field in fields">
    <FormInput v-if="field.type == 'text'" :field="field" :key="field.name" />
  </template>
</template>
<script lang="ts">
import { Field } from '../../types/form.types';
import { Component, Prop, Vue } from 'vue-property-decorator';
import type { PropType } from 'vue';

export default {
  props: {
    fields: {
      type: Array as PropType<Field[]>,
      required: true,
    },
    actions: {
      type: String,
      required: false,
    },
  },
};
</script>
