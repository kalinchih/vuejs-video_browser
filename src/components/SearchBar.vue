<template>
  <div>
    <!-- <input v-on:input="onInput"> -->
    <input @input="onInput">
  </div>
</template>
<script>
export default {
  name: "SearchBar",
  methods: {
    onInput: function(event) {
      //   console.log(event.target.value);
      // pass event to parent component
      this.$emit("termChanged", event.target.value);
    }
  }
};
</script>


<style scoped>
input {
  width: 75%;
}
div {
  text-align: center;
  margin: 20px;
}
</style>
