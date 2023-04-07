let add = document.querySelector(".addbox");
let inputbox = document.querySelector(".inputbox");

var itemslist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < itemslist.length; i++) {
    var remove = document.createElement("SPAN");
    var text = document.createTextNode("\u00D7");
    remove.className = "close";
    remove.appendChild(text);
    itemslist[i].appendChild(remove);

}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
    close[i].onclick = function () {
        var tohide = this.parentElement;
        tohide.style.display = "none";
    }
}
var donebtns = document.getElementsByClassName("donebtn");
for (i = 0; i < donebtns.length; i++) {
    donebtns[i].onclick = function () {
        var strike = this.parentElement;
        strike.style.textDecoration = "line-through";
        
    }
}



add.addEventListener('click', () => {

    let inputval = inputbox.value;
    if (inputval == "") {
        window.alert("Enter something");

    }
    else {
        let newnode = document.createElement("Li");
        let textnode = document.createTextNode(inputbox.value);
        newnode.appendChild(textnode);
        newnode.className = 'item';

        document.querySelector(".itemsbox").appendChild(newnode);
        let newnode1 = document.createElement("button");
        newnode1.innerHTML = "Done";
        newnode1.className = "donebtn";
        newnode.appendChild(newnode1);
        


        var remove = document.createElement("SPAN");
        var text = document.createTextNode("\u00D7");
        remove.className = "close";
        remove.appendChild(text);
        newnode.appendChild(remove);

        var i;
        for (i = 0; i < close.length; i++) {
            close[i].onclick = function () {
                var tohide = this.parentElement;
                tohide.style.display = "none";
            }
        }
        for (i = 0; i < donebtns.length; i++) {
            donebtns[i].onclick = function () {
                var strike = this.parentElement;
                strike.style.textDecoration = "line-through";
                
               
            }
        }
        
        inputbox.value = "";
    }

})




