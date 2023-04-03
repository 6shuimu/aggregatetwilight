const url = 'http://localhost:8080'
let temp = null

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

  // 显示
  $('#navbar').bind('touchend',function() {
    $('#Masking').css('display','block')
    $('#enclosure').css('display','flex')
    $('#Masking').css('animation-name','temp')
    $('#enclosure').css('animation-name','tem')
  })

  // 隐藏
  $('#Masking').bind('touchend',function() {
    $('#Masking').css('animation-name','tempp')
    $('#enclosure').css('animation-name','temm')

    clearInterval(temp)
    temp = setInterval(() => {
      $('#Masking').css('display','none')
      $('#enclosure').css('display','none')
      clearInterval(temp)
      temp = null
    }, 500);
  })

  // 点击链接
  $('#enclosure').children().children().children().bind('touchend',function(e) {
    if(e.target.innerText === '小说') {
      $(window).attr('location',url + '/public/Webpage/PEAggregateFiction/index.html');
    }
    if(e.target.innerText === '漫画') {
      $(window).attr('location',url + '/public/Webpage/PEAggregateComics/index.html')
    }
    if(e.target.innerText === '动漫') {
      $(window).attr('location',url + '/public/Webpage/PEAggregateAnime/index.html')
    }
    if(e.target.innerText === '音乐') {
      $(window).attr('location',url + '/public/Webpage/PEAggregateMusic/index.html')
    }
    if(e.target.innerText === 'olmMamChatGpt') {
      $(window).attr('location',url + '/public/Webpage/PEolmMamChatGpt/index.html')
    }
  })
})