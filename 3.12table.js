var tableBox = document.getElementById('tableBox');
var tableList = tableBox.getElementsByTagName('div');
var navBox = document.getElementById('navBox');
var navList = navBox.getElementsByTagName('li');
//解决办法一 ：自定义属性解决办法
// 循环三个li，给每一个li都绑定点击事件
for (var i = 0; i < navList.length; i++) {
  // navList[i]:当前循环下我们操作的li
  //在循环给每个li的索引，设置自定义属性，属性值存储的是当前li的索引
  navList[i].myIndex = i;
  navList[i].onclick = function () {
    //我想用的是索引，但是i不是
    changeTab(this.myIndex);
  }
  //其他方式
  //方法二 闭包解决方案
//   for (var i = 0; i < navList.length; i++) {
//     navList[i].onclick =(function (i) {
//         return function (){
//       changeTab(i);
//         }
//     })
// 方法三 ES6中的LET方案

}
//绑定的时候方法没有执行，点击li才执行
//1.封装函数实现选卡的切换
//创建的时候还不知道点的是谁，所以定义一个路口，执行方法的时候就把点击这一项索引传递来即可
function changeTab(clickIndex) {
  //1,先让所有的li和div没有选中的样式
  for (var i = 0; i < navList.length; i++) {
    navList[i].className = '';
    tableList[i].className = '';
  }
  //2.点击的是谁就给谁加
  navList[clickIndex].className = 'active';
  tableList[clickIndex].className = 'active';
}
