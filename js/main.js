// console.log('init')
// $('document').ready(function () {
//   console.log('ready')
// })

// let isFade = true
// $('#btn1').click(() => {
//   // location.href = "https://vuetifyjs.com/en"
//   isFade = !isFade
//   isFade ? $('#list1').fadeIn() : $('#list1').fadeOut()
// })


// $('#btn1').click(() => {
// $('#list1').fadeToggle(5000,() => {
//   console.log('toggle end!')
// })
// })
// 상단의 isFade문과 동일반응(축약본)


// 버튼 클릭해야 슬라이드 토글 효과 실행됨
// $('#btn1').click(() => {
//   $('#list1').slideToggle()
// })


// $('#btn1').mouseover(() => {
//   $('#btn1').css('background-color', 'gray')
//   $('#btn1').css('color', '#fff')
// })
// $('#btn1').mouseleave(() => {
//   $('#btn1').css('background-color', 'transparent')
//   $('#btn1').css('color', 'gray')
// })

// // 키보드 tab키로 이동시, 바로 버튼으로 이동 후 아웃됨
// $('#btn1').bind('mouseover focus', () => {
//   $('#btn1').css('background-color', 'gray')
// })

// $('#btn1').bind('mouseleave blur', () => {
//   $('#btn1').css('background-color', 'transparent')
// })


// 옆으로 사라지는 애니메이션
// $('#list1 > li').on('click',function(){
//   $(this).animate({
//     opacity:0.0,
//     paddingLeft:'+=80'
//   }, 500, function() {
//     $(this).remove();
//   })
//   })


// 리스트 글자들이 작아지면서 사라지는 애니메이션
  // $('#list1 > li').on('click',function(){
  //   $(this).animate({
  //     width:'0',
  //     height:'0',
  //     paddingLeft:'+=80'
  //   }, 500, function() {
  //     $(this).remove();
  //   })
  //   })


  //   $('#list1 > li').on('click',function(){
  //     $(this).animate({
  //       fontSize:'0px',
  //       paddingLeft:'+=80'
  //       // += 안해도 적용됨
  //     }, 500, function() {
  //       $(this).remove();
  //     })
  //     })

      // $(window).scroll(() => {
      //   console.log($(window).scrollTop())
      // })

      
      // about-me부분이 스크롤을 내리면 없는상태에서 나타나는 애니메이션
      $(window).scroll(() => {
        console.log($(window).scrollTop())
        let currentTop = $(window).scrollTop()
        if(currentTop >= 551 ) {
          console.log('opactity is 1')
        $('body > div.about-me > div').animate({
          opacity:1
        },
        500)
      }
    })

    let features = [
      {icon: 'fa-air-freshener', title:'VIBRANT COMMUNITY', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'},
      {icon: 'fas fa-history', title:'FREQUENT UPDATES', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'},
      {icon: 'fas fa-shield-alt', title:'LONG-TERM SUPPORT', text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto cupiditate sint possimus quidem atque harum excepturi nemo velit tempora! Enim inventore fuga, qui ipsum eveniet facilis obcaecati corrupti asperiores nam'},
    ]
    features.forEach((feature) => {
        $('#feature-wrapper').append(`<div class="feature-item">
        <div class="feature-avatar">
          <i class="fas ${feature.icon} feature-icon"></i></div>
        <h2>${feature.title}</h2>
        <p>${feature.text}</p>
      </div>`)
    })


    let parallaxs = [
      {title:'24k', text:'GITHUB STARS'},
      {title:'330+', text:'RELEASES'},
      {title:'1m', text:'DOWNLOADS/MO'},
      {title:'5m', text:'TOTAL DOWNLOADS'},
    ]
    parallaxs.forEach((parallax) => {
      $('.parallax-window').append(`<div class="parallax-wrapper">
      <h2>${parallax.title}</h2>
      <p>${parallax.text}</p>
      </div>`)
    })
    $('.parallax-window').parallax({imageSrc: '../img/parallax.jpg'});
