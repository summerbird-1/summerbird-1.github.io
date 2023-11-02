/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/10/30/hello-world/index.html","c96d47de1ebd037f0d47fdcb1f482d8b"],["/2023/10/30/test/index.html","f8accc0791606d80532439f2cbded977"],["/2023/10/30/test2/index.html","15ed4388a81404cda9c9da14fbec055c"],["/2023/10/30/test3/index.html","f08c036bfc0dafda36034a663955d8eb"],["/2023/10/30/在看什么/index.html","2e557cdf26f6db944ac2434793590bd3"],["/2023/10/30/在看什么/p2544326508.jpg","fb2db2625760eba1fd5e4ba4e3f2b8fc"],["/2023/10/30/用bat批处理文件便捷创建笔记/index.html","ceff1bb1f199d70f1c64be40de77b974"],["/2023/10/31/LeetCode42/index.html","2de865e5a92172a8217fae9f8446249e"],["/2023/10/31/自然辩证法笔记/1.png","cbca0d2c284ef20ff1b194b335df08da"],["/2023/10/31/自然辩证法笔记/2.png","e87558d09b8d126a87d66dff19f8b5eb"],["/2023/10/31/自然辩证法笔记/3.png","f14d14f3692902cb0dde57c8a2b63b51"],["/2023/10/31/自然辩证法笔记/4.png","042ec83c39f3f8f7a722d414dab43ab9"],["/2023/10/31/自然辩证法笔记/index.html","a58ddb355b041ebfd8f9d6ac601fbd47"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101170127709.png","7449fdc42f8040c8f8b852d545477053"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101170501868.png","d3c1e173f8ffdddd8f731cbdd381769d"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101170827207.png","db7802b7572e0708266924a491a0bd8f"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171230255.png","1e28623dfabe8a2ceff1f880092baa8f"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171325433.png","d32f7cb0f60f0c2aec6a2b61094bc66b"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171417946.png","b71e4a951fcf2e9970c58a6e4e67aead"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171623990.png","028c8b0d02cc04b0288bea8f8277257e"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171733712.png","9d8f2fa6bb5cbe2ffb6b949b01311256"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101171758480.png","abbf90b7eb1378632bbffcf65df80b48"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101215723892.png","2bbd65a1b9a81aeb2842c6be0d6de241"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101221144374.png","dd349f15a961b74ad8c456bde5e1e6ea"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101221212231.png","49c17446128f901986e9547e57081b3c"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101221729398.png","acb181189f2da268e0e223a7a8349608"],["/2023/11/01/心动-搭建无限量免费图床/image-20231101224120509.png","d7a140863b53d42a7c1437788922fd6c"],["/2023/11/01/心动-搭建无限量免费图床/index.html","8abe9541abb40b5538e0f1b62175dc49"],["/2023/11/02/Hexo博客加速/index.html","cfc251a07cbeed2e7ef9827b93f70860"],["/2023/11/02/Hexo博客添加评论模块/202303111940318.png","9060deff2bc99b45b8fb7efddfd2914d"],["/2023/11/02/Hexo博客添加评论模块/202303111940868.png","10ffa2f590d574e0701a822dcef60590"],["/2023/11/02/Hexo博客添加评论模块/image-20231102141117387.png","c23445807fecccdb5eed495abf3f7c83"],["/2023/11/02/Hexo博客添加评论模块/image-20231102141200666.png","c23445807fecccdb5eed495abf3f7c83"],["/2023/11/02/Hexo博客添加评论模块/image-20231102141231593.png","783fcffe178d91daf10cb2bcaac21eef"],["/2023/11/02/Hexo博客添加评论模块/image-20231102141449835.png","beba4b3a4c78ff42804e50f0600c6614"],["/2023/11/02/Hexo博客添加评论模块/index.html","292a955639cf4a390f9ab915171aaa21"],["/2023/11/02/LeetCode3/index.html","63a6886d216ea75dd225dde30651af01"],["/2023/11/02/test333/index.html","1e81017e43c6d8af4e5831eafcaa690d"],["/404.html","c98c1f159d8d78cccc8d806ba94c1636"],["/about/index.html","adc417da876dbef459229a0f7827071c"],["/archives/2023/10/index.html","f0f53205b5cde8a62cfddb48a498d834"],["/archives/2023/11/index.html","9c02b4c0726af1a76559c47cbae38852"],["/archives/2023/index.html","7d25922d0ba2cce729ed46a000099b4d"],["/archives/2023/page/2/index.html","2fd2a834b7a233f5f3b28dd587ef984f"],["/archives/index.html","cbd904be11a9ae085c54e3b90ff89c69"],["/archives/page/2/index.html","5b4c7263a807990ce67e33d815efc7ce"],["/artitalk/index.html","f11729642310267141ba6d00491bce03"],["/categories/Basic/index.html","34a84fff659a364a67a5e88dd91856af"],["/categories/CStechnology/index.html","2561e8050f77050f2a2e4126d8cfbae3"],["/categories/Hexo/index.html","3681d159c048d7d7335dc70ec09d8f7b"],["/categories/index.html","405a1f386dd0c327e9be17f78dfcf78f"],["/categories/note/index.html","017297bc8191ab8c898b47bbce2ba8a7"],["/categories/test/index.html","36f9388317ca76ee88c45717e57a2acc"],["/categories/娱乐/index.html","109ede4c875624bde69f6364d7f1e108"],["/contact/index.html","d240e6a1b914b5499854b54d29be624f"],["/css/bb.css","a13497fcf67377687248cad43633417c"],["/css/gitment.css","dcd15488193705c273213e72e5ebb7ce"],["/css/matery.css","fdd7bfd03c63313ac1d11d946276623e"],["/css/my-gitalk.css","3de42b649a2216cc9bbee350cde6a7e0"],["/css/my.css","c4ad2103f0a537e360bd16650e547b22"],["/favicon.png","bb44feefd80d6541316f0a21cb5cb824"],["/friends/index.html","3c1a1ec71a54c688c8081e5e7f270dd6"],["/index.html","4925a3b83c142041969dbea1cedc6de9"],["/js/matery.js","2cf7b5aedce87e52b5fd9e77b1e0ad27"],["/js/sakura.js","820180028794bdb467db10652ededcb2"],["/js/search.js","23158886da44ec57f9d355b68ff1bac2"],["/libs/animate/animate.min.css","178b651958ceff556cbc5f355e08bbf1"],["/libs/aos/aos.css","04140612fb8b418cda27dee6ecf61042"],["/libs/aos/aos.js","9cc58a148779953a5ebe9360d6cf978c"],["/libs/aplayer/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["/libs/aplayer/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["/libs/artitalk/artitalk.min.css","56e413f5dc1a3ec10448a30f431858db"],["/libs/artitalk/artitalk.min.js","b409488b1aa8045cfb10208c7c5fd127"],["/libs/awesome/css/all.css","0e6a8d020eceb660ebe98adad8639825"],["/libs/awesome/webfonts/fa-brands-400.eot","451b51d8700fb035bcaaa9e8710b384a"],["/libs/awesome/webfonts/fa-brands-400.svg","8528edfd60e8bc4274c0eadf6b121a3c"],["/libs/awesome/webfonts/fa-brands-400.ttf","189c0326f75931886d5b60cde8b5628f"],["/libs/awesome/webfonts/fa-brands-400.woff","85b063debeb5d5f079776ac1a9c924cb"],["/libs/awesome/webfonts/fa-brands-400.woff2","0425d661f34ffa46604c9dfa344c03bb"],["/libs/awesome/webfonts/fa-regular-400.eot","b6579220162705be426ad4db0dc43f6b"],["/libs/awesome/webfonts/fa-regular-400.svg","ec9318dc8ba3ec3cbb379f2d40f300cb"],["/libs/awesome/webfonts/fa-regular-400.ttf","9230982faf6ed4d1dab07babfb813777"],["/libs/awesome/webfonts/fa-regular-400.woff","14f22fbed8146dbf3b497bb32d8491b0"],["/libs/awesome/webfonts/fa-regular-400.woff2","772a0f14c850c8b0dfe283a95857583e"],["/libs/awesome/webfonts/fa-solid-900.eot","1898ebd2e3162e7ca8627073d865b893"],["/libs/awesome/webfonts/fa-solid-900.svg","f331e75b803f42d96aaba8540f29d3b3"],["/libs/awesome/webfonts/fa-solid-900.ttf","b1161bce5381a5fa7aacc073e1a01dd3"],["/libs/awesome/webfonts/fa-solid-900.woff","db525089f5101b59a66184d109e6f917"],["/libs/awesome/webfonts/fa-solid-900.woff2","4cc04a31c42f2f9d951547bbce75960b"],["/libs/background/canvas-nest.js","a62fd97db8d4bce3a5e30406831e398d"],["/libs/background/ribbon-dynamic.js","eb6e9d5f62d717fa62445227883dc7b7"],["/libs/background/ribbon-refresh.min.js","6692e63df52b5230e673fc0a3aea5534"],["/libs/background/ribbon.min.js","52d83827dd2784a3d41b65694a6534e5"],["/libs/codeBlock/codeBlockFuction.js","1f379c32001349805cb987371cfccd1a"],["/libs/codeBlock/codeCopy.js","efa20c294ac279ca9c5a55e4299b80be"],["/libs/codeBlock/codeLang.js","dc4533be151964237f2a0006db27e5fa"],["/libs/codeBlock/codeShrink.js","ae277c5d8f8336fce64f89203b926d19"],["/libs/cryptojs/crypto-js.min.js","a39fc84fa7659e1d898bbcddf20aa989"],["/libs/dplayer/DPlayer.min.css","31ac9b1a5a7f018dcc9a0e0f66261c08"],["/libs/dplayer/DPlayer.min.js","4097986cff510567068128f4b18004a6"],["/libs/echarts/echarts.min.js","b4af19a834bf7cd6435dd8e1ad24cc90"],["/libs/gitalk/gitalk.css","e4369194a22c7aaf65af93b2a04edb94"],["/libs/gitalk/gitalk.min.js","7526181d13660d1e4a2bbb3795d73120"],["/libs/gitment/gitment-default.css","46f304e637384c546f25b5ad90f0fe5a"],["/libs/gitment/gitment.js","2d64177544df22f08ccc1c86fc181e0e"],["/libs/instantpage/instantpage.js","47fcedd7bba8eb1ad3b035c8727f06b5"],["/libs/jqcloud/jqcloud-1.0.4.min.js","b5b4d1002ff256e9bed2b339f572dedc"],["/libs/jqcloud/jqcloud.css","978ed746c5673321fba8401ed6a536ac"],["/libs/jquery/jquery.min.js","f832e36068ab203a3f89b1795480d0d7"],["/libs/lightGallery/css/lightgallery.min.css","a94c4de3d8028fc56b148e8f66524e59"],["/libs/lightGallery/fonts/lg.eot","ecff11700aad0000cf3503f537d1df17"],["/libs/lightGallery/fonts/lg.svg","4cf7d0890238750cf9fd18878fea096f"],["/libs/lightGallery/fonts/lg.ttf","4fe6f9caff8b287170d51d3d71d5e5c6"],["/libs/lightGallery/fonts/lg.woff","5fd4c338c1a1b1eeeb2c7b0a0967773d"],["/libs/lightGallery/img/loading.gif","bbdac9cda255c54bfd809110aff87898"],["/libs/lightGallery/img/video-play.png","d672259b56b5dd1abdff3a98d87864e8"],["/libs/lightGallery/img/vimeo-play.png","a951123e4f7cb5d037a6a872f001a8af"],["/libs/lightGallery/img/youtube-play.png","6267452d4f9c32c7550cec6587f985d3"],["/libs/lightGallery/js/lightgallery-all.min.js","d7491b79ebda3ba2356e81aac93e62ea"],["/libs/masonry/masonry.pkgd.min.js","d5761132889fee4a606e54d26675d2ea"],["/libs/materialize/materialize.min.css","3a5681d6939e48ba5038fbf8f9f244a2"],["/libs/materialize/materialize.min.js","87d84bf8b4cc051c16092d27b1a7d9b3"],["/libs/minivaline/MiniValine.js","e5daebb3b28977819ad51a62d38a52b9"],["/libs/others/busuanzi.pure.mini.js","4c9a89414b97bb2053ccc7cb83c83b6e"],["/libs/others/clicklove.js","6a3861c11c04010dd4de27c162cb8a83"],["/libs/prism/prism.css","9de440b6e18b43a39139958655391e18"],["/libs/scrollprogress/scrollProgress.min.js","63212ebfb10736224d44bcda8a155278"],["/libs/share/css/share.min.css","a5d28161d70468ec2378da676284a34f"],["/libs/share/fonts/iconfont.eot","e83ffaa95463f987abe5db5bbbe303cc"],["/libs/share/fonts/iconfont.svg","6b3cbfae255ab1f2c1e8e8bfc80754d4"],["/libs/share/fonts/iconfont.ttf","9ac2cc5ae8616eb50c033525dc14a5eb"],["/libs/share/fonts/iconfont.woff","bf0fc2ec6e2a614635e0ab6e81d059ef"],["/libs/share/js/jquery.share.min.js","044c903516dd20036471d65d5269821c"],["/libs/share/js/social-share.min.js","7d8197222dcdbe0e7e645a605bf76851"],["/libs/tocbot/tocbot.css","a260895566c6a9f968a9101d5510f7d6"],["/libs/tocbot/tocbot.min.js","6046c9a66555218b41b6219737579a89"],["/libs/valine/Valine.min.js","0d50e464e6836dee588df7f21634d961"],["/libs/valine/av-min.js","df7538b359e7a7e904c430e8385b44da"],["/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["/medias/avatar.jpg","76074f6343e430e629e496278d579427"],["/medias/banner/0.jpg","ba09f999720b23fea9c98636cb733363"],["/medias/banner/1.jpg","d56aa37b179aca101aa95bfcee1f0ba7"],["/medias/banner/3.jpg","58d3ee03ad095bf7ce43b3db350b79af"],["/medias/banner/4.jpg","ec588e4cabb69dc07e4fa0d5ca01c30a"],["/medias/banner/5.png","d2a1a3fdf6c14b8c590fca4340d6d44d"],["/medias/banner/6.png","bf6e7867fe5d27027d02ff822cba2944"],["/medias/comment_bg.png","04208f25e34b8f29f072efbb2e212c86"],["/medias/contact.png","05f80f75317895d4d6a5c0b39c18236e"],["/medias/cover.jpg","1253d8cf7abf8e92af47bda2bf61bd84"],["/medias/featureimages/0.jpg","040b790020cc846381524fb37a6f0d70"],["/medias/featureimages/1.jpg","23ae35efbf90516624e80e547be2f00c"],["/medias/featureimages/10.jpg","ce724bae32a08c49aad52125c9fad65b"],["/medias/featureimages/11.jpg","1a0a66681bcb68ad687140e30ffec74d"],["/medias/featureimages/12.jpg","c665578e6f5ebdafdea8da4871b2afa3"],["/medias/featureimages/13.jpg","3f7eaacfc7440dbdd88dc067f68ce17c"],["/medias/featureimages/14.jpg","76b2fa44d4a43154aedb7a9069d3b332"],["/medias/featureimages/15.jpg","b4171dd736cf8202a20d8ae5266a3e11"],["/medias/featureimages/16.jpg","f26c58ea258634b20d8fe8986e9fb1bd"],["/medias/featureimages/17.jpg","42d65a284bac0882bbc39ac7e64e2fd9"],["/medias/featureimages/2.jpg","e237ddfe8b1b94c700229424c4cb1820"],["/medias/featureimages/20.jpg","bb9ff10719f2f38f633dca02b36a1785"],["/medias/featureimages/22.png","29fe9302fd3698101fa312858cdda4f4"],["/medias/featureimages/23.png","d2a1a3fdf6c14b8c590fca4340d6d44d"],["/medias/featureimages/3.jpg","54c9d512dd9c3b9b19646774fe1af4b7"],["/medias/featureimages/4.jpg","97dce4a9b9c1ba591c7e95db13b72ddf"],["/medias/featureimages/5.jpg","1961e0bf25b519a67553737d49109008"],["/medias/featureimages/6.jpg","31835d4019b584ed7d77f8d46d7fa0fd"],["/medias/featureimages/7.jpg","4ac80b8e758c56c971842bc3d5b49634"],["/medias/featureimages/8.jpg","5652f3ea89eb4232c3df8dc48d9fbe6a"],["/medias/featureimages/9.jpg","df53c47f61f5d94ebcc36b558b9cea51"],["/medias/icp.png","60aa047315ba11596d9f954900c86fdb"],["/medias/logo.png","6fd306e0fb239e42ec8f82793e6ae6ee"],["/medias/reward/alipay.jpg","32d02295f454a1350ca5974b23415d43"],["/medias/reward/wechatpay.jpg","df8d493959d57fd61578c3450697202a"],["/page/2/index.html","3e65b369b3b3c4b0ca5cd0e71a3c344c"],["/sw-register.js","e13e7d4cd6758935eebac7b944e9ef56"],["/tags/LeetCode/index.html","3409cb9e91f7aecf1f76fcca6e2f4839"],["/tags/bat/index.html","31755fa866c3531040fbde116c5e53f3"],["/tags/index.html","8d52a3e60b4fe1395e500f8cbf0b86a5"],["/tags/movies/index.html","a13bef339193a3ccfc538a0a166ea39d"],["/tags/utterances/index.html","d22884dbf030da0a8873b10808df1b16"],["/tags/博客/index.html","b77cc1a06c64d0ee802083a9a1940e42"],["/tags/图床/index.html","e30b3e867f67b46c29dce4f43c0065cb"],["/tags/测试/index.html","3957701f1131d207d479ba6f5747c2d7"],["/tags/自然辩证法/index.html","57f90daecf9d9e02139fed9e0217897b"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
