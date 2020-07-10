<template>
    <div class="px-4">
        <h3 class="font-serif text-xl font-semibold p-4">Info</h3>
        <div v-bind:key="person.id" v-for="person in persons">
            <Person v-bind:person="person" v-on:del-contact="$emit('del-contact', person.id)"/>
        </div>
    </div>
</template>

<script>
import Person from './Person';

export default {
    name: "List",
    components: {
        Person
    },
    props: ["persons"]
}
</script>