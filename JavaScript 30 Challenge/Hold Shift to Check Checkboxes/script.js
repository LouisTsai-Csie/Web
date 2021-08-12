
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    let inbetween = false;
    console.log('this is e：',e);
    console.log('this is "this"：',this);
    if(e.shiftKey && this.checked){

        checkboxes.forEach(checkbox=>{
            if(checkbox===lastChecked||checkbox===this){
                inbetween = !inbetween;
            }
            if(inbetween){
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
