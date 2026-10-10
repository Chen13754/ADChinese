import ModalWrapperChoice from "./ModalWrapperChoice.js";
import PrimaryButton from "../PrimaryButton.js";

export default {
  name: "SpeedrunModeModal",
  components: {
    PrimaryButton,
    ModalWrapperChoice,
  },
  data() {
    return {
      onInfoPage: true,
      name: "",
      confirmPhrase: "",
    };
  },
  computed: {
    willStartRun() {
      return this.confirmPhrase === "Gotta Go Fast!";
    },
  },
  methods: {
    nextPage() {
      this.onInfoPage = false;
    },
    startRun() {
      if (!this.willStartRun) return;
      this.emitClose();
      Speedrun.prepareSave(Speedrun.generateName(this.name));
    },
  },
  template: `
  <ModalWrapperChoice
    :show-cancel="!onInfoPage && !willStartRun"
    :show-confirm="!onInfoPage && willStartRun"
    confirm-class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
    @confirm="startRun"
  >
    <template #header>
      进入速通模式
    </template>
    <div
      v-if="onInfoPage"
      class="c-modal-message__text"
    >
      速通存档会额外记录到达各进度节点的时间，可在屏幕右下角及统计的专用子页面中查看。
      <br>
      <br>
      默认关闭大部分动画和确认提示，你可以在解锁相应内容前修改这些设置。速通开始时，游戏会保持暂停，直到反物质发生变化，方便你先配置设置。为免开局优化需要长时间等待，部分成就会直接赠送。
      <br>
      <br>
      <i>
        速通模式没有额外的游戏内容。
      </i>
      <br>
      <br>
      <PrimaryButton
        class="o-primary-btn--width-medium c-modal-hard-reset-btn c-modal__confirm-btn"
        @click="nextPage"
      >
        继续
      </PrimaryButton>
    </div>
    <div
      v-else
      class="c-modal-message__text"
    >
      可在下方为速通存档命名，名称只用于识别，不影响游戏。留空时会随机生成。计时开始前，点击速通信息框中的名字仍可修改。
      <input
        ref="name"
        v-model="name"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
      <br>
      <br>
      速通存档和普通存档一样可以导入导出。由于导入导出允许逐段优化，导入速通存档会将其标记为分段速通；从未导入的存档保持为单段速通。
      <br>
      <br>
      速通开始前，可在设置中修改符文随机种子。
      <br>
      <br>
      <div class="c-modal-hard-reset-danger">
        开始速通会将当前存档槽重置到游戏开端。通关统计、显示设置、自动机脚本和符文皮肤会保留，其他内容相当于通关后重新开始。输入英文确认短语 “Gotta Go Fast!”，以确认开始或重新开始速通。
      </div>
      <input
        ref="confirmPhrase"
        v-model="confirmPhrase"
        type="text"
        class="c-modal-input c-modal-hard-reset__input"
        @keyup.esc="emitClose"
      >
    </div>
    <template #confirm>
      开始速通！
    </template>
    <template #cancel>
      取消
    </template>
  </ModalWrapperChoice>
  `
};