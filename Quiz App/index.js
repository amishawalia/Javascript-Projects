 const quizData = [
    {
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

var index=0;
var score=0;
// text for the answer
var current_data;
var final_text=document.getElementById("quiz_block")
var ques=document.getElementById("question");
var opt_1=document.getElementById("a-text");
var opt_2=document.getElementById("b-text");
var opt_3=document.getElementById("c-text");
var opt_4=document.getElementById("d-text");


// selecting all radial buttons

//var select_radials=document.querySelectorAll(".ans_check");
var select_radials=document.getElementsByName("answer")




load_quiz();

function load_quiz()
{
    deselect_all_radials();
    current_data=quizData[index];

    ques.innerHTML=current_data.question;
      opt_1.innerHTML=current_data.a      
      opt_2.innerHTML=current_data.b    
      opt_3.innerHTML=current_data.c;
      opt_4.innerHTML=current_data.d;
}


var sub_btn=document.getElementById("submit_btn")
console.log(sub_btn)
sub_btn.addEventListener('click',increment)

function increment()
{
   let ans=checkSelector()
   // console.log(ans);
    
    if(ans)
    {
     
        // checking for correct ans
        if(ans==current_data.correct)
        score+=10;

         index++;
      if(index<quizData.length-1)
        {
        load_quiz();
        }
        else
        {
        //c.innerHTML=`Your Score is ${score}<button onclick="location.reload()">Restart</button>`
        final_text.innerHTML = `
                <h2>You answered correctly at ${score} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
    else
    {
        alert("pls select one option")
        
        
    }

    
}  

function checkSelector()
{
    let ans=undefined;
    select_radials.forEach((select_radial)=>
    {
        if(select_radial.checked)
        ans= select_radial.id;
    })
    return ans;
}

function deselect_all_radials()
{
    select_radials.forEach((select_radial)=>
    {
        select_radial.checked=false
    })
}

console.log(score)