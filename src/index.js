import VueSelect from './components/Select.vue'
import mixins from './mixins/index'

function install(Vue, {
  } = {}) {
    Vue.component('v-select', VueSelect);
  }
export default install
export { VueSelect, mixins }
