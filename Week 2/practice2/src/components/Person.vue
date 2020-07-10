<template>
    <div>
        <p>
            Name: {{person.name}} <br>
            Email: {{person.email}} <br>
            Age: {{person.age}} <br>
            <button @click="$emit('del-contact', person.id)">Delete</button>
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