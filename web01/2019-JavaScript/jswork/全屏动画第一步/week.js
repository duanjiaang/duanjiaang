console.log('进入h0001.js====>');
/*
 *  点击导航移动下方滑块
 */
// 获取相关的元素
var bar = document.getElementById('bar'); //导航下方的滑块
var nav01 = document.getElementById('nav01'); //第一个导航按钮
var nav02 = document.getElementById('nav02'); //第二个导航按钮
var nav03 = document.getElementById('nav03'); //第三个导航按钮
var nav04 = document.getElementById('nav04'); //第四个导航按钮
var nav05 = document.getElementById('nav05'); //第五个导航按钮
var page01 = document.getElementById('page01'); //页面一
var page02 = document.getElementById('page02'); //页面二
var page03 = document.getElementById('page03'); //页面三
var page04 = document.getElementById('page04'); //页面四
var page05 = document.getElementById('page05'); //页面五
// 显示元素是不是正确
console.log(
  nav01,
  nav02,
  nav03,
  nav04,
  nav05,
  bar,
  page01,
  page02,
  page03,
  page04,
  page05
);

// 记住当前显示的是哪一个页面
var nowpage = page01; //页面开始的时候是页面一
// 导航的事件处理
nav01.addEventListener('click', function() {
  // 第一个就是把滑块移动到0%
  // 元素style可以修改任意样式，把left修改到0%
  bar.style.left = '0%';
  // 通过元素的id的值来判定方向，如果当前的id比要切换的大就是反方向切换动画
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page01';
  console.log(nowpageid, 'page01', dir);
  //动画的效果（移动方向）通过id的大小决定
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right'); //当前页出去
    page01.setAttribute('class', 'move-in-right'); //页面一进来
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page01.setAttribute('class', 'move-in'); //页面一进来
  }
  nowpage = page01; //当前页变成第一页
});

nav02.addEventListener('click', function() {
  // 第二个就是把滑块移动到20%
  bar.style.left = '20%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page02';
  console.log(nowpageid, 'page02', dir);
  // 切换页面动画 *当前的页面*套用出去的动画，页面二套用进来的动画
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right'); //当前页出去
    page02.setAttribute('class', 'move-in-right'); //页面二进来
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page02.setAttribute('class', 'move-in'); //页面二进来
  }
  // 页面二成为当前页
  nowpage = page02;
});

nav03.addEventListener('click', function() {
  // 第二个就是把滑块移动到40%
  bar.style.left = '40%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page03';
  console.log(nowpageid, 'page03', dir);
  // 切换页面动画 *当前的页面*套用出去的动画，页面三套用进来的动画
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right'); //当前页出去
    page03.setAttribute('class', 'move-in-right'); //页面三进来
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page03.setAttribute('class', 'move-in'); //页面三进来
  }
  // 页面二成为当前页
  nowpage = page03;
});

nav04.addEventListener('click', function() {
  // 第四个就是把滑块移动到60%
  bar.style.left = '60%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page04';
  console.log(nowpageid, 'page04', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right'); //当前页出去
    page04.setAttribute('class', 'move-in-right'); //页面四进来
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page04.setAttribute('class', 'move-in'); //页面四进来
  }
  nowpage = page04;
});

nav05.addEventListener('click', function() {
  // 第五个就是把滑块移动到80%
  bar.style.left = '80%';
  var nowpageid = nowpage.getAttribute('id');
  var dir = nowpageid > 'page05';
  console.log(nowpageid, 'page05', dir);
  if (dir) {
    nowpage.setAttribute('class', 'move-out-right'); //当前页出去
    page05.setAttribute('class', 'move-in-right'); //页面五进来
  } else {
    nowpage.setAttribute('class', 'move-out'); //当前页出去
    page05.setAttribute('class', 'move-in'); //页面五进来
  }
  nowpage = page05;
});
