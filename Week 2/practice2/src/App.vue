<template>
  <div id="app">
    <Header />
    <Form v-on:add-person="addPerson"/>
    <List v-bind:persons="persons"/>
  </div>
</template>

<script>
import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

export default {
  name: 'App',
  components: {
    Header,
    Form,
    List
  },
  data() {
    return {
      persons: [
        {
          id: 1,
          name: "Paola Villarreal",
          email: "paola@gmail.com",
          age: "21"
        },
      ]
    }
  },
  methods: {
    addPerson(newPerson) {
      this.persons = [...this.persons, newPerson];
    }
  }

}
</script>

