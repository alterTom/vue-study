1.回调函数的3个问题
2.vm监视data中数据的特点

# 1.vue.js是什么
    1).作用: 动态构建用户界面
    2).特点
        * 遵循MVVM模式
        * 编码简洁,体积小,运行效率高,移动pc端开发
        * 它本身只关注UI,可以轻松引入vue插件和其他第三方库开发项目
    3).与其他框架的关联
        借鉴angular的模板和数据绑定技术
        借鉴react的组件化和虚拟DOM技术
    4).vue包含一系列的扩展插件(库)
        vue-cli: vue脚手架
        vue-resource(axios): ajax请求
        vue-router: 路由
        vuex: 状态管理
        vue-lazyload: 图片懒加载
        vue-scroller: 页面滑动相关
        mint-ui: 基于vue组件库 (移动端)
        element-ui : 基于vue的组件库 (pc端)

# 基本使用
    1). 引入vue.js
    2).创建vue实例对象(vm),指定选项(配置)对象
        el: 指定dom标签容器的选择器
        data: 指定初始化状态数据的对象/函数 (返回一个对象)
    3).在页面模板中使用{{}} 或vue 指令
    4).MVVM模式
        M: Model(模型), vue中是data(为view提供数据)
        V: View (视图), vue 中是模板页面(显示data中的数据)
        VM: ViewModel(视图模型), vue中是vue实例对象 (管理者: 数据绑定.DOM监听)

# Vue对象的选项
    1).el
        指定dom标签容器的选择器
        Vue就会管理对应的标签及其子标签
        也可以通过$mount() 来处理
    2) data
        对象或函数类型
        指定初始化状态属性数据的对象
        vm也会自动拥有data中所有属性
        页面中可以直接访问属性
        数据代理: 由vm对象来代理对data中所有属性的操作 (读/写)
        data数据监视的特点
            1.vue会监视data中所有层次的属性
            2.对象中的属性数据通过添加set方法来实现监视
            3.数组中的元素也实现了监视: 重写数据一系列更新元素的方法
                1).调用原生对应的方法对元素进行处理
                2).去更新界面
    3) methods
        包含多个方法的对象
        供页面中的事件指令俩绑定回调
        回调函数默认有event参数,但也可以指定自己的参数
        所有的方法由vue对象来调用,访问data中的属性直接使用this.xxx
    
    4) computed
        包含多个计算属性的对象
        根据已有属性进行计算返回一个新的数据,供页面获取显示
        如果同时还需要监视计算属性的变化,需要使用getter/setter
        计算属性有缓存,内部使用对象容器缓存,可以减少计算的次数
        如何给对象定义get/set 属性
            对象创建之后指定: Object.defineProperty(obj,age,{get(){},set(value){})
            在创建对象是指定: get name()(return xxx)  / set name (value){}
        弄清楚回调函数的3个问题
            什么时候回调执行
            它的作用是什么
            函数中的this是谁
    
    5) watch
        包含多个属性监视的对象
        分为一般监视和深度监视
            'xxx.yyy':function(value) {}
            'xxx': {
                deep: true,
                handler: fun(value)
            }
        另一种添加监听方式: vm.$watch('xxx',func)


