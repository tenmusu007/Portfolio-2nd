// $(function(){
//     console.log("hello");
//     $(".intro").css("color", "red");
// var $intro =$(".intro");
// $intro.css("color","red");
// $intro.addClass("greeting")
// })
console.log("hello")

// $(function(){
//     $(".opening-line")
//     .siblings()
//     .addClass("second-line");

//     $("article")
//     .children(".opening-line")
//     .css("font-style","italic");

//     $("p")
//     .parent()
//     .siblings()
//     .text("A Tale of Two Blog Posts");
// });

// let newContent = "<li>Three</li>";
// $(".numbers").append(newContent);
// $(".numbers li:nth-child(2)").text("2");
// $(".numbers")
//     .children(":first")
//     .remove();
    
// // $("li").atter("id","active");
// // $("input").prop("disabled",true);

// let $fontSize = $("p").css("font-size");
// console.log($fontSize);
// $("p").css("font-size", "30px");
// $("p").css({"font-size":"18px", "font-weight":"bold"});

// $(function(){
//     $(".opening-line")
//     .siblings()
//     .addClass("second-line")

//     $("article")
//     .children(".opening-line")
//     .css("font-style","italic")

//     $("p")
//     .parent()
//     .siblings()
//     .text("A Tale of Two Blog Posts")
// });

// ex2

// $(function(){
//     $("p")
//     .css("color","orange");
// })

// $(function(){
//     $(".opening-line")
//     .siblings()
//     .addClass("second-line")
//     .css("color","orange")
// });

// $(function(){
//     $("article p:nth-child(2)")
//     .css("color","orange");
// });

// $("button").on("click",function(){
//     alert("You clicked the button");
// });
// $("div").append("<button>My Button</button>")
// $("div").on("click","button", function(){
//     alert("You clicked the button")
// });

// let input = $("input").addClass("nico")
// $("div").on("click","button", function(){
//     var $input = $("input[name=new-item]");
//     var $toAdd = $input.val();

//     $("ul").append("<li>"+ $toAdd + "</li>" )
//     console.log()
// });

// $(function() {
//     var $input = $("input[name=new-item]");
//     var $addButton = $('button');
//     var $list = $('.my-list');

//     $addButton.on('click', function(){
//         var $toAdd = $input.val();

//         $list.append(
//             '<li><span>' + $toAdd + '</span><a href="#" class="delete">[done]</a></li>'
//         );

//         $('.delete').on('click', function(){
//             var $siblings = $(this).siblings();

//             $siblings.css('text-decoration', 'line-through');
//         });
//     });

//     $input.on('keyup', function(event){
//         if(event.keyCode == 13) {
//             $addButton.click();
//         }
//     });

// });

// input method
// $("#my-from").on("submit", function(event){
//     event.preventeDefault();
//     if ($("#my-text-input").val() == ""){
//         alert("Your missed the field.");
//     }else{
//         alert("Thanks for filing the field");
//     }
// });

// $("#my-select-,menu").on("change", function(){
//     let selected = $(this).val();
//     if (selected !==""){
//         console.log("the value you picked is:" + selected);
//     }
// });
// $("#hamburger").on("change", function() {
//     if ($(this).is(":checked")){
//         $('label[for="fixins"]').show("slow");
//         $("#fixins").show("slow");
//     }else{
//         $('label[for="fixins"]').hide("slow");
//         $("#fixins").hide("slow");
//     }
// });

$("p").hide();
$("a").on("click",function(event){
    let atsu = $(this).attr("rel");
        $(`#${atsu}`).toggle("slow");
});
// 