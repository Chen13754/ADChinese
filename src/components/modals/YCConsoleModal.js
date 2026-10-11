import ModalWrapper from "./ModalWrapper.js";
import PrimaryButton from "../PrimaryButton.js";
export default {
  name: "YCConsoleModal",
  components: { ModalWrapper, PrimaryButton },
  data() {
    return { confirmed: YC.warningAccepted, resources: [], timers: [], amounts: {}, settings: {}, status: "" };
  },
  mounted() { if (!this.confirmed) this.$refs.cancel?.focus(); },
  methods: {
    update() {
      this.resources = YCResources.filter(r => r.unlocked()).map(r => ({ id: r.id, name: r.name, value: formatPostBreak(Currency[r.id].value, 2, 2) }));
      this.timers = YCTimers.filter(t => t.unlocked()).map(t => ({ id: t.id, name: t.name, description: t.description }));
      for (const r of this.resources) if (!(r.id in this.amounts)) this.$set(this.amounts, r.id, "100");
      for (const t of this.timers) {
        if (!(t.id in this.settings)) this.$set(this.settings, t.id, { enabled: YC.selectedRate(t.id) !== 1, value: String(YC.selectedRate(t.id) === 1 ? 2 : YC.selectedRate(t.id)) });
      }
    },
    accept() { YC.warningAccepted = true; this.confirmed = true; },
    close() { EventHub.dispatch(GAME_EVENT.CLOSE_MODAL); },
    add(id, amount, relative = false) {
      try {
        const gain = relative ? YC.addResourceMultiple(id, amount) : YC.addResource(id, amount);
        const name = YCResources.find(row => row.id === id).name;
        this.status = name + "已增加 " + formatPostBreak(gain.added, 2, 2) + "，当前 " + formatPostBreak(gain.value, 2, 2) + "。";
      }
      catch (e) { this.status = e.message; }
    },
    apply(id) {
      const row = this.settings[id];
      try { YC.setRate(id, row.value, row.enabled); this.status = "倍率已更新，仅本次网页有效。"; }
      catch (e) { this.status = e.message; row.enabled = YC.selectedRate(id) !== 1; }
    },
    preset(id, value) { this.settings[id].value = String(value); this.settings[id].enabled = true; this.apply(id); },
    resetSlot() { this.close(); Modal.hardReset.show(); },
    reset() {
      YC.reset();
      for (const value of Object.values(this.settings)) value.enabled = false;
      this.status = "所有功能已恢复正常速度。";
    },
  },
  template: `
  <ModalWrapper>
    <template #header>YC控制台</template>
    <div class="yc-console">
      <template v-if="!confirmed">
        <p class="yc-warning">首次游玩不建议使用，资源修改和加速可能破坏探索与成长体验。</p>
        <p>增益可能影响累计统计、成就和游戏节奏。需要保留原进度时，请先取消并导出存档。</p>
        <div class="yc-actions">
          <button ref="cancel" class="o-primary-btn" @click="close">取消</button>
          <button class="o-primary-btn" @click="accept">了解风险，继续</button>
        </div>
      </template>
      <template v-else>
        <p>个人使用，请勿传播。这里只显示当前进度已解锁的功能。</p>
        <h3>资源增益</h3>
        <p>快捷按钮增加当前数量的相应倍数：+1倍即翻倍，+10倍后为原来的11倍。每次点击均按当时数量计算；资源为0时请先自定义增加。</p>
        <section v-for="row in resources" :key="row.id" class="yc-control-row" :data-resource="row.id">
          <strong>{{ row.name }} <span class="yc-resource-value">当前 {{ row.value }}</span></strong>
          <div class="yc-actions yc-resource-presets">
            <button v-for="n in [1,10,100,1000]" :key="n" class="o-primary-btn" @click="add(row.id, String(n), true)">+{{ n }}倍</button>
          </div>
          <div class="yc-actions yc-resource-custom">
            <label :for="'yc-amount-' + row.id">自定义增加</label>
            <input :id="'yc-amount-' + row.id" v-model="amounts[row.id]" :aria-label="row.name + '增量'" class="c-modal-input" placeholder="正整数，如 1e100" inputmode="text" @keydown.enter.prevent="add(row.id, amounts[row.id])">
            <button class="o-primary-btn" @click="add(row.id, amounts[row.id])">增加</button>
          </div>
        </section>
        <h3>独立加速</h3>
        <p>各项独立启用。只影响在线运行，离线模拟保持原规则；刷新、读档或切换存档后恢复正常。</p>
        <button class="o-primary-btn" @click="reset">一键恢复正常速度</button>
        <section v-for="row in timers" :key="row.id" class="yc-control-row" :data-timer="row.id">
          <label class="yc-timer-label"><input v-model="settings[row.id].enabled" type="checkbox" @change="apply(row.id)"><strong>{{ row.name }}</strong></label>
          <p>{{ row.description }}</p>
          <div class="yc-actions">
            <button v-for="n in [2,5,10,100]" :key="n" class="o-primary-btn" @click="preset(row.id,n)">{{ n }}倍</button>
            <input v-model="settings[row.id].value" type="number" min="1" max="100" step="any" :aria-label="row.name + '倍率'" class="c-modal-input" @change="apply(row.id)">
            <button class="o-primary-btn" @click="apply(row.id)">应用</button>
          </div>
        </section>
        <h3>重置当前存档槽</h3>
        <p>使用原版重置流程，仅清除当前槽的游戏进度；下一步仍需输入确认文字。</p>
        <button class="o-primary-btn" @click="resetSlot">重置当前存档槽…</button>
      </template>
    </div>
    <p v-if="confirmed && status" class="yc-status" role="status" aria-live="polite">{{ status }}</p>
  </ModalWrapper>`
};
