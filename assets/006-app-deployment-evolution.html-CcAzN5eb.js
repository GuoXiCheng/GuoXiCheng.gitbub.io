import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as t,c as a,a as n}from"./app-B66AslUY.js";const p={},i=n('<h1 id="应用部署的演变" tabindex="-1"><a class="header-anchor" href="#应用部署的演变"><span>应用部署的演变</span></a></h1><h2 id="物理机时期" tabindex="-1"><a class="header-anchor" href="#物理机时期"><span>物理机时期</span></a></h2><p>在信息技术的早期阶段，应用通常直接部署于物理机上。这种部署方式要求应用维护人员直接访问目标服务器，手动进行部署或更新，过程中涉及到硬件和操作系统的直接配置。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>所谓的物理机，类似于我们平时使用的台式机、笔记本电脑，都是由硬件和操作系统组成的，只不过用于服务的物理机通常具有更高的性能和稳定性（如服务器级别的CPU、内存、硬盘等）。</p></div><p>这种部署方式简单直接，但应用的部署和运行依赖于物理机的环境，并且如果在同一台物理机上运行多个应用时，容易互相影响。</p><h2 id="虚拟机时期" tabindex="-1"><a class="header-anchor" href="#虚拟机时期"><span>虚拟机时期</span></a></h2><p>虚拟化技术的概念早在1960年代由IBM提出，并在1990年代得到商业化应用，如VMware的出现。</p><p>虚拟化技术通过将一台物理机虚拟化为多台逻辑上的虚拟机，每台虚拟机都能运行独立的操作系统和应用程序，从而实现了应用之间的隔离。这种技术大幅提高了硬件资源的利用率和应用部署的灵活性。然而，虚拟机的资源开销相对较大，启动和停止操作较为缓慢。</p><h2 id="容器化时期" tabindex="-1"><a class="header-anchor" href="#容器化时期"><span>容器化时期</span></a></h2><p>容器化技术的概念，虽然基于早期的FreeBSD Jails和Linux VServer技术，但直到Docker在2013年推出后才真正获得广泛关注和应用。这项技术提供了一种轻量级的虚拟化的方法，它能够将应用及其所需的依赖一同打包，在共享宿主机的操作系统核心的同时保持彼此隔离。</p><p>容器化技术极大地简化了CI/CD（持续集成/持续部署）流程。它不仅解决了“在我的机器上能运行”这一长期存在的问题，而且使得在CI/CD流程中容器的快速启动、构建、测试和部署成为可能，从而支持了快速迭代和更新。这种效率的提升不仅加快了部署和运行速度，也促进了软件开发与运维实践的融合，进一步推动了DevOps文化的发展。</p><h2 id="云原生时期" tabindex="-1"><a class="header-anchor" href="#云原生时期"><span>云原生时期</span></a></h2><p>随着容器化技术的普及和成熟，云原生应用和微服务架构成为了发展的新趋势。</p><p>云原生技术利用容器、服务网格、不可变基础设施和声明式API等一系列现代技术，支持在复杂多变的云环境中高效部署和管理应用。Kubernetes等容器编排工具的出现，为管理大规模容器化应用提供了强大的支持。云原生应用的部署和运行不再依赖于特定的硬件和操作系统，实现了更高的效率、灵活性和可扩展性。</p>',14),o=[i];function r(l,c){return t(),a("div",null,o)}const h=e(p,[["render",r],["__file","006-app-deployment-evolution.html.vue"]]),m=JSON.parse(`{"path":"/article/006-app-deployment-evolution.html","title":"应用部署的演变","lang":"zh-CN","frontmatter":{"description":"应用部署的演变 物理机时期 在信息技术的早期阶段，应用通常直接部署于物理机上。这种部署方式要求应用维护人员直接访问目标服务器，手动进行部署或更新，过程中涉及到硬件和操作系统的直接配置。 提示 所谓的物理机，类似于我们平时使用的台式机、笔记本电脑，都是由硬件和操作系统组成的，只不过用于服务的物理机通常具有更高的性能和稳定性（如服务器级别的CPU、内存、硬...","head":[["meta",{"property":"og:url","content":"https://guoxicheng.top/article/006-app-deployment-evolution.html"}],["meta",{"property":"og:site_name","content":"Guo's Page"}],["meta",{"property":"og:title","content":"应用部署的演变"}],["meta",{"property":"og:description","content":"应用部署的演变 物理机时期 在信息技术的早期阶段，应用通常直接部署于物理机上。这种部署方式要求应用维护人员直接访问目标服务器，手动进行部署或更新，过程中涉及到硬件和操作系统的直接配置。 提示 所谓的物理机，类似于我们平时使用的台式机、笔记本电脑，都是由硬件和操作系统组成的，只不过用于服务的物理机通常具有更高的性能和稳定性（如服务器级别的CPU、内存、硬..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-02-27T08:46:45.000Z"}],["meta",{"property":"article:modified_time","content":"2024-02-27T08:46:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"应用部署的演变\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-02-27T08:46:45.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"物理机时期","slug":"物理机时期","link":"#物理机时期","children":[]},{"level":2,"title":"虚拟机时期","slug":"虚拟机时期","link":"#虚拟机时期","children":[]},{"level":2,"title":"容器化时期","slug":"容器化时期","link":"#容器化时期","children":[]},{"level":2,"title":"云原生时期","slug":"云原生时期","link":"#云原生时期","children":[]}],"git":{"createdTime":1709023605000,"updatedTime":1709023605000},"readingTime":{"minutes":2.55,"words":766},"filePathRelative":"article/006-app-deployment-evolution.md","localizedDate":"2024年2月27日","autoDesc":true,"excerpt":"\\n<h2>物理机时期</h2>\\n<p>在信息技术的早期阶段，应用通常直接部署于物理机上。这种部署方式要求应用维护人员直接访问目标服务器，手动进行部署或更新，过程中涉及到硬件和操作系统的直接配置。</p>\\n<div class=\\"hint-container tip\\">\\n<p class=\\"hint-container-title\\">提示</p>\\n<p>所谓的物理机，类似于我们平时使用的台式机、笔记本电脑，都是由硬件和操作系统组成的，只不过用于服务的物理机通常具有更高的性能和稳定性（如服务器级别的CPU、内存、硬盘等）。</p>\\n</div>\\n<p>这种部署方式简单直接，但应用的部署和运行依赖于物理机的环境，并且如果在同一台物理机上运行多个应用时，容易互相影响。</p>"}`);export{h as comp,m as data};
