<template>
  <div>
    <!-- As a heading -->
    <b-navbar toggleable :type="isScroll ? 'dark' : 'light'" :variant="isScroll ? 'dark' : 'light'" fixed="top">
      <b-navbar-brand tag="h1" class="mb-0">{{ Title }}</b-navbar-brand>
      <b-navbar-nav class="ml-auto">
        <b-button size="md" class="my-2 my-sm-0" :variant="isScroll ? 'outline-success' : 'success'" :href="Link">สมัครสมาชิก</b-button>
      </b-navbar-nav>
    </b-navbar>
    <!-- banner -->
    <div class="section section-hero section-shaped">
      <div class="shape shape-style-3 shape-default">
        <span class="span-150"></span>
        <span class="span-50"></span>
        <span class="span-50"></span>
        <span class="span-75"></span>
        <span class="span-100"></span>
        <span class="span-75"></span>
        <span class="span-50"></span>
        <span class="span-100"></span>
        <span class="span-50"></span>
        <span class="span-100"></span>
        <b-img src="../assets/images/banner.jpg" rounded alt="banner image" fluid-grow></b-img>
      </div>
      <div class="page-header">
        <div class="container shape-container d-flex align-items-center py-lg">
          <div class="col px-0">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 text-center">
                <h1 class="text-white display-1">ไม้จิ้มฟัน</h1>
                <h2 class="display-4 font-weight-normal text-white">ไม้จิ้มฟัน ราคาถูก | ทำมาจากสมุนไพร</h2>
                
                <div class="btn-wrapper mt-4">
                  <a :href="Link" class="btn btn-warning btn-icon mt-3 mb-sm-0">
                    <!-- <span class="btn-inner--icon"><i class="ni ni-button-play"></i></span> -->
                    <span class="btn-inner--text">Play now</span>
                  </a>
                  <WLinecmp />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: {
      title: String,
      link: String,
    },
    computed: {
      Title () {
        return !this.title ? 'Landing menu' : this.title;
      },
      Link () {
        return !this.link ? 'https://www.google.co.th/' : this.link;
      },
      isShowBet () {
        return this.$store.state.global.isMob || this.$store.state.global.isThailand;
      }
    },
    data () {
      return {
        isScroll: false
      }
    },
    created () {
      window.addEventListener('scroll', this.handleScroll);
    },
    destroyed () {
      window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleTagLink(e) {
        gtag_report_conversion(this.Link);
        // console.log('handleTagLink');
      },
      handleScroll (event) {
        if (document.documentElement.scrollTop <= 1) {
          this.isScroll = false;
        } else {
          this.isScroll = true;
        }
      }
    }
}
</script>

