import copyClipboard from "./copy-clipboard.js";

console.log("LOADED");

var encryptButton = document.getElementById("encrypt");
var decryptButton = document.getElementById("desencrypt");

var card = document.getElementsByClassName("card")[0];

encryptButton.addEventListener("click", encrypt_process);
decryptButton.addEventListener("click",decrypt_process);

const mydictionary = {
    'e':"enter",
    'i': "imes",
    'a':"ai",
    'o':"ober",
    'u':"ufat"
};

function encrypt_process(event){
    console.log("encrypt process");
    let textarea = document.getElementById("mytextarea");
    
    let textToEncrypt = textarea.value;
    textarea.value='';
    //check if lower letters condition
    if(!textToEncrypt == textToEncrypt.toLowerCase()){
        alert("Debe ser minusculas las letras");
        return;
    }
    let regex = /[^\w\s]/gi;
    if(regex.test(textToEncrypt)){
        alert("Your string has special characters");
        return;
    }
    let keys = Object.keys(mydictionary);
    let encrypted = "";
    for(let idx = 0; idx < textToEncrypt.length; idx++){
        let currentChar = textToEncrypt.charAt(idx);
        if("aeiou".includes(currentChar)){
            encrypted += mydictionary[currentChar];
        }else{
            encrypted += currentChar;
        }
    }

    console.log(encrypted);
    changeCard(card,encrypted);
    copyClipboard();
    // let keys = Object.keys(mydictionary);
    // let encrypted="..";
    
    // let ocurrences = {
    //     'a':[],
    //     'e':[],
    //     'i':[],
    //     'o':[],
    //     'u':[],
    // };
    // for(let idx = 0; idx < textToEncrypt.length; idx++){
    //     let currentChar = textToEncrypt.charAt(idx);
    //     if("aeiou".includes(currentChar)){
    //         ocurrences[currentChar].push(idx);
    //     }
    // }
    
    // for(const key of Object.keys(ocurrences)){
    //     encrypted = textToEncrypt.replace(new RegExp(key,'g'), mydictionary[key]);

    //     if(textToEncrypt.includes(key)){
    //     }
    // }
    // console.log(encrypted);
}
function changeCard(card,encrypted){
    cleanAllChilds(card);
    //items needed -> a textarea and a button 
    const textarea = document.createElement("textarea");
    const button = document.createElement("button");
    
    textarea.innerHTML=encrypted;
    //Styles with Responsive Design
    
    if( window.innerWidth <= 480){
        // textarea.setAttribute("width","100%");
        textarea.style.height = (1.4*(encrypted.length)) + "px";
        textarea.style.fontSize="0.7em";
        textarea.style.width="90%";
        button.style.fontSize="0.8em";
        button.style.height="1.7em";
        button.style.marginTop="15px";
        // textarea.setAttribute("height","auto");
        // textarea.setAttribute("overflow-y", "visible");
    }else{
        textarea.style.width="80%";
        textarea.setAttribute("rows",15);
        textarea.style.fontSize="1.2em";
    }
    
    textarea.setAttribute("id","encrypted-text");
    
    textarea.classList.add("general-textarea");

    button.innerHTML="Copiar";
    button.classList.add("copy-button");
    button.style.cursor = "pointer";
    button.style.transition="background-color 300ms linear";
    button.addEventListener("mouseenter",function(event){
        this.style.backgroundColor = "darkblue";
        this.style.color="azure";
        this.style.fontSize ="1.4em";
    });
    button.addEventListener("mouseleave",function(event){
        this.style.backgroundColor = "#D8DFE8";
        this.style.color="darkblue";
        this.style.fontSize ="1.1em";
    });
    
    card.appendChild(textarea);
    card.appendChild(button);

}
function cleanAllChilds(parent){
    parent.innerHTML = '';
}
function decrypt_process(event){
    var encrypted_text = document.getElementById("mytextarea");
    var textarea_output = document.getElementById("encrypted-text");

    if(! encrypted_text || encrypted_text.value == ""|| textarea_output.value ==""){
        alert("You had not a message to decrypt or encrypt in the input text");
        return;
    }
    if( window.innerWidth <= 480){
        // textarea.setAttribute("width","100%");
        encrypted_text.style.height = (1.1*encrypted_text.value.length) + "px";
    }
    let encryptedText = encrypted_text.value;
    let decryptedText = encryptedText;
    for(const entry of Object.entries(mydictionary)){
        decryptedText = decryptedText.replace(new RegExp(entry[1],'g'),entry[0]);
    }
    console.log(decryptedText);
    textarea_output.value = decryptedText;
    encrypted_text.value = "";
    
}








