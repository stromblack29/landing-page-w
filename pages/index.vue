<template>
  <div class="containerp-fluid">
    <div class="row">
      <div class="col-md-12 text-center pt-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/top_image_1.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center">
        <a :href="Link"><img class="img-fluid" src="../assets/images/line_register.gif" alt="Add line"></a>
      </div>
      <div class="col-md-12 text-center py-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/second_image.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center py-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/top_image.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center py-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/3_image.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center py-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/4_image.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center py-3">
        <a :href="Link">
          <img class="img-fluid" src="../assets/images/5_image.gif" />
        </a>
      </div>
      <div class="col-md-12 text-center">
        <a :href="Link"><img class="img-fluid" src="../assets/images/line_register.gif" alt="Add line"></a>
      </div>
    </div>
    <!-- Google Tag Manager (noscript) -->
    <!-- <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-KV4FZJD"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript> -->
    <!-- End Google Tag Manager (noscript) -->
  </div>
  <!-- <div class="">
    <div v-if="isWhite === true">
      <WSectionOne :link="Link" />
      <WSectionTwo :link="Link" />
      <WSectionProduct :link="Link" />
    </div>
    <div v-else>
      <LandingSectionOne :link="Link" />
      <LandingSectionTwo :link="Link" />
      <LandingSectionProduct :link="Link" />
    </div>
  </div> -->
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  computed: {
    Link () {
      return true ? 'https://lin.ee/6zOZZHz' : 'https://www.circus789.com/register.php';
    },
    isWhite () {
      return !this.$store.state.global.isMob;
    }
  },
  data () {
    return {
    }
  },
  methods: {
    detectMob() {
      const toMatch = [
          /Android/i,
          /webOS/i,
          /iPhone/i,
          /iPad/i,
          /iPod/i,
          /BlackBerry/i,
          /Windows Phone/i
      ];

      return toMatch.some((toMatchItem) => {
          return navigator.userAgent.match(toMatchItem);
      });
    }
  },
  mounted() {
  },
  created() {
    this.$store.commit('global/setMob', this.detectMob());
    console.log('--> detectMob:', this.$store.state.global.isMob);
    // find location
    fetch('https://extreme-ip-lookup.com/json/')
    .then( res => res.json())
    .then(response => {
        if (response.country.toLowerCase() == 'thailand') {
          this.$store.commit('global/setCountry', true);
        } else {
          this.$store.commit('global/setCountry', false);
        }
        console.log("Country: ", this.$store.state.global.isThailand);
    })
    .catch((data, status) => {
        console.log('Request failed');
        this.$store.commit('global/setCountry', false);
    });
  }
}
</script>

<style>
body {
  background-image: url("../assets/images/bg_sea.jpg");
  background-repeat: repeat-y;
  background-size: 100%;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

</style>
