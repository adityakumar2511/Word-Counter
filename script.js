let txtArea = document.querySelector("textarea");
let word = document.querySelector("#word");
let char = document.querySelector("#char");
txtArea.addEventListener("input", () =>{
  let text = txtArea.value;
  char.innerText = text.length;
   let para = text.split(" ");
  let paralist = para.filter(function(elem){
    return elem != "";
  });
  word.innerText = paralist.length;
  
})
txtArea.addEventListener("click", function(){
  let timeup = 120;
  let timeIntr = setInterval(() =>{
    if(timeup > 0){
      timeup--;
      let timer = document.querySelector("#timer");
      timer.innerText = timeup;
    }else{
      clearInterval(timeIntr);
    }
  }, 1000)
});