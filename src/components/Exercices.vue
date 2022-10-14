
<script>
    export default {
      data() {
        return {
        //   name: "Alex",
        //   age: 55,
        //   count: 0,
        //   color: "blue",
        //   i: 0,
        //   arra: [4, 5, 6, 4, 2],
        //   text: ["texto1", "texto2", "texto3", "texto4", "texto5"],
        //   valueTextClick: "texto6",
        //   valueTextMouseOver: "texto8",
        //   isChangeColor: false,
        //   listSuper: ["Platanos", "Naranjas", "Peras", "Melon", "Mandarina"],
          nameForm:'',
          lastnameForm:'',
          mailForm:'',
          passwordForm:'',
          userRegister:'',
          selected:'',
        };
      },
      methods: {
        // textValueClick() {
        //   this.valueTextClick = this.text[Math.floor(Math.random() * this.text.length)];
        // },
        // textValueMouseOver() {
        //   this.valueTextMouseOver = this.text[Math.floor(Math.random() * this.text.length)];
        // },
        // h1ChangeColor() {
        //   this.isChangeColor = true;
        // },
        registerUser(){ 
          this.userRegister=`Se ha registrado correctamente ${this.nameForm} ${this.lastnameForm} `;
          this.nameForm='';
          this.lastnameForm='';
          this.mailForm='';
          this.passwordForm=''
        }
      },
    };
    </script>
     
    <template>
      <!-- <h1: class="[isChangeColor? colorChange1: colorChange2]">Change color 30-09-2022</h1:>
      <p>
        Let's work on the excercise! {{ name }} age {{ age }}, count
        {{ count }} color {{ color }} arra {{ arra[0] }}
      </p>
      <p></p>
      <button @click="textValueClick">Event click {{valueTextClick}}</button>
      <p></p>
      <button @mouseover="textValueMouseOver">Event mouseover {{valueTextMouseOver}}</button>
      
      <p></p>
      <button @click="h1ChangeColor">Change Color</button>
      <p></p>
      <ul id="list">
        <li v-for="(fruit,index) in listSuper" :key=index>
          {{ index +1 }}. {{fruit}}
        </li>
      </ul> --> -->
      <form v-on:submit.prevent="registerUser">
        <div class="formRegister">
        <input class="inputForm" v-model="nameForm" placeholder="Nombre">
        <input class="inputForm" v-model="lastnameForm" placeholder="Apellidos">
        <input class="inputForm" v-model="mailForm" placeholder="Correo">
        <input class="inputForm" type="password" v-model="passwordForm" placeholder="Contraseña">
        <button class="buttonForm" type="submit">Registrar Usuario</button>
      </div>
      <div>{{userRegister}}</div>
      </form>



      <main>
     
   <div> Quién es el rey de España </div>
    <select v-model="selected">
   
    <option disabled value="">Please select one</option>
    <option>A Juan Carlos</option>
     <option>B Felipe </option>
    <option>C Leticia </option>
       </select>
    <div>Selected: {{ selected }}</div>
    </main>

    </template>
     
    <style scoped>
    header {
      line-height: 1.5;
    }
     
    .logo {
      display: block;
      margin: 0 auto 2rem;
    }
     
    @media (min-width: 1024px) {
      header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
      }
     
      .logo {
        margin: 0 2rem 0 0;
      }
     
      header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
      }
    }
     
    .colorChange1 {
      color: blueviolet;
    }
     
    .colorChange2 {
      color: blue;
    }
    .formRegister{
      display: flex;
      flex-direction:column;   
    }
    .inputForm{
      margin-top: 10px;
    }
    .buttonForm{
      margin-top: 20px;
    }
    </style>

<!-- TEORIA -->
<!--   -->