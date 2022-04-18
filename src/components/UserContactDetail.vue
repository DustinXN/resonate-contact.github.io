<template>
  <el-dialog
    title="Details"
    :visible.sync="dialogVisible"
    width="100%"
    :center="true"
    style="max-width: 500px; margin: auto"
  >
    <div class="detail-wrapper">
      <div>
        <p class="fw-600">Address</p>
        <p class="title">
          <span class="sub-title">City:</span>
          <span class="detail-info">{{ info.address.city }}</span>
        </p>
        <p class="title">
          <span class="sub-title">Street:</span>
          <span class="detail-info">{{ info.address.street }}</span>
        </p>
        <p class="title">
          <span class="sub-title">Suite:</span>
          <span class="detail-info">{{ info.address.suite }}</span>
        </p>
        <p class="title">
          <span class="sub-title">Zip Code:</span>
          <span class="detail-info">{{ info.address.zipcode }}</span>
        </p>
      </div>
      <div>
        <p class="fw-600">Company</p>
        <p class="title">
          <span class="sub-title">Name:</span>
          <span class="detail-info">{{ info.company.name }}</span>
        </p>
        <p class="title">
          <span class="sub-title">Phrase:</span>
          <span class="detail-info">{{ info.company.catchPhrase }}</span>
        </p>
        <p class="title">
          <span class="sub-title">BS:</span>
          <span class="detail-info">{{ info.company.bs }}</span>
        </p>
      </div>
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="handleClose">Done</el-button>
    </span>
  </el-dialog>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    dialogVisible: Boolean,
    info: Object
  },
  computed: {},
  methods: {
    handleClose(done) {
      this.$emit("update:dialogVisible", false);
    }
  }
};
</script>

<style scoped>
.detail-wrapper {
  display: flex;
  flex-direction: row;
}
.detail-wrapper div {
  width: 50%;
}
.title {
  text-align: left;
  margin: 10px 0;
}
.sub-title {
  display: -moz-inline-box;
  display: inline-block;
  width: 4.5rem;
  height: 1.5rem;
}
span {
  display: inline-block;
  display: -moz-inline-box;
  word-wrap: break-word;
}
p {
  font-size: 1rem;
}
.fw-600 {
  font-weight: 600;
}
@media screen and (max-width: 640px) {
  .detail-wrapper {
    flex-direction: column;
  }
  .detail-wrapper div {
    width: 100%;
  }
  p {
    font-size: 1rem;
    margin: 20px 0;
  }
  .sub-title {
    width: 5rem;
  }
}
</style>
