import ClassicTabButton from "./ClassicTabButton.js";

export default {
  name: "ClassicTabBar",
  components: {
    ClassicTabButton,
  },
  computed: {
    tabs: () => Tabs.oldUI,
  },
  template: `
  <div class="l-old-ui__tab-bar">
    <ClassicTabButton
      v-for="(tab, i) in tabs"
      :key="i"
      :tab-position="i"
      :tab="tab"
    />
  </div>
  `
};