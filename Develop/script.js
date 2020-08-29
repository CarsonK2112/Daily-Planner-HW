// $("button").click(function(){
//     $("p").hide();
//   });

function handleclick (event) {
    event.preventDefault()
    sections[index].classList.add("hide");
    index ++
    console.log("click")
    sections[index].classList.remove("hide");
  }


  function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  $("#btn btn-primary").on("click", function() {
    $("#display").empty();

  });