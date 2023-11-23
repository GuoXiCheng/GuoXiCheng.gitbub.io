import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as p}from"./app-928a61b2.js";const t={},e=p(`<h1 id="责任链模式" tabindex="-1"><a class="header-anchor" href="#责任链模式" aria-hidden="true">#</a> 责任链模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>责任链模式允许将请求沿着一条链进行传递，直到有一个对象处理它为止。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="审批流程" tabindex="-1"><a class="header-anchor" href="#审批流程" aria-hidden="true">#</a> 审批流程</h3><p>在审批业务流程中，每个审批者可以决定批准、拒绝或将审批传递给更高级别的管理者。</p><p>在这个例子中，每个处理者都有自己的处理逻辑和批准权限。请求在责任链上逐级传递，直到找到合适的处理者。通过这种方式，可以灵活地增加、移除或重新排列处理者，而无需修改主要的业务逻辑。这样的设计使得审批流程更加灵活和可扩展。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/approval-process.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义处理者接口，声明处理请求的方法</span>
<span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">MyRequest</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建具体处理者，每个处理者决定是否处理请求或将其传递给下一个处理者</span>
<span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>

    <span class="token keyword">public</span> <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
        <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Manager</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Leave&#39;</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Manager will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">Director</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>request<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;Leave&#39;</span> <span class="token operator">&amp;&amp;</span> request<span class="token punctuation">.</span>amount <span class="token operator">&lt;=</span> <span class="token number">20</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Director will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name"><span class="token constant">CEO</span></span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token comment">// CEO can approve any amount of leave</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">CEO will approve </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>request<span class="token punctuation">.</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> day(s) leave</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> manager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Manager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> director <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Director</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> ceo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token constant">CEO</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

manager<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>director<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>ceo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyRequest</span><span class="token punctuation">(</span><span class="token string">&#39;Leave&#39;</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
manager<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 输出: Director will approve 15 day(s) leave</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="事件处理系统" tabindex="-1"><a class="header-anchor" href="#事件处理系统" aria-hidden="true">#</a> 事件处理系统</h3><p>在图形用户界面或游戏编程中，责任链模式常用于事件处理，例如：鼠标点击或键盘事件。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/event-processing-system.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个事件类</span>
<span class="token keyword">class</span> <span class="token class-name">Event</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> type<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 定义一个抽象处理者类</span>
  <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> successor<span class="token operator">:</span> Handler <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  
    <span class="token function">setSuccessor</span><span class="token punctuation">(</span>successor<span class="token operator">:</span> Handler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>successor <span class="token operator">=</span> successor<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">abstract</span> <span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体的事件处理者类</span>
  <span class="token keyword">class</span> <span class="token class-name">MouseClickHandler</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;mouseClick&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;处理鼠标点击事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">KeyPressHandler</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;keyPress&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;处理键盘按键事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">TouchHandler</span> <span class="token keyword">extends</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token operator">:</span> Event<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>event<span class="token punctuation">.</span>type <span class="token operator">===</span> <span class="token string">&#39;touch&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;处理触摸事件&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>successor<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>event<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 创建事件处理链</span>
  <span class="token keyword">const</span> mouseClickHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MouseClickHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> keyPressHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyPressHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> touchHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TouchHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  mouseClickHandler<span class="token punctuation">.</span><span class="token function">setSuccessor</span><span class="token punctuation">(</span>keyPressHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  keyPressHandler<span class="token punctuation">.</span><span class="token function">setSuccessor</span><span class="token punctuation">(</span>touchHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 模拟事件触发</span>
  <span class="token keyword">const</span> clickEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;mouseClick&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> keyEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;keyPress&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> touchEvent <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Event</span><span class="token punctuation">(</span><span class="token string">&#39;touch&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  mouseClickHandler<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>clickEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  mouseClickHandler<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>keyEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  mouseClickHandler<span class="token punctuation">.</span><span class="token function">handleEvent</span><span class="token punctuation">(</span>touchEvent<span class="token punctuation">)</span><span class="token punctuation">;</span>
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="日志记录" tabindex="-1"><a class="header-anchor" href="#日志记录" aria-hidden="true">#</a> 日志记录</h3><p>在日志记录系统中，可以根据日志的严重级别，将日志传递给不同的处理者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/log-recording.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义一个日志消息类</span>
<span class="token keyword">class</span> <span class="token class-name">LogMessage</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token keyword">public</span> level<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token keyword">public</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 定义一个抽象日志处理者类</span>
  <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">LogHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">protected</span> nextHandler<span class="token operator">:</span> LogHandler <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  
    <span class="token function">setNextHandler</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> LogHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">abstract</span> <span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> LogMessage<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体的日志处理者类</span>
  <span class="token keyword">class</span> <span class="token class-name">ConsoleLogHandler</span> <span class="token keyword">extends</span> <span class="token class-name">LogHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> LogMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">&#39;DEBUG&#39;</span> <span class="token operator">||</span> message<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">&#39;INFO&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[Console] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">FileLogHandler</span> <span class="token keyword">extends</span> <span class="token class-name">LogHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> LogMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>message<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">&#39;DEBUG&#39;</span> <span class="token operator">||</span> message<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">&#39;INFO&#39;</span> <span class="token operator">||</span> message<span class="token punctuation">.</span>level <span class="token operator">===</span> <span class="token string">&#39;ERROR&#39;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 省略将日志写入文件的代码</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[File] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
  
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token keyword">class</span> <span class="token class-name">RemoteLogHandler</span> <span class="token keyword">extends</span> <span class="token class-name">LogHandler</span> <span class="token punctuation">{</span>
    <span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token operator">:</span> LogMessage<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// 姑且假设远程服务器可以处理所有级别的日志</span>
      <span class="token comment">// 省略将日志发送到远程服务器的代码</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">[Remote] </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>level<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>message<span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 创建日志处理链</span>
  <span class="token keyword">const</span> consoleLogHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ConsoleLogHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> fileLogHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileLogHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> remoteLogHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RemoteLogHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  consoleLogHandler<span class="token punctuation">.</span><span class="token function">setNextHandler</span><span class="token punctuation">(</span>fileLogHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  fileLogHandler<span class="token punctuation">.</span><span class="token function">setNextHandler</span><span class="token punctuation">(</span>remoteLogHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 模拟记录不同级别的日志消息</span>
  <span class="token keyword">const</span> debugMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LogMessage</span><span class="token punctuation">(</span><span class="token string">&#39;DEBUG&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;This is a debug message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> infoMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LogMessage</span><span class="token punctuation">(</span><span class="token string">&#39;INFO&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;This is an info message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> errorMessage <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">LogMessage</span><span class="token punctuation">(</span><span class="token string">&#39;ERROR&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;This is an error message&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  consoleLogHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>debugMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
  consoleLogHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>infoMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
  consoleLogHandler<span class="token punctuation">.</span><span class="token function">handleLogMessage</span><span class="token punctuation">(</span>errorMessage<span class="token punctuation">)</span><span class="token punctuation">;</span>
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理网络请求" tabindex="-1"><a class="header-anchor" href="#处理网络请求" aria-hidden="true">#</a> 处理网络请求</h3><p>在使用责任链模式处理网络请求时，会定义一个处理请求的接口，为每个处理阶段（如认证、缓存、数据处理）创建实现这个接口的类。每个处理者会决定是否要处理请求或将其传递给链上的下一个处理者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/processing-network-requests.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 请求接口定义</span>
<span class="token keyword">interface</span> <span class="token class-name">MyRequest</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以定义多种属性，如用户信息、请求数据等</span>
    user<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
    data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 处理者接口</span>
  <span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 抽象处理者</span>
  <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
      <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理者：认证</span>
  <span class="token keyword">class</span> <span class="token class-name">AuthenticationHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">authenticate</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Authentication successful&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Authentication failed&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">private</span> <span class="token function">authenticate</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
      <span class="token comment">// 认证逻辑</span>
      <span class="token keyword">return</span> request<span class="token punctuation">.</span>user <span class="token operator">===</span> <span class="token string">&quot;authorized_user&quot;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理者：缓存</span>
  <span class="token keyword">class</span> <span class="token class-name">CacheHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">isCached</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Returned from cache&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Not in cache, processing further&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">private</span> <span class="token function">isCached</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token punctuation">{</span>
      <span class="token comment">// 缓存检查逻辑</span>
      <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理者：数据处理</span>
  <span class="token keyword">class</span> <span class="token class-name">DataHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token operator">:</span> MyRequest<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Processing data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 使用责任链</span>
  <span class="token keyword">let</span> request<span class="token operator">:</span> MyRequest <span class="token operator">=</span> <span class="token punctuation">{</span> user<span class="token operator">:</span> <span class="token string">&quot;authorized_user&quot;</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">let</span> auth <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AuthenticationHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> cache <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CacheHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  auth<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>cache<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 开始处理请求</span>
  auth<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>request<span class="token punctuation">)</span><span class="token punctuation">;</span>  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="处理命令对象" tabindex="-1"><a class="header-anchor" href="#处理命令对象" aria-hidden="true">#</a> 处理命令对象</h3><p>责任链模式可以让命令对象在一系列处理者之间传递，每个处理者都会检查命令是否为其可以处理的类型，如果是，则处理该命令；如果不是，则将命令传递给链中的下一个处理者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/process-command-object.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 命令接口</span>
<span class="token keyword">interface</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体命令：打开命令</span>
  <span class="token keyword">class</span> <span class="token class-name">OpenCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Open command executed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体命令：关闭命令</span>
  <span class="token keyword">class</span> <span class="token class-name">CloseCommand</span> <span class="token keyword">implements</span> <span class="token class-name">Command</span> <span class="token punctuation">{</span>
    <span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&quot;Close command executed&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 处理者接口</span>
  <span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 抽象处理者</span>
  <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
      <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理者：处理打开命令</span>
  <span class="token keyword">class</span> <span class="token class-name">OpenCommandHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token keyword">instanceof</span> <span class="token class-name">OpenCommand</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理者：处理关闭命令</span>
  <span class="token keyword">class</span> <span class="token class-name">CloseCommandHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token operator">:</span> Command<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>command <span class="token keyword">instanceof</span> <span class="token class-name">CloseCommand</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        command<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 使用责任链</span>
  <span class="token keyword">let</span> openCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> closeCommand <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloseCommand</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token keyword">let</span> openHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OpenCommandHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> closeHandler <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">CloseCommandHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  openHandler<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>closeHandler<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 处理命令</span>
  openHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>openCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  openHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>closeCommand<span class="token punctuation">)</span><span class="token punctuation">;</span>
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="数据处理管道" tabindex="-1"><a class="header-anchor" href="#数据处理管道" aria-hidden="true">#</a> 数据处理管道</h3><p>责任链模式可以创建一系列处理者，每个处理者负责数据流的一个特定阶段，如过滤、转换或验证。在这种模式下，数据被传递给第一个处理者，然后依次流经各个处理者，每个处理者对数据进行操作，然后将其传递给下一个处理者。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/chain-of-responsibility/data-processing-pipeline.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数据接口定义</span>
<span class="token keyword">interface</span> <span class="token class-name">Data</span> <span class="token punctuation">{</span>
    <span class="token comment">// 可以定义多种属性，根据实际需求</span>
    value<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 处理器接口</span>
  <span class="token keyword">interface</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
    <span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">)</span><span class="token operator">:</span> Data<span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 抽象处理器</span>
  <span class="token keyword">abstract</span> <span class="token keyword">class</span> <span class="token class-name">AbstractHandler</span> <span class="token keyword">implements</span> <span class="token class-name">Handler</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> nextHandler<span class="token operator">!</span><span class="token operator">:</span> Handler<span class="token punctuation">;</span>
  
    <span class="token keyword">public</span> <span class="token function">setNext</span><span class="token punctuation">(</span>handler<span class="token operator">:</span> Handler<span class="token punctuation">)</span><span class="token operator">:</span> Handler <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler <span class="token operator">=</span> handler<span class="token punctuation">;</span>
      <span class="token keyword">return</span> handler<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">)</span><span class="token operator">:</span> Data <span class="token punctuation">{</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>nextHandler<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
      <span class="token keyword">return</span> data<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理器：过滤</span>
  <span class="token keyword">class</span> <span class="token class-name">FilterHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">)</span><span class="token operator">:</span> Data <span class="token punctuation">{</span>
      <span class="token comment">// 过滤逻辑</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Filtering data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 举例：过滤奇数</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理器：转换</span>
  <span class="token keyword">class</span> <span class="token class-name">TransformHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">)</span><span class="token operator">:</span> Data <span class="token punctuation">{</span>
      <span class="token comment">// 转换逻辑</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Transforming data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      data<span class="token punctuation">.</span>value <span class="token operator">=</span> data<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> x <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 举例：每个元素乘以2</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 具体处理器：验证</span>
  <span class="token keyword">class</span> <span class="token class-name">ValidateHandler</span> <span class="token keyword">extends</span> <span class="token class-name">AbstractHandler</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Data<span class="token punctuation">)</span><span class="token operator">:</span> Data <span class="token punctuation">{</span>
      <span class="token comment">// 验证逻辑</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Validating data&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token comment">// 举例：验证操作，这里简单通过所有数据</span>
      <span class="token keyword">return</span> <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  
  <span class="token comment">// 使用责任链处理数据</span>
  <span class="token keyword">let</span> rawData<span class="token operator">:</span> Data <span class="token operator">=</span> <span class="token punctuation">{</span> value<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>
  
  <span class="token keyword">let</span> filter <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FilterHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> transform <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">TransformHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> validate <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ValidateHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  filter<span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>transform<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setNext</span><span class="token punctuation">(</span>validate<span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 处理数据</span>
  <span class="token keyword">let</span> processedData <span class="token operator">=</span> filter<span class="token punctuation">.</span><span class="token function">handle</span><span class="token punctuation">(</span>rawData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;Processed Data:&#39;</span><span class="token punctuation">,</span> processedData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),o=[e];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","chain-of-responsibility.html.vue"]]);export{r as default};
