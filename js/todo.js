/*
ボタンを押すとテキストボックスに書かれた内容を取得し,
リストを作成する.
*/

const div = document.querySelector("div");
const input = document.querySelector("input");
//const input=document.getElementById("input"); //  こちらでもよい
const toDoListCreateButton = document.getElementById("toDoListCreate");
const allClearButton = document.getElementById("allClear");
const ul = document.createElement("ul");
const listArray = [];

addEventListener("load", () => {});

//初期化する関数
function initial() {
  input.value = "";
}
//ボタンをクリックしたとき
toDoListCreateButton.addEventListener("click", () => {
  if (!input.value) {
    alert("テキストを入力してください");
    return;
  }
  //<ul>タグが存在しないときにタグを作成する
  if (!document.getElementById("ul")) {
    div.appendChild(ul);
  }
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
  inputList.value = input.value;
  li.appendChild(inputList);

  //labelタグを使うことでinputタグと関連付けができる
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox");
  label.innerText = input.value;
  li.appendChild(label);

  //listArray.push(li);
  initial();
});

allClearButton.addEventListener("click", () => {
  //div.removeChild(ul);

  /*
  listArray.forEach((element) => {
    const parent = element.parentNode;
    parent.removechild;
    //element.removechild(element.lastChild);
  });
  */
  initial();
});
