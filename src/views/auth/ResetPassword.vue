<template>
<div style="width: 100%;">
    <div v-if="reset" class="request-box">
        <div class="pass-request">
            <svg class="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                <circle class="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                <path class="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" /></svg>
            <div>
                <h6 class="pass-request__title">Password reset successfully!</h6>
                <p>Redirecting to login in {{time}}s</p>
            </div>
        </div>
    </div>
    <form class="wj-form wj-auth__form wj-auth__form--login" v-else @submit.prevent="resetPassword">
        <div class="wj-form__group wj-form__group--full-width text-center">
            <h4 class="text-center">Reset password</h4>
        </div>
        <wj-input v-model="formData.password" type="password" placeholder="New Password" :required="true"></wj-input>
        <wj-input v-model="password_confirmation" type="password" placeholder="Repeat Password" :delay="1" :required="true"></wj-input>

        <div class="wj-form__group wj-form__action wj-form__group--full-width animate__animated animate__fadeInUp animate__slow animate__delay-2s">
            <wj-btn :status="btnStatus" type="ascent">Reset Password</wj-btn>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "reset-password",
    data() {
        return {
            btnStatus: 'active',
            formData: {
                password: "",
                resetPasswordToken: ""
            },
            password_confirmation: "",
            reset: false,
            time: 2
        }
    },
    methods: {
        resetPassword() {
            if (this.formData.password !== this.password_confirmation) {
                this.showMessage('error', "Passwords do not match");

                return;
            }
            this.btnStatus = "loading";

            this.$api.post('developer/resetpassword', this.formData)
                .then(res => {
                    this.reset = true;

                    setInterval(() => {
                        this.time -= 1;

                        if (this.time == 0) {
                            this.$router.push({
                                name: 'login'
                            });
                        }
                    }, 5000);
                })
                .catch(err => {
                    if (err.response && err.response.status == 400) {
                        this.showMessage('error', "Invalid Token");
                        setTimeout(() => {
                            this.$router.push({
                                name: 'forgotpass'
                            });
                        }, 1500);
                    } else {
                        this.showMessage('error', "Couldn't reset password, try again");
                    }
                })
                .finally(() => {
                    this.btnStatus = 'active';
                });
        }
    },
    created() {
        this.formData.resetPasswordToken = this.$route.params.token;
    }
}
</script>

<style>
.flex-end {
    justify-content: flex-end !important;
}

.request-box {
    width: 100%;
    max-width: 450px;
    margin: 10px auto;
}
</style>
