import { createRouter, createWebHistory } from "vue-router";
import { createWebHashHistory } from 'vue-router'
import spotZongBang from "../views/spot-zongbang.vue";
import spotHome from "../views/spot-home.vue";
import spotLogin from "../views/spot-login.vue";
import spotshijianbang from "../views/spot-rendubang-components/spot-rendubang.vue";
import spotReDuRiBang from "../views/spot-rendubang-components/spot-reduribang.vue";
import spotreduzhoubang from "../views/spot-rendubang-components/spot-reduzhoubang.vue";
import spotreduyuebang from "../views/spot-rendubang-components/spot-reduyuebang.vue";
import spotredujibang from "../views/spot-rendubang-components/spot-redujibang.vue";
import spotredunianbang from "../views/spot-rendubang-components/spot-redunianbang.vue";
import spotdiqubang from "../views/spot-diqubang/spot-diqubang.vue";
import soptfenleibang from "../views/spot-fenleibang/spot-fenleibang.vue";
import spotdiquribang from "../views/spot-diqubang/spot-diquribang.vue";
import spotdiquyuebang from "../views/spot-diqubang/spot-diquyuebang.vue";
import spotdiqunianbang from "../views/spot-diqubang/spot-diqunianbang.vue";
import spotfenleiribang from "../views/spot-fenleibang/spot-fenleiribang.vue";
import spotfenleiyuebang from "../views/spot-fenleibang/spot-fenleiyuebang.vue";
import spotfenleinianbang from "../views/spot-fenleibang/spot-fenleinianbang.vue";
import spotpinglunbang from "../views/spot-pinglunbang/spot-pinglunbang.vue";
import spotpinglunrbang from "../views/spot-pinglunbang/spot-pinglunribang.vue";
import spotpinglunybang from "../views/spot-pinglunbang/spot-pinglunyuebang.vue";
import spotpinglunnbang from "../views/spot-pinglunbang/spot-pinglunnianbang.vue";
import spotzhuanfabang from "../views/spot-zhuanfabang/spot-zhuanfabang.vue";
import spotzhuanfarbang from "../views/spot-zhuanfabang/spot-zhuanfaribang.vue";
import spotzhuanfaybang from "../views/spot-zhuanfabang/spot-zhuanfayuebang.vue";
import spotzhuanfanbang from "../views/spot-zhuanfabang/spot-zhuanfanianbang.vue";
import spotdianzanbang from "../views/spot-dianzanbang/spot-diazanbang.vue";
import spotdianzanrbang from "../views/spot-dianzanbang/spot-dianzanribang.vue";
import spotdianzanybang from "../views/spot-dianzanbang/spot-dianzanyuebang.vue";
import spotdianzannbang from "../views/spot-dianzanbang/spot-dianzannianbang.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: spotLogin,
    },
    {
      path: "/zongbang",
      name: "zongbang",
      component: spotZongBang,
    },
    {
      path: "/home",
      name: "home",
      component: spotHome,
      children: [
        //热度平台榜
        {
          path: "zongbang",
          name: "zongbang",
          component: spotZongBang,
        },
        // 热度榜
        {
          path: "spotshijianbang",
          name: "spotshijianbang",
          component: spotshijianbang,
          children: [
            // 热度日榜
            {
              path: "spotReDuRiBang",
              name: "reduzhibang",
              component: spotReDuRiBang,
            },
            // 热度周榜
            {
              path: "spotreduzhoubang",
              name: "spotreduzhoubang",
              component: spotreduzhoubang,
            },
            //热度月榜
            {
              path: "spotreduyuebang",
              name: "spotreduyuebang",
              component: spotreduyuebang,
            },
            //热度季度榜
            {
              path: "spotredujibang",
              name: "spotredujibang",
              component: spotredujibang,
            },
            //热度年榜
            {
              path: "spotredunianbang",
              name: "spotredunianbang",
              component: spotredunianbang,
            },
          ]
        },
        //地区榜
        {
          path: "spotdiqubang",
          name: "spotdiqubang",
          component: spotdiqubang,
          children: [
            //地区日榜
            {
              path: "spotdiquribang",
              name: "spotdiquribang",
              component: spotdiquribang,
            },
            //地区月榜
            {
              path: "spotdiquyuebang",
              name: "spotdiquyuebang",
              component: spotdiquyuebang,
            },
            //地区年榜
            {
              path: "spotdiqunianbang",
              name: "spotdiqunianbang",
              component: spotdiqunianbang,
            },
          ],
        },
        //  分类榜
        {
          path: "spotfenleibang",
          name: "spotfenleibang",
          component: soptfenleibang,
          children: [
            //分区日榜
            {
              path: "spotfenleiribang",
              name: "spotfenleiribang",
              component: spotfenleiribang,
            },
            //分区月榜
            {
              path: "spotfenleiyuebang",
              name: "spotfenleiyuebang",
              component: spotfenleiyuebang,
            },
            //分区年榜
            {
              path: "spotfenleinianbang",
              name: "spotfenleinianbang",
              component: spotfenleinianbang,
            },
          ],
        },
        //  评论榜
        {
          path: "spotpinglunbang",
          name: "spotpinglunbang",
          component: spotpinglunbang,
          children: [
            //评论日榜
            {
              path: "spotpinglunrbang",
              name: "spotpinglunrbang",
              component: spotpinglunrbang,
            },
            //评论月榜
            {
              path: "spotpinglunybang",
              name: "spotpinglunybang",
              component: spotpinglunybang,
            },
            //评论年榜
            {
              path: "spotpinglunnbang",
              name: "spotpinglunnbang",
              component: spotpinglunnbang,
            },
          ]
        },
        //  转发榜
        {
          path: "spotzhuanfabang",
          name: "spotzhuanfabang",
          component: spotzhuanfabang,
          children: [
            //转发日榜
            {
              path: "spotzhuanfarbang",
              name: "spotzhuanfarbang",
              component: spotzhuanfarbang,
            },
            //转发月榜
            {
              path: "spotzhuanfaybang",
              name: "spotzhuanfaybang",
              component: spotzhuanfaybang,
            },
            //转发年榜
            {
              path: "spotzhuanfanbang",
              name: "spotzhuanfanbang",
              component: spotzhuanfanbang,
            },
          ]
        },
        //  点赞榜
        {
          path: "spotdianzanbang",
          name: "spotdianzanbang",
          component: spotdianzanbang,
          children: [
            //点赞日榜
            {
              path: "spotdianzanrbang",
              name: "spotdianzanrbang",
              component: spotdianzanrbang,
            },
            //点赞月榜
            {
              path: "spotdianzanybang",
              name: "spotdianzanybang",
              component: spotdianzanybang,
            },
            //点赞年榜
            {
              path: "spotdianzannbang",
              name: "spotdianzannbang",
              component: spotdianzannbang,
            },
          ]
        },
      ],
    },
  ],
});

export default router;
