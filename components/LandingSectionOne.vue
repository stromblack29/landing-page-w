<template>
    <div class="section features-6">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-12">
            <a href="#" @click="handleTagLink">
              <b-img fluid-grow src="../assets/images/3StepRegister.png"></b-img>
            </a>
          </div>
          <div class="col-lg-12">
            <a href="#" @click="handleTagLink">
              <b-img fluid-grow src="../assets/images/CIRCUS789GameFinal.png"></b-img>
            </a>
          </div>
          <div class="col-lg-6 mr-auto">
            <a href="#" @click="handleTagLink">
              <b-img fluid src="../assets/images/Bonus50.png"></b-img>
            </a>
          </div>
          <div class="col-lg-6">
            <a href="#" @click="handleTagLink">
              <b-img fluid src="../assets/images/ItemPoint.png"></b-img>
            </a>
          </div>
          <div class="col-lg-12">
            <a href="#" @click="handleTagLink">
              <b-img fluid src="../assets/images/olduserbonus10.png"></b-img>
            </a>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
export default {
  props: {
      link: String,
    },
  computed: {
    Link () {
      return !this.link ? 'https://www.google.co.th/' : this.link;
    },
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
  padding-top: 2rem;
  padding-bottom: 2rem;
  background-image: url('../assets/images/bg-about.jpg');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  background-size: cover;
}
.description {
  font-size: 0.875rem;
}
.pl-4,
.px-4 {
  padding-left: 1.5rem !important;
}
h5,
.h5 {
  font-size: 1.25rem;
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
p {
  font-size: 1rem;
  font-weight: 300;
  line-height: 1.7;
}
p {
  margin-top: 0;
  margin-bottom: 1rem;
}


</style>