import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,b as t}from"./app-15a644e0.js";const p={},e=t(`<h1 id="外观模式" tabindex="-1"><a class="header-anchor" href="#外观模式" aria-hidden="true">#</a> 外观模式</h1><h2 id="核心思想" tabindex="-1"><a class="header-anchor" href="#核心思想" aria-hidden="true">#</a> 核心思想</h2><p>外观模式提供了一个统一的接口来访问子系统中的一组接口。</p><h2 id="典型用例" tabindex="-1"><a class="header-anchor" href="#典型用例" aria-hidden="true">#</a> 典型用例</h2><h3 id="整合微服务接口" tabindex="-1"><a class="header-anchor" href="#整合微服务接口" aria-hidden="true">#</a> 整合微服务接口</h3><p>在微服务架构中，外观模式可以用来提供一个统一的接口来整合多个微服务，使得客户端不需要与每个服务单独交互。</p><p>在这个例子中，外观服务类提供了一个统一的接口来访问多个微服务接口。客户端代码通过与外观类来交互，而不是直接与每个微服务交互。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/facade/unify-microservices.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 假设有几个微服务，每个服务都有自己的接口</span>

<span class="token comment">// 用户服务</span>
<span class="token keyword">class</span> <span class="token class-name">UserService</span> <span class="token punctuation">{</span>
    <span class="token function">getUser</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">User info for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>userId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 订单服务</span>
<span class="token keyword">class</span> <span class="token class-name">OrderService</span> <span class="token punctuation">{</span>
    <span class="token function">getOrder</span><span class="token punctuation">(</span>orderId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Order details for </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>orderId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 支付服务</span>
<span class="token keyword">class</span> <span class="token class-name">PaymentService</span> <span class="token punctuation">{</span>
    <span class="token function">processPayment</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Processed payment of $</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>amount<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建一个外观类来封装对微服务的访问</span>
<span class="token keyword">class</span> <span class="token class-name">ServicesFacade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> userService<span class="token operator">:</span> UserService<span class="token punctuation">;</span>
    <span class="token keyword">private</span> orderService<span class="token operator">:</span> OrderService<span class="token punctuation">;</span>
    <span class="token keyword">private</span> paymentService<span class="token operator">:</span> PaymentService<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>userService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">UserService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>orderService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">OrderService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>paymentService <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PaymentService</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getUserInfo</span><span class="token punctuation">(</span>userId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>userService<span class="token punctuation">.</span><span class="token function">getUser</span><span class="token punctuation">(</span>userId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">getOrderDetails</span><span class="token punctuation">(</span>orderId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>orderService<span class="token punctuation">.</span><span class="token function">getOrder</span><span class="token punctuation">(</span>orderId<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">makePayment</span><span class="token punctuation">(</span>amount<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>paymentService<span class="token punctuation">.</span><span class="token function">processPayment</span><span class="token punctuation">(</span>amount<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>


<span class="token keyword">const</span> servicesFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServicesFacade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 客户端现在可以通过外观接口来访问服务，而无需直接与每个服务交互</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>servicesFacade<span class="token punctuation">.</span><span class="token function">getUserInfo</span><span class="token punctuation">(</span><span class="token string">&quot;user123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>servicesFacade<span class="token punctuation">.</span><span class="token function">getOrderDetails</span><span class="token punctuation">(</span><span class="token string">&quot;order456&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>servicesFacade<span class="token punctuation">.</span><span class="token function">makePayment</span><span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="简化复杂子系统的访问" tabindex="-1"><a class="header-anchor" href="#简化复杂子系统的访问" aria-hidden="true">#</a> 简化复杂子系统的访问</h4><p>当子系统变得复杂或者当需要简化子系统的一组接口时，外观模式可以用于提供一个简单的接口给外部客户端。这在涉及到复杂库、框架或API集合的情况下尤其有用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/facade/simplify-access-to-complex-subsystems.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 定义复杂子系统的类</span>
<span class="token keyword">class</span> <span class="token class-name">SystemA</span> <span class="token punctuation">{</span>
    <span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SystemA operation&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemB</span> <span class="token punctuation">{</span>
    <span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SystemB operation&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SystemC</span> <span class="token punctuation">{</span>
    <span class="token function">operationC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SystemC operation&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 创建外观类</span>
<span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> systemA<span class="token operator">:</span> SystemA<span class="token punctuation">;</span>
    <span class="token keyword">private</span> systemB<span class="token operator">:</span> SystemB<span class="token punctuation">;</span>
    <span class="token keyword">private</span> systemC<span class="token operator">:</span> SystemC<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>systemA <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>systemB <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>systemC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SystemC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 提供给外部的简化接口</span>
    <span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> resultA <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>systemA<span class="token punctuation">.</span><span class="token function">operationA</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> resultB <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>systemB<span class="token punctuation">.</span><span class="token function">operationB</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> resultC <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>systemC<span class="token punctuation">.</span><span class="token function">operationC</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// 组合子系统的操作</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultA<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultB<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> | </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultC<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">const</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>facade<span class="token punctuation">.</span><span class="token function">operate</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="封装客户端和子系统的交互" tabindex="-1"><a class="header-anchor" href="#封装客户端和子系统的交互" aria-hidden="true">#</a> 封装客户端和子系统的交互</h3><p>在需要将客户端与子系统的直接交互隔离开时，外观可以作为一个中间层来保护子系统不受客户端的影响，同时也简化客户端对子系统的使用。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/facade/encapsulate-client-and-subsystem-interactions.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 子系统类</span>
<span class="token keyword">class</span> <span class="token class-name">SubsystemOne</span> <span class="token punctuation">{</span>
    <span class="token function">operationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemOne: Ready!&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">operationN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemOne: Go!&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubsystemTwo</span> <span class="token punctuation">{</span>
    <span class="token function">operationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemTwo: Get ready!&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">operationZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemTwo: Fire!&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 外观类</span>
<span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> subsystemOne<span class="token operator">:</span> SubsystemOne<span class="token punctuation">;</span>
    <span class="token keyword">private</span> subsystemTwo<span class="token operator">:</span> SubsystemTwo<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>subsystemOne<span class="token operator">:</span> SubsystemOne<span class="token punctuation">,</span> subsystemTwo<span class="token operator">:</span> SubsystemTwo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemOne <span class="token operator">=</span> subsystemOne <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemTwo <span class="token operator">=</span> subsystemTwo <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 外观类提供的简化接口</span>
    <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token string">&#39;Facade initializes subsystems:\\n&#39;</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemOne<span class="token punctuation">.</span><span class="token function">operationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemTwo<span class="token punctuation">.</span><span class="token function">operationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> <span class="token string">&#39;Facade orders subsystems to perform the action:\\n&#39;</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemOne<span class="token punctuation">.</span><span class="token function">operationN</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        result <span class="token operator">+=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemTwo<span class="token punctuation">.</span><span class="token function">operationZ</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> result<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">const</span> subsystemOne <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> subsystemTwo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span>subsystemOne<span class="token punctuation">,</span> subsystemTwo<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// 客户端通过外观类与子系统交互</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>facade<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="提供子系统的抽象层" tabindex="-1"><a class="header-anchor" href="#提供子系统的抽象层" aria-hidden="true">#</a> 提供子系统的抽象层</h3><p>当子系统的实现和客户端代码可能经常变化时，外观模式可以用来为子系统提供一个稳定的接口，隔离了子系统的实现细节和客户端的直接交互，从而减少系统的耦合度。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/facade/provides-abstraction-layer-for-subsystem.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 子系统类</span>
<span class="token keyword">class</span> <span class="token class-name">SubsystemOne</span> <span class="token punctuation">{</span>
    <span class="token function">complexOperationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemOne: Complex operation&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">SubsystemTwo</span> <span class="token punctuation">{</span>
    <span class="token function">complexOperationTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;SubsystemTwo: Complex operation&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 外观类</span>
<span class="token keyword">class</span> <span class="token class-name">Facade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> subsystemOne<span class="token operator">:</span> SubsystemOne<span class="token punctuation">;</span>
    <span class="token keyword">private</span> subsystemTwo<span class="token operator">:</span> SubsystemTwo<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>subsystemOne<span class="token operator">:</span> SubsystemOne<span class="token punctuation">,</span> subsystemTwo<span class="token operator">:</span> SubsystemTwo<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemOne <span class="token operator">=</span> subsystemOne <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemTwo <span class="token operator">=</span> subsystemTwo <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 外观类提供的稳定接口</span>
    <span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> resultOne <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemOne<span class="token punctuation">.</span><span class="token function">complexOperationOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">const</span> resultTwo <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subsystemTwo<span class="token punctuation">.</span><span class="token function">complexOperationTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Facade coordinates operations: \\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultOne<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\\n</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>resultTwo<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">const</span> facade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Facade</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">SubsystemOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">SubsystemTwo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>facade<span class="token punctuation">.</span><span class="token function">operation</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="分层结构中的接口" tabindex="-1"><a class="header-anchor" href="#分层结构中的接口" aria-hidden="true">#</a> 分层结构中的接口</h3><p>在多层架构的应用程序中，外观模式可以用于定义系统中每一层的入口点，使得层与层之间的通信更加清晰和有序。</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// npm run code src/code/design-pattern/facade/interfaces-in-hierarchical-structure.ts</span>

<span class="token keyword">export</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token comment">// 数据访问层（DAL）</span>
<span class="token keyword">class</span> <span class="token class-name">DataAccessLayer</span> <span class="token punctuation">{</span>
    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token string">&#39;Data fetched from database&#39;</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 业务逻辑层（BLL）</span>
<span class="token keyword">class</span> <span class="token class-name">BusinessLogicLayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> dal<span class="token operator">:</span> DataAccessLayer<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>dal<span class="token operator">:</span> DataAccessLayer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dal <span class="token operator">=</span> dal<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dal<span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Processed </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 表示层（UI）</span>
<span class="token keyword">class</span> <span class="token class-name">PresentationLayer</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> bll<span class="token operator">:</span> BusinessLogicFacade<span class="token punctuation">;</span> <span class="token comment">// 使用 BusinessLogicFacade</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>bll<span class="token operator">:</span> BusinessLogicFacade<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bll <span class="token operator">=</span> bll<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">displayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> processedData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bll<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">Displaying </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>processedData<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 外观类为每一层</span>
<span class="token keyword">class</span> <span class="token class-name">DataAccessFacade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> dal<span class="token operator">:</span> DataAccessLayer<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>dal <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataAccessLayer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>dal<span class="token punctuation">.</span><span class="token function">fetchData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">BusinessLogicFacade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> bll<span class="token operator">:</span> BusinessLogicLayer<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>dalFacade<span class="token operator">:</span> DataAccessFacade<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">const</span> dal <span class="token operator">=</span> dalFacade<span class="token punctuation">;</span> <span class="token comment">// 使用 DataAccessFacade</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>bll <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BusinessLogicLayer</span><span class="token punctuation">(</span>dal<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>bll<span class="token punctuation">.</span><span class="token function">processData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">class</span> <span class="token class-name">PresentationFacade</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> pl<span class="token operator">:</span> PresentationLayer<span class="token punctuation">;</span>

    <span class="token function">constructor</span><span class="token punctuation">(</span>bllFacade<span class="token operator">:</span> BusinessLogicFacade<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pl <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PresentationLayer</span><span class="token punctuation">(</span>bllFacade<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">displayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>pl<span class="token punctuation">.</span><span class="token function">displayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">// 客户端代码</span>
<span class="token keyword">const</span> dalFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DataAccessFacade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> bllFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BusinessLogicFacade</span><span class="token punctuation">(</span>dalFacade<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> presentationFacade <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PresentationFacade</span><span class="token punctuation">(</span>bllFacade<span class="token punctuation">)</span><span class="token punctuation">;</span>

presentationFacade<span class="token punctuation">.</span><span class="token function">displayData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,20),o=[e];function c(i,l){return s(),a("div",null,o)}const k=n(p,[["render",c],["__file","facade.html.vue"]]);export{k as default};
