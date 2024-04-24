import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as s,c as a,e}from"./app-B64h0T5y.js";const t={},p=e(`<h1 id="跨域问题" tabindex="-1"><a class="header-anchor" href="#跨域问题"><span>跨域问题</span></a></h1><h2 id="问题产生原因" tabindex="-1"><a class="header-anchor" href="#问题产生原因"><span>问题产生原因</span></a></h2><p>跨域问题主要源于浏览器的同源策略，同源策略是浏览器的一种安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。这里的源指的是协议、域名和端口号的组合，只有当两个URL的协议、域名和端口号都相同的时候，这两个URL就是同源。</p><p>同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取或操作另一个源的文档或数据。</p><h2 id="常用解决方法" tabindex="-1"><a class="header-anchor" href="#常用解决方法"><span>常用解决方法</span></a></h2><h3 id="cors-cross-origin-resource-sharing-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#cors-cross-origin-resource-sharing-跨域资源共享"><span>CORS（Cross-Origin Resource Sharing）跨域资源共享</span></a></h3><p>服务器设置特定的HTTP头，如 Access-Control-Allow-Origin，来允许或拒绝来自不同源的请求。</p><p>适用于大多数现代Web应用。</p><h3 id="jsonp-json-with-padding-跨域资源共享" tabindex="-1"><a class="header-anchor" href="#jsonp-json-with-padding-跨域资源共享"><span>JSONP（JSON with Padding）跨域资源共享</span></a></h3><p>利用<code>&lt;script&gt;</code>标签没有跨域限制的特性，通过动态创建<code>&lt;script&gt;</code>来请求一个带有回调函数的JSON数据。</p><p>主要用于老旧系统，只支持GET请求。</p><h3 id="代理" tabindex="-1"><a class="header-anchor" href="#代理"><span>代理</span></a></h3><p>在服务器端设置代理，接收前端的请求，然后由服务器向目标服务器请求数据，最后返回给前端。</p><p>适用于需要绕过某些限制的场景。</p><h3 id="websocket" tabindex="-1"><a class="header-anchor" href="#websocket"><span>WebSocket</span></a></h3><p>提供全双工通信通道，可以跨域通信。</p><p>适合需要实时数据交换的应用。</p><h3 id="window-postmessage" tabindex="-1"><a class="header-anchor" href="#window-postmessage"><span>window.postMessage</span></a></h3><p>允许来自不同源的窗口之间的安全通信。</p><p>适用于不同域之间的iframe或窗口通信。</p><h3 id="document-domain" tabindex="-1"><a class="header-anchor" href="#document-domain"><span>document.domain</span></a></h3><p>当两个不同的子域需要通信时，可以通过设置相同的document.domain来实现。</p><p>仅适用于相同主域下的不同子域。</p><h2 id="django-中的跨域" tabindex="-1"><a class="header-anchor" href="#django-中的跨域"><span>Django 中的跨域</span></a></h2><h3 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h3><div class="language-bash line-numbers-mode" data-ext="sh" data-title="sh"><pre class="language-bash"><code>pip <span class="token function">install</span> django-cors-headers
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3><div class="language-python line-numbers-mode" data-ext="py" data-title="py"><pre class="language-python"><code>INSTALLED_APPS <span class="token operator">=</span> <span class="token punctuation">[</span> 
  <span class="token string">&#39;corsheaders&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span> 

MIDDLEWARE <span class="token operator">=</span> <span class="token punctuation">[</span> 
  <span class="token string">&#39;corsheaders.middleware.CorsMiddleware&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">]</span>

<span class="token comment"># 配置允许所有域名 </span>
CORS_ORIGIN_ALLOW_ALL <span class="token operator">=</span> <span class="token boolean">True</span> 

<span class="token comment"># 配置白名单域名</span>
CORS_ORIGIN_WHITELIST <span class="token operator">=</span> <span class="token punctuation">(</span> <span class="token string">&#39;127.0.0.1:8080&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;localhost:8080&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">)</span> 

<span class="token comment"># 指明在跨域访问中，后端是否支持对cookie的操作</span>
CORS_ALLOW_CREDENTIALS <span class="token operator">=</span> <span class="token boolean">True</span>

<span class="token comment"># 允许的请求方式 </span>
CORS_ALLOW_METHODS <span class="token operator">=</span> <span class="token punctuation">(</span> 
  <span class="token string">&#39;DELETE&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;GET&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;OPTIONS&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;PATCH&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;POST&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;PUT&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;VIEW&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span> 

<span class="token comment"># 允许的请求头 </span>
CORS_ALLOW_HEADERS <span class="token operator">=</span> <span class="token punctuation">(</span> 
  <span class="token string">&#39;XMLHttpRequest&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;X_FILENAME&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;accept-encoding&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;authorization&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;content-type&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;dnt&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;origin&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;user-agent&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;x-csrftoken&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;x-requested-with&#39;</span><span class="token punctuation">,</span> 
  <span class="token string">&#39;Pragma&#39;</span><span class="token punctuation">,</span> 
<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="react-中的跨域" tabindex="-1"><a class="header-anchor" href="#react-中的跨域"><span>React 中的跨域</span></a></h2><p>如果要访问的API为：<code>https://test.com.cn/api/user</code></p><h3 id="在本地开发环境时" tabindex="-1"><a class="header-anchor" href="#在本地开发环境时"><span>在本地开发环境时</span></a></h3><p>在package.json中添加</p><div class="language-json line-numbers-mode" data-ext="json" data-title="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;proxy&quot;</span><span class="token operator">:</span> <span class="token string">&quot;https://test.com.cn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="部署到nginx中时" tabindex="-1"><a class="header-anchor" href="#部署到nginx中时"><span>部署到Nginx中时</span></a></h3><p>编辑nginx.conf文件</p><div class="language-nginx line-numbers-mode" data-ext="nginx" data-title="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">location</span> /api/</span> <span class="token punctuation">{</span>
  <span class="token directive"><span class="token keyword">proxy_read_timeout</span> <span class="token number">150</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_pass</span> https://test.com.cn</span><span class="token punctuation">;</span>
  <span class="token comment">#将原请求的http链接header头中的Host信息放到转发请求中</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> Host <span class="token variable">$http_host</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Real-Ip <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> REMOTE-HOST <span class="token variable">$remote_addr</span></span><span class="token punctuation">;</span>
  <span class="token directive"><span class="token keyword">proxy_set_header</span> X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span></span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="springboot-中的跨域" tabindex="-1"><a class="header-anchor" href="#springboot-中的跨域"><span>SpringBoot 中的跨域</span></a></h2><p>在Application启动器同目录下新建：CorsConfig</p><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Bean</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>context<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">Configuration</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpHeaders</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">CorsRegistry</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>web<span class="token punctuation">.</span>servlet<span class="token punctuation">.</span>config<span class="token punctuation">.</span>annotation<span class="token punctuation">.</span></span><span class="token class-name">WebMvcConfigurer</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@Configuration</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CorsConfig</span> <span class="token keyword">implements</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token punctuation">{</span>

    <span class="token annotation punctuation">@Bean</span>
    <span class="token keyword">public</span> <span class="token class-name">WebMvcConfigurer</span> <span class="token function">corsConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">WebMvcConfigurer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token annotation punctuation">@Override</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">addCorsMappings</span><span class="token punctuation">(</span><span class="token class-name">CorsRegistry</span> registry<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                registry<span class="token punctuation">.</span><span class="token function">addMapping</span><span class="token punctuation">(</span><span class="token string">&quot;/**&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>
                        <span class="token function">allowedOrigins</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许跨域的域名，可以用*表示允许任何域名使用</span>
                        <span class="token function">allowedMethods</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许任何方法（post、get等）</span>
                        <span class="token function">allowedHeaders</span><span class="token punctuation">(</span><span class="token string">&quot;*&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//允许任何请求头</span>
                        <span class="token function">allowCredentials</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">.</span> <span class="token comment">//带上cookie信息</span>
                        <span class="token function">exposedHeaders</span><span class="token punctuation">(</span><span class="token class-name">HttpHeaders</span><span class="token punctuation">.</span><span class="token constant">SET_COOKIE</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">maxAge</span><span class="token punctuation">(</span><span class="token number">3600L</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//maxAge(3600)表明在3600秒内，不需要再发送预检验请求，可以缓存该结果</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,39),o=[p];function i(c,l){return s(),a("div",null,o)}const u=n(t,[["render",i],["__file","cross-domain.html.vue"]]),k=JSON.parse(`{"path":"/article/cross-domain.html","title":"跨域问题","lang":"zh-CN","frontmatter":{"description":"跨域问题 问题产生原因 跨域问题主要源于浏览器的同源策略，同源策略是浏览器的一种安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。这里的源指的是协议、域名和端口号的组合，只有当两个URL的协议、域名和端口号都相同的时候，这两个URL就是同源。 同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取或操作另一个源的文档或...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/article/cross-domain.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"跨域问题"}],["meta",{"property":"og:description","content":"跨域问题 问题产生原因 跨域问题主要源于浏览器的同源策略，同源策略是浏览器的一种安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。这里的源指的是协议、域名和端口号的组合，只有当两个URL的协议、域名和端口号都相同的时候，这两个URL就是同源。 同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取或操作另一个源的文档或..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-03-01T05:30:25.000Z"}],["meta",{"property":"article:modified_time","content":"2024-03-01T05:30:25.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"跨域问题\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-03-01T05:30:25.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"问题产生原因","slug":"问题产生原因","link":"#问题产生原因","children":[]},{"level":2,"title":"常用解决方法","slug":"常用解决方法","link":"#常用解决方法","children":[{"level":3,"title":"CORS（Cross-Origin Resource Sharing）跨域资源共享","slug":"cors-cross-origin-resource-sharing-跨域资源共享","link":"#cors-cross-origin-resource-sharing-跨域资源共享","children":[]},{"level":3,"title":"JSONP（JSON with Padding）跨域资源共享","slug":"jsonp-json-with-padding-跨域资源共享","link":"#jsonp-json-with-padding-跨域资源共享","children":[]},{"level":3,"title":"代理","slug":"代理","link":"#代理","children":[]},{"level":3,"title":"WebSocket","slug":"websocket","link":"#websocket","children":[]},{"level":3,"title":"window.postMessage","slug":"window-postmessage","link":"#window-postmessage","children":[]},{"level":3,"title":"document.domain","slug":"document-domain","link":"#document-domain","children":[]}]},{"level":2,"title":"Django 中的跨域","slug":"django-中的跨域","link":"#django-中的跨域","children":[{"level":3,"title":"安装","slug":"安装","link":"#安装","children":[]},{"level":3,"title":"配置","slug":"配置","link":"#配置","children":[]}]},{"level":2,"title":"React 中的跨域","slug":"react-中的跨域","link":"#react-中的跨域","children":[{"level":3,"title":"在本地开发环境时","slug":"在本地开发环境时","link":"#在本地开发环境时","children":[]},{"level":3,"title":"部署到Nginx中时","slug":"部署到nginx中时","link":"#部署到nginx中时","children":[]}]},{"level":2,"title":"SpringBoot 中的跨域","slug":"springboot-中的跨域","link":"#springboot-中的跨域","children":[]}],"git":{"createdTime":1709271025000,"updatedTime":1709271025000},"readingTime":{"minutes":2.55,"words":764},"filePathRelative":"article/cross-domain.md","localizedDate":"2024年3月1日","autoDesc":true,"excerpt":"\\n<h2>问题产生原因</h2>\\n<p>跨域问题主要源于浏览器的同源策略，同源策略是浏览器的一种安全策略，它用于限制一个源的文档或者它加载的脚本如何能与另一个源的资源进行交互。这里的源指的是协议、域名和端口号的组合，只有当两个URL的协议、域名和端口号都相同的时候，这两个URL就是同源。</p>\\n<p>同源策略的目的是为了保证用户信息的安全，防止恶意的网站窃取或操作另一个源的文档或数据。</p>\\n<h2>常用解决方法</h2>\\n<h3>CORS（Cross-Origin Resource Sharing）跨域资源共享</h3>\\n<p>服务器设置特定的HTTP头，如 Access-Control-Allow-Origin，来允许或拒绝来自不同源的请求。</p>"}`);export{u as comp,k as data};