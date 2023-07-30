<template>
  <label for="" class="block text-900 font-medium mb-2">{{
    field.label
  }}</label>
  <InputText
    :name="field.name"
    :id="field.name"
    v-model="field.value"
    type="text"
    class="w-full mb-3"
  />
</template>
<script lang="ts">
import { Field } from '../../types/form.types';
import type { PropType } from 'vue';
import { Component, Prop, Vue } from 'vue-property-decorator';
export default {
  props: {
    field: {
      type: Object as PropType<Field>,
      required: true,
    },
  },
};
</script>