<style>
.section-shaped {
  position: relative;
  overflow: hidden;
}
.section-shaped.section-hero:before {
  top: 680px;
}
.section-shaped .stars-and-coded {
  margin-top: 8rem;
}
.section-shaped .shape {
  position: absolute;
  top: 0;
  z-index: -1;
  width: 100%;
  height: 100%;
}
.section-shaped .shape span {
  position: absolute;
}
.section-shaped .shape+.container {
  position: relative;
  height: 100%;
}
.section-shaped .shape.shape-skew+.container {
  padding-top: 0;
}
.section-shaped .shape.shape-skew+.container .col {
  margin-top: -100px;
}
.section-shaped .shape.shape-skew+.shape-container {
  padding-top: 18rem;
  padding-bottom: 19rem;
}
.section-shaped .shape-skew {
  transform: skewY(-4deg);
  transform-origin: 0;
}
.section-shaped .shape-skew span {
  transform: skew(4deg);
}
.section-shaped .shape-primary {
  background: linear-gradient(150deg, #281483 15%, #8f6ed5 70%, #d782d9 94%);
}
.section-shaped .shape-primary :nth-child(1) {
  background: #53f;
}
.section-shaped .shape-primary :nth-child(2) {
  background: #4553ff;
}
.section-shaped .shape-primary :nth-child(3) {
  background: #4f40ff;
}
.section-shaped .shape-primary :nth-child(4) {
  background: #25ddf5;
}
.section-shaped .shape-primary :nth-child(5) {
  background: #1fa2ff;
}
.section-shaped .shape-default {
  background: linear-gradient(150deg, #7795f8 15%, #6772e5 70%, #555abf 94%);
}
.section-shaped .shape-default :nth-child(1) {
  background: #7795f8;
}
.section-shaped .shape-default :nth-child(2) {
  background: #7b9aff;
}
.section-shaped .shape-default :nth-child(3) {
  background: #6f8ff8;
}
.section-shaped .shape-default :nth-child(4) {
  background: #76eea7;
}
.section-shaped .shape-default :nth-child(5) {
  background: #6adaff;
}
.section-shaped .shape-light {
  background: linear-gradient(150deg, shapes-light-color("step-1-gradient-bg") 15%, shapes-light-color("step-2-gradient-bg") 70%, shapes-light-color("step-3-gradient-bg") 94%);
}
.section-shaped .shape-light :nth-child(1) {
  background: shapes-light-color("span-1-bg");
}
.section-shaped .shape-light :nth-child(2) {
  background: shapes-light-color("span-2-bg");
}
.section-shaped .shape-light :nth-child(3) {
  background: shapes-light-color("span-3-bg");
}
.section-shaped .shape-light :nth-child(4) {
  background: shapes-light-color("span-4-bg");
}
.section-shaped .shape-light :nth-child(5) {
  background: shapes-light-color("span-5-bg");
}
.section-shaped .shape-dark {
  background: linear-gradient(150deg, #32325d 15%, #32325d 70%, #32325d 94%);
}
.section-shaped .shape-dark :nth-child(1) {
  background: #2e2e57;
}
.section-shaped .shape-dark :nth-child(2) {
  background: #2b2b58;
}
.section-shaped .shape-dark :nth-child(3) {
  background: #25254d;
}
.section-shaped .shape-dark :nth-child(4) {
  background: #d782d9;
}
.section-shaped .shape-dark :nth-child(5) {
  background: #008169;
}
.section-shaped .shape-style-1 span {
  height: 120px;
  width: 120px;
  border-radius: 50%;
}
.section-shaped .shape-style-1 .span-200 {
  height: 200px;
  width: 200px;
}
.section-shaped .shape-style-1 .span-150 {
  height: 150px;
  width: 150px;
}
.section-shaped .shape-style-1 .span-100 {
  height: 100px;
  width: 100px;
}
.section-shaped .shape-style-1 .span-75 {
  height: 75px;
  width: 75px;
}
.section-shaped .shape-style-1 .span-50 {
  height: 50px;
  width: 50px;
}
.section-shaped .shape-style-1 :nth-child(1) {
  left: -4%;
  bottom: auto;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(2) {
  right: 4%;
  top: 10%;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(3) {
  top: 280px;
  right: 5.66666%;
  background: rgba(255, 255, 255, 0.3);
}
.section-shaped .shape-style-1 :nth-child(4) {
  top: 320px;
  right: 7%;
  background: rgba(255, 255, 255, 0.15);
}
.section-shaped .shape-style-1 :nth-child(5) {
  top: 38%;
  left: 1%;
  right: auto;
  background: rgba(255, 255, 255, 0.05);
}
.section-shaped .shape-style-1 :nth-child(6) {
  width: 200px;
  height: 200px;
  top: 44%;
  left: 10%;
  right: auto;
  background: rgba(255, 255, 255, 0.15);
}
.section-shaped .shape-style-1 :nth-child(7) {
  bottom: 50%;
  right: 36%;
  background: rgba(255, 255, 255, 0.04);
}
.section-shaped .shape-style-1 :nth-child(8) {
  bottom: 70px;
  right: 2%;
  background: rgba(255, 255, 255, 0.2);
}
.section-shaped .shape-style-1 :nth-child(9) {
  bottom: 1%;
  right: 2%;
  background: rgba(255, 255, 255, 0.1);
}
.section-shaped .shape-style-1 :nth-child(10) {
  bottom: 1%;
  left: 1%;
  right: auto;
  background: rgba(255, 255, 255, 0.05);
}
@media (max-width: 991.98px) {
  .section-shaped .shape-style-2 span {
    height: 120px;
  }
}
@media (max-width: 767.98px) {
  .section-shaped .shape-style-2 span {
    height: 90px;
  }
}
.section-shaped .shape-style-3 span {
  height: 140px;
}
.section-shaped .shape-style-3 .span-sm {
  height: 100px;
}
.section-shaped .shape-style-3 :nth-child(1) {
  width: 66%;
  left: -16.66666%;
  bottom: auto;
}
.section-shaped .shape-style-3 :nth-child(2) {
  width: 40%;
  top: 54%;
  right: -16.66666%;
}
.section-shaped .shape-style-3 :nth-child(3) {
  width: 33.33333%;
  top: 34%;
  left: -16.66666%;
  right: auto;
}
.section-shaped .shape-style-3 :nth-child(4) {
  width: 60%;
  bottom: 0;
  right: -16.66666%;
  opacity: .6;
}
.section-shaped .shape-style-3 :nth-child(5) {
  width: 33.33333%;
  bottom: 0;
}
@media (max-width: 991.98px) {
  .section-shaped .shape-style-3 span {
    height: 120px;
  }
}
@media (max-width: 767.98px) {
  .section-shaped .shape-style-3 span {
    height: 90px;
  }
}
.display-1 {
  font-size: 3.3rem;
  font-weight: 600;
  line-height: 1.5;
}
.display-4 {
  font-size: 1.6275rem;
  font-weight: 600;
  line-height: 1.5;
}
</style>