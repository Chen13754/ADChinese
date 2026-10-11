import PrimaryButton from "../../PrimaryButton.js";

import { BACKUP_SLOT_TYPE } from "../../../core/storage/index.js";

export default {
  name: "BackupEntry",
  components: {
    PrimaryButton
  },
  props: {
    slotData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      currTime: 0,
    };
  },
  computed: {
    save() {
      return GameStorage.loadFromBackup(this.slotData.id);
    },
    raw() { return GameStorage.backupRaw(this.slotData.id); },
    progressStr() {
      if (!this.save) return this.raw ? "备份损坏，无法加载；可下载原始文件。" : "（空）";

      // These will be checked in order; the first nonzero resource will be returned
      const resources = [this.save.celestials.pelle.realityShards,
        this.save.reality.iMCap,
        this.save.reality.realityMachines,
        this.save.eternityPoints,
        this.save.infinityPoints,
        this.save.antimatter
      ];
      const names = ["现实碎片",
        "虚数机器上限",
        "现实机器",
        "永恒点数",
        "无限点数",
        "反物质"];

      for (let index = 0; index < resources.length; index++) {
        const val = new Decimal(resources[index]);
        if (val.gt(0)) return `${names[index]}: ${formatPostBreak(val, 2)}`;
      }

      // In practice this should never happen, unless a save triggers on the same tick the very first AD1 is bought
      return "没有资源";
    },
    slotType() {
      const formattedTime = this.slotData.intervalStr?.();
      switch (this.slotData.type) {
        case BACKUP_SLOT_TYPE.ONLINE:
          return `在线时每 ${formattedTime} 存档一次`;
        case BACKUP_SLOT_TYPE.OFFLINE:
          return `离线后 ${formattedTime} 存档`;
        case BACKUP_SLOT_TYPE.RESERVE:
          return "即将载入的存档";
        default:
          throw new Error("Unrecognized backup save type");
      }
    },
    lastSaved() {
      const lastSave = GameStorage.lastBackupTimes[this.slotData.id]?.date ?? 0;
      return lastSave
        ? `上次存档时间：${TimeSpan.fromMilliseconds(this.currTime - lastSave)}前`
        : "槽位还未使用";
    },
  },
  methods: {
    update() {
      this.currTime = Date.now();
    },
    load() {
      return GameStorage.restoreBackup(this.slotData.id);
    },
    downloadRaw() { GameStorage.exportBackupRaw(this.slotData.id); },
  },
  template: `
  <div
    class="c-bordered-entry"
    data-v-backup-entry
  >
    <h3>槽位 #{{ slotData.id }}:</h3>
    <span>{{ progressStr }}</span>
    <span>
      {{ slotType }}
    </span>
    <span
      class="c-fixed-height"
      data-v-backup-entry
    >{{ lastSaved }}</span>
    <PrimaryButton
      class="o-primary-btn--width-medium"
      :class="{ 'o-primary-btn--disabled' : !save }"
      @click="load()"
    >
      加载
    </PrimaryButton>
    <PrimaryButton v-if="raw && !save" @click="downloadRaw">下载原始备份</PrimaryButton>
  </div>
  `
};