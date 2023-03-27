const url = 'http://localhost:8080'
$(function(){
  window.addEventListener('beforeunload',function(e) {
    if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
      // 移动端
      if(/PC/i.test(window.location.href)) {
        sessionStorage.setItem('temp', window.location.href.replace('PC','PE'))
      }
    }else{
      // PC端
      if(/PE/i.test(window.location.href)) {
        sessionStorage.setItem('temp', window.location.href.replace('PE','PC'))
      }
    }
  })

  let temp = sessionStorage.getItem('temp')
  if (temp) {
    window.location.replace(temp)
    temp = null
    sessionStorage.removeItem('temp')
  }

  $('#navbar').children('div').click(function(data){
    if(data.target.innerText === '小说') {
      $(window).attr('location',url + '/public/Webpage/PCAggregateFiction/index.html');
    }
    if(data.target.innerText === '漫画') {
      $(window).attr('location',url + '/public/Webpage/PCAggregateComics/index.html')
    }
    if(data.target.innerText === '动漫') {
      $(window).attr('location',url + '/public/Webpage/PCAggregateAnime/index.html')
    }
    if(data.target.innerText === '音乐') {
      $(window).attr('location',url + '/public/Webpage/PCAggregateMusic/index.html')
    }
  })
})