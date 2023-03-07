let langButtonAr = document.getElementById("lang-buttonAr");



let headerUpdate =  document.getElementById("header-update");
let headerCMD =  document.getElementById("header-cmd");
let headerSkills =  document.getElementById("header-skills");
let hiRuby = document.getElementById("hi-ruby");
let updateNum = document.getElementById("update-num");
let rubyMain = document.getElementById("ruby-main");
let alertAr = document.getElementById("alertAr");
let inviteBtn =  document.getElementById("invite-btn");
let update =  document.getElementById("update");
let updateDes =  document.getElementById("update-des");
let copyright =  document.getElementById("copyright");

langButtonAr.addEventListener("click", click);

function click() {
    headerUpdate.innerText = "تحديثات"
    headerCMD.innerText = "الأوامر"
    headerSkills.innerText = "مهارات"
    hiRuby.innerText = "اهلا انا روبي"
    rubyMain.innerText = "نظام روبي لسيرفرات الديسكورد"
    updateNum.innerText = "رقم تحديث الموقع"
    alertAr.innerText = "اللغة ما زالت تجريبية + هذه الخاصية متوفرة فقط في الصفحة الرئيسية فقط"
    inviteBtn.innerText = "دعوة"
    update.innerText = "تحديثات"
    updateDes.innerText = "هنا كل تحديثات روبي سيستم"
    copyright.innerText = "حقوق الطبع و النشر - X D -"
    langButtonAr.innerText = "قم بتحديث الصفحة اذا كنت تريد اللغة الإنجليزية"
}
