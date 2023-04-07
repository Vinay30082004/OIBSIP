let buttons = document.querySelectorAll("button");
        let string = "";

        Array.from(buttons).forEach((button) => {
            button.addEventListener("click", (e)=> {
                if(button.value == "="){
                    string = eval(string);
                    document.getElementById("resbox").value = string;

                }
                else if(button.value=="C"){
                    string = "";
                    document.getElementById("resbox").value = string;

                }
                else if(button.value =="del"){
                    string = string.toString().slice(0,-1);
                    document.getElementById("resbox").value = string;
                    


                }
                else{
                    document.getElementById("resbox").value += button.value;
                    string = document.getElementById("resbox").value;
                    console.log(string);
                }     
            })
        })

