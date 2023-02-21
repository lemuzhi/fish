"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const hello = common_vendor.ref("hello world");
    return (_ctx, _cache) => {
      return {
        a: common_vendor.t(hello.value)
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Users/\u5B66\u4E60/\u5B9E\u6218/\u65E7\u5382\u8857\u5C0F\u7A0B\u5E8F/weixin/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
