import VueSelect from './components/Select.vue'
import mixins from './mixins/index'

function install(Vue, {
  } = {}) {
    Vue.component('VueSelect', VueSelect);
  }
export default install
export { VueSelect, mixins }
