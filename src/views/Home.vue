<template>
  <div class="home">
    <button @click="Click">点击</button>
  </div>
</template>

<script>
// @ is an alias to /src
import { getStudentPage } from "../api/login";

export default {
  name: "Home",
  components: {},
  methods: {
    Click() {
      // getStudent().then((res) => {
      //   console.log(res);
      // });
      getStudentPage({ limit: 5, page: 1 }).then((res) => {
        console.log(res);
      });
    },
  },
};
</script>
