<template>
  <div>
    <section class="text-center">
      <div class="container">
        <!-- <a
          href="https://docs.google.com/spreadsheets/d/1FtvwlGtXCg4-sqhO_ydl9SerJH1WGA6wEWLT-3BjvCA/edit?usp=sharing"
        >
          <button type="button" class="btn btn-outline-danger ac" aria-disabled="true">
            <img class="img1" src="../assets/google_sheet.png" />
            Google Sheet
          </button>
        </a> -->
        <button
          @click="onExport"
          type="button"
          class="btn btn-outline-primary dc"
        >
          <img class="img2" src="../assets/Excel.png" />
          ดาวน์โหลดไฟล์ Excel
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
import XLSX from "xlsx";
export default {
  data() {
    return {
      lists: [],
    };
  },

  methods: {
    onExport() {
      axios.get("https://sheetdb.io/api/v1/lrl44du6ex48z").then((res) => {
        this.lists = res.data;
      });
      const dataWS = XLSX.utils.json_to_sheet(this.lists);
      const wb = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(wb, dataWS);
      XLSX.writeFile(wb, "ข้อมูลการใช้พลังงานไฟฟ้า.xlsx");
    },
  },
};
</script>

<style scoped>
.img1 {
  width: 40px;
  height: auto;
}
.img2 {
  width: 58px;
  height: auto;
}

.dc {
  width: 40%;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
}
.ac {
  width: 40%;
  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 10px;
  margin-top: 30px;
}

@media screen and (max-width: 600px) {
 .dc {
  width: 87%;
  display: inline-block;
  margin-top: 0px;
  }

  .ac {
  width: 87%;
  display: inline-block;
  }
}

@media screen and (max-width: 400px) {
  .dc {
  width: 87%;
  display: inline-block;
  margin-top: 10px;
  }

  .ac {
  width: 87%;
  display: inline-block;
  }
}
</style>
