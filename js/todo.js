/*
ボタンを押すとテキストボックスに書かれた内容を取得し,
リストを作成する.
*/

const div = document.querySelector("div");
const input = document.querySelector("input");
//const input=document.getElementById("input"); //  こちらでもよい
const button = document.querySelector("button");
const ul = document.createElement("ul");

const listArray = [];

addEventListener("load", function () {
  //<div>
  //    <ul>...</ul>
  //</div>作成
  div.appendChild(ul);
});

//ボタンをクリックしたとき
button.addEventListener("click", function () {
  //テキストデータ取得
  const text = input.value;

  //<ul>
  //    <li id = "checkbox" type="checkbox"></li>
  //</ul>
  //を作成
  //ulの子要素はliでなければならない(w3cによって定められている)
  const li = document.createElement("li");
  li.setAttribute("id", "checkbox");
  li.setAttribute("type", "checkbox");
  ul.appendChild(li);

  const inputList = document.createElement("input");
  inputList.setAttribute("id", "checkbox");
  inputList.setAttribute("type", "checkbox");
  inputList.value = text;
  li.appendChild(inputList);

  //labelタグを使うことでinputタグと関連付けができる
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox");
  label.innerText = text;
  li.appendChild(label);
});
