"use strict";
// let ref_section = document.getElementById('ref')
// let ref_btn = document.getElementById('ref_btn')
// ref_btn?.addEventListener('click', ()=>{
//     ref_section!.classList.toggle('hide')
// })
// let exp_section = document.getElementById('experience')
// let exp_btn = document.getElementById('exp_btn')
// exp_btn?.addEventListener('click', ()=>{
//     exp_section!.classList.toggle('hide')
// })
// let lang_section = document.getElementById('language')
// let lang_btn = document.getElementById('lang_btn')
// lang_btn?.addEventListener('click', ()=>{
//     lang_section!.classList.toggle('hide')
// })
// let skill_section = document.getElementById('skills')
// let skill_btn = document.getElementById('skill_btn')
// skill_btn?.addEventListener('click', ()=>{
//     skill_section!.classList.toggle('hide')
// })
// let edu_section = document.getElementById('education')
// let edu_btn = document.getElementById('edu_btn')
// edu_btn?.addEventListener('click', ()=>{
//     edu_section!.classList.toggle('hide')
// })
// let cont_section = document.getElementById('contact')
// let cont_btn = document.getElementById('cont_btn')
// cont_btn?.addEventListener('click', ()=>{
//     cont_section!.classList.toggle('hide')
// })
window.addEventListener('load', () => {
    let name = localStorage.getItem("name");
    let designation = localStorage.getItem("designation");
    let phone = localStorage.getItem("phone");
    let email = localStorage.getItem("email");
    let address = localStorage.getItem("address");
    let matric = localStorage.getItem("matric");
    let inter = localStorage.getItem("inter");
    let degree = localStorage.getItem("degree");
    let institute = localStorage.getItem("institute");
    let skill1 = localStorage.getItem("skill1");
    let skill2 = localStorage.getItem("skill2");
    let skill3 = localStorage.getItem("skill3");
    let skill4 = localStorage.getItem("skill4");
    let skill5 = localStorage.getItem("skill5");
    let lang1 = localStorage.getItem("lang1");
    let lang2 = localStorage.getItem("lang2");
    let styear = localStorage.getItem("styear");
    let endyear = localStorage.getItem("endyear");
    let company = localStorage.getItem("company");
    let comlocation = localStorage.getItem("comlocation");
    let jobTitle = localStorage.getItem("jobTitle");
    let achv1 = localStorage.getItem("achv1");
    let achv2 = localStorage.getItem("achv2");
    let achv3 = localStorage.getItem("achv3");
    let picture = localStorage.getItem("profile_pic");
    let resName = document.getElementById('resName');
    resName.textContent = name;
    let resDesig = document.getElementById('resDesig');
    resDesig.textContent = designation;
    let resPhone = document.getElementById('resPhone');
    resPhone.textContent = phone;
    let resEmail = document.getElementById('resEmail');
    resEmail.textContent = email;
    let resAdd = document.getElementById('resAdd');
    resAdd.textContent = address;
    let resMatric = document.getElementById('resMatric');
    resMatric.textContent = matric;
    let resInter = document.getElementById('resInter');
    resInter.textContent = inter;
    let resDeg = document.getElementById('resDeg');
    resDeg.textContent = degree;
    let resInst = document.getElementById('resInst');
    resInst.textContent = institute;
    let resSkill1 = document.getElementById('resSkill1');
    resSkill1.textContent = skill1;
    let resSkill2 = document.getElementById('resSkill2');
    resSkill2.textContent = skill2;
    let resSkill3 = document.getElementById('resSkill3');
    resSkill3.textContent = skill3;
    let resSkill4 = document.getElementById('resSkill4');
    resSkill4.textContent = skill4;
    let resSkill5 = document.getElementById('resSkill5');
    resSkill5.textContent = skill5;
    let resLang1 = document.getElementById('resLang1');
    resLang1.textContent = lang1;
    let resLang2 = document.getElementById('resLang2');
    resLang2.textContent = lang2;
    let resStyear = document.getElementById('resStyear');
    resStyear.textContent = styear;
    let resEndyear = document.getElementById('resEndyear');
    resEndyear.textContent = endyear;
    let resCom = document.getElementById('resCom');
    resCom.textContent = company;
    let resComloc = document.getElementById('resComloc');
    resComloc.textContent = comlocation;
    let resJob = document.getElementById('resJob');
    resJob.textContent = jobTitle;
    let resAchv1 = document.getElementById('resAchv1');
    resAchv1.textContent = achv1;
    let resAchv2 = document.getElementById('resAchv2');
    resAchv2.textContent = achv2;
    let resAchv3 = document.getElementById('resAchv3');
    resAchv3.textContent = achv3;
    let resImg = document.getElementById('resImg');
    resImg.src = picture;
});
let print_btn = document.getElementById("print_btn");
print_btn?.addEventListener("click", () => {
    window.print();
});
let edit_btn = document.getElementById("edit_btn");
edit_btn?.addEventListener("click", () => {
    window.history.back();
});
