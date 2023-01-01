<template>
  <div class="header-main-container">
    <div class="navbar-container container-fluid">
      <div class="container">
        <div class="row">
          <div class="logo-container col-4">
            <img
              src="https://mazaady.com/images/mazaady-logo.svg"
              alt=""
              srcset=""
            />
          </div>
          <div class="search-inputs-container col-8">
            <div class="search-inputs-group">
              <el-select placeholder="اختر الفئة" v-model="searchCategory">
                <el-option
                  v-for="item in []"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
              <el-input
                placeholder="ابحث هنا"
                class="search-input"
                v-model="searchInput"
              ></el-input>
              <el-button icon="el-icon-search" class="search-btn"></el-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-container container-fluid">
      <div class="container col-12">
        <div class="row">
          <div class="menu-side col-8">
            <ul class="menu-list col-8">
              <li class="list-option">الرئيسية</li>
              <li class="list-option">التصنيفات</li>
              <li class="list-option">مشترياتي</li>
              <li class="list-option">حسابي</li>
            </ul>
          </div>
          <div class="actions-side col-4">
            <ul class="actions-list col-lg-8 col-12">
              <li class="list-option">
                <el-button type="warning" round>
                  <i class="el-icon-arrow-down el-icon--right"></i> عربية
                </el-button>
              </li>
              <li class="list-option">
                <font-awesome-icon :icon="['fas', 'fa-user']" />
              </li>
              <li class="list-option">
                <font-awesome-icon :icon="['fas', 'fa-bell']" />
              </li>
              <li class="list-option">
                <font-awesome-icon icon="fa-solid fa-wallet" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/components/navbar.scss";
export default {
  name: "NavBar",
  components: {},
  data() {
    return {
      searchCategory: "",
      searchInput: null,
    };
  },
};
</script>
