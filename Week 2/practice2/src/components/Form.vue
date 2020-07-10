<template>
    <div class="py-4 px-4">
        <h3 class="font-serif text-xl font-semibold p-4">Add new contact</h3>
        <form @submit="addPerson">
            <label class="uppercase text-gray-700 text-lg font-normal px-4">Name:</label>
            <input type="text" v-model="name" name="name" placeholder="Jane Doe" 
            class="appearance-none bg-gray-200 text-gray-700 border 
            rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white">
            <label class="uppercase text-gray-700 text-lg font-normal p-4">Email:</label>
            <input type="email" v-model="email" name="email" placeholder="jane@example.com"
            class="appearance-none bg-gray-200 text-gray-700 border 
            rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white">
            <label class="uppercase text-gray-700 text-lg font-normal p-4">Age:</label>
            <input type="number" v-model="age" name="age" placeholder="22"
            class="appearance-none bg-gray-200 text-gray-700 border 
            rounded py-3 px-4 leading-tight focus:outline-none 
            focus:bg-white">
            <button type="submit" value="Submit" class="bg-whitw hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-6">Save</button>
        </form>
        <br>
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