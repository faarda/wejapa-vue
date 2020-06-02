<template>
<div class="wj-single-job">
    <div class="wj-job-icon">
        <!-- <span data-feather="briefcase"></span> -->
        <feather type="briefcase"></feather>
    </div>
    <h2 class="page-title">{{job.title}}</h2>
    <div class="wj-job__location">{{job.location}}</div>
    <div :class="`wj-job__status wj-job__status--${job.status.toLowerCase()}`">{{job.status}}</div>

    <div class="wj-job__benefits">
        <div class="wj-job__benefit">
            <div class="wj-job__benefit__icon">
                <!-- <span data-feather="clock"></span> -->
                <feather type="clock"></feather>
            </div>

            <div class="wj-job__benefit-text">
                {{job.hoursPerWeek}}hr/wk
            </div>
        </div>
        <div class="wj-job__benefit">
            <div class="wj-job__benefit__icon">
                <!-- <span data-feather="target"></span> -->
                <feather type="target"></feather>
            </div>

            <div class="wj-job__benefit-text">
                {{job.type}}
            </div>
        </div>
        <div class="wj-job__benefit">
            <div class="wj-job__benefit__icon">
                <!-- <span data-feather="dollar-sign"></span> -->
                <feather type="dollar-sign"></feather>
            </div>

            <div class="wj-job__benefit-text">
                ${{job.salary}}
            </div>
        </div>
    </div>

    <div class="wj-job__details">
        <h6 class="wj-job__detail-title">Description</h6>
        <div class="wj-job__detail">
            {{job.description}}
        </div>
        <h6 class="wj-job__detail-title">Benefits</h6>
        <div class="wj-job__detail">
            <ul class="wj-job__benefits-list">
                <li class="wj-job__benefits-item" v-for="(benefit,id) in job.benefits" :key="id">
                    {{benefit}}
                </li>
            </ul>
        </div>
        <h6 class="wj-job__detail-title">Experience</h6>
        <div class="wj-job__detail">
            {{job.experience}}
        </div>

        <button class="wj-btn wj-btn--primary">Apply Now</button>
    </div>
</div>
</template>

<script>
export default {
    name: "single-job",
    data() {
        return {
            job: {

            },
            jobId: null
        }
    },
    created() {
        this.jobId = this.$route.params.id;

        this.$api.get(`job/${this.jobId}`)
            .then(res => {
                this.job = res.data.data;
            })
            .catch(err => {
                this.showMessage("error", "Error fetching job, please reload");
            });
    }
}
</script>

<style>

</style>
