<template>
  <div class="home">
    <Notification />
    <Header />
    <content-one />
    <content-two />
    <content-three />
    <Footer2 />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "../components/header.vue";
import ContentOne from "../components/contentOne.vue";
import ContentTwo from "../components/contentTwo.vue";
import ContentThree from "../components/contentThree.vue";
import Footer2 from "../components/footer2.vue";
import Footer from "../components/footer.vue";
import Notification from "../components/NotificationsList.vue";

export default {
  name: "Home",
  components: {
    Header,
    ContentOne,
    ContentTwo,
    ContentThree,
    Footer2,
    Footer,
    Notification,
  },
};
</script>
<style scoped></style>
