if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,r)=>{const d=e||("document"in self?document.currentScript.src:"")||location.href;if(s[d])return;let c={};const t=e=>a(e,d),l={module:{uri:d},exports:c,require:t};s[d]=Promise.all(i.map((e=>l[e]||t(e)))).then((e=>(r(...e),c)))}}define(["./workbox-9a84fccb"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"28562d7da354b24f268106d9bb51247b"},{url:"A_vue_style_letter_G_logo_with_a_transparent_background.png",revision:"debc0a69e901288489981f5c457528e3"},{url:"algorithm/index.html",revision:"54cb75f9b7dcffb650783d38b1330ffe"},{url:"algorithm/sort.html",revision:"68b9969a4d698c84f951694871359e80"},{url:"algorithm/sort/index.html",revision:"2aa57f4eea0e688571fa42b1deb8898b"},{url:"algorithm/sort/selection-sort.html",revision:"c4e85ee3780de8014e5e7628c07da341"},{url:"article/Android Compose 切换应用主题.html",revision:"cb82946da149428c4f130cb6537de72a"},{url:"article/index.html",revision:"d1438df3fa47af8af7465c6775509b9a"},{url:"article/制作npm第三方库.html",revision:"8ee84bfe12d27d8586222687a93d5a4d"},{url:"article/跨域问题.html",revision:"0c22d8fc7c878a7872537875f34ddd53"},{url:"article/防抖和节流.html",revision:"b4fc7a568b07712488b5b07e25b4aa27"},{url:"assets/001-自控力.html-qmzuSs3q.js",revision:"927d2d84fadbc2748b7ff10306938edd"},{url:"assets/002-了不起的盖茨比.html-GoqjuL7u.js",revision:"faa1b7ce73a98442964a76fa1b4a50fb"},{url:"assets/003-亲密关系.html-6o72yZBi.js",revision:"e2e2267b0f03c7d4e39beda3caf93694"},{url:"assets/004-被讨厌的勇气.html-STRpHAPf.js",revision:"bda8078fcf0de3a61846c8fde831e98e"},{url:"assets/005-魔鬼聊天术.html-b2IXOeyz.js",revision:"1b9ff4de484ab09299f4e893453a7f2b"},{url:"assets/006-精益创业实战.html-eD96Tonb.js",revision:"204c253a75f260f21c31848c798ba1d5"},{url:"assets/007-小岛经济学.html-6cxlGPMb.js",revision:"c846dfed2ebd77f705176a22ff66c05a"},{url:"assets/008-微习惯瘦身篇.html-vZSlr_zU.js",revision:"cdbee83e9daa91aced4bece83d298f2e"},{url:"assets/009-内向者沟通圣经.html--s4kgWtf.js",revision:"0cea8d7dbe39621addcab946b97d7228"},{url:"assets/010-小王子.html-wWIWnpNY.js",revision:"28b1aaa58135608feadc70ed97d18307"},{url:"assets/011-洛克菲勒家书.html-ktkrpG-m.js",revision:"054f08c28e6c0d82eda3ddb33d377ea2"},{url:"assets/012-富兰克林自传.html-HVBPioVH.js",revision:"fa18e580d08c45a7bd00a58293cdcecf"},{url:"assets/013-秘密.html-T4gRAeLe.js",revision:"0eddbaab040a373d074444fb9df3ce0c"},{url:"assets/014-稻盛和夫语录100条.html-QSrIZLlm.js",revision:"1ba0d26803230b30252720324e4ff949"},{url:"assets/015-娱乐至死.html-HskSP-1m.js",revision:"b6d0492958e2c3013495f415173c5458"},{url:"assets/016-我在100天内自学英语翻转人生.html-asq0g7Gg.js",revision:"b8494be65bdd617d6a05380118214edf"},{url:"assets/017-圣经的智慧.html-CvVpO4Ej.js",revision:"1243803ee71d4139ed247164e4481062"},{url:"assets/018-欲望与尊严.html-8BSCMrHD.js",revision:"5d1051de8895dfde6109140a640475cc"},{url:"assets/019-乡土中国.html-wyhRrt8x.js",revision:"27db4a81b5286cf18bb151bdb3a049a9"},{url:"assets/021-上瘾.html-1reEg4_8.js",revision:"8ced4bba41071ea469bd79f81a19095f"},{url:"assets/022-优秀的绵羊.html-espT05H9.js",revision:"81b42df97641a57c2196a3561febac7c"},{url:"assets/404.html-StfJ39pf.js",revision:"87d93d565a53901dfd7856d7c5610c07"},{url:"assets/abstract-factory.html-QNfrjWra.js",revision:"1ed19837186ccd68ed18fdb2ec891295"},{url:"assets/adapter.html-kU7mk2iR.js",revision:"99af3feb8fa981b4b30c09985c2aa43e"},{url:"assets/ADB无线调试.html-GjcXO6OI.js",revision:"e6cbce88bfca484c44be2c5691f50eb6"},{url:"assets/Android Compose 切换应用主题.html-0fHGZkuL.js",revision:"0f395243929d5f3a193983983a62e584"},{url:"assets/android-rect-d4rCRbA8.js",revision:"90fb5893d58ca34d9d16fb030114cd50"},{url:"assets/app-OwM4KWfr.js",revision:"42ef66e1a469a98ed95b884c7943d045"},{url:"assets/apply、call、bind.html-MZRSW5ih.js",revision:"c3ca1303260763f4de52361ed7513afe"},{url:"assets/arc-PuLOmo7F.js",revision:"cca8aeec22d2cbb1f21fc1ebde634de7"},{url:"assets/argocd.html-f3qDVAtt.js",revision:"4bccb83fa748808fe850b0ae4aeefb22"},{url:"assets/arguments对象.html-5NTZDzCo.js",revision:"bf374e28ea2c0be1497f24f6f04b9a54"},{url:"assets/array-Nw74a44z.js",revision:"17dcebeaf673b09a1ca5da014d20022f"},{url:"assets/blockDiagram-6b2b5046-tyfuq6j8.js",revision:"343d41dad62e44a9c498a2fd94aa2c2a"},{url:"assets/bridge.html-Bulssv5m.js",revision:"fa62688df4fbacbf24df6214a02370e5"},{url:"assets/builder.html-ks60aIrk.js",revision:"3bfe4e05ca82dc13dbd3bd2ce9baa9c2"},{url:"assets/c4Diagram-b947cdbb-lmbjCq8w.js",revision:"3d72556847b0a2c965f9cebdaed595bd"},{url:"assets/chain-of-responsibility.html-yh8RryQA.js",revision:"b81894d364c18062dda7ce1c72141cbb"},{url:"assets/channel-ydFT5h2N.js",revision:"4a40169faafc516d50d5b59320c3ee27"},{url:"assets/classDiagram-35230388-NQncrhwP.js",revision:"12f4d5d198fc674f90756932ba8e58b7"},{url:"assets/classDiagram-v2-412acd34-dxGEHSuD.js",revision:"858756dceed3a6956c264394877442dd"},{url:"assets/classical-layout.html-6c-SEKmK.js",revision:"5c103be182503e2f83b7143b6b505c7c"},{url:"assets/clone-0BpD-smF.js",revision:"73220462205f266b5a11f4baa574e604"},{url:"assets/command.html-ft0zVnqF.js",revision:"4c87838e1c486bf1c143423654f3a307"},{url:"assets/composite.html-U1BCtOqi.js",revision:"6f1da3e7dccc50a8930364ecf7afda14"},{url:"assets/contribute.html-nGoIXYZL.js",revision:"eacb6f5661522ced1dec497fa4a3ce57"},{url:"assets/contribute.html-qKB0xu-U.js",revision:"43c735a30d3bd89f33d9b9173c99057b"},{url:"assets/contribution-guide.html-D1AHNdwo.js",revision:"5473c68a941799fa8240804a323dd726"},{url:"assets/contribution-guide.html-dz8c7x7Y.js",revision:"84cbbd2452e6e310d354a94c279a2cc0"},{url:"assets/create-request.html-FuVTIyRO.js",revision:"1bc481b176b1cd029c873440b85d21eb"},{url:"assets/create-request.html-iEASbVty.js",revision:"1526d27f9218a809c1092f7df5e4882a"},{url:"assets/createText-423428c9-U0gedf1q.js",revision:"08c624506237eb629b57a1edb06c5bd5"},{url:"assets/decorator.html-qnddbMUe.js",revision:"a900d11a289ef4c4ec013ac94a40816a"},{url:"assets/edges-d417c7a0-RYv2Ln0X.js",revision:"9bba679406844414878d46ec0a208596"},{url:"assets/erDiagram-0ea73325-KVEDER5V.js",revision:"f18b4c2fb16bf0a3d3fa2600e6ae0cf5"},{url:"assets/facade.html-nKqzoFJN.js",revision:"6b8494b3561bce963815ee07a65321c5"},{url:"assets/factory-method.html-BI5IegF_.js",revision:"d1fd6aad1adda52eda1649995a6dbdc6"},{url:"assets/flex-layout.html-9CzkHpfs.js",revision:"b7925f0cf95aeefa30819f9ad69763e5"},{url:"assets/flowchart-elk-definition-27cc417a-wgUzbcjk.js",revision:"08fb28aec88a0cd051c82b1228c2406c"},{url:"assets/flowDb-d35e309a-YFC7P2Jj.js",revision:"e518e6533e1d8f444c5ef7b882f5beab"},{url:"assets/flowDiagram-d949d7c1-l7_FtlGM.js",revision:"fd0aced64647c3bcc2a756b6049f5364"},{url:"assets/flowDiagram-v2-49332944-AIxUhYBB.js",revision:"3a454a6b4d5975742030a0b6dee2183f"},{url:"assets/flyweight.html-TVc--4rz.js",revision:"3707d6888acf4829af81feb36285d488"},{url:"assets/ganttDiagram-5c869e3b-5OMBM4Hv.js",revision:"61687c2b39357c2151d45b1d7980921c"},{url:"assets/GET和POST.html-bSGJNg_b.js",revision:"61de20780471b6262c5124c735f08f95"},{url:"assets/gitGraphDiagram-b9d81de9-Ntoq0NwI.js",revision:"d8d0a6fbec943b6df877041e091577ab"},{url:"assets/git初始化.html-ht7TBbhr.js",revision:"a39af436a9389a3a7bd7ce2e8006faac"},{url:"assets/graph-bV_0Uc-7.js",revision:"2eb3ff71fd628ff63ce531c141bc943f"},{url:"assets/grid-layout.html-8IEQTFS4.js",revision:"69e1c1c1562160247cbea2a43a441936"},{url:"assets/how-to-use.html-tobC-ELy.js",revision:"cb51249f6d89ab1f507a41ca8d24677d"},{url:"assets/how-to-use.html-v1ReNESP.js",revision:"7a7eae96cd008e1b926cfa8738ac56c1"},{url:"assets/HTTP和HTTPS.html-CcE05u-d.js",revision:"4919d7c821617532931577f08993ccb6"},{url:"assets/icon/chrome-192.png",revision:"ae73d709aa8ccff0cc603cf7f3c8d1cd"},{url:"assets/icon/chrome-512.png",revision:"740bbb5a91c52f653561fab66dc87bb0"},{url:"assets/icon/chrome-mask-192.png",revision:"062165efbd61c85b85ea9e3aee2b40fd"},{url:"assets/icon/chrome-mask-512.png",revision:"d98869e0709d91ca6ced67f05c38f276"},{url:"assets/icon/guide-maskable.png",revision:"99cc77cf2bc792acd6b847b5e3e151e9"},{url:"assets/image/advanced.svg",revision:"2934a573b64033bebb71f067ebc8d082"},{url:"assets/image/bg/2-dark.svg",revision:"a7d09576282bc657b12c178bc0c4cc39"},{url:"assets/image/bg/2-light.svg",revision:"8bcf6b354c2f71acdf69a661b2006306"},{url:"assets/image/bg/6-dark.svg",revision:"caa7b7222498b04a233cb264eb905cfc"},{url:"assets/image/bg/6-light.svg",revision:"9d736e9908aa840b633d5962129f3426"},{url:"assets/image/blog.svg",revision:"5686f361aca8bcf73522de225d09016d"},{url:"assets/image/box.svg",revision:"5f732c9705e288e8fb8ae6d2e5ce906a"},{url:"assets/image/features.svg",revision:"2eb292180d361e4af3f4bf411ef06062"},{url:"assets/image/github-dark.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"assets/image/github-light.svg",revision:"a0b00583d93c2f7084ad151ee0849934"},{url:"assets/image/k8s-release-strategy/a-b-test.jpg",revision:"06bb155d8be02ed586abe967b58d1402"},{url:"assets/image/k8s-release-strategy/blue-green.png",revision:"3ae29831ee845fe551ef2c7aacf0c935"},{url:"assets/image/k8s-release-strategy/canary.png",revision:"f903bb57eedee40b71189ab95f5dc696"},{url:"assets/image/k8s-release-strategy/recreate.png",revision:"a9a035e1a3835999f8c20ded07633967"},{url:"assets/image/k8s-release-strategy/rolling-update.png",revision:"2d2f4bf9d5b50a8fc24558990b7e1a39"},{url:"assets/image/layout.svg",revision:"db603c70eb017066ff30923ca5a2cd4a"},{url:"assets/image/markdown.svg",revision:"1a8b4476dae8f52cdd873d2b00fa27fb"},{url:"assets/image/skip-docs/android-rect.png",revision:"8935fe56c594756aed27b1ef72d1b35f"},{url:"assets/image/skip-docs/click-button-on-the-screen-dark.png",revision:"588b7b6ba07c0b152ba361fa70a4275f"},{url:"assets/image/skip-docs/click-button-on-the-screen-light.png",revision:"2e1b5b2b00ca34a2794a98f80c2d718f"},{url:"assets/image/skip-docs/layout-reference.png",revision:"d95755d2435e699d96c071a465fa3cc3"},{url:"assets/image/skip-docs/main-interface-dark.png",revision:"8c273af1e37efb34e3ebe86372758598"},{url:"assets/image/skip-docs/main-interface-light.png",revision:"9c6491d58c956f3b101d5f48f215a3f3"},{url:"assets/image/skip-docs/skip-bottom-screenshot.jpg",revision:"d9f79ad09b2365f52e5d749370be3507"},{url:"assets/image/skip-docs/skip-icon.png",revision:"4b3b544beccb2ac8e1df30c1d1660c5b"},{url:"assets/image/skip-docs/use-accessibility-dark.png",revision:"28b065068bed82381179a357d74f685a"},{url:"assets/image/skip-docs/use-accessibility-light.png",revision:"e31e76e6175ad21c5668a4491ffde0b5"},{url:"assets/image/skip-docs/xiaomi-app-backend-lock-dark.png",revision:"0b1fc323b7ac233cfc69ff4b2440a3c0"},{url:"assets/image/skip-docs/xiaomi-app-backend-lock-light.png",revision:"22ad364b578ae1e8d894e2b710068dab"},{url:"assets/image/skip-docs/xiaomi-enable-self-start-dark.png",revision:"6d87e766b071c8446b063e45712b46b3"},{url:"assets/image/skip-docs/xiaomi-enable-self-start-light.png",revision:"96c90d53f637995f2db02c962e28b088"},{url:"assets/image/skip-docs/xiaomi-enable-self-start.jpg",revision:"ad75c929f1973f895e053f181cecf8b5"},{url:"assets/image/skip-docs/xiaomi-ignoring-battery-optimization-dark.png",revision:"a31f79a87adc02aae1e368dca3028629"},{url:"assets/image/skip-docs/xiaomi-ignoring-battery-optimization-light.png",revision:"90e0ea952a71c4d735a07704c597653d"},{url:"assets/image/snowflake.svg",revision:"d99756f2c265308fecfad7aa11d99795"},{url:"assets/image/tiny-crud-docs/gitee.svg",revision:"4ba7f6fc575d5ba606fbf851346ea1a5"},{url:"assets/image/tiny-crud-docs/github.svg",revision:"b0795bac30cc9496b3395cc06c8e4a9b"},{url:"assets/image/tiny-crud-docs/gitlab.svg",revision:"a9ffbcd75fc01ef27a8e974af074448f"},{url:"assets/image/tiny-crud-docs/tiny-crud-icon.png",revision:"ef689f86b2d24c236019511c051959b2"},{url:"assets/image/tiny-crud-docs/wechat.svg",revision:"c67236e13f262bb7027a0b1cd5725776"},{url:"assets/index-7SG8bi1h.js",revision:"46a193641571106d3b7b43f9bc2a2735"},{url:"assets/index-8fae9850-B5HZ_Cvw.js",revision:"c9afdf6779baa82585b124996770ec18"},{url:"assets/index.html-_AG0hBy_.js",revision:"d9205a1c5d5f28d04049a30705254890"},{url:"assets/index.html-5oAGAzYF.js",revision:"d0bc35b3753b869777a589e41f155b6f"},{url:"assets/index.html-8AQ6xygo.js",revision:"85dca898e4741c6c024492e26678c192"},{url:"assets/index.html-bNrEYFtu.js",revision:"4c3772b9b104341b9d9c378289a1fc64"},{url:"assets/index.html-bvm5g_E7.js",revision:"a582ef7b46387c94d70a89011e711632"},{url:"assets/index.html-cmxI8SEt.js",revision:"d2aeb2753361094e38b75bc1ff897f6a"},{url:"assets/index.html-F_2lQXez.js",revision:"07446654ffdd0fedbf1f759b71f5305c"},{url:"assets/index.html-f8x7-aCE.js",revision:"25c297e712da449b3539fce7ebdcdf52"},{url:"assets/index.html-F9Mz96A-.js",revision:"a7623b87dbab7844e7b2c0ce271147da"},{url:"assets/index.html-fR1G1BW2.js",revision:"d4cc21452e04c6886b80d699c5dcc386"},{url:"assets/index.html-FRYiE-SD.js",revision:"0a516a08b7ad99abbccddb5f511aca2b"},{url:"assets/index.html-Il3sxQ7x.js",revision:"aebfca2fea8425fb35f531e2184e1444"},{url:"assets/index.html-IpIzY4qF.js",revision:"afe070387f216affd3fe8d3c8c20a146"},{url:"assets/index.html-IwVcVoix.js",revision:"9f9abebd1e7d4e822ce85f17e6167d5a"},{url:"assets/index.html-JadgrHVw.js",revision:"2ac8d2dc388b98c2adc3ec19c31525f4"},{url:"assets/index.html-jiZIcWBj.js",revision:"9206d1a98889ecc101f68a6ec4e5c856"},{url:"assets/index.html-l-Hi1lT2.js",revision:"0fcf93ff7a82665f1e35a175869da04e"},{url:"assets/index.html-OrvEjQc7.js",revision:"ac9962bbe57b3e034dd02b9d839785b9"},{url:"assets/index.html-Q6otf0D3.js",revision:"482e361161328a1114bce25bfa48a4c3"},{url:"assets/index.html-sedl-N98.js",revision:"a57fbf7163137f15466a711f4ca7f991"},{url:"assets/index.html-UbSVfqlr.js",revision:"7bb4b38263f79bf7e73281b42233d8bc"},{url:"assets/index.html-W2TXpgei.js",revision:"8eb02ddc5f60f63bdcba0d5c649b6cb4"},{url:"assets/index.html-X1ibJsZV.js",revision:"46d2fd2965362fe2ad8cfbdee59cfad1"},{url:"assets/index.html-XiOV7HRR.js",revision:"c9425fdd697c812a9457cf1650b7f148"},{url:"assets/index.html-xvMDIkRH.js",revision:"450294ffab71eebbd5a8dc24328815d9"},{url:"assets/index.html-ykzVzDVJ.js",revision:"d5bcb02387db07a2cdb8a332cd1d5941"},{url:"assets/index.html-YnwcGj0O.js",revision:"3621e2d3950e4770b98d4bda6eb03d32"},{url:"assets/index.html-yrZ-w61m.js",revision:"65a6a3ccccadad3f65af2116bce2f6dd"},{url:"assets/index.html-z6RtMb5F.js",revision:"75030f62eecb9323a31f4f1976aaa671"},{url:"assets/infoDiagram-db7b18fc-qyJfxJoE.js",revision:"0bc5f784b2b9955f2fb99d53d5340745"},{url:"assets/init-Hi12RPRh.js",revision:"3ce28180466443e9b617d7b96e9f7b8f"},{url:"assets/iterator.html-6pYO_Hvt.js",revision:"698a29269ed4d7d5cf8ab867a5033d2a"},{url:"assets/journeyDiagram-d5636530-lEMJaSqI.js",revision:"ebaf630f87053b8de98af4480541f606"},{url:"assets/JS数字精度丢失问题.html-lkEMYQEy.js",revision:"943aecadb0d7e2933760d8fd0aeec705"},{url:"assets/k8s-release-strategy.html-ejU4VGkn.js",revision:"8641fd7246a2b4ce50a76c8a7443928a"},{url:"assets/K8S.html-fsNZSSvH.js",revision:"17b6d66ebe54e28076685ee9365e6bb4"},{url:"assets/karma测试工具配置.html-uDmNmWdV.js",revision:"1bc874f44769bccc6333998fede1b4f4"},{url:"assets/layout-OAlWtMc-.js",revision:"509af268afe7ee7f75b5c23a63bf71d4"},{url:"assets/line-yn24DMPL.js",revision:"afbce6bed8a1f105a799b761fa467ffc"},{url:"assets/linear-fbj5z3fC.js",revision:"ee6f744d833c43e25a069906e64600bf"},{url:"assets/main-interface-dark-R4O-orHQ.js",revision:"815cccf999dbcd0e42b33528fc6d4253"},{url:"assets/mediator.html-pohABf1o.js",revision:"1c208c2f5068f70fbff15ea36dd3f3af"},{url:"assets/memento.html-GuHKfp0Q.js",revision:"849dc76907fe715e9822c9d9c0c4dba6"},{url:"assets/mermaid.core-6VtvSaag.js",revision:"074c0181f85a388f07a673b7fe95ba16"},{url:"assets/mindmap-definition-377f8f1f-kn6D-Akb.js",revision:"fe12c99b90ccf88ba9db6abcecc3d15a"},{url:"assets/observer.html-4H3fo_TR.js",revision:"c1c3bd054c05de9d76c8c2f9331d7ae8"},{url:"assets/ordinal-wXG5obU4.js",revision:"a72e57060c4f6a7606baa78dc6e9ad02"},{url:"assets/path-aUcfwwLI.js",revision:"f86c0243cb45746453c6b4f7dbd9f34d"},{url:"assets/photoswipe.esm-08_zHRDQ.js",revision:"481d5342d9bb799640b63b15b698dcd4"},{url:"assets/pieDiagram-b0208e96-1-3YP4-q.js",revision:"accd326327db9af9b55a87ecc952208b"},{url:"assets/plugin-vue_export-helper-x3n3nnut.js",revision:"25e3a5dcaf00fb2b1ba0c8ecea6d2560"},{url:"assets/prototype.html-OqW_zZbI.js",revision:"058d330f21af765be914ae0efbcd2aa3"},{url:"assets/proxy.html-EBo1o4Ub.js",revision:"e99f7a2e64ae8026f015ffa552ed9d5a"},{url:"assets/px、em、rem、vh、vw.html-imx8077t.js",revision:"2764360cd27e86393e9681b76abddd88"},{url:"assets/quadrantDiagram-0332be45-4ElJmFfz.js",revision:"d087370e4197c2c7c63e7992cfb4a2d3"},{url:"assets/requirementDiagram-bf7890df-vz0Rf5h3.js",revision:"6072e1abedc9b65b13c5f9e89ee79dc9"},{url:"assets/sankeyDiagram-0acdec17-r8GbhApj.js",revision:"de71ca56f01e6c995d254af77f83d40f"},{url:"assets/selection-sort.html-07UMBOKy.js",revision:"81206b59c82ccd57826ee554e00dea55"},{url:"assets/selection-sort.html-qEn3O69L.js",revision:"46fc498bbe8fccba610c9bfe3cacef27"},{url:"assets/sequenceDiagram-c18d009d-W5GTG77l.js",revision:"65709a52d50c0f8b90373d840e4a733e"},{url:"assets/singleton.html-pFycjK5U.js",revision:"6ede11c6c26a425726ab936c89a2aa1f"},{url:"assets/sort.html-RS7YW2HS.js",revision:"e5896571ae426d78a4a2e74980459adf"},{url:"assets/sort.html-tMNgsRqM.js",revision:"573aff60536e94bd6e7290b9a33bf3c5"},{url:"assets/start-using.html-MQp_ithW.js",revision:"b8703fdb1b9cf557912291044bda1fe4"},{url:"assets/start-using.html-VtvgB7nE.js",revision:"e39d480df6f74098c7d44582e2ff2a45"},{url:"assets/state.html-Zw6b7yJy.js",revision:"836aec4732bdb719bcb35588218affce"},{url:"assets/stateDiagram-43596fc0-42Ypq2Zf.js",revision:"3429afa97ce9f51bb9e1e2a6ad3405f5"},{url:"assets/stateDiagram-v2-2ead4f9c-BeLBUBoo.js",revision:"2e3e3df54bf2ba3a5c149ddc3fb1a737"},{url:"assets/state和props.html-_jjLUjKB.js",revision:"34aaf47c7ddc2a28003b5e44d98479de"},{url:"assets/state的用法.html--UktH0f6.js",revision:"46b18c01a0f77caf50a8b321f4f6193f"},{url:"assets/strategy.html-vl9z0xJ9.js",revision:"d0341aa44a6b09af6b697ddc7105d81d"},{url:"assets/style-UPxP0l4h.css",revision:"de5ecdc44528baf168332bd24b2408c6"},{url:"assets/styles-6860f46c-HZuRUWqW.js",revision:"77fe0fefe3b8732afafcbb62c9888d07"},{url:"assets/styles-7383a064-ozXAsmB7.js",revision:"3a9bcec3d1ebc3a4564712533b7b3ce6"},{url:"assets/styles-b2c874b6-ltwxX0X7.js",revision:"917083e76f3e68c3af311aef03b70fce"},{url:"assets/styles/flex-layout.css",revision:"9b1426bf52cc591ca5949cb285e002ae"},{url:"assets/styles/grid-layout.css",revision:"c55d3400c565b7343a128cc9de522144"},{url:"assets/svgDrawCommon-0ee1b4e9-GpBp13Ki.js",revision:"d3148a6a2584d145789865354218a447"},{url:"assets/Tableau10-Fgclqpgn.js",revision:"f2197f44250cada74e1e663d3abfba3e"},{url:"assets/template-method.html-HgRqt3Q3.js",revision:"d8f9031298681408001a4d7a10c7b63f"},{url:"assets/test-coverage-example.html-nozAxJ-n.js",revision:"d4a1750cef36ee34c9e026507a71c362"},{url:"assets/this对象.html-UJ4_WKHk.js",revision:"efdd3572208266e2eaa6388704b3e3e3"},{url:"assets/timeline-definition-d977decf-HVwyQrrN.js",revision:"e459682166facf3bc74a9174daee80fd"},{url:"assets/TS中的泛型函数.html-vTB5Ckhd.js",revision:"68aa1e099567c71b90d289bcdda6c954"},{url:"assets/typeof和instanceof.html-JYFVyFRJ.js",revision:"5bd19674f676cf1c777ec095b1c035e5"},{url:"assets/use-accessibility-dark-MV01jGKw.js",revision:"f2eb0669c5f20f70c8d9dc3acadb3611"},{url:"assets/var、let、const.html-29tkB2Wj.js",revision:"ba0ebf8ff0344eb89baa3d4e3c628320"},{url:"assets/visitor.html-9n3ApLkE.js",revision:"c89c9d3c15674bd66cc4650e0d6a5ce8"},{url:"assets/wechat-g1NfBlN_.js",revision:"628de4d9d66cccd2a922e6c3e9753e11"},{url:"assets/WordCard-GzJRRBLi.js",revision:"58edf25757cbafc3741b91e8017f2aa4"},{url:"assets/xiaomi-enable-self-start-dark-iJqZXRpX.js",revision:"41f05ab3a9ef3c7869141eba09e6372f"},{url:"assets/xiaomi.html-_T7dm24z.js",revision:"7ec11a64541141f6af323a9ab8e1bbc8"},{url:"assets/xiaomi.html-plaqshC8.js",revision:"27964c54c2a837d8a3f2ff591e76a134"},{url:"assets/xychartDiagram-e50adddc-8mY3fjXH.js",revision:"feae9a875120af241a765469f828f432"},{url:"assets/人性的弱点.html-LeH7_pzx.js",revision:"d9b0a6247d1bd843d3be0213ac37474e"},{url:"assets/什么是JavaScript.html-y8XpCmuR.js",revision:"36d9eded363766f5b7a95b9290786590"},{url:"assets/作用域.html-Ift6UEGT.js",revision:"f6dc61d196ae1acb802ce0d79ce955b5"},{url:"assets/使用sftp上传下载文件.html-x7tEoFs0.js",revision:"b7032fd3a5390d4ab29239de970b8f4c"},{url:"assets/函数柯里化.html-ZM8tg7YE.js",revision:"fe33f47beb2f940fbef5dcc08caf0ef8"},{url:"assets/制作npm第三方库.html-jODxUrRT.js",revision:"32e3b58d37aeab78efbf70ffbff4aa86"},{url:"assets/剩余参数.html-337PIzl3.js",revision:"94e8e1b47be06a3a20d0c3e0ab56d03c"},{url:"assets/和___.html-m6LATKMg.js",revision:"aa7b8b034471cf03d95485fb921e4ad2"},{url:"assets/哈希路由和History路由.html-Mls_YV3x.js",revision:"13f55d1d75e741303976b534caad42d3"},{url:"assets/多国语系设置.html-YcYfasgX.js",revision:"6111e106d86ddb516987b17da9239314"},{url:"assets/接入Azure-AD登录.html-mEZASA2H.js",revision:"484a2d098f99aff31dbc18f146b86a8d"},{url:"assets/深拷贝和浅拷贝.html-8l2kskcW.js",revision:"c5ed232050f04b4d3a1e5a36fac097d9"},{url:"assets/箭头函数.html-HlW3aF38.js",revision:"6f817850e2dabfb6bcda47ab2511811c"},{url:"assets/组件间共享数据.html-YJXcSHaV.js",revision:"688483026a4125e82289305f82078b01"},{url:"assets/自定义装饰器.html-LtdcJQEu.js",revision:"a5e7710c55d80e5848138a937512d79e"},{url:"assets/跨域问题.html-GpKy8iv_.js",revision:"09e54940a56e1a7183358a768b63c67b"},{url:"assets/闭包.html-Qmp-iyMC.js",revision:"6e3d712d38f241a65801641ebd338b8c"},{url:"assets/防抖和节流.html-TrccvK2v.js",revision:"431e90dce84af9b2060391db2583a87b"},{url:"assets/非暴力沟通.html-Og0HOl4F.js",revision:"343e7e5f60c73a1fba229a5012612a21"},{url:"cloud-native/argocd.html",revision:"f8cf22bc21d680b182a9ff29f7f9bcbf"},{url:"cloud-native/git初始化.html",revision:"2e74a5058dc47c31d78ec7d7759a663c"},{url:"cloud-native/index.html",revision:"485ba64e11738bc01dbd9a8db9937e40"},{url:"cloud-native/k8s-release-strategy.html",revision:"06f224bd52faa55e52f5318651947e4b"},{url:"cloud-native/K8S.html",revision:"863eca6325b3f48ec063d4b555f66920"},{url:"cloud-native/test-coverage-example.html",revision:"b6d8cc5db215302e2169810dd8b67b04"},{url:"cloud-native/使用sftp上传下载文件.html",revision:"096893c5c3bfe50dd6dc3e245e7817df"},{url:"design-pattern/behavioral/chain-of-responsibility.html",revision:"8aadcb798edf964512ab81d33c158d48"},{url:"design-pattern/behavioral/command.html",revision:"be30cba92d89a59ff42f2d11a7bb2009"},{url:"design-pattern/behavioral/index.html",revision:"c6a4474b3eec4ba3c85b8f33885eb018"},{url:"design-pattern/behavioral/iterator.html",revision:"062fd4858d4a6d717b1902068d14bc11"},{url:"design-pattern/behavioral/mediator.html",revision:"add62d8f02c7c80e838ab81b15472a5a"},{url:"design-pattern/behavioral/memento.html",revision:"19aa6ead95be7c63dc6a457ae2a8fa86"},{url:"design-pattern/behavioral/observer.html",revision:"dd7fe88770c8c0c848e7327e0569b041"},{url:"design-pattern/behavioral/state.html",revision:"ad1fa05bc979535ccd7e0ddddb2e8f52"},{url:"design-pattern/behavioral/strategy.html",revision:"d52ef88f7a41726a9b1ca9770d242671"},{url:"design-pattern/behavioral/template-method.html",revision:"b27286f4df9a69c23c668f0290b8f6ef"},{url:"design-pattern/behavioral/visitor.html",revision:"c02c9fc0e947a7907cb434e666e04567"},{url:"design-pattern/creational/abstract-factory.html",revision:"1fc0ec7c56c51dd5598fdd2ca1305ad0"},{url:"design-pattern/creational/builder.html",revision:"cc3bbee0908bd838fd6277b7ffb20a54"},{url:"design-pattern/creational/factory-method.html",revision:"41bdbf1711d6a1ef77b836000cee08a7"},{url:"design-pattern/creational/index.html",revision:"737083e48536cf09ddca814a286072d7"},{url:"design-pattern/creational/prototype.html",revision:"3dd6ba0e42a61aae936d5bc434dd948d"},{url:"design-pattern/creational/singleton.html",revision:"64f82a9127d2b5c2f94641dfa4283988"},{url:"design-pattern/index.html",revision:"7c3f6fb71c130a6235dd34db0e199900"},{url:"design-pattern/structural/adapter.html",revision:"11b0eb88f71c7eef06e460e0dbb16ac7"},{url:"design-pattern/structural/bridge.html",revision:"5064d62bab34d2411072f94477cba963"},{url:"design-pattern/structural/composite.html",revision:"9da1de293ff502cc4c5c3e6f81779a34"},{url:"design-pattern/structural/decorator.html",revision:"fbc2b90fae90a3ce1258b75815764180"},{url:"design-pattern/structural/facade.html",revision:"9d59f6ca01800a4fe66f5948b40c0677"},{url:"design-pattern/structural/flyweight.html",revision:"11e8b4a6cde42470ef8dbcd9c9fd447c"},{url:"design-pattern/structural/index.html",revision:"dd8271e70b170fb349478ac07755215f"},{url:"design-pattern/structural/proxy.html",revision:"b889523d08b9147556118c98f4d27020"},{url:"develop/android/ADB无线调试.html",revision:"678a0c868f2c1a67a0f785b0c765bd1c"},{url:"develop/android/index.html",revision:"ed69b0a6a05ef3191a920d4829384cab"},{url:"develop/angular/index.html",revision:"86408e6462ed1c09ae8eaf6e82068b49"},{url:"develop/angular/karma测试工具配置.html",revision:"dc982006f3c7f5a9422b1b4ad94c5d79"},{url:"develop/angular/多国语系设置.html",revision:"f85cba5593502826b252b862798a3dd4"},{url:"develop/angular/接入Azure-AD登录.html",revision:"67ca1d11986ae2c46d11d8a4d5c5ca0f"},{url:"develop/angular/组件间共享数据.html",revision:"007e1f00cde87ce1d54097489f41f413"},{url:"develop/html/classical-layout.html",revision:"11b9cd0d10eb9ac620cc456032c11bc4"},{url:"develop/html/flex-layout.html",revision:"8655ecd3ed6552b83eb45a956ba95ed2"},{url:"develop/html/grid-layout.html",revision:"884389a793df763244467c6be891f831"},{url:"develop/html/index.html",revision:"693d303dac1e691a0d276d0f09f8ae72"},{url:"develop/index.html",revision:"7b860b2635f58ab7d93f128ba12a2c6f"},{url:"develop/python/index.html",revision:"d0308c7d654ecd800c611ba6c7da4a7c"},{url:"develop/react/index.html",revision:"43c3f1d6b197d1440d7ee578792d1af3"},{url:"develop/react/state的用法.html",revision:"197f79d875ce98d569af5734421ba053"},{url:"develop/typescript/index.html",revision:"d43e49d34801c03774d3f91c20185724"},{url:"develop/typescript/TS中的泛型函数.html",revision:"adf5a166ded16b52b4aa8c0277511f73"},{url:"develop/typescript/自定义装饰器.html",revision:"808c16d2db6e0b83ee952338c3ef7810"},{url:"en/algorithm/index.html",revision:"47f047f03699ae5d18ed73587f03b984"},{url:"en/algorithm/sort.html",revision:"e8244f8bf8bc5a254d5f180e1e36e6b2"},{url:"en/algorithm/sort/index.html",revision:"7323a6aa8f3b0b5308089d97c95a6ad3"},{url:"en/algorithm/sort/selection-sort.html",revision:"3cadcb292dcbe588d0c301d36f94806b"},{url:"en/index.html",revision:"395eccb4a8f996211dbdd744144e56fc"},{url:"en/projects/index.html",revision:"c9934f97e8a944b80f27e07aa5bbd3b5"},{url:"en/projects/SKIP-Docs/contribute.html",revision:"7482e4b6901d4ce976e776a605be395f"},{url:"en/projects/SKIP-Docs/how-to-use.html",revision:"dbc0019eb4f6a270cabd0a693c048e1c"},{url:"en/projects/SKIP-Docs/index.html",revision:"a99c88ede6b28cc0876f52d5f5c337e9"},{url:"en/projects/SKIP-Docs/xiaomi.html",revision:"02c3a1bf6d0037cd29f0a24d69bce491"},{url:"en/projects/TinyCRUD-Docs/contribution-guide.html",revision:"9eff60fe3aaf460faba7638075e79809"},{url:"en/projects/TinyCRUD-Docs/create-request.html",revision:"092dab2acb19591a203123524aefc774"},{url:"en/projects/TinyCRUD-Docs/index.html",revision:"4602e3f59f2891772209a7cc4bc330c9"},{url:"en/projects/TinyCRUD-Docs/start-using.html",revision:"f2316adbdeddaeaad271139ee5eb36fa"},{url:"index.html",revision:"7e77d5260a1aaeddb10656becc03c0ba"},{url:"js/snowfall.js",revision:"38b325d2035c5c08d4a30e85f052aabf"},{url:"knowledge/apply、call、bind.html",revision:"82408241395f432fb19fb2a90bf63a45"},{url:"knowledge/arguments对象.html",revision:"fa70c5850e9a82abd91aeca10b2db72d"},{url:"knowledge/GET和POST.html",revision:"f06374da30d16b75cc5f5d144a4d4db2"},{url:"knowledge/HTTP和HTTPS.html",revision:"92c39a9e7069a5b98bdd3b957c3a3532"},{url:"knowledge/index.html",revision:"026b17712705177f5fa3ef772b810ebc"},{url:"knowledge/JS数字精度丢失问题.html",revision:"25cbaa79938ecf04c816a9dabf7753ab"},{url:"knowledge/px、em、rem、vh、vw.html",revision:"1dd4b17fbd772774091a2adcc69859c7"},{url:"knowledge/state和props.html",revision:"bd400ee916eebfe65bae806005f89979"},{url:"knowledge/this对象.html",revision:"843a3fc354e2bb31cd5295e7750d0044"},{url:"knowledge/typeof和instanceof.html",revision:"e7b3d412e0198aba32cc918a6ad2c574"},{url:"knowledge/var、let、const.html",revision:"32fa206f47bdab2223f71c7ed2f4f39c"},{url:"knowledge/什么是JavaScript.html",revision:"e47d6af3a4c96bafe1e5a50faa9337fb"},{url:"knowledge/作用域.html",revision:"1037258dfda5280ff24f85038066673e"},{url:"knowledge/函数柯里化.html",revision:"fdd294b24fab7a6bf1739f2e5f741d97"},{url:"knowledge/剩余参数.html",revision:"3e689a43a08b3d8d1dfcb3375f5d0106"},{url:"knowledge/和___.html",revision:"09116cb21cd82b05af1f2eb53cf3c536"},{url:"knowledge/哈希路由和History路由.html",revision:"459d0469381eb21f5a9bee7c5d02a1f4"},{url:"knowledge/深拷贝和浅拷贝.html",revision:"ce6ed8d532fa798fee9cd03d07675a1d"},{url:"knowledge/箭头函数.html",revision:"59a50bcbeb794fc2a291612e1332dc46"},{url:"knowledge/闭包.html",revision:"894942fb5f4dc009929a0d7f2d186419"},{url:"logo.png",revision:"f81da7604b82061a22f70a1692c6620e"},{url:"projects/index.html",revision:"b3537e99ce269b6888125bb59f9641be"},{url:"projects/SKIP-Docs/contribute.html",revision:"662768b369aed97b7090fd1fc56e2769"},{url:"projects/SKIP-Docs/how-to-use.html",revision:"ba4db791cf5e126c97ac17a9031657cb"},{url:"projects/SKIP-Docs/index.html",revision:"e24a5d6a36ee88a30f3951f81fc3f59d"},{url:"projects/SKIP-Docs/xiaomi.html",revision:"b40cb410da5389340f0ffe2e73ee45b3"},{url:"projects/TinyCRUD-Docs/contribution-guide.html",revision:"104adfaaa60e8c5c3c21a330153f287f"},{url:"projects/TinyCRUD-Docs/create-request.html",revision:"e6eda6459ac18b95dbd5da05eaba4534"},{url:"projects/TinyCRUD-Docs/index.html",revision:"8ff51114f02c0bd72c250f2104ca7464"},{url:"projects/TinyCRUD-Docs/start-using.html",revision:"b813091114f3b55ad856f01314c445b3"},{url:"reading/2022/index.html",revision:"956652f8b201b7da657bb5bcec59f2cb"},{url:"reading/2022/人性的弱点.html",revision:"988c69f39aa6fb9eefc6ea2f165fe878"},{url:"reading/2022/非暴力沟通.html",revision:"98800784893fb7ee691c30737e5ca3b8"},{url:"reading/2023/001-自控力.html",revision:"8189540e5627b8e7870249bee955b0fc"},{url:"reading/2023/002-了不起的盖茨比.html",revision:"c10aba22bfa0cfc9dd25c54574cf21f1"},{url:"reading/2023/003-亲密关系.html",revision:"3b1b38e88e80580ea612d8941bb7383c"},{url:"reading/2023/004-被讨厌的勇气.html",revision:"940914a222f6008991c4b05b3b222acd"},{url:"reading/2023/005-魔鬼聊天术.html",revision:"f78de205d899637310ee7ba673cc245e"},{url:"reading/2023/006-精益创业实战.html",revision:"92b8848e703c66a5642e6179b44247b5"},{url:"reading/2023/007-小岛经济学.html",revision:"53c9cebde91c0e1b54ede3a7ac6b6633"},{url:"reading/2023/008-微习惯瘦身篇.html",revision:"a48684b2c32cbdcb369f1bc60e06bcea"},{url:"reading/2023/009-内向者沟通圣经.html",revision:"60129c3c0b2109b870cb39da9efff0cd"},{url:"reading/2023/010-小王子.html",revision:"fdbf7f90178d6d270b83e1abeb924a1a"},{url:"reading/2023/011-洛克菲勒家书.html",revision:"6b0fcf94cfb8b542db281b211f8e356f"},{url:"reading/2023/012-富兰克林自传.html",revision:"c8518c236c35966143737cbd7f41e816"},{url:"reading/2023/013-秘密.html",revision:"81fefe56961a8f7e365312269309aff3"},{url:"reading/2023/014-稻盛和夫语录100条.html",revision:"6dd6207bb29a124b6c0605f4f6990c74"},{url:"reading/2023/015-娱乐至死.html",revision:"8e5b08187dbe50f95affc2f710ca7f8f"},{url:"reading/2023/016-我在100天内自学英语翻转人生.html",revision:"23fe8791fbb2ca325b6bfbb20b410053"},{url:"reading/2023/017-圣经的智慧.html",revision:"fc0eb21b992c2257f212618a06db6ead"},{url:"reading/2023/018-欲望与尊严.html",revision:"0bddb4f6ae70f00355a52a35091d64fa"},{url:"reading/2023/019-乡土中国.html",revision:"64d8cd774cbcc7e8e7c117157fcb9a81"},{url:"reading/2023/021-上瘾.html",revision:"352d234b4576f0299aa81fd78dc267a6"},{url:"reading/2023/022-优秀的绵羊.html",revision:"91c81363041f0038bf96ce1094cbc408"},{url:"reading/2023/index.html",revision:"4d579006077e1d1ad74db1406f82a33e"},{url:"reading/index.html",revision:"d45221e7430cae871741e5a2ffddfab8"}],{})}));
