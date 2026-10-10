import ModalWrapperChoice from "./ModalWrapperChoice.js";

export default {
  name: "RespecIAPModal",
  components: {
    ModalWrapperChoice
  },
  methods: {
    returnedSTDCount() {
      let std = 0;
      for (const purchase of ShopPurchase.all) {
        if (purchase.config.instantPurchase) continue;
        std += purchase.purchases * purchase.cost;
      }
      return std;
    },
    handleYesClick() {
      ShopPurchaseData.respecAll();
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ModalWrapperChoice
    option="respecIAP"
    @confirm="handleYesClick"
  >
    <template #header>
      即将重置商店购买记录
    </template>
    <div
      class="c-modal-message__text"
      data-v-respec-iap-modal
    >
      确定要重置商店购买记录吗？此操作不会花费任何东西。
      将返还你在所有永久倍率升级上花费的 {{ returnedSTDCount() }}
      <img
        src="./public/images/std_coin.png"
        class="o-shop-button-button__img"
        data-v-respec-iap-modal
      > 个 STD 币。
      <br>
      <br>
      离线进度和符文外观的花费不会退还。已购买的符文外观套装
      永久有效，重置商店购买记录后也不会丢失。
      <br>
      <br>
      <b
        class="o-warning"
        data-v-respec-iap-modal
       >除非再次购买 STD 币，否则你无法再次重置商店购买记录。</b>
    </div>
  </ModalWrapperChoice>
  `
};