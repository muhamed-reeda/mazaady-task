<template>
  <div class="home">
    <Nav />
    <div class="layout-main-container container-fluid">
      <div class="container">
        <div class="row right-side-container">
          <div class="marg col-1"></div>
          <div class="right-side col-7">
            <div class="product-details-container col-12">
              <div class="image-slide">
                <div
                  class="image"
                  v-for="(img, index) in product.images"
                  :key="index"
                  @click="setImages(img)"
                >
                  <img
                    :src="require('@/assets/images/' + img)"
                    alt=""
                    srcset=""
                  />
                </div>
              </div>
              <div class="header-section col-12">
                <div class="row">
                  <div class="statistics-container col-9">
                    <ul class="statistics-list">
                      <li>
                        <span>{{ product.time }}</span>
                      </li>
                      <li>
                        <font-awesome-icon icon="fa-solid fa-eye" />
                        {{ product.views }}
                      </li>
                    </ul>
                  </div>
                  <div class="actions-container col-3">
                    <ul class="actions-list">
                      <li><font-awesome-icon icon="fa-solid fa-flag" /></li>
                      <li><font-awesome-icon icon="fa-solid fa-heart" /></li>
                      <li><font-awesome-icon icon="fa-solid fa-share" /></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="product-image-contianer">
                <img
                  :src="require('@/assets/images/' + product.mainImage)"
                  alt=""
                  srcset=""
                />
              </div>
              <div class="product-details">
                <div class="seller-details">
                  <div class="seller">
                    <div class="image">
                      <img
                        src="../assets/images/photo-1500648767791-00dcc994a43e.jpeg"
                        alt=""
                        srcset=""
                      />
                    </div>
                    <div class="info">
                      <h5>{{ product.sellerName }}</h5>
                      <span>{{ product.sellerNumber }}</span>
                    </div>
                    <el-rate v-model="product.rateValue"></el-rate>
                  </div>
                </div>
                <div class="details-section p-2">
                  <h4>{{ product.name }}</h4>
                  <span>{{ product.date }}</span>
                </div>
                <div class="section-footer p-2">
                  <div class="row">
                    <div class="prices col-7">
                      <div class="row p-2">
                        <div class="price">
                          <span>+1000</span>
                        </div>
                        <div class="price">
                          <span>+1000</span>
                        </div>
                      </div>
                    </div>
                    <div class="confirm-price col-5">
                      <el-input
                        class="col-9"
                        placeholder="ادخل القيمة"
                        v-model="input"
                      ></el-input>
                      <button>تأكيد</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="massage-section col-12">
              <div class="section-title">
                <h3>ارسل رسالة الى البائع</h3>
                <p>يمكنك في وقت البث المباشر ارسال رساله للبائع للاستفسار</p>
              </div>
              <div class="send-message-sec">
                <div class="row">
                  <div class="message col">
                    <el-input
                      placeholder="اكتب الرسالة"
                      v-model="input"
                    ></el-input>
                  </div>
                  <div class="send-message col-1">
                    <el-button type="primary" circle>
                      <font-awesome-icon icon="fa-solid fa-paper-plane" />
                    </el-button>
                  </div>
                </div>
              </div>
            </div>

            <div class="auction-details-section col-12">
              <div class="auction-details">
                <div class="section-title">
                  <h4>تفاصيل المزاد</h4>
                </div>
                <div class="details">
                  <ul class="details-list">
                    <li>
                      <ul class="d-flex">
                        <li>
                          <font-awesome-icon icon="fa-solid fa-location-dot" />
                          Egypt, Mansoura
                        </li>
                        <li>200 قطعة</li>
                      </ul>
                    </li>
                    <li>
                      <ul class="d-flex">
                        <li>
                          <font-awesome-icon icon="fa-solid fa-earth-africa" />
                          البيع لاعلى سعر
                        </li>
                        <li style="color: orange">
                          <font-awesome-icon icon="fa-solid fa-microphone" />
                          صوت
                        </li>
                      </ul>
                    </li>
                    <li>
                      <font-awesome-icon icon="fa-solid fa-cubes" /> منتجات
                      متعددة
                    </li>
                  </ul>
                </div>
                <el-divider></el-divider>
                <div class="description-sec">
                  <h4>تفاصيل</h4>
                  <p>
                    ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                    ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
                    مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
                    لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون
                    من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                    وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل
                    كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت"
                  </p>
                </div>
                <el-divider></el-divider>
                <div class="polices-sec">
                  <h4>سياسة الاستبدال و الاسترجاع</h4>
                  <p>
                    ويُستخدم في صناعات المطابع ودور النشر. كان لوريم إيبسوم
                    ولايزال المعيار للنص الشكلي منذ القرن الخامس عشر عندما قامت
                    مطبعة مجهولة برص مجموعة من الأحرف بشكل عشوائي أخذتها من نص،
                    لتكوّن كتيّب بمثابة دليل أو مرجع شكلي لهذه الأحرف. خمسة قرون
                    من الزمن لم تقضي على هذا النص، بل انه حتى صار مستخدماً
                    وبشكله الأصلي في الطباعة والتنضيد الإلكتروني. انتشر بشكل
                    كبير في ستينيّات هذا القرن مع إصدار رقائق "ليتراسيت"
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="left-side col-4">
            <div class="auction-details">
              <div class="auction-date">
                <ul>
                  <li>تاريخ البث</li>
                  <li>10/12/2032</li>
                </ul>
              </div>
              <div class="auction-budget">
                <div class="current-budget col-6">
                  <div class="box">
                    <span>القيمة المالية للمزاد</span>
                    <h3>4000$</h3>
                  </div>
                </div>
                <div class="budget-value col-6">
                  <div class="box">
                    <span>القيمة المالية للمزاد</span>
                    <h3>4000$</h3>
                  </div>
                </div>
              </div>
            </div>
            <div class="contenders-main-container box">
              <div class="section-title">
                <h5>المتنافسون</h5>
              </div>
              <div class="contenders">
                <div
                  class="contender col-12"
                  v-for="(contender, index) in contenders"
                  :key="index"
                >
                  <div class="row">
                    <div class="info col-6">
                      <div class="row">
                        <div class="contender-img">
                          <img
                            :src="require('@/assets/images/' + contender.image)"
                            alt=""
                            srcset=""
                          />
                        </div>
                        <div class="contender-info">
                          <h4>{{ contender.name }}</h4>
                          <span>{{ contender.time }}</span>
                        </div>
                      </div>
                    </div>
                    <div class="amount col-6">
                      <span>{{ contender.amount }} +</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="auction-values-container box">
              <div class="value">
                <ul>
                  <li><span>سعر الشراء</span></li>
                  <li class="price">5000</li>
                </ul>
              </div>
              <div class="value">
                <ul>
                  <li><span>سعر الشراء</span></li>
                  <li class="price">5000</li>
                </ul>
              </div>
              <div class="value">
                <ul>
                  <li><span>سعر الشراء</span></li>
                  <li class="price">5000</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "../assets/style/views/productPage.scss";
