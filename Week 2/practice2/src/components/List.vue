<template>
    <div>
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