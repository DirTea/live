export default {
  onShareAppMessage(): any {
    return {
      title: "LIVE Cards",
      success() {
        uni.showToast({
          title: "分享成功",
        });
      },
      fail() {
        uni.showToast({
          title: "分享失败",
          icon: "error",
        });
      },
    };
  },
};
