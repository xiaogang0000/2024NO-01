let url = 'http://www.xiaognag.cn/index.html?1x=1&name=xiaogang#box' ;
// 1.获取问号后面的值
let askIndex = url.indexOf('?');
let wellIndex = url.indexOf('#')
let asktext = url.substring(askIndex + 1, wellIndex);
let welltext = url.substring(wellIndex + 1);
console.log(asktext,wellIndex);
// 问号后面值得详细处理
let askAAry = askText.splict('&');
console.log(askAAry);
