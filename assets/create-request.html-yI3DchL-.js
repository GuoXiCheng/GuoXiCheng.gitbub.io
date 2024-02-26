import{_ as c}from"./plugin-vue_export-helper-DlAUqK2U.js";import{r as i,o as l,c as r,e as u,w as a,a as o,b as n,d as s}from"./app-CggRJqOU.js";const d={},k=o(`<h1 id="create-request" tabindex="-1"><a class="header-anchor" href="#create-request"><span>Create Request</span></a></h1><h2 id="intall-tinycrud" tabindex="-1"><a class="header-anchor" href="#intall-tinycrud"><span>Intall TinyCRUD</span></a></h2><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> <span class="token function">install</span> tiny-crud
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="create-issue" tabindex="-1"><a class="header-anchor" href="#create-issue"><span>Create Issue</span></a></h2><p>Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data.</p><h2 id="create-request-1" tabindex="-1"><a class="header-anchor" href="#create-request-1"><span>Create Request</span></a></h2><h3 id="prepare-personal-access-token" tabindex="-1"><a class="header-anchor" href="#prepare-personal-access-token"><span>Prepare Personal Access Token</span></a></h3><table><tr><th>Platform</th><th></th></tr><tr><td>Github</td><td><a href="https://www.google.com/search?q=Gitlab+Person+Access+Token">How to Get Personal Access Token</a></td></tr><tr><td>Gitlab</td><td><a href="https://www.google.com/search?q=Github+Person+Access+Token">How to Get Personal Access Token</a></td></tr><tr><td>Gitee</td><td><a href="https://www.google.com/search?q=Gitee+Person+Access+Token">How to Get Personal Access Token</a></td></tr></table><h3 id="create-request-instance" tabindex="-1"><a class="header-anchor" href="#create-request-instance"><span>Create Request Instance</span></a></h3><p>If you are in Node/Web environment, you can use the following code to create a request:</p>`,10),v=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRequest "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"tiny-crud"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" GithubRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    httpLib`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},","),s(`
    httpClient`),n("span",{class:"token operator"},":"),s(" axios"),n("span",{class:"token punctuation"},","),s(`
    accessToken`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Personal Access Token"'),n("span",{class:"token punctuation"},","),s(`

    platform`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"github"'),n("span",{class:"token punctuation"},","),s(`
    owner`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Owner"'),n("span",{class:"token punctuation"},","),s(`
    repo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Repo"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRequest "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"tiny-crud"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" gitlabRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    httpLib`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},","),s(`
    httpClient`),n("span",{class:"token operator"},":"),s(" axios"),n("span",{class:"token punctuation"},","),s(`
    accessToken`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Personal Access Token"'),n("span",{class:"token punctuation"},","),s(`

    platform`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"gitlab"'),n("span",{class:"token punctuation"},","),s(`
    projectId`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Project ID"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),m=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token keyword"},"import"),s(),n("span",{class:"token punctuation"},"{"),s(" createRequest "),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},'"tiny-crud"'),n("span",{class:"token punctuation"},";"),s(`

