

var uList = document.getElementById("ul");
var btn = document.getElementById("btn");
var scoreCard = document.getElementById("scoreCard");
var quizBox = document.getElementById("questionline");
var op1 = document.getElementById("op1");
var op2 = document.getElementById("op2");
var op3 = document.getElementById("op3");
var op4 = document.getElementById("op4");



var myApp = {
  questions: [
    {
   q: "Who is the C.E.O of facebook?", options:["Samuel Abah", "Donald Trump", "Muhammadu Buhari", "Mark Zuckerberg"], answer:4
 },

  { q: "What is the full meaning of DOM?", options:["Document Outlet Model", "Document Object Model", "Downward Object Model", "Deep Object Model"], answer:2
},

{  q: "Which of these is not a HTML element?", options:["h1 tag", "span tag", "anchor tag", "none of the above"], answer:4
},

{  q: "One of these is not a design tool?", options:["Figma", "Adobe XD", "Adobe Illustrator", "Node js"], answer:4
},

{  q: "One of these is not a frontend framework?", options:["Bootsrap", "flutter", "Tailwind CSS", "Vue js"], answer:2
}

],

index:0,
load:function() {
  if (this.index<=this.questions.length-1) {

  quizBox.innerHTML=this.index + 1 + "." + this.questions[this.index].q;
  op1.innerHTML=this.questions[this.index].options[0];
  op2.innerHTML=this.questions[this.index].options[1];
  op3.innerHTML=this.questions[this.index].options[2];
  op4.innerHTML=this.questions[this.index].options[3];
    this.scoreCard();
} else {
  quizBox.innerHTML="End of Quiz."
  op1.style.display="none";
  op2.style.display="none";
  op3.style.display="none";
  op4.style.display="none";
  btn.style.display="none";
}

},

next:function() {
  this.index++;
  this.load();
},

  check:function(ele) {
        var id=ele.id.split("");
        if(id[id.length-1]==this.questions[this.index].answer) {
          this.score++;
          ele.className="correct";
          this.scoreCard();
        } else {
          ele.className="wrong";
        }
  },
  notClickAble:function() {
    for(let i=0; i<ul.children.length;i++) {
      ul.children[i].style.pointerEvents="none";
      if(ul.children[i].id.split("")[2]==this.questions[this.index].answer){
      ul.children[i].style.backgroundColor="green";
    }
    }
  },

  clickAble:function() {
    for(let i=0; i<ul.children.length;i++) {
      ul.children[i].style.pointerEvents="auto";
      ul.children[i].removeAttribute("class");
    ul.children[i].style.backgroundColor="";
    }
  },

  score:0,
  scoreCard: function() {
      scoreCard.innerHTML=this.score+"/"+this.questions.length;
  }


}

function startQuiz(){
     myApp.load();
     document.querySelector(".quiz_container").classList.add("show");
     document.querySelector(".start-quiz").classList.remove("show");
  }

    function button(ele) {

      myApp.check(ele);
      myApp.notClickAble();
    }

    function next() {
      myApp.next();
      myApp.clickAble();
    }
