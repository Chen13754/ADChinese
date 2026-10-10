import Loading from "../../../../modules/vue-loading.js";

import Payments from "../../../core/payments.js";

import { STEAM } from "../../../env.js";
import { SteamRuntime } from "../../../steam/index.js";

import PrimaryButton from "../../PrimaryButton.js";
import ShopButton from "./ShopButton.js";

export default {
  name: "ShopTab",
  components: {
    ShopButton,
    Loading,
    PrimaryButton,
  },
  data() {
    return {
      availableSTD: 0,
      spentSTD: 0,
      isLoading: false,
      IAPsEnabled: false,
      creditsClosed: false,
      loggedIn: false,
      username: "",
      canRespec: false,
      respecTimeStr: "",
    };
  },
  computed: {
    STEAM() {
      return STEAM;
    },
    purchases() {
      return ShopPurchase.all;
    },
    enableText() {
      return `内购：${this.IAPsEnabled ? "已启用" : "已禁用"}`;
    },
    respecText() {
      if (!this.loggedIn) return "尚未登录！";
      if (!this.canRespec) return "当前无法重置！（购买 STD 币，或等待上次重置满 3 天）";
      return null;
    },
    hiddenName() {
      return player.options.hideGoogleName;
    }
  },
  methods: {
    update() {
      this.availableSTD = ShopPurchaseData.availableSTD;
      this.spentSTD = ShopPurchaseData.spentSTD;
      this.isLoading = Boolean(player.IAP.checkoutSession.id);
      this.IAPsEnabled = player.IAP.enabled;
      this.creditsClosed = GameEnd.creditsEverClosed;
      this.loggedIn = Cloud.loggedIn;
      this.username = Cloud.user?.displayName;
      this.canRespec = ShopPurchaseData.canRespec;
      if (!ShopPurchaseData.respecAvailable && !this.canRespec) {
        this.respecTimeStr = ShopPurchaseData.timeUntilRespec.toStringShort();
      }
    },
    showStore() {
      if (STEAM && !SteamRuntime.isActive) return;
      if (this.creditsClosed) return;
      SecretAchievement(33).unlock();
      if (this.loggedIn) Modal.shop.show();
      else Modal.message.show("请先登录，才能购买 STD 币。");
    },
    onCancel() {
      Payments.cancelPurchase(false);
    },
    respec() {
      if (this.creditsClosed || !this.loggedIn || !this.canRespec) return;
      ShopPurchaseData.respecRequest();
    },
    toggleEnable() {
      if (ShopPurchaseData.availableSTD < 0) return;
      player.IAP.enabled = !player.IAP.enabled;
      if (ShopPurchaseData.isIAPEnabled) Speedrun.setSTDUse(true);
    },
    respecClass() {
      return {
        "o-primary-btn--subtab-option": true,
        "o-pelle-disabled-pointer": this.creditsClosed,
        "o-primary-btn--disabled": !this.loggedIn || !this.canRespec
      };
    }
  },
  template: `
  <div
    class="tab shop"
    data-v-shop-tab
  >
    <div
      class="c-shop-disclaimer"
      data-v-shop-tab
    >
      说明：这些购买并非推进游戏所必需，只是用于支持开发者。
      即使不进行应用内购买，游戏也能保持平衡。
    </div>
    <div>
      注意：受法律限制，Android、Steam 与网页版的商店购买彼此独立，
      无法转移。
    </div>
    <div
      class="c-subtab-option-container"
      data-v-shop-tab
    >
      <PrimaryButton
        class="o-primary-btn--subtab-option"
        :class="{ 'o-pelle-disabled-pointer': creditsClosed }"
        label="应用内购买："
        @click="toggleEnable()"
        data-v-shop-tab
      >
        {{ enableText }}
      </PrimaryButton>
      <PrimaryButton
        v-if="!STEAM"
        v-tooltip="respecText"
        :class="respecClass()"
        @click="respec()"
        data-v-shop-tab
      >
        重置商店购买记录
      </PrimaryButton>
    </div>
    <div v-if="loggedIn && !canRespec && !STEAM">
      距离下次可重置还需： {{ respecTimeStr }}
    </div>
    <div
      v-if="loggedIn"
      class="c-login-info"
      data-v-shop-tab
    >
      <template v-if="STEAM">
        已登录账号：{{ username }}。
      </template>
      <template v-else>
        <span v-if="hiddenName">已登录 <i>（名称已隐藏）</i></span>
        <span v-else>已登录账号：{{ username }}。</span>
        <button
          class="o-shop-button-button"
          onclick="GameOptions.logout()"
          data-v-shop-tab
        >
          断开 Google 账号
        </button>
      </template>
    </div>
    <div
      v-else
      class="c-login-info"
      data-v-shop-tab
    >
      登录后才能购买 STD 币或使用这些升级。
      <button
        class="o-shop-button-button"
        onclick="GameOptions.login()"
        data-v-shop-tab
      >
        使用 Google 账号登录
      </button>
    </div>
    <div
      class="c-shop-header"
      data-v-shop-tab
    >
      <span>你拥有 {{ availableSTD }}</span>
      <img
        src="./public/images/std_coin.png"
        class="c-shop-header__img"
        data-v-shop-tab
      >
      <button
        class="o-shop-button-button"
        :class="{ 'o-shop-button-button--disabled': !loggedIn }"
        @click="showStore()"
        data-v-shop-tab
      >
        购买更多
      </button>
    </div>
    注意：本页所有数值均不受数字显示格式设置影响
    <div
      class="l-shop-buttons-container"
      data-v-shop-tab
    >
      <ShopButton
        v-for="purchase in purchases"
        :key="purchase.key"
        :purchase="purchase"
        data-v-shop-tab
      />
    </div>
    <loading
      :active="isLoading"
      :can-cancel="true"
      :on-cancel="onCancel"
      :is-full-page="true"
      data-v-shop-tab
    />
  </div>
  `
};