<template>
  <div class="contact-wrapper">
    <div class="contact-title">
      <span>Get in touch</span>
      <span>with your Contacts</span>
    </div>
    <el-table
      :data="userContactData"
      class="tableResponsive"
      :row-class-name="tableRow"
    >
      <el-table-column prop="id" label="ID" width="50" />
      <el-table-column prop="username" label="Username" width="150" />
      <el-table-column prop="name" label="Name" width="180" />
      <el-table-column prop="email" label="Email" width="180" />
      <el-table-column prop="phone" label="Phone" width="180" />
      <el-table-column prop="website" label="Website" width="180" />
      <el-table-column fixed="right" label="Action" width="100">
        <template slot-scope="scope">
          <el-button @click="handleDetails(scope.row)" type="text" size="small">
            More Details
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <user-contact-detail :dialogVisible.sync="dialogVisible" :info="rowInfo" />
  </div>
</template>

<script>
import UserContactDetail from "../components/UserContactDetail.vue";
export default {
  components: { UserContactDetail },
  data() {
    return {
      userContactData: null,
      rowInfo: null,
      dialogVisible: false
    };
  },
  methods: {
    handleDetails(row) {
      this.rowInfo = row;
      console.log(row);
      this.dialogVisible = true;
    },
    tableRow({ row, rowIndex }) {
      return "tableRow";
    }
  },
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        return res.json();
      })
      .then(json => {
        this.userContactData = json;
      })
      .catch(err => {
        console.log("Data not fetched");
      });
  }
};
</script>

<style scoped>
.contact-wrapper {
  display: flex;
  flex-direction: row;
}
.contact-title {
  width: 15%;
  line-height: 4rem;
  padding: 2%;
  min-width: 170px;
}
.contact-title span {
  display: block;
  font-size: 2rem;
}
.tableResponsive {
  width: 85%;
  max-width: 1000px;
  margin: auto;
}
/deep/.el-table th.el-table__cell,
/deep/.el-table td.el-table__cell {
  background-color: #141414;
  color: white;
}
/deep/.el-table .hover-row td {
  color: rgba(153, 26, 66, 1);
}
@media screen and (max-width: 640px) {
  .contact-wrapper {
    flex-direction: column;
  }
  .contact-title {
    width: 100%;
  }
  .contact-title span {
    display: unset;
    font-size: 1.5rem;
  }
}
</style>
