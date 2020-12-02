/**
 * 自定义的插件
 */
(function(window){


    const MyPlugin = {}



    MyPlugin.install = function (Vue, options) {
        // 1. 添加全局方法或 property
        // 给vue添加工具/静态 方法,
        Vue.myGlobalMethod = function () {
          // 逻辑...
          console.log("vue.myGlobalMethod()")
        }
      
        // 2. 添加全局资源
        //定义全局指令
        Vue.directive('my-directive', {
          bind (el, binding, vnode, oldVnode) {
            // 逻辑...
            el.textContent = binding.value + '.....'
          }
          
        })
      
        // 3. 注入组件选项
        Vue.mixin({
          created: function () {
            // 逻辑...
          }
          
        })
      
        // 4. 添加实例方法
        Vue.prototype.$myMethod = function (methodOptions) {
          // 逻辑...
          console.log("vm.$myMethod()")
        }
      }

      //暴露插件
      window.MyPlugin = MyPlugin;

})(window)