export default {
  name: "StorageRecoveryModal",
  data() { return { confirmed: false, busy: false, reason: GameStorage.recovery?.reason ?? "存档无法加载" }; },
  computed: {
    slots() {
      const root = GameStorage.recovery?.root;
      const saves = root?.saves;
      return [0, 1, 2].map(id => ({ id, valid: saves?.[id] !== undefined && GameStorage.checkPlayerObject(saves[id]) === "" }));
    },
    backups() {
      return AutoBackupSlots.filter(slot => GameStorage.loadFromBackup(slot.id));
    }
  },
  methods: {
    downloadRaw() { GameStorage.exportRecoveryData(); },
    async loadSlot(id) { this.busy = true; try { await GameStorage.loadSlot(id); } finally { this.busy = false; } },
    async loadBackup(id) { this.busy = true; try { await GameStorage.restoreBackup(id); } finally { this.busy = false; } },
    async reset() { if (!this.confirmed) return; this.busy = true; try { await GameStorage.hardReset(); } finally { this.busy = false; } },
  },
  template: `
    <div class="c-modal__inner yc-storage-recovery">
      <h2>存档恢复</h2>
      <p>{{ reason }}</p>
      <p>自动保存已暂停，原始数据保留。请先下载，再选择有效存档或备份。</p>
      <button class="o-primary-btn" @click="downloadRaw">下载原始数据</button>
      <div v-for="slot in slots" :key="slot.id">
        存档槽 {{ slot.id + 1 }}：{{ slot.valid ? '可加载' : '空或损坏' }}
        <button v-if="slot.valid" class="o-primary-btn" :disabled="busy" @click="loadSlot(slot.id)">加载此槽</button>
      </div>
      <div v-for="slot in backups" :key="'backup-' + slot.id">
        <button class="o-primary-btn" :disabled="busy" @click="loadBackup(slot.id)">恢复备份 #{{ slot.id }}</button>
      </div>
      <p>重置只清除当前槽，其它槽与备份保留。</p>
      <label><input v-model="confirmed" type="checkbox">我已下载原始数据，确认重置当前槽</label>
      <br>
      <button class="o-primary-btn" :disabled="!confirmed || busy" @click="reset">重置当前槽并开始</button>
    </div>
  `
};
