<template>
  <div class="text-center" v-if="isLoading">
      <!-- <div class="text-center">
    <b-spinner variant="primary" label="Text Centered"></b-spinner>
    </div> -->
    <b-spinner
        variant="primary"
        style="width: 5rem; height: 5rem;"
        label="Large Spinner"
        aria-hidden="true"></b-spinner>
  </div>
</template>

<<script>
import {mapState} from 'vuex';

export default {
    computed: {
        ...mapState({   
      isLoading: state => state.studentModule.isLoading
    })
    }
}
</script>