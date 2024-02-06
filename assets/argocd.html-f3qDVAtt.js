import{_ as e}from"./plugin-vue_export-helper-x3n3nnut.js";import{o as a,c as t,a as s}from"./app-OwM4KWfr.js";const n={},r=s(`<h1 id="部署-argocd" tabindex="-1"><a class="header-anchor" href="#部署-argocd"><span>部署 Argocd</span></a></h1><h2 id="step-1-安装argocd" tabindex="-1"><a class="header-anchor" href="#step-1-安装argocd"><span>Step 1 安装argocd</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="创建命名空间"><pre class="language-bash"><code>kubectl create namespace argocd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="执行安装命令"><pre class="language-bash"><code>kubectl apply <span class="token parameter variable">-n</span> argocd <span class="token parameter variable">-f</span> https://raw.githubusercontent.com/argoproj/argo-cd/stable/manifests/core-install.yaml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="step-2-创建访问入口" tabindex="-1"><a class="header-anchor" href="#step-2-创建访问入口"><span>Step 2 创建访问入口</span></a></h2><h3 id="方式一-由k8s分配端口" tabindex="-1"><a class="header-anchor" href="#方式一-由k8s分配端口"><span>方式一：由K8S分配端口</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="修改service类型为NodePort"><pre class="language-bash"><code>kubectl patch svc argocd-server <span class="token parameter variable">-n</span> argocd <span class="token parameter variable">-p</span> <span class="token string">&#39;{&quot;spec&quot;: {&quot;type&quot;: &quot;NodePort&quot;}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh" data-title="查看生成的NodePort端口"><pre class="language-bash"><code>kubectl get svc argocd-server <span class="token parameter variable">-n</span> argocd
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="方式二-分配指定端口" tabindex="-1"><a class="header-anchor" href="#方式二-分配指定端口"><span>方式二：分配指定端口</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">sudo</span> k3s kubectl patch svc argocd-server <span class="token parameter variable">-n</span> argocd <span class="token parameter variable">-p</span> <span class="token string">&#39;{&quot;spec&quot;: {&quot;type&quot;: &quot;NodePort&quot;, &quot;ports&quot;: [{&quot;name&quot;: &quot;http&quot;, &quot;port&quot;: 80, &quot;targetPort&quot;: 8080, &quot;nodePort&quot;: 30001}]}}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="step-3-查询admin登录密码" tabindex="-1"><a class="header-anchor" href="#step-3-查询admin登录密码"><span>Step 3 查询Admin登录密码</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>kubectl <span class="token parameter variable">-n</span> argocd get secret argocd-initial-admin-secret <span class="token parameter variable">-o</span> <span class="token assign-left variable">jsonpath</span><span class="token operator">=</span><span class="token string">&quot;{.data.password}&quot;</span> <span class="token operator">|</span> base64 -d<span class="token punctuation">;</span> <span class="token builtin class-name">echo</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),o=[r];function d(i,c){return a(),t("div",null,o)}const u=e(n,[["render",d],["__file","argocd.html.vue"]]),h=JSON.parse(`{"path":"/cloud-native/argocd.html","title":"部署 Argocd","lang":"zh-CN","frontmatter":{"description":"部署 Argocd Step 1 安装argocd Step 2 创建访问入口 方式一：由K8S分配端口 方式二：分配指定端口 Step 3 查询Admin登录密码 ","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/cloud-native/argocd.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"部署 Argocd"}],["meta",{"property":"og:description","content":"部署 Argocd Step 1 安装argocd Step 2 创建访问入口 方式一：由K8S分配端口 方式二：分配指定端口 Step 3 查询Admin登录密码 "}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-10-18T14:14:45.000Z"}],["meta",{"property":"article:modified_time","content":"2023-10-18T14:14:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"部署 Argocd\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2023-10-18T14:14:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Step 1 安装argocd","slug":"step-1-安装argocd","link":"#step-1-安装argocd","children":[]},{"level":2,"title":"Step 2 创建访问入口","slug":"step-2-创建访问入口","link":"#step-2-创建访问入口","children":[{"level":3,"title":"方式一：由K8S分配端口","slug":"方式一-由k8s分配端口","link":"#方式一-由k8s分配端口","children":[]},{"level":3,"title":"方式二：分配指定端口","slug":"方式二-分配指定端口","link":"#方式二-分配指定端口","children":[]}]},{"level":2,"title":"Step 3 查询Admin登录密码","slug":"step-3-查询admin登录密码","link":"#step-3-查询admin登录密码","children":[]}],"git":{"createdTime":1697638485000,"updatedTime":1697638485000},"readingTime":{"minutes":0.49,"words":148},"filePathRelative":"cloud-native/argocd.md","localizedDate":"2023年10月18日","autoDesc":true}`);export{u as comp,h as data};
