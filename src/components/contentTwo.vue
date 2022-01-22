<template>
  <div>
     <div class="free">
        <p class="text-header">เฟส 2</p>
    </div>
    <div class="container coll row">
      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-battery-full icon"></i
          ><span class="tex-header"> แรงดัน</span>
          <p class="text-childen">{{ a.Voltage }} V</p>
        </div>
      </div>

      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-align-justify icon"></i
          ><span class="tex-header">กระแส</span>
          <p class="text-childen">{{ a.Current }} A</p>
        </div>
      </div>

      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-bolt icon"></i>
          <span class="tex-header">กำลังไฟ</span>
          <p class="text-childen">{{ a.Power }} W</p>
        </div>
      </div>

      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-history icon"></i>
          <span class="tex-header">พลังงาน</span>
          <p class="text-childen energy">{{ a.Energy }} kWh</p>
        </div>
      </div>

      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-history icon"></i>
          <span class="tex-header">PF</span>
          <p class="text-childen">{{ a.PF }}</p>
        </div>
      </div>

      <div class="div1 on_1">
        <div class="text-l1">
          <i class="fa fa-history icon"></i>
          <span class="tex-header">ความถี่</span>
          <p class="text-childen">{{ a.Frequency }} Hz</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import textRef from "../store/DataService";

export default {
  name: "app",
  firebase: {
    text: textRef,
  },

  data() {
    return {
      a: [],
    };
  },
  mounted() {
    setInterval(() => {
      try {
        this.a = textRef.getAll();
        var a = this.a.L2.Voltage;
        this.a.Voltage = a.toFixed(2);
        a = this.a.L2.Current;
        this.a.Current = a.toFixed(2);
        a = this.a.L2.Power;
        this.a.Power = a.toFixed(2);
        a = this.a.L2.Energy;
        this.a.Energy = a.toFixed(2);
        a = this.a.L2.PF;
        this.a.PF = a.toFixed(2);
        a = this.a.L2.Frequency;
        this.a.Frequency = a.toFixed(2);
      } catch (error) {
        console.log(error);
      }
    }, 100);
  },
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=K2D:ital,wght@0,800;1,200&family=Pridi:wght@300;700&display=swap');
* {
  margin: 0;
  padding: 0 auto;
  box-sizing: inherit;
}
.row {
  margin-bottom: 20px;
}

.free {
  color: rgb(20, 20, 78);
  font-family: 'K2D', sans-serif;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 15px;
  padding-left: 23%;
  padding-bottom: 0px;
  font-size: 24px;
}

.div1 {
  background: rgb(2, 66, 13);
  width: 30%;
  height: 80px;
  margin: 3px;
  display: inline-block;
  margin-left: 1.5rem;
  border-radius: 10px;
  -webkit-box-shadow: 0 10px 6px -6px #777;
     -moz-box-shadow: 0 10px 6px -6px #777;
          box-shadow: 0 10px 6px -6px #777;
}

.container {
    margin: 0 auto;
    width: 100%;
    padding-right: auto;
  }

.text-l1 {
  margin-top: 15px;
  color: #ffff;
  font-family: 'K2D', sans-serif;
  font-size: 18px;
}

.tex-header {
  padding-left: 20px;
  padding: 10px;
}


.text-childen {
  padding-left: 50px;
  font-size: 20px;
}

.icon {
  padding-left: 10px;
}
h2 {
  display: inline;
  margin-left: 10px;
  font-size: 30px;
  color: rgb(20, 20, 78);
}

.text-childen {
    padding-left: 65%;
  }
  .energy {
    padding-left: 60%;
  }


@media screen and (max-width: 1600px) { 
  .free{
      padding-left: 17%;
  }
}


@media screen and (max-width: 1400px) {
  .text-childen {
    padding-left: 60%;
  }
  .energy {
    padding-left: 60%;
  }
  .div1 {
    width: 30%;
  }
  .free{
      padding-left: 10%;
  }
}

@media screen and (max-width: 600px) {
  .text-childen {
    padding-left: 75%;
  }
  .energy {
    padding-left: 75%;
  }
  .div1 {
    width: 87%;
  }
  .free{
      padding-left: 10%;
  }
  
}


@media screen and (max-width: 500px) {
  .text-childen {
    padding-left: 60%;
  }
  .energy {
    padding-left: 60%;
  }
  .div1 {
    width: 87%;
  }
  .free{
      margin: 0px;
      padding-left: 10%;
  }
}
</style>