import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-3586f4e1.js";const p={},e=t(`<h1 id="中介者模式" tabindex="-1"><a class="header-anchor" href="#中介者模式" aria-hidden="true">#</a> 中介者模式</h1><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="聊天室" tabindex="-1"><a class="header-anchor" href="#聊天室" aria-hidden="true">#</a> 聊天室</h3><p>在聊天应用中，中介者可以充当消息传递的中心，控制和协调不同用户之间的消息交流。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/mediator/chat-room.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">interface</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token function">registerUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token function">send</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
    <span class="token function">receive</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChatRoom</span> <span class="token keyword">implements</span> <span class="token class-name">Mediator</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> users<span class="token operator">:</span> User<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token function">registerUser</span><span class="token punctuation">(</span>user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> user<span class="token operator">:</span> User<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>u <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>u <span class="token operator">!==</span> user<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 发送给除了自己之外的所有用户</span>
                u<span class="token punctuation">.</span><span class="token function">receive</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">ChatUser</span> <span class="token keyword">implements</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    <span class="token keyword">private</span> chatRoom<span class="token operator">:</span> Mediator<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> chatRoom<span class="token operator">:</span> Mediator<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>name <span class="token operator">=</span> name<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>chatRoom <span class="token operator">=</span> chatRoom<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>chatRoom<span class="token punctuation">.</span><span class="token function">registerUser</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">send</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> sends: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>chatRoom<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">receive</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span><span class="token keyword">this</span><span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> receives: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> chatRoom <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChatRoom</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> user1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChatUser</span><span class="token punctuation">(</span><span class="token string">&#39;Alice&#39;</span><span class="token punctuation">,</span> chatRoom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user2 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChatUser</span><span class="token punctuation">(</span><span class="token string">&#39;Bob&#39;</span><span class="token punctuation">,</span> chatRoom<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> user3 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ChatUser</span><span class="token punctuation">(</span><span class="token string">&#39;Charlie&#39;</span><span class="token punctuation">,</span> chatRoom<span class="token punctuation">)</span><span class="token punctuation">;</span>

user1<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hi there!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user2<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hey!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
user3<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">&quot;Hello everyone!&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[e];function c(i,l){return s(),a("div",null,o)}const r=n(p,[["render",c],["__file","mediator.html.vue"]]);export{r as default};
