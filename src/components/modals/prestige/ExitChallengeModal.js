import ModalWrapperChoice from "../ModalWrapperChoice.js";

export default {
  name: "ExitChallengeModal",
  components: {
    ModalWrapperChoice
  },
  props: {
    challengeName: {
      type: String,
      required: true,
    },
    normalName: {
      type: String,
      required: true,
    },
    hasHigherLayers: {
      type: Boolean,
      required: true,
    },
    exitFn: {
      type: Function,
      required: true,
    }
  },
  computed: {
    isCelestial() {
      return this.challengeName.match("Reality");
    },
    isRestarting() {
      return this.isCelestial ? player.options.retryCelestial : player.options.retryChallenge;
    }
  },
  methods: {
    handleYesClick() {
      this.exitFn();
      EventHub.ui.offAll(this);
    }
  },
  template: `
  <ModalWrapperChoice
    option="exitChallenge"
    @confirm="handleYesClick"
  >
    <template #header>
      你将要{{ isRestarting ? "重试" : "退出" }}{{ challengeName }}
    </template>

    <div class="c-modal-message__text">
      <span v-if="isRestarting">
        你将在确认后立即重新进入{{ challengeName }}。
      </span>
      <span v-else>
        这会让你回到不再受该挑战限制的{{ normalName }}。
      </span>
      <span v-if="hasHigherLayers">
        更高层限制带来的其他效果仍会继续生效。
      </span>
    </div>
    <template #confirm-text>
      {{ isRestarting ? "重试" : "退出" }}
    </template>
  </ModalWrapperChoice>
  `
};