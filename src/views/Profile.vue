<template>
<div>
    <h2 class="page-title">My Profile</h2>

    <div class="wj-form mt-3">
        <!-- <div class="wj-form__group wj-form__group--full-width text-center">
                    <h4 class="text-center">Create your account</h4>
                </div> -->
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow">
            <input v-model="formData.name" type="text" placeholder="Your Full Name" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow">
            <input v-model="formData.email" type="email" placeholder="Your Email" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-1s">
            <input v-model="formData.phone" type="tel" placeholder="Your Phone Number" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-1s">
            <input v-model="formData.github" type="url" placeholder="Github / Portfolio / Website Url" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-2s">
            <input v-model="formData.stackOverflow" type="url" placeholder="StackOverflow(Optional)" class="wj-form__input">
        </div>
        <div class="wj-form__group animate__animated animate__fadeInUp animate__slow animate__slow animate__delay-2s">
            <input v-model="formData.resume" type="url" placeholder="Resume Link: Drive, Dropbox, e.t.c" class="wj-form__input">
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
            <button class="wj-btn wj-btn--primary">Update Profile</button>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: "profile",
  data: {
    formData: {}
  },
  created(){
    this.formData = this.$store.state.user;
  }
}
</script>

<style>

</style>
