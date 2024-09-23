<template>
    <div class="flex flex-col justify-center items-center h-screen bg-white">
      <div class="flex flex-col items-center rounded-lg bg-blue-600 p-8">
        <input 
          v-model="email" 
          placeholder="Email" 
          class="border bg-white rounded-md mb-4 p-2 w-80 text-black placeholder:text-black font-bold" 
        />
        <select 
          v-model="coursetoadd" 
          class="border bg-white rounded-md py-6 h-8 mt-6 mb-4  w-full  text-black placeholder:text-black font-bold"
        >
          <option disabled selected>Choose course</option>
          <option value="1">Younes</option> 
          <option value="2">English Speaker</option>
          <option value="3">German</option>
          <option value="4">French</option>
        </select>
      </div>
      
      <button 
        @click="addCourseToUser" 
        class="flex justify-center rounded-3xl bg-blue-700 text-white py-2 px-4 mt-8"
      >
        Add Course
      </button>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        email: '',
        coursetoadd: '',
      }
    },
    methods: {
      async addCourseToUser() {
        try {
          const { data: user, error: fetchError } = await this.$supabase
            .from('courses')
            .select('*')
            .eq('email', this.email)
            .single()
  
          if (fetchError) throw fetchError
  
          if (user) {
            const updatedCourses = user.courses ? [...user.courses, this.coursetoadd] : [this.coursetoadd]
  
            const { data, error: updateError } = await this.$supabase
              .from('courses')
              .update({ courses: updatedCourses })
              .eq('email', this.email)
  
            if (updateError) throw updateError
  
            alert('Course added')
          } else {
            alert('User not found')
          }
        } catch (error) {
          console.error('Error:', error.message)
          alert('An error ')
        }
      },
    },
  }
  </script>
  