import VueSelect from './components/Select.vue'
import mixins from './mixins/index'


const _componentName = 'VueSelect'

const installVfm = (Vue, options = {}) => {
 
  Vue.component(_componentName, VueSelect)
}
export const vfmPlugin = pluginOptions => ({
  install(Vue, options) {
    const _options = Object.assign({}, pluginOptions, options)
    installVfm(Vue, _options)
  }
})

vfmPlugin.install = installVfm
console.log(vfmPlugin, '**********')
export default vfmPlugin
