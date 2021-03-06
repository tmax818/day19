const getJson = () => {
  fetch("http://www.tylermaxwell.co/day19/questions.json")
    .then(res => res.json())
    .then(json => {
      let num = RanNum();
      item = json[num];
      console.log(num, item.question, item.answer);
      output = `<h3>${item.question}<h3>`;
      answer = `<h5>${item.answer}</h5>`;
      document.getElementById("answer").style.display = "none";
      document.getElementById("output").innerHTML = output;
      document.getElementById("answer").innerHTML = answer;
    });
};

const RanNum = () => {
  let min = 0;
  let max = 8;
  let random = Math.floor(Math.random() * (+max - +min)) + +min;
  console.log(random);
  return +random;
};

const showAnswer = () => {
  console.log("click");
  document.getElementById("answer").style.display = "block";
};

document.getElementById("butt-ques").addEventListener("click", getJson);
document.getElementById("butt-ans").addEventListener("click", showAnswer);
