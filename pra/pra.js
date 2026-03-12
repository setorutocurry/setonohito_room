document.querySelector('.hamburger').addEventListener('click', function(){/*ハンバーガーをクリックしたら実行*/ 
    this.classList.toggle('active');
    document.querySelector('.slide-menu').classList.toggle('active');
  })