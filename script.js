const btn = document.getElementById('Ifdsd');
const anime = document.querySelector('i')
const sp1 = document.querySelectorAll('h3 span');
// console.log(btn,text,sp1);
function letter(texts) {
    return texts.length
}

function word(texts) {
    // console.log(texts[texts.length-1]);
    // if (texts.split(' ').length > 1 && texts[texts.length-1] != ' ' || texts[texts.length-1] != '.' ) {
    //     return texts.split(' ').length;
    // }else{
    //     return 0;
    // }
        return texts.split(' ').length;
}

function sentence(texts) {
    if (texts[texts.length-1] != '.') {
        return texts.split('.').length
    }else if(texts[texts.length-1] == '.'){
        return texts.split('.').length - 1
    }
    else{
        return 0;
    }
}
btn.addEventListener('click', function () {
    const text = document.getElementById('y87ohO').value;
    if (text.length > 0) {
        sp1[0].innerHTML = letter(text);
        sp1[1].innerHTML = word(text);
        sp1[2].innerHTML = sentence(text);
        anime.classList.toggle('anime');
        setTimeout(() => {
            anime.classList.toggle('anime');
        }, 1000);
    } else {
        alert('so\'z kiriting');
    }

})
window.addEventListener('keyup', function (keys) {
    if (keys.key == 'Control') {
        const text = document.getElementById('y87ohO').value;
        if (text.length > 0) {
            sp1[0].innerHTML = letter(text);
            sp1[1].innerHTML = word(text);
            sp1[2].innerHTML = sentence(text)
            anime.classList.toggle('anime');
            setTimeout(() => {
                anime.classList.toggle('anime');
            }, 1000);
        } else {
            alert('so\'z kiriting');
        }

    }
})