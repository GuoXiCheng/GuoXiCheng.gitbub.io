import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as t,c as o,b as p}from"./app-262de2ea.js";const _={},a=p('<h1 id="防抖与节流" tabindex="-1"><a class="header-anchor" href="#防抖与节流" aria-hidden="true">#</a> 防抖与节流</h1><p>防抖是指在一段时间后执行函数，若在这段时间内重复触发，则重新开始计算时间。</p><p>节流是指在一段时间后执行函数，若在这段时间内重复触发，则只执行一次。</p><p>举个乘电梯的例子：</p><p>第一个人走进电梯，电梯计时15秒后运行，又来第二个人走进电梯，电梯重新开始15秒计时，这是防抖。</p><p>第一个人走进电梯，电梯计时15后准时运行，这是节流。</p><p>防抖和节流都可以使用clearTimeout和setTimeout实现，目的是减少回调执行频率，节约资源。</p><p>防抖的使用场景有：搜索框输入、表单校验、窗口大小调整事件</p><p>节流的使用场景有：滚动条滚动事件、拖拽事件</p>',9),c=[a];function r(s,n){return t(),o("div",null,c)}const h=e(_,[["render",r],["__file","防抖与节流.html.vue"]]);export{h as default};
