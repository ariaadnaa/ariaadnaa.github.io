let lang = 'ru';

function translatePassport() {
    if (lang == 'ru') {
        document.getElementsByClassName("field4")[0].innerHTML = "FEDULINSKAIA";
        document.getElementsByClassName("field5")[0].innerHTML = "ARINA";
        document.getElementsByClassName("field6")[0].innerHTML = "KONSTANTINOVNA"
        lang = 'en'
    } else {
        document.getElementsByClassName("field4")[0].innerHTML = "ФЕДУЛИНСКАЯ";
        document.getElementsByClassName("field5")[0].innerHTML = "АРИНА";
        document.getElementsByClassName("field6")[0].innerHTML = "КОНСТАНТИНОВНА"
        lang = 'ru'
    }
}