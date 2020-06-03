<template>
<div style="width: 100%;">
    <div v-if="requestSent" class="request-box">
        <div class="pass-request">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <div>
                <h6 class="pass-request__title">We've sent a link</h6>
                <p>Check your email to continue</p>
            </div>
        </div>
        <div class="d-flex justify-between mt-3">
            <a href="" @click.prevent="requestSent = false" class="link">Change email address</a>
            <a href="" @click.prevent="requestToken" class="link">Resend email</a>
        </div>
    </div>
    <form class="wj-form wj-auth__form wj-auth__form--login" @submit.prevent="requestToken" v-else>
        <div class="wj-form__group wj-form__group--full-width text-center">
            <h4 class="text-center">Let's get you a fresh password</h4>
        </div>
        <wj-input v-model="formData.email" type="email" placeholder="Enter your email" :required="true"></wj-input>
        <div class="wj-form__group wj-form__action wj-form__group--full-width animate__animated animate__fadeInUp animate__slow animate__delay-1s">
            <wj-btn :status="btnStatus" type="ascent">Get password reset link</wj-btn>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "forgot-pass",
    data() {
        return {
            formData: {
                email: ""
            },
            requestSent: false,
            btnStatus: 'active'
        }
    },
    methods: {
        requestToken() {
            this.btnStatus = "loading";
            this.$api.post("developer/resetpasswordrequest", this.formData)
                .then(res => {
                    this.showMessage('success', "Password request link sent!");
                    this.requestSent = true;
                })
                .catch(err => {
                    if(err.response && err.response.status == 400){
                        // console.log(err.response.data);
                        this.showMessage('error', "You don't have a Wejapa account");
                    }else{
                        this.showMessage('error', "Couldn't request the link, please try again");
                    }
                })
                .finally(() => {
                    this.btnStatus = 'active';
                });
        }
    }
}
</script>

<style>
    .request-box{
        width: 100%;
        max-width: 450px;
        margin: 10px auto;
    }
</style>
