window.onload = function(){

    var cards = document.querySelector("#cards");

    for (let i = 0; i < 10; i++) {
        var card = document.createElement("div");
        card.classList.add("card");
        cards.appendChild(card);

        var img = document.createElement("img");
        img.setAttribute("src", "img/Cat.jpg");
        img.setAttribute("indice", i);
        img.classList.add("cat");
        card.appendChild(img);

        var btn = document.createElement("button");
        btn.classList.add("btn_card");
        btn.innerText = "Cerca";
        btn.setAttribute("indice", i);
        card.appendChild(btn);
    };   
  

    var btn = document.querySelectorAll(".btn_card");
    var img = document.querySelectorAll(".cat");
    var titolo = document.querySelector("h1");

    var winner = Math.floor(Math.random() * 10);

    // function verifica() {
        for (let i = 0; i < btn.length; i++) {
          btn[i].addEventListener("click", function() {
                if (i == winner) {
                    img[i].src = "img/Topolino.jpeg";
                    img[i].style.margin = "0 0 145px 0";

                    var vincita = document.createElement("h2");
                    vincita.innerHTML ="Hai Vinto!";
                    vincita.style.color = "yellow";
                    titolo.appendChild(vincita);
             
                } else {
                    img[i].src = "img/smile.jpg";
                    img[i].style.margin = "0 0 99px 0";

                    var perdita = document.createElement("h2");
                    perdita.innerHTML = "Hai perso, riprova...";
                    perdita.style.color = "yellow";
                    titolo.appendChild(perdita);
                }

                for (const button of btn) {
                  button.setAttribute("disabled", "true");
                }

                ricomincia();

            });  
        };
    // };

    // verifica();


    function ricomincia() {
        
         setInterval(() => {
            for (const images of img) {
                images.setAttribute("src", "img/Cat.jpg");
            }

            window.location.reload();
         }, 3000);
    }


   
    
  
 

    

   
    

      


    

    


    


    


}