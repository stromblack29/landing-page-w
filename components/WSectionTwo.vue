<template>
    <div class="section features-1">
        <b-container>
            <b-row>
                 <div class="col-md-8 mx-auto text-center">
                    <h3 class="display-3">ไม้จิ้มฟัน</h3>
                    <p class="lead"> ไม้จิ้มฟันหรือไม้เสียบอาหารนี้ผลิตได้จากวัตถุดิบหลายชนิด เช่น ถั่ว ธัญพืช ผลไม้ และผักชนิดต่างๆ ซึ่งจะช่วยเพิ่มกลิ่น รส ที่หลากหลายให้กับอาหาร สามารถบริโภคไปพร้อมกับอาหารที่เสียบไม้ไว้ หรือบริโภคภายหลังจากรับประทานอาหารนั้นหมดไปได้</p>
                </div>
                <div class="w-100"></div>
                 <b-col>
                     <div class="info">
                        <div class="icon icon-lg icon-shape icon-shape-primary shadow rounded-circle">
                            <i class="ni ni-settings-gear-65"></i>
                        </div>
                        <h6 class="info-title text-uppercase text-primary">Social Conversations</h6>
                        <p class="description opacity-8">We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                        <a :href="Link" class="text-primary">More about us
                        </a>
                    </div>
                 </b-col>
                <b-col>
                    <div class="info">
                        <div class="icon icon-lg icon-shape icon-shape-success shadow rounded-circle">
                            <i class="ni ni-atom"></i>
                        </div>
                        <h6 class="info-title text-uppercase text-success">Analyze Performance</h6>
                        <p class="description opacity-8">Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                        <a :href='Link' class="text-primary">Learn about our products
                        </a>
                    </div>
                </b-col>
                <b-col>
                    <div class="info">
                        <div class="icon icon-lg icon-shape icon-shape-warning shadow rounded-circle">
                            <i class="ni ni-world"></i>
                        </div>
                        <h6 class="info-title text-uppercase text-warning">Measure Conversions</h6>
                        <p class="description opacity-8">What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                        <a @click="handleTagLink" href='' class="text-primary">Check our documentation
                        </a>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>
<script>
export default {
    props: {
        link: String
    },
    computed: {
        Link () {
            return !this.link ? '#' : this.link;
        },
        isShowBet () {
        return this.$store.state.global.isMob || this.$store.state.global.isThailand;
      }
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
.section {
  position: relative;
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.ml-auto,
.mx-auto {
  margin-left: auto !important;
}
.display-3 {
  font-size: 2.1875rem;
  font-weight: 600;
  line-height: 1.5;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.5;
  color: #32325d;
}
.row {
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
}
.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1040px;
  }
}
</style>