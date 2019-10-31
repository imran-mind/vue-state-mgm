<template>
  <b-button @click="onClick" variant="">
    <slot>Button</slot>
  </b-button>
</template>

<script>
export default {
    props:{
        onClick:{
            type: Function,
            required: true 
        },
        type:{
            type: String
        },
        variant:{
            type: String
        }
    }
}
</script>

