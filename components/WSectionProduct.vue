<template>
<div>
    <b-container>
            <b-row>
                 <div class="col-md-8 mx-auto text-center">
                    <h3 class="display-3">สินค้า</h3>
                </div>
                <div class="w-100"></div>
                <template v-for="(i,index) in 6">
                 <b-col col lg="4" md :key="index">
                     <div class="info">
                        <a :href="Link">
                        <div class="icon icon-lg icon-shape icon-shape-info shadow rounded-circle">
                            <b-img-lazy v-if="index == 0" src="../assets/images/product-1.jpg" rounded="circle" fluid-grow></b-img-lazy>
                            <b-img-lazy v-else-if="index == 1" src="../assets/images/product-2.jpg" rounded="circle" fluid-grow></b-img-lazy>
                            <b-img-lazy v-else-if="index == 2" src="../assets/images/product-3.jpg" rounded="circle" fluid-grow></b-img-lazy>
                            <b-img-lazy v-else-if="index == 3" src="../assets/images/product-4.jpg" rounded="circle" fluid-grow></b-img-lazy>
                            <b-img-lazy v-else-if="index == 4" src="../assets/images/product-5.jpg" rounded="circle" fluid-grow></b-img-lazy>
                            <b-img-lazy v-else-if="index == 5" src="../assets/images/product-6.jpg" rounded="circle" fluid-grow></b-img-lazy>
                        </div>
                        </a>
                        <h6 class="info-title text-uppercase text-primary">ไม้จิ้มฟัน {{ index + 1 }}</h6>
                        <p class="description opacity-8">ไม้จิ้มฟันประเภท {{ index +1 }}.</p>
                        <a :href='Link' class="text-primary">More Detail
                        </a>
                    </div>
                 </b-col>
                </template>
            </b-row>
    </b-container>
    <LineButton />
</div>
</template>

<script>
export default {
    props: {
        link: String
    },
    computed: {
        Link() {
            return !this.link ? '#' : this.link;
        },
        isShowBet () {
        return this.$store.state.global.isMob || this.$store.state.global.isThailand;
      }
    },
    data () {
        return {
        }
    },
    created () {
        
    },
    methods: {
        handleTagLink(e) {
            gtag_report_conversion(this.Link);
            // console.log('handleTagLink');
        },
    }
}
</script>

<style scoped>
@import '../assets/argon-design-system.css';
.icon-lg {
  width: 12rem;
  height: 12rem;
}
</style>