menuListArray = [ "Marguerita",                  
                  "Calabresa",
                "Quatro Queijos",
                 "Lombo",
                "Portuguesa",
            "Atum"]; //Adicione mais nomes de pizza
//            PRA Q ATUM            PRA QUE
function getmenu()
{
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("displayMenu").innerHTML = htmldata;
}

function add_suggestion(){
    //Dê um nome de id apropriado, como addItem
	var item = document.getElementById("addItem").value;
    //Use a função push() para colocar o item no menuListArray
    menuListArray.push(item);


    //----------------------------------------------------------------------------------------------------------------------------------
    var htmldata="";
    for(var i=0; i<menuListArray.length; i++)
    {
        htmldata=htmldata+ menuListArray[i] + '<br>'
    }
    //Dê um nome apropriado ao Id, como displayMenu 
    document.getElementById("displayMenu").innerHTML = htmldata; //COLOQUEI ESSE P QUANDO CLICAR NO ADD NEGOÇO ELE MOSTRAR DIRETO E N TER Q CLICAR DNV
}

