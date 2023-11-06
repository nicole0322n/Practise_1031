// header滾動效果
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

// 手機版header
const headerList = ['.mobile__hb', '#sv', '#sr', '#tm', '#ct']
const handleHeaderMobile = () => {
    const header = document.querySelector('.header')
    const spans = document.querySelectorAll(`.mobile__hb > span`)
    headerList.forEach((v) => {
        const el = document.querySelector(v);
        el.addEventListener('click', () => {
            header.classList.toggle('--open')
            // header.style.transition = all .5s;
            spans.forEach(span => span.classList.toggle('show'));
        })
    })
}

// 輪播圖
const handleSilder = () => {
    let outer = document.querySelector(".showreel__outer");
    let btnLeft = document.querySelector("#btnLeft");
    let btnRight = document.querySelector("#btnRight");
    let curIndex = 0;
    let cardCount = document.querySelectorAll(".showreel__outer > .showreel__card").length;

    btnRight.addEventListener("click", () => {
        if (curIndex > 0) {
            curIndex--;
            let newPosition = curIndex * -320;
            outer.style.transform = `translateX(${newPosition}px)`;
            btnLeft.disabled = false;
        }

        if (curIndex === 0) {
            btnRight.disabled = true;
        }
    })

    btnLeft.addEventListener("click", () => {
        if (curIndex < cardCount - 1) {
            curIndex++; //1
            let newPosition = curIndex * -320;
            outer.style.transform = `translateX(${newPosition}px)`;
            btnRight.disabled = false;
        }

        if (curIndex === cardCount - 3) {
            btnLeft.disabled = true;
        }
    })
}

// 填寫資料 label 底線變色
const handleLabel = () => {
    const labels = document.querySelectorAll('.contact__information > label');
    const inputs = document.querySelectorAll('.contact__information > label > input');

    inputs.forEach((input, index) => {

        input.addEventListener('focus', () => {
            labels[index].classList.add('--active');
        });

        input.addEventListener('blur', () => {
            labels[index].classList.remove('--active');
        });
    });
}


window.addEventListener("load", function () {
    handleSilder()
    handleLabel()
    handleHeaderMobile()
})



