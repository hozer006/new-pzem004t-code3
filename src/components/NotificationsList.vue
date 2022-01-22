<template>
  <div
    class="notification-list"
    :class="[state ? stateClass_1 : stateimportant_1]"
  >
    <svg xmlns="http://www.w3.org/2000/svg" style="display: none">
      <symbol
        id="exclamation-triangle-fill"
        fill="currentColor"
        viewBox="0 0 16 16"
      >
        <path
          d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"
        />
      </symbol>
    </svg>
    <div class="alert alert-danger d-flex align-items-center" role="alert">
      <svg
        class="bi flex-shrink-0 me-2 imgcre-1"
        width="24"
        height="24"
        role="img"
        aria-label="Danger:"
      >
        <use xlink:href="#exclamation-triangle-fill" />
      </svg>
      <div class="textn-1">ฮาร์ดแวร์ไม่มีสัญญาณอินเตอร์เน็ต</div>
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
      val: {
        val_1: 0,
        val_2: 0,
      },
      state: true,
      stateClass_1: "on_1",
      stateimportant_1: "off_1",
    };
  },
  mounted() {
    setInterval(() => {
      this.a = textRef.getAll();
      if (this.a.Link == 1) {
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
    }, 700);
  },
};
</script>

<style scoped>
.textn-1 {
  margin-left: 10px;
}
.on_1 {
  display: none;
}
.off_1 {
  display: block;
  width: 100%;
  position: fixed;
  z-index: 1023;
}
</style>
