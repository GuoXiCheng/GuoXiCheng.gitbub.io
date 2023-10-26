import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as c,c as h,e as i,d as e,f as t,b as o}from"./app-f2b2f7c2.js";const l="/assets/image/skip-docs/layout-reference.png",p="/assets/image/skip-docs/skip-bottom-screenshot.jpg",_="/assets/image/skip-docs/android-rect.png",u={},b=o('<h1 id="贡献指南参考" tabindex="-1"><a class="header-anchor" href="#贡献指南参考" aria-hidden="true">#</a> 贡献指南参考</h1><h2 id="实现原理" tabindex="-1"><a class="header-anchor" href="#实现原理" aria-hidden="true">#</a> 实现原理</h2><p>利用Android无障碍服务，获取当前窗口对象，遍历窗口节点，当节点符合指定条件时，执行点击的动作。</p><h2 id="核心逻辑" tabindex="-1"><a class="header-anchor" href="#核心逻辑" aria-hidden="true">#</a> 核心逻辑</h2>',4),g=e("h2",{id:"配置文件选项",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#配置文件选项","aria-hidden":"true"},"#"),t(" 配置文件选项")],-1),m={href:"https://github.com/GuoXiCheng/SKIP/blob/main/app/src/main/assets/skip_config.yaml",target:"_blank",rel:"noopener noreferrer"},x=e("p",null,"打开“SKIP”应用后，会自动同步最新配置",-1),f={id:"package-name",tabindex:"-1"},k=e("a",{class:"header-anchor",href:"#package-name","aria-hidden":"true"},"#",-1),v=e("p",null,"应用包名",-1),y=e("p",null,"在手机桌面长按应用图标，打开“应用信息”，点击右上角“应用详情”，可以查看应用包名。",-1),I={id:"max-click-count",tabindex:"-1"},S=e("a",{class:"header-anchor",href:"#max-click-count","aria-hidden":"true"},"#",-1),A=e("p",null,"最大点击次数",-1),P=e("p",null,"设置为0时，即使查询到指定节点，也不执行点击动作。",-1),w={id:"skip-text",tabindex:"-1"},K=e("a",{class:"header-anchor",href:"#skip-text","aria-hidden":"true"},"#",-1),V=e("p",null,[t("根据文本匹配，当节点的文本"),e("strong",null,"包含"),t("指定字符串时，执行点击动作。")],-1),B=e("p",null,"在手机屏幕上看到的文本是什么就可以填什么，但是实际节点text为null时，会失效。",-1),C={id:"skip-id",tabindex:"-1"},L=e("a",{class:"header-anchor",href:"#skip-id","aria-hidden":"true"},"#",-1),z=e("p",null,[t("根据id匹配，当节点的id"),e("strong",null,"包含"),t("指定字符串时，执行点击动作。")],-1),W=e("p",null,[t("id需要使用"),e("strong",null,"Android布局分析工具"),t("查询，但实际节点id为null时，不可用。")],-1),M={id:"skip-bounds",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#skip-bounds","aria-hidden":"true"},"#",-1),T=e("p",null,[t("根据bounds匹配，当所设定的bounds"),e("strong",null,"包含"),t("节点的bounds时，执行点击动作。")],-1),G=e("p",null,[t("一般可交互的节点都会具有bounds，需要使用"),e("strong",null,"Android布局分析工具"),t("查询，"),e("code",null,"skip_bounds"),t("可以配置多个。")],-1),E=e("h2",{id:"android布局分析工具",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#android布局分析工具","aria-hidden":"true"},"#"),t(" Android布局分析工具")],-1),F={href:"https://github.com/alibaba/web-editor",target:"_blank",rel:"noopener noreferrer"},X=o('<h3 id="应用布局参考图" tabindex="-1"><a class="header-anchor" href="#应用布局参考图" aria-hidden="true">#</a> 应用布局参考图</h3><p>当你选中想要的目标节点时，会显示该节点的布局结构，参考如下：</p><figure><img src="'+l+`" alt="应用布局参考图" width="300" tabindex="0" loading="lazy"><figcaption>应用布局参考图</figcaption></figure><h3 id="配置skip-text和skip-id" tabindex="-1"><a class="header-anchor" href="#配置skip-text和skip-id" aria-hidden="true">#</a> 配置skip_text和skip_id</h3><p><code>text</code>呈现的值，可以对应到配置文件中的<code>skip_text</code></p><p><code>resourceId</code>呈现的值，可以对应到配置文件中的<code>skip_id</code></p><h3 id="配置skip-bounds" tabindex="-1"><a class="header-anchor" href="#配置skip-bounds" aria-hidden="true">#</a> 配置skip_bounds</h3><p>skip_bounds的值是需要计算得到的，skip_bounds的值可能长得像这样</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1440,3024#1067,230,1195,274
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>其中的1440,3024是你当前手机屏幕的最大宽高，可以在SKIP-v1.4版本的主界面查看到：</p><p>主要作用是将设定中的bounds按比例转换为当前屏幕适配的bounds。</p><figure><img src="`+p+'" alt="SKIP页脚" width="300" tabindex="0" loading="lazy"><figcaption>SKIP页脚</figcaption></figure><p>其中的1067,230,1195,274分别表示一个节点在屏幕中的: left,top,right,bottom</p><p>参考上图中rect的信息: left=x,top=y,right=x+width,bottom=y+height</p><figure><img src="'+_+'" alt="SKIP页脚" width="300" tabindex="0" loading="lazy"><figcaption>SKIP页脚</figcaption></figure>',15);function j(J,R){const s=a("Mermaid"),n=a("ExternalLinkIcon"),d=a("Badge");return c(),h("div",null,[b,i(s,{id:"mermaid-12",code:"eJxLL0osyOBSAALH6GcLdj7rXVeSWlHybP7SZ537XnQ1PW/aGaugq2un4FT9bMb6pxOWPV074+mcFbVgHU5AGQWgMFiBczRQ7dP23VBNCAVATWAFLlDzM1MwTXfFYroriukIIZh5blDzkvJL81KKMc10RzVTAWyCO6ahYCGYoR7Rz3dPfjZ3fiwXWC45J7G42CU1TSElNS2xNKdEITk/J7/ISjktLc2aCwBwaIWn"}),g,e("p",null,[t("配置文件位置："),e("a",m,[t("配置文件"),i(n)])]),x,e("h3",f,[k,t(" package_name "),i(d,{text:"必填",type:"danger",vertical:"middle"})]),v,y,e("h3",I,[S,t(" max_click_count "),i(d,{text:"选填",type:"tip",vertical:"middle"})]),A,P,e("h3",w,[K,t(" skip_text "),i(d,{text:"选填",type:"tip",vertical:"middle"})]),V,B,e("h3",C,[L,t(" skip_id "),i(d,{text:"选填",type:"tip",vertical:"middle"})]),z,W,e("h3",M,[N,t(" skip_bounds "),i(d,{text:"选填",type:"tip",vertical:"middle"})]),T,G,E,e("p",null,[t("我使用的是："),e("a",F,[t("web-editor"),i(n)]),t("，使用Android Studio自带的或其他工具也一样，只要可以探查屏幕节点的布局结构即可。")]),X])}const Q=r(u,[["render",j],["__file","003-contribute.html.vue"]]);export{Q as default};
