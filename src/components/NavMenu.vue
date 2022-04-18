<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1">
      <router-link :to="{ path: '/coming-soon' }">Home Page</router-link>
    </el-menu-item>
    <el-submenu index="2">
      <template slot="title">Services</template>
      <el-menu-item index="2-1">
        <router-link :to="{ path: '/coming-soon' }">Service 1</router-link>
      </el-menu-item>
      <el-menu-item index="2-2">
        <router-link :to="{ path: '/coming-soon' }">Service 2</router-link>
      </el-menu-item>
      <el-menu-item index="2-3">
        <router-link :to="{ path: '/coming-soon' }">Service 3</router-link>
      </el-menu-item>
    </el-submenu>
    <el-menu-item index="3">
      <router-link :to="{ path: '/coming-soon' }">About Us</router-link>
    </el-menu-item>
    <el-menu-item index="4">
      <router-link :to="{ path: '/user-contact' }">Contact</router-link>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  data() {
    return {
      activeIndexArray: [{ index: "4", path: "/user-contact" }]
    };
  },
  computed: {
    routePath() {
      // console.log(this.$route.path);
      return this.$route.path;
    },
    activeIndex() {
      if (this.routePath) {
        for (let index of this.activeIndexArray) {
          // console.log(index);
          if (this.routePath.indexOf(index.path) !== -1) {
            return index.index;
          }
        }
      }
      return "1";
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: white;
}

a:visited {
  color: white;
}

.el-menu-demo {
  background-color: #991a42;
}

.el-menu--horizontal .el-menu .el-menu-item,
.el-menu--horizontal .el-menu .el-submenu__title {
  background-color: #991a42;
}

.el-menu--horizontal .el-menu .el-menu-item:hover {
  background-color: rgba(153, 26, 66, 0.5);
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus a,
.el-menu--horizontal .el-menu-item:not(.is-disabled):hover a {
  color: rgba(153, 26, 66, 1);
  background-color: white;
}
.el-menu--popup {
  padding: 0;
}
@media screen and (max-width: 640px) {
  .el-menu {
    padding: 0 10px;
  }
  .el-menu-item,
  .el-submenu,
  /deep/.el-submenu .el-submenu__title {
    padding: 0 5px;
  }
}
</style>
