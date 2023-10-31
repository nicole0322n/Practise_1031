// let sv = document.querySelector('#sv');
// let sr = document.querySelector('#sr');
// let tm = document.querySelector('#tm');
// let ct = document.querySelector('#ct');
// let service = document.querySelector('#service');
// let showreel = document.querySelector('#showreel');
// let team = document.querySelector('#team');
// let contact = document.querySelector('#contact');

// sv.addEventListener('click', function (event) {
//     event.preventDefault();

//     if (service) {
//         service.scrollIntoView({ behavior: "smooth" });
//     } else if (showreel) {
//         showreel.scrollIntoView({ behavior: "smooth" });
//     } else if (team) {
//         team.scrollIntoView({ behavior: "smooth" });
//     } else if (contact) {
//         contact.scrollIntoView({ behavior: "smooth" });
//     };
//     // setTimeout(function () {
//     //     scrollBy(0, -100);
//     // }, 700);
// })

// 取得螢幕滾動高度
window.addEventListener('scroll', function () {
    let scrollHeight = window.scrollY || document.documentElement.scrollTop;
    // console.log("螢幕滾動高度：" + scrollHeight + "px");
    let sv = document.querySelector('#sv');
    let sr = document.querySelector('#sr');
    let tm = document.querySelector('#tm');
    let ct = document.querySelector('#ct');

    let service = document.querySelector('#service');
    let showreel = document.querySelector('#showreel');
    let team = document.querySelector('#team');
    let contact = document.querySelector('#contact');

    let svTop = service.offsetTop;
    let svHight = service.clientHeight;
    let svButton = svTop + svHight;

    let srTop = showreel.offsetTop;
    let srHight = showreel.clientHeight;
    let srButton = srTop + srHight;

    let tmTop = team.offsetTop;
    let tmHight = team.clientHeight;
    let tmButton = tmTop + tmHight;

    let ctTop = contact.offsetTop;
    let ctHight = contact.clientHeight;
    let ctButton = ctTop + ctHight;

    if (scrollHeight > svTop - 1 && scrollHeight < svButton - 1) {
        sv.classList.add('show');
        sr.classList.remove('show');
        tm.classList.remove('show');
        ct.classList.remove('show');
    } else if (scrollHeight > srTop - 1 && scrollHeight < srButton - 1) {
        sv.classList.remove('show');
        sr.classList.add('show');
        tm.classList.remove('show');
        ct.classList.remove('show');
    } else if (scrollHeight > tmTop - 1 && scrollHeight < ctTop - 200) {
        sv.classList.remove('show');
        sr.classList.remove('show');
        tm.classList.add('show');
        ct.classList.remove('show');
    } else if (scrollHeight > ctTop - 200) {
        sv.classList.remove('show');
        sr.classList.remove('show');
        tm.classList.remove('show');
        ct.classList.add('show');
    } else {
        sv.classList.remove('show');
        sr.classList.remove('show');
        tm.classList.remove('show');
        ct.classList.remove('show');
    }
});

