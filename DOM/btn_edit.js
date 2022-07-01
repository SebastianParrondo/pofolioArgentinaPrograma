export default function btn_edit(bntEdit,form) {
    const d = document;
    
    d.addEventListener("click", (e)=>{
        if(e.target.matches(bntEdit) || e.target.matches(`${bntEdit} *`)){
            d.querySelector(form).classList.toggle("d-none")
        }
    })

}

export function edit_Text(btnConfirm, textArea, textoInfo, form){
    const d = document;
    d.addEventListener("click", (e)=>{
        if(e.target.matches(btnConfirm)){
            let valorcampo = document.querySelector(textArea).value;

            d.querySelector(textoInfo).innerHTML = valorcampo;
            d.querySelector(form).classList.add("d-none")
        }

    })
}
