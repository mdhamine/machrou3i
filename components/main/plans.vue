<template>
    <div>
        <section class="plans py-20 bg-gradient-to-t from-sky-300 via-sky-100 to-sky-200" id="services">
            <div class="container mx-auto px-4 text-center">
              <h2 class="text-4xl mb-10 font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 via-sky-500 to-blue-300">
                Our Services
              </h2>
          
              <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div data-aos="zoom-in-up"
                data-aos-duration="1000" class="md:p-14 sm:p-6 space-y-8 h-full  transition duration-1000 hover:scale-110 bg-gradient-to-tr from-blue-700 via-sky-500 to-blue-300 rounded-3xl shadow-lg text-white hover:shadow-xl p-6">
                  <h3 class="text-3xl font-semibold mb-2 mt-1">Starter Plan</h3>
                  <ul class="text-left mb-6 flex flex-col items-center space-y-8 mt-7">
                    <li class="flex items-center font-bold text-center"><span class="font-bold"> ᐧ Your own standard webpage for your ecom project </span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Standard Design</span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Support 24/7</span></li>
                  </ul>
                  <div class=" text-2xl font-bold flex flex-col items-center">
                    <span class="mb-4 mt-14">1000 DZD / month</span>
                    <a href="#buy" class="mt-3 transition-all duration-500 ease-in-out bg-white text-blue-600 py-2 px-6 rounded-3xl shadow-lg hover:bg-gray-200" @click="chooseplan">Buy Now</a>
                  </div>
                </div>
          
                <div data-aos="zoom-in-up"
                data-aos-duration="1000" class="md:p-8 sm:p-6 space-y-8 h-full  transition duration-1000 hover:scale-110 bg-gradient-to-tr from-blue-700 via-sky-500 to-blue-300 rounded-3xl shadow-lg text-white hover:shadow-xl p-6">
                  <h3 class="text-3xl font-semibold mb-4 mt-6">Business Plan</h3>
                  <ul class="text-left mb-6 flex flex-col items-center space-y-8 mt-7">
                    <li class="flex items-center font-bold"><span class="font-bold text-center">ᐧ Your own standard webpage for your ecom project</span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Custom template Design</span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Support 24/7</span></li>
                  </ul>
                  <div class="text-2xl font-bold flex flex-col items-center">
                    <span class="mb-4 mt-14">1500 DZD / month</span>
                    <a href="#buy" class="mt-3 transition-all duration-500 ease-in-out bg-white text-blue-600 py-2 px-6 rounded-3xl shadow-lg hover:bg-gray-200" @click="chooseplan2">Buy Now</a>
                  </div>
                </div>
    
                <div data-aos="zoom-in-up"
                data-aos-duration="1000" class="md:p-8 sm:p-6 space-y-8 h-full  transition duration-1000 hover:scale-110 bg-gradient-to-tr from-blue-700 via-sky-500 to-blue-300 rounded-3xl shadow-lg text-white hover:shadow-xl p-6">
                  <h3 class="text-3xl font-semibold mb-4 mt-6">Professional Plan</h3>
                  <ul class="text-left mb-6 flex flex-col items-center space-y-8 mt-7">
                    <li class="flex items-center font-bold text-center"><span class="font-bold">ᐧ Your own standard webpage for your ecom project</span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Custom Made Design</span></li>
                    <li class="flex items-center font-bold"><span> ᐧ Support 24/7</span></li>
                  </ul>
                  <div class=" text-2xl font-bold flex flex-col items-center">
                    <span class="mb-4 mt-14">2000 DZD / month</span>
                    <a href="#buy" class="mt-3 transition-all duration-500 ease-in-out bg-white text-blue-600 py-2 px-6 rounded-3xl shadow-lg hover:bg-gray-200" @click="chooseplan3">Buy Now</a>
                  </div>
                </div>
    
              </div>
            </div>
          </section>
          
    </div>
</template>

<script>
 import Player from '@vimeo/player';


  export default {
    
    name: "Home",

    
    data() {
      return {
        plan: "",
        notif: false,
        phone: "",
        instagram: "",
        ordersent: "",
        message: "",
        buttonmsg: "Send Order"
      };
    },
    
    methods: {
      async playVideo() {
			try {
				await this.example.play();
			} catch (error) {
				console.error('Error playing video:', error);
			}
		  },

      chooseplan() {
        this.plan = 1;
        try {
          localStorage.setItem('selectedPlan', this.plan);
        
        } catch (error) {
          console.log("looging this", error);
        }
        
      },
      chooseplan2() {
        this.plan = 2;
        localStorage.setItem('selectedPlan', this.plan);
      },
      chooseplan3() {
        this.plan = 3;
        localStorage.setItem('selectedPlan', this.plan);
      },
      async submit() {
        this.buttonmsg = "loading...";
        this.notif = false;

        const phone = this.phone;
        const ig = this.instagram;
        const plan = this.plan;
        const message = this.message;
  
        try {
          const response = await $fetch('/api/buyer', {
            method: "POST",
            body: JSON.stringify({ phone, ig, plan, message }),
            headers: {
              'Content-Type': 'application/json'
            }
          });
  
          if (response.success === true) {
            
            this.buttonmsg = "Send Order";
            this.notif = true;
            this.ordersent = "Thanks for your purchase! We will contact you as soon as possible!";
            setTimeout(() => { 
              this.notif = false;
              
            }, 3000);
          
          }else {
 
            this.ordersent = "error sending your message !";
            this.notif = true;
            
            
          }
        } catch (error) {
          console.log(error);
        }
      }
    }
  };
  </script>
  

<style lang="scss" scoped>

</style>