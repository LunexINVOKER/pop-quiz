let score =  0
let questions = [
  {question: `What's 2 + 2 * 2?\n1) 8\n2) 4\n3) 6`,
    answer:`3`
  },
  {question:`What is the capital of France?\n1) London\n2) Berlin\n3) Paris`,
    answer:`3`
  },
  {question:`What does GPU stand for?\n1) General Processing Unit\n2) Graphics Processing Unit\n3) Global Power Unit`,
    answer:`2`
  }
]
for (let i=0; i<questions.length; i++){
  let ans = prompt(questions[i].question)
  if (ans===null || ans===``){
    alert(`Please enter the answer!`);
    i--;
  }
  else if(ans===questions[i].answer){
    score++;
  }
  else{
    alert(`ERROR`)
  }
}
if (score===0){
  alert(`You got 0 correct noob.`);
}
 else if(score==questions.length){
  alert(`Daaaaaang bruh, that's sick`);
  alert(`You got ` + score + ` outta ` + questions.length);
 }
 else{
  alert(`You got ` + score + ` outta ` + questions.length);
 }