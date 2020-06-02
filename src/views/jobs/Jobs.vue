<template>
<div>
    <h2 class="page-title">Latest Jobs</h2>

    <div class="wj-search">
        <input type="search" class="wj-search__input" v-model="keyword" placeholder="Search for jobs">
        <button class="wj-search__btn">
            <feather type="search"></feather>
        </button>
    </div>

    <div class="wj-jobs">
        <template v-if="results.length > 0">
            <div class="wj-job" v-for="job in results" :key="job._id" @click="$router.push(`/jobs/${job._id}`)">
                <div class="wj-job__info">
                    <!-- <span data-feather="briefcase"></span> -->
                    <feather type="briefcase"></feather>
                    <div class="wj-job__details">
                        <h6 class="wj-job__title">{{job.title}}</h6>
                        <span class="wj-job__location">{{job.location}}</span>
                        <span :class="`wj-job__status wj-job__status--${job.status.toLowerCase()}`">{{job.status}}</span>
                    </div>
                </div>
                <div class="wj-job__price">
                    ${{job.salary}}
                </div>
            </div>
        </template>
        <div class="wj-job wj-job--shimmer" v-else v-for="id in count" :key="id"></div>
    </div>
</div>
</template>

<script>
export default {
    name: "jobs",
    data() {
        return {
            jobs: [],
            loading: true,
            count: 6,
            keyword: "",
            results: []
        }
    },
    created() {
        this.$api.get('job/all')
            .then(res => {
                this.jobs = res.data.data.jobs;
                this.results = [...this.jobs];
                // this.loading = false;

                // this.jobs = jobs.sort((a,b) => {
                //   return a.status == 'open' ? 1 : -1;
                // });
            })
            .catch(err => {
                this.showMessage("error", "Could'nt fetch jobs, please try again");
            })
    },
    mounted(){
            this.$japa.watchSearch();
    },
    watch: {
      keyword(val){
        this.results = this.jobs.filter(job => {
            return job.title.toLowerCase().indexOf(val.toLowerCase()) !== -1 || job.location.toLowerCase().indexOf(val.toLowerCase()) !== -1;
        });
      }
    }
}
</script>

<style>
.wj-job--shimmer {
    height: 7rem;
}

/* .wj-job__title {
    text-overflow: ellipsis;
    width: 70%;

    white-space: nowrap;
    overflow: hidden;
} */

.wj-job__info{
  flex: 1;
}
</style>
