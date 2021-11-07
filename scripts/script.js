// gender selector
$('.playerDataWrap #genderWrap .iconsWrap div:first-child').click(() => { 
    $('.playerDataWrap #genderWrap .iconsWrap div:first-child').css({'border': '2px solid #000'}).css({'color': '#000'});
    $('.playerDataWrap #genderWrap .iconsWrap div:last-child').css({'border': '0'}).css({'color': '#fff'});
});
$('.playerDataWrap #genderWrap .iconsWrap div:last-child').click(() => { 
    $('.playerDataWrap #genderWrap .iconsWrap div:last-child').css({'border': '2px solid #000'}).css({'color': '#000'});
    $('.playerDataWrap #genderWrap .iconsWrap div:first-child').css({'border': '0'}).css({'color': '#fff'});
});

const ageRange = (val) => { // age range
    $('#age').text(val);
}

// editor nav
$('.characEditorWrap .col2 .nav button').eq(0).css({'border': '2px solid #000'}).css({'background': 'linear-gradient(60deg, rgba(9, 204, 2, 0.5), rgba(255, 255, 255, 0.5), rgba(9, 204, 2, 0.5))'});
$('.characEditorWrap .col2 .nav button img').eq(0).css({'opacity': '1'});

$('.appearance').hide();
$('.hair').hide();
$('.clothes').hide();

const parents = () => {
    $('.characEditorWrap .col2 .nav button').eq(0).css({'border': '2px solid #000'}).css({'background': 'linear-gradient(60deg, rgba(9, 204, 2, 0.5), rgba(255, 255, 255, 0.5), rgba(9, 204, 2, 0.5))'});
    $('.characEditorWrap .col2 .nav button img').eq(0).css({'opacity': '1'});

    $('.characEditorWrap .col2 .nav button').eq(1).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(1).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(2).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(2).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(3).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(3).css({'opacity': '0.6'});

    $('.parents').fadeIn('fast');
    $('.appearance').hide();
    $('.hair').hide();
    $('.clothes').hide();
}

const appearance = () => {
    $('.characEditorWrap .col2 .nav button').eq(1).css({'border': '2px solid #000'}).css({'background': 'linear-gradient(-60deg, rgba(9, 204, 2, 0.5), rgba(255, 255, 255, 0.5), rgba(9, 204, 2, 0.5))'});
    $('.characEditorWrap .col2 .nav button img').eq(1).css({'opacity': '1'});

    $('.characEditorWrap .col2 .nav button').eq(0).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(0).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(2).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(2).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(3).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(3).css({'opacity': '0.6'});

    $('.parents').hide();
    $('.appearance').fadeIn('fast');
    $('.hair').hide();
    $('.clothes').hide();
}

const hair = () => {
    $('.characEditorWrap .col2 .nav button').eq(2).css({'border': '2px solid #000'}).css({'background': 'linear-gradient(60deg, rgba(9, 204, 2, 0.5), rgba(255, 255, 255, 0.5), rgba(9, 204, 2, 0.5))'});
    $('.characEditorWrap .col2 .nav button img').eq(2).css({'opacity': '1'});

    $('.characEditorWrap .col2 .nav button').eq(0).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(0).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(1).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(1).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(3).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(3).css({'opacity': '0.6'});

    $('.parents').hide();
    $('.appearance').hide();
    $('.hair').fadeIn('fast');
    $('.clothes').hide();
}

const clothes = () => {
    $('.characEditorWrap .col2 .nav button').eq(3).css({'border': '2px solid #000'}).css({'background': 'linear-gradient(-60deg, rgba(9, 204, 2, 0.5), rgba(255, 255, 255, 0.5), rgba(9, 204, 2, 0.5))'});
    $('.characEditorWrap .col2 .nav button img').eq(3).css({'opacity': '1'});

    $('.characEditorWrap .col2 .nav button').eq(0).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(0).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(1).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(1).css({'opacity': '0.6'});

    $('.characEditorWrap .col2 .nav button').eq(2).css({'border': '2px solid rgb(61, 61, 61)'}).css({'background': 'silver'});
    $('.characEditorWrap .col2 .nav button img').eq(2).css({'opacity': '0.6'});

    $('.parents').hide();
    $('.appearance').hide();
    $('.hair').hide();
    $('.clothes').fadeIn('fast');
}

