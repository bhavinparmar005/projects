let quoteText = document.getElementById("quote_text");
let writerName = document.getElementById("writer_name");
let changeQuoteBotton = document.getElementById("quote_change_button");
let index = 0;

let quoteList = [
  {
    quote: " “Believe you can and you're halfway there.”",
    writer: "Theodore Roosevelt...",
  },
  {
    quote: " “The way to get started is to quit talking and begin doing.”",
    writer: "Walt Disney...",
  },
  {
    quote:
      " “Success is not final, failure is not fatal It is the courage to continu that counts.”",
    writer: "Winston Churchill...",
  },
  {
    quote: " “Don't watch the clock do what it does Keep going.”",
    writer: "Sam Levenson...",
  },
];

changeQuoteBotton.addEventListener("click", () => {
    
  if (index == quoteList.length) {
    index = 0;
  }

  quoteText.textContent = quoteList[index].quote;
  writerName.textContent = quoteList[index].writer;

  index++;
});

// let count =0;

// function hello(){
//     count++
// }
// changeQuoteBotton.addEventListener('click', () => {
// hello();
// if(count ==1){
//     quoteText.textContent= quoteList[0].quote
//     writerName.textContent =quoteList[0].writer
// } else if(count==2){
//     quoteText.textContent=quoteList[1].quote
//     writerName.textContent =quoteList[1].writer
// }else if(count==3){
//     quoteText.textContent=quoteList[2].quote
//     writerName.textContent =quoteList[2].writer
// }else if(count==4){
//     quoteText.textContent=quoteList[3].quote
//     writerName.textContent =quoteList[3].writer
// }else{
//     count=1;
// }
// console.log(count);
// });
