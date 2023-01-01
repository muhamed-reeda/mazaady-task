<template>
  <div class="form container-fluid">
    <form @submit.prevent="submit">
      <div class="list-title">
        <span>Main Category</span>
      </div>
      <el-select
        class="col-4"
        :size="'small'"
        v-model="selectedMainCategory"
        filterable
        placeholder="Main Categories"
        @change="getSubCategories"
      >
        <el-option
          v-for="(cat, index) in $store.getters['getMainCategories']"
          :key="cat.id"
          :label="cat.name"
          :value="index"
        >
        </el-option> </el-select
      ><br />
      <div class="list-title">
        <span>Sub Category</span>
      </div>
      <el-select
        class="col-4"
        :size="'small'"
        v-model="selectedSubCategory"
        filterable
        placeholder="Sub Categories"
        @change="getProperties"
      >
        <el-option
          v-for="cat in subCategories"
          :key="cat.id"
          :label="cat.name"
          :value="cat.id"
        >
        </el-option>
      </el-select>
      <PropertyList v-for="prop in properties" :item="prop" :key="prop.id" />
      <div class="form-submit-container mt-5 mb-3">
        <el-button type="success" @click="submit">Submit Form</el-button>
      </div>
    </form>

    <div class="form-result-container" v-if="isFormSubmit">
      <el-table
        :data="$store.getters['getFormData']"
        style="width: 100%"
        border
      >
        <el-table-column prop="key">
          <template slot="header">
            <span>Key</span>
          </template>
        </el-table-column>
        <el-table-column prop="value">
          <template slot="header">
            <span>Value</span>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
import PropertyList from "./listComponent.vue";
export default {
  name: "FormData",
  components: {
    PropertyList,
  },
  data() {
    return {
      selectedMainCategory: null,
      selectedSubCategory: null,
      subCategories: [],
      properties: [],
      formData: [],
      isFormSubmit: false,
    };
  },
  watch: {
    "$store.state.lists.properties": function () {
      this.properties = [];
      this.properties = this.$store.getters["getProperties"];
    },
  },
  methods: {
    getSubCategories(index) {
      this.selectedSubCategory = null;
      this.properties = [];
      this.$store.dispatch("getSubCategories", index).then(() => {
        this.subCategories = this.$store.getters["getSubCategories"];
      });
      this.$store.dispatch("saveFormData", {
        key: "Main Category",
        value: this.$store.getters["getMainCategories"][index].name,
      });
    },
    getProperties() {
      this.$store.dispatch("getProperties", this.selectedSubCategory);
      this.subCategories.map((e) => {
        if (e.id == this.selectedSubCategory) {
          this.$store.dispatch("saveFormData", {
            key: "Sub Category",
            value: e.name,
          });
        }
      });
    },
    submit() {
      if (this.$store.getters["getFormData"].length == 0) {
        this.$message({
          message: "There Are No Selected Data To Submit",
          type: "error",
        });
      } else {
        this.$message({
          message: "Form was submited successfully",
          type: "success",
        });
        this.isFormSubmit = true;
      }
    },
  },
  beforeMount() {
    this.$store.dispatch("getAllCategories");
  },
};
</script>
