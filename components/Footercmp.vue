<template>
    <div class="footer bg-light">
        <div class="container">
            <div class="row justify-content-center text-center">
                <div class="col-md-12">
                    <div class="text-center text-white footer-alt">
                        <p class="text-muted mb-0">  {{ CurrentYear }} © powered by {{ Title }}.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        title: String
    },
    computed: {
        Title () {
            return !this.title ? 'Teddy' : this.title;
        },
        CurrentYear () {
            return new Date().getFullYear();
        }
    }
}
</script>

<style lang="css" scoped>

.footer {
    height: 3vh;
    margin-top: 50px;
    padding: 70px 0px;
    background-color: #26282b !important;
}
.container {
    min-height: 0px !important;
}
.footer .footer-alt p {
    font-size: 16px;
}
</style>