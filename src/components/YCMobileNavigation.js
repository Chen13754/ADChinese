export default {
  name: "YCMobileNavigation",
  data() { return { open: false, ending: false, tabIDs: [], subtabIDs: [], currentTab: 0, currentSubtab: 0, activeRates: 0 }; },
  computed: {
    tabs() { return this.tabIDs.map(id => Tabs.all.find(t => t.id === id)); },
    tab() { return Tabs.all.find(t => t.id === this.currentTab) || Tabs.current; },
    subtabs() { return this.subtabIDs.map(id => this.tab.subtabs.find(s => s.id === id)); },
  },
  watch: { currentSubtab() { this.$nextTick(() => { const bar = this.$refs.subtabs, selected = bar?.querySelector('[aria-current="page"]'); if (selected) bar.scrollLeft = selected.offsetLeft - (bar.clientWidth - selected.offsetWidth) / 2; }); } },
  mounted() { window.addEventListener("keydown", this.escape); },
  beforeDestroy() { window.removeEventListener("keydown", this.escape); },
  methods: {
    update() {
      this.ending = GameEnd.endState > END_STATE_MARKERS.INTERACTIVITY_DISABLED && !GameEnd.creditsClosed;
      this.currentTab = Tabs.current.id;
      this.currentSubtab = player.options.lastOpenSubtab[this.currentTab];
      this.tabIDs = Tabs.newUI.filter(t => t.isAvailable && !t.isHidden).map(t => t.id);
      this.subtabIDs = Tabs.current.subtabs.filter(t => t.isAvailable && !t.isHidden).map(t => t.id);
      this.activeRates = Object.values(YC.rates).filter(n => n > 1).length;
    },
    escape(event) { if (event.key === "Escape") this.open = false; },
    scrollTop() { this.$nextTick(() => { window.scrollTo(0, 0); document.querySelector("#ui")?.scrollTo(0, 0); }); },
    showTab(tab) { tab.show(true); this.open = false; this.scrollTop(); },
    showSubtab(subtab) { subtab.show(true); this.open = false; this.scrollTop(); },
    options() { Tab.options.show(true); this.open = false; this.scrollTop(); },
  },
  template: `
  <div v-if="!ending" class="yc-chrome">
    <div class="yc-brand">反物质维度 · YC自用 <small>个人使用，请勿传播</small></div>
    <header class="yc-mobile-header">
      <button class="o-primary-btn" aria-label="打开页面导航" :aria-expanded="open ? 'true' : 'false'" @click="open = !open"><i class="fas fa-bars" /></button>
      <div class="yc-mobile-title"><strong>YC · {{ tab.name }}</strong><small>个人使用，请勿传播</small></div>
      <button class="o-primary-btn" @click="options">设置／存档</button>
    </header>
    <nav ref="subtabs" class="yc-mobile-subtabs" aria-label="当前页面子分类">
      <button v-for="sub in subtabs" :key="sub.id" class="o-primary-btn" :class="{ 'yc-selected': currentSubtab === sub.id }" :aria-current="currentSubtab === sub.id ? 'page' : null" @click="showSubtab(sub)">
        <span v-html="sub.symbol" /> <span>{{ sub.name }}</span>
      </button>
    </nav>
    <div v-if="open" class="yc-nav-backdrop" @click.self="open = false">
      <nav class="yc-drawer" aria-label="所有页面">
        <div class="yc-drawer-title"><strong>页面导航</strong><button class="o-primary-btn" @click="open=false">关闭</button></div>
        <button v-for="item in tabs" :key="item.id" class="o-primary-btn" :class="[item.config.UIClass, { 'yc-selected': currentTab === item.id }]" @click="showTab(item)">
          <span v-html="item.subtabs[0].symbol" /> {{ item.name }}
        </button>
        <small>反物质维度 · YC自用<br>个人使用，请勿传播</small>
      </nav>
    </div>
    <button v-if="activeRates" class="yc-speed-badge o-primary-btn" @click="Modal.ycConsole.show()">{{ activeRates }}项加速已开启</button>
  </div>`
};
