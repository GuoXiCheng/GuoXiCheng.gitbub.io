import{_ as p}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as u,c as d,b as s,d as n,e as o,w as a,a as i}from"./app-pwK2AyOM.js";const k={},b=i(`<h1 id="起步" tabindex="-1"><a class="header-anchor" href="#起步" aria-hidden="true">#</a> 起步</h1><h2 id="安装-tinycrud" tabindex="-1"><a class="header-anchor" href="#安装-tinycrud" aria-hidden="true">#</a> 安装 TinyCRUD</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> tiny-crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="创建-issue" tabindex="-1"><a class="header-anchor" href="#创建-issue" aria-hidden="true">#</a> 创建 Issue</h2><p>登入 Gitee/Github/Gitlab，选择一个合适的项目，创建一个 Issue，用于存放数据。</p><h2 id="创建请求" tabindex="-1"><a class="header-anchor" href="#创建请求" aria-hidden="true">#</a> 创建请求</h2><h3 id="准备访问令牌" tabindex="-1"><a class="header-anchor" href="#准备访问令牌" aria-hidden="true">#</a> 准备访问令牌</h3>`,7),m={href:"http://www.baidu.com/s?wd=Gitee%E4%B8%AA%E4%BA%BA%E8%AE%BF%E9%97%AE%E4%BB%A4%E7%89%8C",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.baidu.com/s?wd=Github%E4%B8%AA%E4%BA%BA%E8%AE%BF%E9%97%AE%E4%BB%A4%E7%89%8C",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.baidu.com/s?wd=Gitlab%E4%B8%AA%E4%BA%BA%E8%AE%BF%E9%97%AE%E4%BB%A4%E7%89%8C",target:"_blank",rel:"noopener noreferrer"},g=s("h3",{id:"创建请求对象",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#创建请求对象","aria-hidden":"true"},"#"),n(" 创建请求对象")],-1),_=s("p",null,"如果是在Node/Web环境下，可以使用如下代码创建请求：",-1),w=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'tiny-crud'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" githubRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Personal Access Token'"),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'github'"),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Owner'"),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Repo'"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),y=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'tiny-crud'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" giteeRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Personal Access Token'"),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'gitee'"),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Owner'"),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Repo'"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},"'tiny-crud'"),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" gitlabRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Personal Access Token'"),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'gitlab'"),s("span",{class:"token punctuation"},","),n(`
    projectId`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Project ID'"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),x=i(`<p>如果是在微信小程序环境下，可以使用如下代码创建请求：</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;tiny-crud&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> githubRequest <span class="token operator">=</span> <span class="token function">createRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    httpLib<span class="token operator">:</span> <span class="token string">&#39;wx&#39;</span><span class="token punctuation">,</span>
    httpClient<span class="token operator">:</span> wx<span class="token punctuation">,</span>
    accessToken<span class="token operator">:</span> <span class="token string">&#39;Your Personal Access Token&#39;</span><span class="token punctuation">,</span>

    platform<span class="token operator">:</span> <span class="token string">&#39;github&#39;</span><span class="token punctuation">,</span>
    owner<span class="token operator">:</span> <span class="token string">&#39;Your Owner&#39;</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">&#39;Your Repo&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>默认情况下会使用官方的API地址，如果你需要将数据存储在私有的代码托管服务器上，可以使用baseURL字段指定URL地址：</p>`,3),A=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"const"),n(" githubRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'axios'"),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Personal Access Token'"),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'github'"),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Owner'"),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'Your Repo'"),s("span",{class:"token punctuation"},","),n(`
    baseURL`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},"'https://your-github-api.com'"),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),E=i("<p>TinyCRUD中使用的官方API地址参考如下：</p><table><thead><tr><th>平台</th><th>API地址</th></tr></thead><tbody><tr><td>Gitee</td><td><code>https://gitee.com</code></td></tr><tr><td>Gitlab</td><td><code>https://gitlab.com</code></td></tr><tr><td>Github</td><td><code>https://api.github.com</code></td></tr></tbody></table>",2);function R(B,T){const c=l("ExternalLinkIcon"),r=l("CodeTabs");return u(),d("div",null,[b,s("p",null,[s("a",m,[n("Gitee 个人访问令牌"),o(c)])]),s("p",null,[s("a",h,[n("Github 个人访问令牌"),o(c)])]),s("p",null,[s("a",v,[n("Gitlab 个人访问令牌"),o(c)])]),g,_,o(r,{id:"34",data:[{id:"github"},{id:"gitee"},{id:"gitlab"}]},{title0:a(({value:e,isActive:t})=>[n("github")]),title1:a(({value:e,isActive:t})=>[n("gitee")]),title2:a(({value:e,isActive:t})=>[n("gitlab")]),tab0:a(({value:e,isActive:t})=>[w]),tab1:a(({value:e,isActive:t})=>[y]),tab2:a(({value:e,isActive:t})=>[f]),_:1}),x,A,E])}const Y=p(k,[["render",R],["__file","start.html.vue"]]);export{Y as default};