// parents selector
const mother = [
    {name: 'Name1', img: 'assets/img/mother/mother_1.png'},
    {name: 'Name2', img: 'assets/img/mother/mother_2.png'},
    {name: 'Name3', img: 'assets/img/mother/mother_3.png'},
    {name: 'Name4', img: 'assets/img/mother/mother_4.png'},
    {name: 'Name5', img: 'assets/img/mother/mother_5.png'},
    {name: 'Name6', img: 'assets/img/mother/mother_6.png'},
    {name: 'Name7', img: 'assets/img/mother/mother_7.png'},
    {name: 'Name8', img: 'assets/img/mother/mother_8.png'},
    {name: 'Name9', img: 'assets/img/mother/mother_9.png'},
    {name: 'Name10', img: 'assets/img/mother/mother_10.png'},
    {name: 'Name11', img: 'assets/img/mother/mother_11.png'},
    {name: 'Name12', img: 'assets/img/mother/mother_12.png'},
    {name: 'Name13', img: 'assets/img/mother/mother_13.png'},
]
const father = [
    {name: 'Name1', img: 'assets/img/father/father_1.png'},
    {name: 'Name2', img: 'assets/img/father/father_2.png'},
    {name: 'Name3', img: 'assets/img/father/father_3.png'},
    {name: 'Name4', img: 'assets/img/father/father_4.png'},
    {name: 'Name5', img: 'assets/img/father/father_5.png'},
    {name: 'Name6', img: 'assets/img/father/father_6.png'},
    {name: 'Name7', img: 'assets/img/father/father_7.png'},
    {name: 'Name8', img: 'assets/img/father/father_8.png'},
    {name: 'Name9', img: 'assets/img/father/father_9.png'},
    {name: 'Name10', img: 'assets/img/father/father_10.png'},
    {name: 'Name11', img: 'assets/img/father/father_11.png'},
    {name: 'Name12', img: 'assets/img/father/father_12.png'},
    {name: 'Name13', img: 'assets/img/father/father_13.png'},
]

$('.main .parents .parentsImg img').eq(0).attr('src', `${mother[0].img}`);
$('.main .parents .parentsImg img').eq(1).attr('src', `${father[0].img}`);
$('.main .parents .params .inputWrap p').eq(0).text(`${mother[0].name}`);
$('.main .parents .params .inputWrap p').eq(1).text(`${father[0].name}`);

let motherCount = 0;
let fatherCount = 0;
const motherNext = () => {
    if(motherCount > 11) {
        return;
    }
    else {
        motherCount++;
        console.log(motherCount);
    }
    $('.main .parents .parentsImg img').eq(0).attr('src', `${mother[motherCount].img}`);
    $('.main .parents .params .inputWrap p').eq(0).text(`${mother[motherCount].name}`);
}
const motherPrev = () => {
    if(motherCount < 1) {
        return;
    }
    else {
        motherCount--;
        console.log(motherCount);
    }
    $('.main .parents .parentsImg img').eq(0).attr('src', `${mother[motherCount].img}`);
    $('.main .parents .params .inputWrap p').eq(0).text(`${mother[motherCount].name}`);
}
const fatherNext = () => {
    if(fatherCount > 11) {
        return;
    }
    else {
        fatherCount++;
        console.log(fatherCount);
    }
    $('.main .parents .parentsImg img').eq(1).attr('src', `${father[fatherCount].img}`);
    $('.main .parents .params .inputWrap p').eq(1).text(`${father[fatherCount].name}`);
}
const fatherPrev = () => {
    if(fatherCount < 1) {
        return;
    }
    else {
        fatherCount--;
        console.log(fatherCount);
    }
    $('.main .parents .parentsImg img').eq(1).attr('src', `${father[fatherCount].img}`);
    $('.main .parents .params .inputWrap p').eq(1).text(`${father[fatherCount].name}`);
}