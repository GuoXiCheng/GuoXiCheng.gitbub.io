import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as l,o as p,c as r,e as u,w as a,a as o,b as s,d as n}from"./app-1nQ_6I55.js";const d={},k=o(`<h1 id="create-request" tabindex="-1"><a class="header-anchor" href="#create-request" aria-hidden="true">#</a> Create Request</h1><h2 id="intall-tinycrud" tabindex="-1"><a class="header-anchor" href="#intall-tinycrud" aria-hidden="true">#</a> Intall TinyCRUD</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> tiny-crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create-issue" tabindex="-1"><a class="header-anchor" href="#create-issue" aria-hidden="true">#</a> Create Issue</h2><p>Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data.</p><h2 id="create-request-1" tabindex="-1"><a class="header-anchor" href="#create-request-1" aria-hidden="true">#</a> Create Request</h2><h3 id="prepare-personal-access-token" tabindex="-1"><a class="header-anchor" href="#prepare-personal-access-token" aria-hidden="true">#</a> Prepare Personal Access Token</h3><table><tr><th>Platform</th><th></th></tr><tr><td>Github</td><td><a href="https://www.google.com/search?q=Gitlab+Person+Access+Token">How to Get Personal Access Token</a></td></tr><tr><td>Gitlab</td><td><a href="https://www.google.com/search?q=Github+Person+Access+Token">How to Get Personal Access Token</a></td></tr><tr><td>Gitee</td><td><a href="https://www.google.com/search?q=Gitee+Person+Access+Token">How to Get Personal Access Token</a></td></tr></table><h3 id="create-request-instance" tabindex="-1"><a class="header-anchor" href="#create-request-instance" aria-hidden="true">#</a> Create Request Instance</h3><p>If you are in Node/Web environment, you can use the following code to create a request:</p>`,10),b=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"tiny-crud"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" GithubRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Personal Access Token"'),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"github"'),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Owner"'),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Repo"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),h=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"tiny-crud"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" gitlabRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Personal Access Token"'),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"gitlab"'),s("span",{class:"token punctuation"},","),n(`
    projectId`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Project ID"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),m=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"import"),n(" axios "),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},";"),n(`
`),s("span",{class:"token keyword"},"import"),n(),s("span",{class:"token punctuation"},"{"),n(" createRequest "),s("span",{class:"token punctuation"},"}"),n(),s("span",{class:"token keyword"},"from"),n(),s("span",{class:"token string"},'"tiny-crud"'),s("span",{class:"token punctuation"},";"),n(`

`),s("span",{class:"token keyword"},"const"),n(" giteeRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Personal Access Token"'),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"gitee"'),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Owner"'),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Repo"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),v=o(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Install Axios to create request in Web/Node environment</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">npm</span> i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>If you are in Wechat Mini Program environment, you can use the following code to create a request:</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tiny-crud&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> githubRequest <span class="token operator">=</span> <span class="token function">createRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    httpLib<span class="token operator">:</span> <span class="token string">&quot;wx&quot;</span><span class="token punctuation">,</span>
    httpClient<span class="token operator">:</span> wx<span class="token punctuation">,</span>
    accessToken<span class="token operator">:</span> <span class="token string">&quot;Your Personal Access Token&quot;</span><span class="token punctuation">,</span>

    platform<span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    owner<span class="token operator">:</span> <span class="token string">&quot;Your Owner&quot;</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">&quot;Your Repo&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the request instance will use official API to peform CRUD operations. If you want to use your own API, you can use the following code to create a request:</p>`,4),g=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"const"),n(" githubRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Personal Access Token"'),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"github"'),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Owner"'),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Repo"'),s("span",{class:"token punctuation"},","),n(`
    baseURL`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"https://your-github-api.com"'),s("span",{class:"token punctuation"},","),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),f=o("<p>TinyCRUD will use the following API to perform CRUD operations:</p><table><thead><tr><th>Platform</th><th>API</th></tr></thead><tbody><tr><td>Github</td><td><code>https://api.github.com</code></td></tr><tr><td>Gitlab</td><td><code>https://gitlab.com</code></td></tr><tr><td>Gitee</td><td><code>https://gitee.com</code></td></tr></tbody></table><p>You can afford a issue number to the request instance, so that TinyCRUD will use this issue to store data:</p>",3),y=s("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[s("pre",{ts:"",class:"language-typescript"},[s("code",null,[s("span",{class:"token keyword"},"const"),n(" githubRequest "),s("span",{class:"token operator"},"="),n(),s("span",{class:"token function"},"createRequest"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),n(`
    httpLib`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"axios"'),s("span",{class:"token punctuation"},","),n(`
    httpClient`),s("span",{class:"token operator"},":"),n(" axios"),s("span",{class:"token punctuation"},","),n(`
    accessToken`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Personal Access Token"'),s("span",{class:"token punctuation"},","),n(`

    platform`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"github"'),s("span",{class:"token punctuation"},","),n(`
    owner`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Owner"'),s("span",{class:"token punctuation"},","),n(`
    repo`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Repo"'),s("span",{class:"token punctuation"},","),n(`
    baseURL`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"https://your-github-api.com"'),s("span",{class:"token punctuation"},","),n(`

    issueNumber`),s("span",{class:"token operator"},":"),n(),s("span",{class:"token string"},'"Your Issue Number"'),n(`
`),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),n(`
`)])]),s("div",{class:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{class:"highlight-line"}," "),s("br")]),s("div",{class:"line-numbers","aria-hidden":"true"},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1),w=o(`<h2 id="verify-authorization" tabindex="-1"><a class="header-anchor" href="#verify-authorization" aria-hidden="true">#</a> Verify Authorization</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>githubRequest<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2);function q(x,_){const c=l("CodeTabs");return p(),r("div",null,[k,u(c,{id:"26",data:[{id:"github"},{id:"gitlab"},{id:"gitee"}]},{title0:a(({value:e,isActive:t})=>[n("github")]),title1:a(({value:e,isActive:t})=>[n("gitlab")]),title2:a(({value:e,isActive:t})=>[n("gitee")]),tab0:a(({value:e,isActive:t})=>[b]),tab1:a(({value:e,isActive:t})=>[h]),tab2:a(({value:e,isActive:t})=>[m]),_:1}),v,g,f,y,w])}const A=i(d,[["render",q],["__file","start.html.vue"]]);export{A as default};
