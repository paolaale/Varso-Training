<template>
    <div>
        <p>
            {{person.name}},
            {{person.email}},
            {{person.age}}
        </p>
    </div>
</template>

<script>
export default {
    name: "single Person",
    props: ["person"]
}
</script>