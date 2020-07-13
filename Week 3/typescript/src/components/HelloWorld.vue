<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>{{ fName }}</h2>
    <h2>{{ lName }}</h2>
    <h2>{{ fullName }}</h2>
    <h4> {{counter}} </h4>
    <button @click="incrementCounter()">Press me</button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;
  fName="Jane";
  lName="Doe";
  counter = 0;

  get fullName(): string {
    return this.fName + " " + this.lName
  }

  incrementCounter() {
    this.counter++;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
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
