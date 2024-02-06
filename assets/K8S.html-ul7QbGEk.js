import{_ as a}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as e,c as t,a as s}from"./app-WMeDSCf8.js";const n={},r=s(`<h1 id="k8s" tabindex="-1"><a class="header-anchor" href="#k8s"><span>K8S</span></a></h1><h2 id="启停k8s命名空间下的所有部署" tabindex="-1"><a class="header-anchor" href="#启停k8s命名空间下的所有部署"><span>启停K8S命名空间下的所有部署</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="停用K8S命名空间下的所有部署副本"><pre class="language-bash"><code>kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">0</span> deployment <span class="token parameter variable">--all</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="启用K8S命名空间下的所有部署副本"><pre class="language-bash"><code>kubectl scale <span class="token parameter variable">--replicas</span><span class="token operator">=</span><span class="token number">1</span> deployment <span class="token parameter variable">--all</span> <span class="token parameter variable">-n</span> <span class="token operator">&lt;</span>namespace-name<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,4),p=[r];function o(l,c){return e(),t("div",null,p)}const m=a(n,[["render",o],["__file","K8S.html.vue"]]),h=JSON.parse(`{"path":"/cloud-native/K8S.html","title":"K8S","lang":"zh-CN","frontmatter":{"description":"K8S 启停K8S命名空间下的所有部署 ","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/cloud-native/K8S.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"K8S"}],["meta",{"property":"og:description","content":"K8S 启停K8S命名空间下的所有部署 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-18T14:14:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-18T14:14:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"K8S\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-18T14:14:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"启停K8S命名空间下的所有部署","slug":"启停k8s命名空间下的所有部署","link":"#启停k8s命名空间下的所有部署","children":[]}],"git":{"createdTime":1697638485000,"updatedTime":1697638485000},"readingTime":{"minutes":0.22,"words":66},"filePathRelative":"cloud-native/K8S.md","localizedDate":"2023年10月18日","autoDesc":true,"excerpt":"\\n<h2>启停K8S命名空间下的所有部署</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"停用K8S命名空间下的所有部署副本\\"><pre class=\\"language-bash\\"><code>kubectl scale <span class=\\"token parameter variable\\">--replicas</span><span class=\\"token operator\\">=</span><span class=\\"token number\\">0</span> deployment <span class=\\"token parameter variable\\">--all</span> <span class=\\"token parameter variable\\">-n</span> <span class=\\"token operator\\">&lt;</span>namespace-name<span class=\\"token operator\\">&gt;</span>\\n</code></pre></div>"}`);export{m as comp,h as data};