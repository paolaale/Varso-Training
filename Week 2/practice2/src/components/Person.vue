<template>
    <div class="px-4">
        <p class="py-4">
            Name: {{person.name}} <br>
            Email: {{person.email}} <br>
            Age: {{person.age}} <br>
            <button @click="$emit('del-contact', person.id)" class="bg-white hover:bg-gray-100 
            text-gray-800 font-semibold py-2 px-4 border border-gray-400 
            rounded shadow my-4">Delete</button>
        </p>
        <hr>
    </div>
</template>

<script>
export default {
    name: "single Person",
    props: ["person"]
}
</script>