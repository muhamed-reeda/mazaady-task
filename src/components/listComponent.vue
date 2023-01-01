<template>
  <div class="list-container">
    <div class="list-title">
      <span>{{ item.name }}</span>
    </div>
    <div class="list-parent">
      <el-select
        class="col-4"
        :size="'small'"
        v-model="listValue"
        filterable
        :placeholder="item.name"
        @change="getChildrenIfExist"
      >
        <el-option
          v-for="option in item.options"
          :key="option.id"
          :label="option.name"
          :value="option.id"
        >
        </el-option>
      </el-select>
      <el-input
        class="col-4 d-block mt-3"
        :size="'small'"
        :placeholder="'Enter Value ..'"
        v-if="isOtherValueSelected"
        v-model="otherValue"
      ></el-input>
    </div>
    <div class="children-container" v-if="hasChild">
      <div
        class="child-list"
        v-for="child in getChildres(listValue)"
        :key="child.id"
      >
        <div class="list-title">
          <span>{{ child.name }}</span>
        </div>
        <el-select
          class="col-4"
          v-model="childValue"
          filterable
          :placeholder="child.name"
          :size="'small'"
          value-key="id"
          @change="saveData(child.name, childValue.value)"
        >
          <el-option
            v-for="option in child.options"
            :key="option.id"
            :label="option.name"
            :value="{ id: option.id, value: option.name }"
          >
          </el-option>
        </el-select>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/components/formList.scss";
export default {
  name: "PropertyList",
  props: {
    item: Object,
  },
  data() {
    return {
      hasChild: false,
      listValue: null,
      childValue: null,
      isOtherValueSelected: false,
      otherValue: null,
      otherID: null,
    };
  },
  watch: {
    otherValue: function () {
      this.saveData(this.item.name, this.otherValue);
    },
  },
  computed: {
    getChildres: function () {
      return function (id) {
        var childrens = this.$store.getters["getOptionsChildren"].map((e) =>
          e[0].parent == id ? e : []
        )[0];
        return childrens;
      };
    },
  },
  methods: {
    saveData(key, value) {
      this.$store.dispatch("saveFormData", {
        key: key,
        value: value,
      });
    },
    getChildrenIfExist(id) {
      if (id == this.otherID) {
        this.isOtherValueSelected = true;
      } else {
        this.item.options.filter((option) => {
          if (option.id == id) {
            this.saveData(this.item.name, option.name);
            if (option.child == true) {
              this.$store.dispatch("getOptionsChildren", id);
              this.hasChild = true;
            }
          }
        });
      }
    },
  },
  mounted() {
    this.otherID = this.$props.item.id + Math.floor(Math.random() * 99999);
    if (this.$props.item.options.length != 0) {
      this.$props.item.options.push({
        child: false,
        id: this.otherID,
        name: "Other",
        slug: "Other",
      });
    }
  },
};
</script>