import Nav from "../components/navbar.vue";
export default {
  name: "HomeView",
  components: {
    Nav,
  },
  data() {
    return {
      product: {
        name: "شراء محموعة من السيارات موديلات 1990",
        sellerName: "اسم البائع",
        sellerNumber: "+20123456789",
        date: "2 Dec 11:30PM",
        mainImage: "rang.webp",
        views: 4779,
        time: "02:00",
        rateValue: 2,
        images: ["photo-1500648767791-00dcc994a43e.jpeg", "rang.webp"],
      },
      contenders: [
        {
          name: "الاسم",
          time: "12:50:00",
          image: "photo-1500648767791-00dcc994a43e.jpeg",
          amount: 20,
        },
        {
          name: "الاسم",
          time: "12:50:00",
          image: "photo-1500648767791-00dcc994a43e.jpeg",
          amount: 20,
        },
        {
          name: "الاسم",
          time: "12:50:00",
          image: "photo-1500648767791-00dcc994a43e.jpeg",
          amount: 20,
        },
        {
          name: "الاسم",
          time: "12:50:00",
          image: "photo-1500648767791-00dcc994a43e.jpeg",
          amount: 20,
        },
        {
          name: "الاسم",
          time: "12:50:00",
          image: "photo-1500648767791-00dcc994a43e.jpeg",
          amount: 20,
        },
      ],
    };
  },
  methods: {
    setImages(img) {
      this.product.mainImage = img;
    },
  },
};
</script>
