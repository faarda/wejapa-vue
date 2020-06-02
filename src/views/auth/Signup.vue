<template>
<div style="width: 100%;">
    <div class="wj-form wj-auth__form">
        <div class="wj-form__group wj-form__group--full-width text-center">
            <h4 class="text-center">Create your account</h4>
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow">
            <input type="text" placeholder="Your Full Name" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow">
            <input type="email" placeholder="Your Email" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-1s">
            <input type="tel" placeholder="Your Phone Number" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-1s">
            <input type="url" placeholder="Github / Portfolio / Website Url" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-2s">
            <input type="url" placeholder="StackOverflow(Optional)" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-2s">
            <input type="url" placeholder="Resume Link: Drive, Dropbox, e.t.c" class="wj-form__input">
        </div>
        <div class="wj-form__group wj-form__group--full-width animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-3s">
            <!-- <input type="url" placeholder="Resume Link: Drive, Dropbox, e.t.c" class="wj-form__input"> -->
            <select name="" id="" class="wj-form__input">
                <option value="">Experience Level</option>
                <option value="">Junior: 1 - 2 yrs</option>
                <option value="">Mid Level: 3 - 5 yrs</option>
                <option value="">Senior: > 5 yrs</option>
            </select>
        </div>
        <div class="wj-form__group wj-form__action wj-form__group--full-width animate__animated animate__fadeInUp animate__slow animate__delay-4s">
            <button class="wj-btn wj-btn--primary">Next</button>
        </div>
    </div>
    <p class="text-center follow-text animate__animated animate__fadeInUp animate__slow animate__delay-5s">
        Already an account? <router-link :to="{name: 'login'}" class="link">Sign In</router-link>
    </p>
</div>
</template>

<script>
export default {

}
</script>

<style>

</style>
