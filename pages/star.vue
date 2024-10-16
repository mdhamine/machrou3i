<template>
  <div class="container">
    <h1>Text Modifier</h1>
    <textarea 
      v-model="userInput" 
      @input="modifyText" 
      placeholder="Type your text here..."
      rows="5"
      class="w-full p-2 border border-gray-300 rounded"
    ></textarea>
    <div class="mt-4">
      <h2>Modified Text:</h2>
      <p class="border border-gray-300 p-2 rounded">{{ modifiedText }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userInput: '',
      modifiedText: '',
    };
  },
  methods: {
    modifyText() {
      // Replace * with ***
      this.modifiedText = this.userInput.replace(/\*/g, '***');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
  padding: 20px;
}
textarea {
  resize: none;
}
</style>
