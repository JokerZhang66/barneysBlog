/* 轮播背景图片 */
/*$(function () {
	$.backstretch([
		"https://cdn.jsdelivr.net/gh/CorPython/images@master//img/demo2.jpg",
		"https://gitee.com/Barneys/myfiles/raw/master/img/wallhaven-g7xpwd.jpg",
	], { duration: 10000, fade: 1500 });
});*/

/* 点击回到顶部 */
$('#back-to-top').click(function () {
	$('html,body').animate({
		scrollTop: '0px'
	}, 500);
		return false;
	});
/*  点击滚动到底部 */
$('#back-to-bottom').click(function () {
	$('html,body').animate({
		scrollTop: document.getElementsByTagName('BODY')[0].scrollHeight
	}, 500);
	return false;
});

function getCurrentDateString() {
	var now = new Date();
	var month = now.getMonth() + 1;
	var day = now.getDate();
	var hour = now.getHours();
	return "" + now.getFullYear() + (month < 10 ? "0" + month : month) + (day < 10 ? "0" + day : day) + (hour < 10 ? "0" + hour : hour);
}


/* 站点运行时间 */
function runtime() {
	window.setTimeout("runtime()", 1000);
	/* 请修改这里的起始时间 */
    let startTime = new Date('06/29/2021 00:00:00');
    let endTime = new Date();
    let usedTime = endTime - startTime;
    let days = Math.floor(usedTime / (24 * 3600 * 1000));
    let leavel = usedTime % (24 * 3600 * 1000);
    let hours = Math.floor(leavel / (3600 * 1000));
    let leavel2 = leavel % (3600 * 1000);
    let minutes = Math.floor(leavel2 / (60 * 1000));
    let leavel3 = leavel2 % (60 * 1000);
    let seconds = Math.floor(leavel3 / (1000));
    let runbox = document.getElementById('run-time');
    runbox.innerHTML = '本站已运行<i class="far fa-clock fa-fw"></i> '
        + ((days < 10) ? '0' : '') + days + ' 天 '
        + ((hours < 10) ? '0' : '') + hours + ' 时 '
        + ((minutes < 10) ? '0' : '') + minutes + ' 分 '
        + ((seconds < 10) ? '0' : '') + seconds + ' 秒 ';
}
runtime();

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
	var OriginTitile = document.title;
	var titleTime;
	document.addEventListener('visibilitychange', function() {
	  if(document.hidden) {
		$('[rel="icon"]').attr('href', "https://gitee.com/Barneys/myfiles/raw/master/img/favicon-32x32.png");
		$('[rel="shortcut icon"]').attr('href', "https://gitee.com/Barneys/myfiles/raw/master/img/favicon-32x32.png");
		document.title = '你快回来！- barney的博客';
		clearTimeout(titleTime);
	  } else {
		$('[rel="icon"]').attr('href', "https://gitee.com/Barneys/myfiles/raw/master/img/favicon-32x32.png");
		$('[rel="shortcut icon"]').attr('href', "https://gitee.com/Barneys/myfiles/raw/master/img/favicon-32x32.png");
		document.title = '欢迎回来！- barney的博客';
		titleTime = setTimeout(function() {
		  document.title = OriginTitile;
		}, 2000);
	  }
	});
  }
