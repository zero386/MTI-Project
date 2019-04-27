<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <div>
        <h2>Name</h2>
        <input type="text" v-model="nameCustomer" maxlength="30"/>
      </div>

      <div>
        <h2>Address</h2>
        <input type="text" v-model="addressCustomer" maxlength="30"/>
      </div>

      <div>
        <h2>Phone</h2>
        <input type="number" v-model="phoneCustomer"/>
      </div>

      <div>
        <h2>Email</h2>
        <input type="text" v-model="emailCustomer" maxlength="50"/>
      </div>

      <div>
        <h2>Age</h2>
        <input type="number" v-model="ageCustomer"/>
      </div>

      <div>
        <h2>Register</h2>
        <input type="submit" value="Register" v-on:click="sendData()" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Proposal Solution Form',
      jsonData: [],
      jsonResultData: [],
      nameCustomer: 'Christian',
      addressCustomer: 'Puerta Plata 900',
      phoneCustomer: '3324953033',
      emailCustomer: 'zero_386@hotmail.com',
      ageCustomer: '35',
    };
  },

  methods: {
    submit() {
      this.nameCustomer = '';
      this.addressCustomer = '';
    },
    getData() {
      axios({ method: 'GET', url: 'https://jsonplaceholder.typicode.com/todos' }).then((result) => {
        this.jsonData = result.data;
        console.log(this.jsonData);
      }, (error) => {
        console.log(error);
      });
    },
    sendData() {
      axios({ method: 'POST', url: 'http://localhost:7071/api/Saver', data: { name: this.nameCustomer, address: this.addressCustomer, phone: this.phoneCustomer, email: this.emailCustomer, age: this.ageCustomer }, headers: { 'content-type': 'application/json' } }).then((result) => {
        this.jsonResultData = result;
        console.log(this.jsonResultData);
      }, (error) => {
        console.log(error);
      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
