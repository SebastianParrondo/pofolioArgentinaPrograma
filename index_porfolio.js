import { edit_Text } from "./DOM/btn_edit.js";
import btn_edit from "./DOM/btn_edit.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e)=>{
    btn_edit(".btn-edit", "#form")
    edit_Text("#btn-confirm", "#campo-acerca-de", "#info", "#form")
})

/*d.addEventListener("input", (e)=>{
    console.log(e)
    let valor = e.data 

    d.querySelector("#info").innerText = valor;
})*/













