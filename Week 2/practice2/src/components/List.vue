<template>
    <div>
        <div>
            <Person v-bind:person="person"/>
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