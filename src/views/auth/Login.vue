<template>
<div style="width: 100%;">
    <form class="wj-form wj-auth__form wj-auth__form--login" @submit.prevent="login">
        <div class="wj-form__group wj-form__group--full-width text-center">
            <h4 class="text-center">Ready to japa? Login</h4>
        </div>
        <wj-input v-model="formData.email" type="email" placeholder="Your Email" :required="true"></wj-input>
        <wj-input v-model="formData.password" type="password" placeholder="Password" :delay="1" :required="true"></wj-input>
        <div class="wj-form__sub-action flex-end">
            <router-link to="forgotpassword" class="link animate__animated animate__fadeIn animate__slow animate__delay-4s">Forgot Password?</router-link>
        </div>
        <div class="wj-form__group wj-form__action wj-form__group--full-width animate__animated animate__fadeInUp animate__slow animate__delay-2s">
            <wj-btn :status="btnStatus" type="ascent">Sign In</wj-btn>
        </div>
    </form>
    <p class="text-center follow-text animate__animated animate__fadeInUp animate__slow animate__delay-3s">
        Don't have an account? <router-link :to="{name: 'signup'}" class="link">Sign up</router-link>
    </p>
</div>
</template>

<script>
export default {
    name: "login",
    data(){
        return {
            btnStatus: 'active',
            formData: {
                email: "",
                password: ""
            }
        }
    },
    methods: {
        login(){
            this.btnStatus = "loading";

            this.$store.dispatch('getUser', this.formData)
                .then(res => {
                    this.btnStatus = 'active';

                    this.$router.push({name: 'jobs'});
                })
                .catch(err => {
                    // console.log(err.response);
                    this.btnStatus = 'active';
                    if(err.response && err.response.status == 401){
                        this.showMessage('error', "Invalid Credentials");
                    }else{
                        this.showMessage('error', "Couldn't log you in, try again");
                    }
                });
        }
    }
}
</script>

<style>
    .flex-end{
        justify-content: flex-end !important;
    }
</style>
