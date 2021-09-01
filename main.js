
function mousemove(event){
    const x = event.pageX / window.innerWidth; 
    const y = event.pageY / window.innerHeight; 
    console.log(x);
    console.log(y);
    /*document.querySelector('.mouse_parallax_bg').css(
        'transform',
        'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)'
    );*/
    var mouse_parallax_bg = document.querySelector('.mouse_parallax_bg');
    mouse_parallax_bg.style.transform = 'translate(-' + x * 30 + 'px, -' + y * 30 + 'px)';
    var mouse_parallax_content = document.querySelector('.mouse_parallax_content');
    mouse_parallax_content.style.transform = 'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)';
    /*document.querySelector('.mouse_parallax_content').css(
        'transform',
        'translate(-' + x * 60 + 'px, -' + y * 60 + 'px)'
    );*/
}


document.querySelector('.mouse-parallax').addEventListener('mousemove', mousemove);