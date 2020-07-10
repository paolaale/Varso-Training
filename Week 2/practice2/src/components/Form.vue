<template>
    <div>
        <form @submit="addPerson">
            <input type="text" v-model="name" name="fullName" placeholder="Name">
            <input type="email" v-model="email" name="email" placeholder="Email">
            <input type="number" v-model="age" name="age" placeholder="Age">
            <button type="submit" name="Save">Save</button>
        </form>
    </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';

export default {
    name: "Form",
    data() {
        return {
            name: '',
            email: '',
            age: ''
        }
    },
    methods: {
        addPerson(e) {
            e.preventDefault();
            const newPerson = {
                id: uuidv4,
                name: this.name,
                email: this.email,
                age: this.age
            }
            this.$emit('add-person', newPerson);
            this.name = '';
            this.email = '';
            this.age = '';
        }
    }
}
</script>