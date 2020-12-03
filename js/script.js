$(".about").click(function(){
    
    var info =  $(".btn-info").text();
   
    if(info=="My skills"){
        
      $(".btn-info").text("About me");
    $(".text").html(text); 
        
    }else{
   location.reload();   
   }
    
});


var text = "<ul><li>Address: Tigran Mets ave</li> <li>Mobile: +37499083883</li><li>Languages: Russian-C1, English-C1</li><li>Skills: HTML, CSS, BOOTSTRAP, Javascript, JQuery, Vue, PHP, Laravel, OOP, MySQL.</li><li>Tools and Apps: FileZilla, Git/Github, Atom, Sublime Text, Photoshop</li></ul>";


var i=0;
var info="Hi my name is  Hayk";


function typing(){
    if(i<text.length){
      document.getElementById("text").innerHTML += info.charAt(i);
        i++;
        setTimeout(typing,50);
    }
}

typing();