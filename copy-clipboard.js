

function main(){
    var copy_button = document.getElementsByClassName("copy-button")[0];
    var encrypted_text = document.getElementById("encrypted-text");
    var textareainput = document.getElementById("mytextarea");

    if(! encrypted_text){
        alert("You don't specify any text to encrypt");
        return;
    }
    
    //COPY TO CLIPBOARD
    copy_button.addEventListener("click",() => {
        console.log("COPY TO CLIPBOARD");
        navigator.clipboard.writeText(encrypted_text.value);
        textareainput.innerHTML="";
        textareainput.focus();
    });
        
}
// main();
export default function name(){
    main();
}