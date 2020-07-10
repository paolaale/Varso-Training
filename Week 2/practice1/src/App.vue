<template>
  <div id="app">
    <Header />
    <Biography />
    <Hobbies />
    <Work />
    <Skills />
    <Footer />
  </div>
</template>

<script>

import Header from './components/Header';
import Biography from './components/Biography';
import Hobbies from './components/Hobbies';
import Work from './components/WorkExp';
import Skills from './components/Skills';
import Footer from './components/Footer';

export default {
  name: 'App',
  components: {
    Header,
    Biography,
    Hobbies,
    Work,
    Skills,
    Footer
  }
}
</script>
