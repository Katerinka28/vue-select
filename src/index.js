import VueSelect from './components/Select.vue'
import mixins from './mixins/index'


 */
const _componentName = 'VueSelect'
/**
 * @description Support create multiple vfm instance
 */

/**
 * @description Register vfm instance globally
 * @deprecated not available in vue-final-modal 4
 */
const installVfm = (Vue, options = {}) => {
 
  Vue.component(_componentName, VueSelect)
}

/**
 * @description Vue plugin for register vfm instance globally
 * @deprecated not available in vue-final-modal 4
 */
export const vfmPlugin = pluginOptions => ({
  install(Vue, options) {
    const _options = Object.assign({}, pluginOptions, options)
    installVfm(Vue, _options)
  }
})

vfmPlugin.install = installVfm
console.log(vfmPlugin, '**********')
export default vfmPlugin
