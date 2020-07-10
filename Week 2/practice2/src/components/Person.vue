<template>
    <div>
        <p>
            Name: {{person.name}} <br>
            Email: {{person.email}} <br>
            Age: {{person.age}}
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