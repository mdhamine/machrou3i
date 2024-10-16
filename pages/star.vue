<template>
  <div class="w-full h-full p-6 flex justify-center">
    <h1>Text Modifier</h1>
    <textarea 
      v-model="userInput" 
      @input="modifyText" 
      placeholder="text."
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


