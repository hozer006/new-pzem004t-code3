<template>
  <div>
    <div
      class="row-1 text-center"
      :class="[scrolled ? stateClass_1 : stateimportant_1]"
    >
      <div class="col-md-1 co-2"></div>
      <div class="col-md-5 co-2">
        <img class="logo-1" src="../assets/DIPROM_logo.png" />
        <span class="txt-logo-1">
          กระทรวงอุตสาหกรรม
          <p>ศูนย์ส่งเสริมอุตสาหกรรมภาคที่ 4</p></span
        >
      </div>

      <div class="col-md-5 co-2">
        <img class="logo-2" src="../assets/udon_logo.jpg" />
        <p></p>
        <span class="txt-logo-2">บริษัท อุดรกิตติ (1992) จำกัด</span>
      </div>
    </div>
    <div>
      <span class="txt-title">3 Phase IoT Power Meter</span>
    </div>
    <div class="row-2">
      <div class="col-2"></div>
      <div class="col-16">
        <marquee>
          <span>
            <h3>
                    กิจกรรมการจัดการกระบวนการผลิตด้วยเทคโนโลยีดิจิทัล (IOT & Embedded Technology) โครงการส่งเสริมและสนับสนุนการประยุกต์ใช้เทคโนโลยีดิจิทัล ศูนย์ส่งเสริมอุตสาหกรรม ภาคที่ 4
            </h3>
          </span>
        </marquee>
      </div>
      <div class="col-2"></div>
    </div>
  </div>
</template>

<script>
import textRef from "../store/DataService";

export default {
  name: "Header",
  data() {
    return {
      scrolled: false,
      lastPosition: 0,
      state: true,
      value: 0,
      val: {
        val_1: 0,
        val_2: 0,
      },
      stateClass_1: "on_1",
      stateimportant_1: "off_1",
    };
  },
  mounted() {
    setInterval(() => {
      this.handleScroll();
      this.db();
    }, 700);
  },
  methods: {
    handleScroll() {
      if ((this.state == true) | (this.lastPosition > 15)) {
        this.scrolled = true;
      }

      if (this.state == false && this.lastPosition < 15) {
        this.scrolled = false;
      }
      this.allPostion = window.scrollY;
      this.lastPosition = window.scrollY;
    },
    db() {
      this.value = textRef.get_Connect();
      if (this.value == 1) {
        this.val.val_1 += 1;
        this.val.val_2 = 0;
      } else {
        this.val.val_2 += 1;
        this.val.val_1 = 0;
      }
      if ((this.val.val_1 > 60) | (this.val.val_2 > 60)) {
        this.state = false;
      } else {
        this.state = true;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,800;1,200&family=Pridi:wght@300;700&display=swap");
* {
  margin: 0;
  padding: 0 auto;
  box-sizing: inherit;
}

.container {
  margin: 0 auto;
  width: 100%;
  padding-right: auto;
}

.on_1 {
  transform: translateY(0%);
  transition: transform 300ms linear;
}
.off_1 {
  transform: translateY(10%);
  transition: transform 300ms linear;
}
.row-1,
.row-2 {
  display: flex;
}

.logo-1 {
  margin-top: 25px;
  height: 150px;
  width: 150px;
}

.logo-2 {
  margin-top: 25px;
  height: 200px;
  width: 200px;
}

span {
  display: block;
  color: rgb(20, 20, 78);
  font-family: "Pridi", serif;
  font-size: 2.3em;
}

.txt-title {
  margin-top: 50px;
  font-family: "K2D", sans-serif;
  text-align: center;
}

marquee {
  margin-top: 50px;
  font-weight: 800;
  color: rgb(20, 20, 78);
  font-family: "Pridi", serif;
  font-size: 12px;
}
h3 {
  font-size: 1.3em;
}

@media screen and (max-width: 1400px) {
  span {
    font-size: 20px;
  }
}

@media screen and (max-width: 600px) {
  .row-1 {
    display: block;
  }

  .logo-1 {
    margin-top: 25px;
    height: 100px;
    width: 100px;
  }

  .logo-2 {
    margin-top: 25px;
    height: 100px;
    width: 100px;
  }

  span {
    font-size: 18px;
  }

  .txt-title {
    font-size: 28px;
  }
}
</style>
