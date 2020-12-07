<template>
    <div class="links">
        <div class="text-center mt-4">
            <a @click="handleTagLink('https://lin.ee/6zOZZHz')" href="#" rel="nofollow"><img src="~/assets/images/add-line.png" width="250px" alt="Add line"></a>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        isShowBet () {
            return this.$store.state.global.isMob || this.$store.state.global.isThailand;
        }
    },
    methods: {
        handleTagLink(lnk) {
            gtag_report_conversion(lnk);
        },
    }
}
</script>

<style scoped>
.links {
  /* padding-top: 15px; */
}
</style>