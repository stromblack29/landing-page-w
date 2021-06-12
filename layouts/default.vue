<template>
  <div>
    <!-- <template v-if="isWhite === true">
      <WHeader :title="Title" :link="Link" />
    </template>
    <template v-else>
      <LandingHeader :title="Title" :link="Link" />
    </template> -->
    <Nuxt />
    <!-- <LandingFooter :title="Title" /> -->
  </div>
</template>
<script>
export default {
  head() {
    return {
      title: this.Title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'ขายไม้จิ้มฟันสมุนไพร ระบบฝากถอนอัตโนมัติ 30 วินาที ทุกสลิปมีค่าแลกของรางวัลฟรี ยินดีให้บริการ ค่ายเกมส์เยอะที่สุดในเอเซีย สนใจรายละเอียดโปรโมชั่นติดต่อสอบถามได้ตลอดเวลา เราให้บริการ 24 ชม.',
        }
      ]
    }
  },
  computed: {
    Title () {
      return !this.$store.state.global.isMob ? 'ไม้จิ้มฟัน ราคาถูก | ทำมาจากสมุนไพร' : 'circus789 บาบาร่า | สล็อคออนไลน์';
    },
    Link () {
      return !this.$store.state.global.isMob === true ? 'https://lin.ee/6zOZZHz' : 'https://lin.ee/6zOZZHz';
    },
    isWhite () {
      return !this.$store.state.global.isMob;
    }
  },
  data () {
    return {
    }
  }
}
</script>
<style>
html {
  font-family:
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}

.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}

.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}

.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>
