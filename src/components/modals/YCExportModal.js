import ModalWrapper from "./ModalWrapper.js";
export default {
  name: "YCExportModal", components: { ModalWrapper },
  data() { return { text: GameStorage.canSave() ? GameStorage.exportModifiedSave() : "", status: "" }; },
  mounted() { this.$refs.text?.select(); },
  methods: {
    async copy() {
      this.$refs.text.select();
      try { await navigator.clipboard.writeText(this.text); this.status = "已复制存档文本"; }
      catch { this.status = "请长按或使用系统复制，将选中的完整文本保存到另一台设备。"; }
    },
  },
  template: `<ModalWrapper><template #header>存档文本备用</template>
    <div class="yc-export"><p>下载受限时，可复制当前存档槽的完整文本，到另一台设备的“导入存档”中粘贴。</p>
    <textarea ref="text" readonly :value="text" aria-label="当前存档文本" spellcheck="false" />
    <button v-if="text" class="o-primary-btn" @click="copy">选择并复制全文</button>
    <p v-else>当前正在计算离线进度或选择符文，请完成后再导出。</p><p role="status">{{ status }}</p></div>
  </ModalWrapper>`
};
