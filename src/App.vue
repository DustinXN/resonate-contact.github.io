<template>
  <div id="app">
    <el-header><NavMenu /></el-header>
    <el-main>
      <router-view />
    </el-main>
  </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
export default {
  name: "App",
  components: {
    NavMenu
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
  display: flex;
  flex-direction: column;
}
.el-header {
  padding: 0;
  background-color: rgba(153, 26, 66, 0.9);
}
.el-main {
  background-color: #141414;
  color: white;
  padding-top: 3rem;
}
@media screen and (max-width: 640px) {
  .el-main {
    padding-top: 1rem;
  }
}
</style>