`),n("span",{class:"token keyword"},"const"),s(" giteeRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    httpLib`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},","),s(`
    httpClient`),n("span",{class:"token operator"},":"),s(" axios"),n("span",{class:"token punctuation"},","),s(`
    accessToken`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Personal Access Token"'),n("span",{class:"token punctuation"},","),s(`

    platform`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"gitee"'),n("span",{class:"token punctuation"},","),s(`
    owner`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Owner"'),n("span",{class:"token punctuation"},","),s(`
    repo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Repo"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),h=o(`<div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Install Axios to create request in Web/Node environment</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i axios
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></div><p>If you are in Wechat Mini Program environment, you can use the following code to create a request:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> createRequest <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;tiny-crud&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> githubRequest <span class="token operator">=</span> <span class="token function">createRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    httpLib<span class="token operator">:</span> <span class="token string">&quot;wx&quot;</span><span class="token punctuation">,</span>
    httpClient<span class="token operator">:</span> wx<span class="token punctuation">,</span>
    accessToken<span class="token operator">:</span> <span class="token string">&quot;Your Personal Access Token&quot;</span><span class="token punctuation">,</span>

    platform<span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    owner<span class="token operator">:</span> <span class="token string">&quot;Your Owner&quot;</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">&quot;Your Repo&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>By default, the request instance will use official API to peform CRUD operations. If you want to use your own API, you can use the following code to create a request:</p>`,4),g=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" githubRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    httpLib`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},","),s(`
    httpClient`),n("span",{class:"token operator"},":"),s(" axios"),n("span",{class:"token punctuation"},","),s(`
    accessToken`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Personal Access Token"'),n("span",{class:"token punctuation"},","),s(`

    platform`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"github"'),n("span",{class:"token punctuation"},","),s(`
    owner`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Owner"'),n("span",{class:"token punctuation"},","),s(`
    repo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Repo"'),n("span",{class:"token punctuation"},","),s(`
    baseURL`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://your-github-api.com"'),n("span",{class:"token punctuation"},","),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=o("<p>TinyCRUD will use the following API to perform CRUD operations:</p><table><thead><tr><th>Platform</th><th>API</th></tr></thead><tbody><tr><td>Github</td><td><code>https://api.github.com</code></td></tr><tr><td>Gitlab</td><td><code>https://gitlab.com</code></td></tr><tr><td>Gitee</td><td><code>https://gitee.com</code></td></tr></tbody></table><p>You can afford a issue number to the request instance, so that TinyCRUD will use this issue to store data:</p>",3),f=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts","data-title":"ts"},[n("pre",{ts:"",class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"const"),s(" githubRequest "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"createRequest"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    httpLib`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"axios"'),n("span",{class:"token punctuation"},","),s(`
    httpClient`),n("span",{class:"token operator"},":"),s(" axios"),n("span",{class:"token punctuation"},","),s(`
    accessToken`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Personal Access Token"'),n("span",{class:"token punctuation"},","),s(`

    platform`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"github"'),n("span",{class:"token punctuation"},","),s(`
    owner`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Owner"'),n("span",{class:"token punctuation"},","),s(`
    repo`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Repo"'),n("span",{class:"token punctuation"},","),s(`
    baseURL`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"https://your-github-api.com"'),n("span",{class:"token punctuation"},","),s(`

    issueNumber`),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},'"Your Issue Number"'),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`)])]),n("div",{class:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{class:"highlight-line"}," "),n("br")]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),q=o(`<h2 id="verify-authorization" tabindex="-1"><a class="header-anchor" href="#verify-authorization"><span>Verify Authorization</span></a></h2><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">this</span><span class="token punctuation">.</span>githubRequest<span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="use-encrypt" tabindex="-1"><a class="header-anchor" href="#use-encrypt"><span>Use Encrypt</span></a></h2><p>If useEncrypt is true, TinyCRUD will encrypt the data before storing it in the issue, and decrypt it when reading it.</p><p>So, you must implement the encrypt/decrypt function when the useEncrypt is true.TinyCRUD will use the encrypt/decrypt function to encrypt/decrypt the data.</p><p>For example, you can use the following code to encrypt/decrypt data with crypto-js:</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">import</span> CryptoJS <span class="token keyword">from</span> <span class="token string">&quot;crypto-js&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> githubRequest <span class="token operator">=</span> <span class="token function">createRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    httpLib<span class="token operator">:</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">,</span>
    httpClient<span class="token operator">:</span> axios<span class="token punctuation">,</span>
    accessToken<span class="token operator">:</span> <span class="token string">&quot;Your Personal Access Token&quot;</span><span class="token punctuation">,</span>

    platform<span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    owner<span class="token operator">:</span> <span class="token string">&quot;Your Owner&quot;</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">&quot;Your Repo&quot;</span><span class="token punctuation">,</span>

    useEncrypt<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token function-variable function">encryptFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;Your Secret Key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decryptFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;Your Secret Key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>
            CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>Install crypto-js to encrypt/decrypt data</p><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code><span class="token function">npm</span> i crypto-js

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></div><p>The encrypt/decrypt function will be ignored when useEncrypt is false.</p><p>So, you can choose whether to use encryption or not, depending on your environment.</p><div class="language-typescript line-numbers-mode" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="token keyword">const</span> githubRequest <span class="token operator">=</span> <span class="token function">createRequest</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    httpLib<span class="token operator">:</span> <span class="token string">&quot;axios&quot;</span><span class="token punctuation">,</span>
    httpClient<span class="token operator">:</span> axios<span class="token punctuation">,</span>
    accessToken<span class="token operator">:</span> <span class="token string">&quot;Your Personal Access Token&quot;</span><span class="token punctuation">,</span>

    platform<span class="token operator">:</span> <span class="token string">&quot;github&quot;</span><span class="token punctuation">,</span>
    owner<span class="token operator">:</span> <span class="token string">&quot;Your Owner&quot;</span><span class="token punctuation">,</span>
    repo<span class="token operator">:</span> <span class="token string">&quot;Your Repo&quot;</span><span class="token punctuation">,</span>

    useEncrypt<span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">===</span> <span class="token string">&quot;production&quot;</span><span class="token punctuation">,</span>
    <span class="token function-variable function">encryptFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">encrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;Your Secret Key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token function-variable function">decryptFn</span><span class="token operator">:</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> CryptoJS<span class="token punctuation">.</span><span class="token constant">AES</span><span class="token punctuation">.</span><span class="token function">decrypt</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token string">&quot;Your Secret Key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span>
            CryptoJS<span class="token punctuation">.</span>enc<span class="token punctuation">.</span>Utf8
        <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11);function w(R,x){const p=i("CodeTabs");return l(),r("div",null,[k,u(p,{id:"26",data:[{id:"github"},{id:"gitlab"},{id:"gitee"}]},{title0:a(({value:t,isActive:e})=>[s("github")]),title1:a(({value:t,isActive:e})=>[s("gitlab")]),title2:a(({value:t,isActive:e})=>[s("gitee")]),tab0:a(({value:t,isActive:e})=>[v]),tab1:a(({value:t,isActive:e})=>[b]),tab2:a(({value:t,isActive:e})=>[m]),_:1}),h,g,y,f,q])}const _=c(d,[["render",w],["__file","create-request.html.vue"]]),A=JSON.parse(`{"path":"/en/projects/TinyCRUD-Docs/create-request.html","title":"Create Request","lang":"en-US","frontmatter":{"index":true,"order":1,"description":"Create Request Intall TinyCRUD Create Issue Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data. Create Request Prepare Personal Access Toke...","head":[["link",{"rel":"alternate","hreflang":"zh-cn","href":"https://guoxicheng.top/projects/TinyCRUD-Docs/create-request.html"}],["meta",{"property":"og:url","content":"https://guoxicheng.top/en/projects/TinyCRUD-Docs/create-request.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"Create Request"}],["meta",{"property":"og:description","content":"Create Request Intall TinyCRUD Create Issue Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data. Create Request Prepare Personal Access Toke..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:locale:alternate","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-01-30T08:56:26.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-30T08:56:26.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Create Request\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-01-30T08:56:26.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Intall TinyCRUD","slug":"intall-tinycrud","link":"#intall-tinycrud","children":[]},{"level":2,"title":"Create Issue","slug":"create-issue","link":"#create-issue","children":[]},{"level":2,"title":"Create Request","slug":"create-request-1","link":"#create-request-1","children":[{"level":3,"title":"Prepare Personal Access Token","slug":"prepare-personal-access-token","link":"#prepare-personal-access-token","children":[]},{"level":3,"title":"Create Request Instance","slug":"create-request-instance","link":"#create-request-instance","children":[]}]},{"level":2,"title":"Verify Authorization","slug":"verify-authorization","link":"#verify-authorization","children":[]},{"level":2,"title":"Use Encrypt","slug":"use-encrypt","link":"#use-encrypt","children":[]}],"git":{"createdTime":1705888903000,"updatedTime":1706604986000},"readingTime":{"minutes":2.03,"words":610},"filePathRelative":"en/projects/TinyCRUD-Docs/create-request.md","localizedDate":"January 22, 2024","autoDesc":true,"excerpt":"\\n<h2>Intall TinyCRUD</h2>\\n<div class=\\"language-bash\\" data-ext=\\"sh\\" data-title=\\"sh\\"><pre class=\\"language-bash\\"><code><span class=\\"token function\\">npm</span> <span class=\\"token function\\">install</span> tiny-crud\\n</code></pre></div><h2>Create Issue</h2>\\n<p>Login your Gitee/Github/Gitlab, choose a suitable project, create an issue to store data.</p>"}`);export{_ as comp,A as data};