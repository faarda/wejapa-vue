<template>
<div class="wj-dashboard">
    <dashboard-header></dashboard-header>
    <div class="wj-dashboard__body">
      <router-view></router-view>
    </div>
</div>
</template>

<script>
import DashboardHeader from '@/components/Header.vue';
export default {
    name: "dashboard-layout",
    components: {
        DashboardHeader
    }
}
</script>

<style>

</style>
