<template>
  <div class="w-full bg-white viap-6 ">
    <div class="flex justify-center my-6 ">
      <div data-aos="zoom-in-out" data-aos-duration="1000" class="mb-6 my-6 max-w-lg lg:w-full  rounded-3xl border-4 border-blue-700 py-14 px-8 mx-7 text-black bg-gradient-to-tr from-blue-800 via-sky-500 to-blue-400">
        <div class="flex justify-center items-center h-18 w-full">
          <img class="h-20 w-full flex justify-center items-center mb-6" src="https://i.ibb.co/kXnGVZj/logo.png" alt="logo">
          
        </div>
         
        <div v-if="notif" role="alert" class="alert bg-[#030425] text-white mb-5 bg-gradient-to-r from-blue-800 via-blue-700 to-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" class="stroke-info shrink-0 w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"  fill="white" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{{ ordersent }}</span>
        </div>
        <input
          type="text"
          v-model="input1"
          required
          placeholder="Name"
          class="mt-9 text-black placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2  bg-white w-full"
        />
        <input
          type="text"
          v-model="input2"
          required
          placeholder="Phone"
          
          class=" text-black placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2 mt-6 bg-white w-full"
        />
        
         <select
          v-model="selectedCategory"
          required
          class="text-black placeholder:text-black flex justify-center text-center border-blue-700 border-2 hover:border-4 rounded-2xl  p-2 mt-6 bg-white w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="">Select Category</option>
          <option
            v-for="category in categories"
            :key="category.id"
            :value="category.id"
          >
            {{ category.name }}
          </option>
        </select>

         <select
          v-if="selectedCategory"
          v-model="selectedProduct"
          required
          class="block border-2 hover:border-4 rounded-2xl my-4 mt-6 text-black px-2 h-11 bg-white w-full appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="">Select Product</option>
          <option
            v-for="product in getProductsByCategory(selectedCategory)"
            :key="product.id"
            :value="product"
          >
            {{ product.name }} - Price: {{ product.price }}
          </option>
        </select>

        <input
          type="number"
          v-model="units"
          required
          placeholder="how many units"
          v-if="selectedCategory"
          class=" text-black placeholder:text-black border-blue-700 border-2 hover:border-4 rounded-2xl block p-2 mt-6 bg-white w-full"
        />
        
        <div class="flex justify-center">
          <button class=" mt-8 shine rounded-full px-6 py-2 bg-gradient-to-bl from-blue-800 via-blue-600 to-blue-700 text-white" @click="addtocart"> add product 
          </button>
        </div>

        <select
          id="state"
          v-model="selectedState"
          required
          class="block border-2 hover:border-4 mb-4 rounded-2xl my-6 mt-6 px-2  text-black bg-white w-full h-11 appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option disabled value="">Wilaya</option>
                <option value="Adrar">1⋅Adrar</option>
								<option value="chlef">2⋅Chlef</option>
								<option value="laghouat">3⋅Laghouat</option>
								<option value="oum_el_bouaghi">4⋅Oum El Bouaghi</option>
								<option value="batna">5⋅Batna</option>
								<option value="bejaia">6⋅Béjaïa</option>
								<option value="biskra">7⋅Biskra</option>
								<option value="bechar">8⋅Béchar</option>
								<option value="blida">9⋅Blida</option>
								<option value="bouira">10⋅Bouira</option>
								<option value="tamanrasset">11⋅Tamanrasset</option>
								<option value="tebessa">12⋅Tébessa</option>
								<option value="tlemcen">13⋅Tlemcen</option>
								<option value="tiaret">14⋅Tiaret</option>
								<option value="tizi_ouzou">15⋅Tizi Ouzou</option>
								<option value="algiers">16⋅Algiers</option>
								<option value="djelfa">17⋅Djelfa</option>
								<option value="jijel">18⋅Jijel</option>
								<option value="setif">19⋅Sétif</option>
								<option value="saida">20⋅Saïda</option>
								<option value="skikda">21⋅Skikda</option>
								<option value="sidi_bel_abbes">22⋅Sidi Bel Abbès</option>
								<option value="annaba">23⋅Annaba</option>
								<option value="guelma">24⋅Guelma</option>
								<option value="constantine">25⋅Constantine</option>
								<option value="medea">26⋅Médéa</option>
								<option value="mostaganem">27⋅Mostaganem</option>
								<option value="msila">28⋅M'Sila</option>
								<option value="mascara">29⋅Mascara</option>
								<option value="ouargla">30⋅Ouargla</option>
								<option value="oran">31⋅Oran</option>
								<option value="el_bayadh">32⋅El Bayadh</option>
								<option value="illizi">33⋅Illizi</option>
								<option value="bordj_bou_arreridj">34⋅Bordj Bou Arréridj</option>
								<option value="boumerdes">35⋅Boumerdès</option>
								<option value="el_tarf">36⋅El Tarf</option>
								<option value="tindouf">37⋅Tindouf</option>
								<option value="tissemsilt">38⋅Tissemsilt</option>
								<option value="el_oued">39⋅El Oued</option>
								<option value="khenchela">40⋅Khenchela</option>
								<option value="souk_ahras">41⋅Souk Ahras</option>
								<option value="tipaza">42⋅Tipaza</option>
								<option value="mila">43⋅Mila</option>
								<option value="ain_defla">44⋅Aïn Defla</option>
								<option value="naama">45⋅Naâma</option>
								<option value="ain_temouchent">46⋅Aïn Témouchent</option>
								<option value="ghardaia">47⋅Ghardaïa</option>
								<option value="relizane">48⋅Relizane</option>
								<option value="timimoun">49⋅Timimoun</option>
								<option value="bordj_badji_mokhtar">50⋅Bordj Badji Mokhtar</option>
								<option value="ouled_djellal">51⋅Ouled Djellal</option>
								<option value="beni_abbees">52⋅Béni Abbès</option>
								<option value="in_salah">53⋅In Salah</option>
								<option value="in_guezzam">54⋅In Guezzam</option>
								<option value="touggourt">55⋅Touggourt</option>
								<option value="djanet">56⋅Djanet</option>
								<option value="el_mghair">57⋅El M'Ghair</option>
								<option value="el_meniaa">58⋅El Meniaa</option>
        </select>

        <select
          id="delivery"
          v-model="delivery"
          required
          class="block border-2 hover:border-4 mb-4 rounded-2xl my-6 mt-6 px-2 text-black bg-white w-full h-11   appearance-none focus:outline-none focus:ring-0 focus:border-blue-200 peer"
        >
          <option  value="">Deskstop</option>
          <option value="adrar">Domicile</option>
        
        </select>
        
        
        <div class="mt-8 ">
        <label class=" mt-6 my-5 py-5 text-black text-lg"></label>
        <textarea
          placeholder="your additional remarks here!"
          required
          class="text-black flex justify-start items-start text-left px-2 py-3 placeholder:text-black padding rounded-3xl border-blue-700 border-2 hover:border-4 mt-2 bg-white w-full"
          rows="5" 
        ></textarea>


      <div class="flex flex-col items-center mt-4">
      <label for="input" class="flex flex-col items-center mt-4 py-2 px-8 bg-white   text-center rounded-full cursor-pointer">
        <input
          id="input"
          type="file"
          name="file"
          class="hidden"
          accept="image/*"
          @change="fileUploaded"
        />
        <span class="bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400 font-bold bg-clip-text text-transparent">{{ imageName === "" ? "upload your file" : imageName }}</span>
      </label>
    </div>
    </div>


        <div class="flex justify-center">
          <button class="bg-white mt-14 shine rounded-full px-4 py-3 " @click="sendOrder">
            <span v-if="!loading" class="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400">Send Order</span>
            <span v-if="loading" class="bg-clip-text font-bold text-transparent bg-gradient-to-r from-blue-800 via-sky-500 to-blue-400">Loading...</span>
          </button>
        </div>
       
      </div>
    </div>

    

    
  </div>
