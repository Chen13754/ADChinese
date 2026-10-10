import HeaderCenterContainer from "./prestige-header/HeaderCenterContainer.js";
import HeaderEternityContainer from "./prestige-header/HeaderEternityContainer.js";
import HeaderInfinityContainer from "./prestige-header/HeaderInfinityContainer.js";

export default {
  name: "HeaderPrestigeGroup",
  components: {
    HeaderCenterContainer,
    HeaderEternityContainer,
    HeaderInfinityContainer,
  },
  data() { return { ycExpanded: false, ycHasPrestige: false }; },
  methods: { update() { this.ycHasPrestige = PlayerProgress.infinityUnlocked(); } },
  template: `
  <div
    class="c-prestige-info-blocks"
    :class="{ 'yc-header-expanded': ycExpanded }"
    data-v-header-prestige-group
  >
    <HeaderEternityContainer
      class="l-game-header__eternity"
      data-v-header-prestige-group
    />
    <HeaderCenterContainer
      class="l-game-header__center"
      data-v-header-prestige-group
    />
    <button v-if="ycHasPrestige" class="o-primary-btn yc-header-toggle" :aria-expanded="String(ycExpanded)" @click="ycExpanded = !ycExpanded">{{ ycExpanded ? '收起重置与资源' : '展开重置与资源' }} <i class="fas" :class="ycExpanded ? 'fa-chevron-up' : 'fa-chevron-down'" /></button>
    <HeaderInfinityContainer
      class="l-game-header__infinity"
      data-v-header-prestige-group
    />
  </div>
  `
};