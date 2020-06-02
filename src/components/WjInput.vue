<template>
<div class="wj-form__group animate__animated animate__fadeInUp animate__slow" :class="addClass">
    <input @input="$emit('input', $event.target.value)" @change="$emit('input', $event.target.value)" :value="value" :type="type" :placeholder="placeholder" :required="required" class="wj-form__input">
    <div class="wj-form__addon" @click="type = type == 'password' ? 'text' : 'password'" v-if="realType == 'password'">
        <feather v-if="type == 'password'" type="eye" style="width: 2rem; height: 2rem;"></feather>
        <feather v-else type="eye-off" style="width: 2rem; height: 2rem;"></feather>
    </div>
</div>
</template>

<script>
export default {
    name: "wj-input",
    props: {
        fullWidth: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            required: true
        },
        delay: {
            default: null,
            type: Number
        },
        placeholder: {
            type: String,
            required: true
        },
        required: {
            default: true,
            type: Boolean
        },
        value: {
            default: ""
        }
    },
    data(){
        return {
            realType: ""
        }
    },
    created(){
        this.realType = this.type;
    },
    computed: {
        addClass() {
            let classString = '';

            classString += this.fullWidth ? ' wj-form__group--full-width' : '';
            classString += this.delay !== null ? ` animate__delay-${this.delay}s` : '';

            return classString;
        }
    }
}
</script>

<style>

</style>