</template>

<script>
import { categories } from './info';
import { name } from './info';



export default {
  data() {
  return {
    input1: '',
    input2: '',
    selectedCategory: '',
    selectedProduct: '',
    selectedprice: '',
    selectedState: '',
    modaltrue: false,
    modaltitle: "",
    modalmsg: "",
    loading: false,
    categories: categories,
    cart: [],
    image: "",
    imageName: "",
    delivery: "",
    notif: false,
    ordersent: "",
    name: name,
    price: 0,
    units: "",
    
  };
},
watch: {
    selectedProduct(selectedProduct) {
      this.total = this.getprice(selectedProduct) * this.units;
    }
  },
methods: {
  async fileUploaded(event) {
      const target = event.target;
      if (target.files == null) return;
      const file = target.files[0];
      this.imageName = file.name;

      const reader = new FileReader();

      reader.onload = (e) => {
        const base64Data = e.target.result.split(",")[1];
        this.image = base64Data;
      };

      reader.readAsDataURL(file);
    },
    
 
   getProductsByCategory(categoryId) {
    const category = this.categories.find(cat => cat.id === categoryId);
    console.log(category ? category.products: []);
    return category ? category.products : [];
  },
  
  

  async addtocart(){


  
  if (!this.selectedCategory || !this.selectedProduct ||  !this.units ||  !this.input2 ||  !this.input1 ) {
    alert("fill product info and your phone number");
  }
  
  const name = this.input1;
  const phone = this.input2;
  const product = this.selectedProduct;
  this.price = this.selectedProduct.price * this.units;
    
  try {
   
    this.cart.push({ category: this.selectedCategory, product: this.selectedProduct, units: this.units, price: this.price });
    
    console.log("cart is ",this.cart);

    this.notif = true;
    this.ordersent = "Your product was added!";
    setTimeout(() => { 
    this.notif = false;
      
    }, 5000);


  } catch (error) {
    console.log(error);
  }
  
  try {
     
      const res = await $fetch('/api/db', {
        method: "POST",
        body: {
          name,
          phone,
          product,
          
         
        },
        headers: {
          "Content-Type": "application/json",
        },
      });

   
      if (res && res.success === true) {
        console.log("Data sent");
        
        this.selectedCategory = '';
        this.selectedProduct = '';
        this.units= "";
      
        
        
      } else {
        console.log("Failed", res);
      }

    } catch (error) {
      console.error("An error occurred:", error);
    }
    
  
  },

  async sendOrder() {
    this.loading = true;
    
    this.notif = false;
    const receiveremail = "cyn.webservices@gmail.com";
    const name = this.input1;
    const phone = this.input2;
    const state = this.selectedState;
    const delivery = this.delivery;
    const image =  this.image;

    const cart = this.cart;

    const total = this.cart.reduce((x, item) => x + item.price, 0);
    
    console.log("price is" , total);




    if (!name || !phone || !state || !cart) {
      this.showmodel('Error', 'Please fill out all fields!');
      this.loading = false;
      return;
    }
    
    try {
      const response = await $fetch('api/email', {
        method: 'POST',
        body: JSON.stringify({
          name,
          phone,
          state,
          cart,
          delivery,
          image,
          receiveremail,
          total,
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status == 200) {
        console.log("emaol sent");
        this.notif = true;
        this.ordersent = "Thanks for your purchase! We will contact you as soon as possible!";
        this.loading = false;
        setTimeout(() => { 
        this.notif = false;
          
        }, 5000);
      }
    } catch (error) {
      this.ordersent = "error sending your message !";
      this.notif = true;
      setTimeout(() => { 
        this.notif = false;
          
        }, 5000);
            
    }

      
  },
  showmodel(title, message) {
    this.modaltitle = title;
    this.modalmsg = message;
    this.modaltrue = true;
  },
  close() {
    this.modaltrue = false;
  },
  
},

};
</script>

<style>
.padding{

  padding-bottom: 88px;
}
</style>

