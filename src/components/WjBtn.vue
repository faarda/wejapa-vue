<template>
<button class="wj-btn" :class="addClass" :disabled="status == 'loading'">
    <slot v-if="status == 'active'" />
    <div class="spinner" v-else></div>
</button>
</template>

<script>
export default {
    name: "wj-btn",
    props: {
        type: String,
        size: {
            default: 'block',
            type: String
        },
        status: {
            type: String,
            default: 'active'
        }
    },
    computed: {
        addClass(){
            let classString = "";

            classString += ` wj-btn--${this.type}`;
            classString += ` wj-btn--${this.size}`;

            return classString;
        }
    }
}
</script>

<style>

</style>
