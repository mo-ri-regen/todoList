/*
ボタンを押すとテキストボックスに書かれた内容を取得し,
リストを作成する.
*/

const div = document.querySelector("div");
const input = document.querySelector("input");
//const input=document.getElementById("input"); //  こちらでもよい
const toDoListCreateButton = document.getElementById("toDoListCreateButton");
const doneButton = document.getElementById("RemoveButton");
const allClearButton = document.getElementById("allClearButton");
const ul = document.createElement("ul");
const listTagArray = [];
const listTagDictionary = {}; //Todoリストの内容:チェックボックスの状態

addEventListener("load", () => {});

//初期化する関数
function initial() {
  input.value = "";
}
//リストを作成する関数
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
  li.setAttribute("class", "checkbox");
  li.setAttribute("type", "checkbox");
  ul.appendChild(li);

  const inputList = document.createElement("input");
  inputList.setAttribute(
    "id",
    "checkbox" + (listTagArray.length + 1).toString()
  );
  inputList.setAttribute("type", "checkbox");
  inputList.value = input.value;
  li.appendChild(inputList);

  //labelタグを使うことでinputタグと関連付けができる
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox" + (listTagArray.length + 1).toString());
  label.innerText = input.value;
  li.appendChild(label);

  listTagArray.push(li);

  initial();
});
RemoveButton.addEventListener("click", () => {});
//リストをすべてクリアにする
allClearButton.addEventListener("click", () => {
  if (!listTagArray.length) {
    alert("ToDoリストがありません");
    return;
  }
  listTagArray.forEach((listTag) => {
    listTag.remove();
  });
  ul.remove();
  listTagArray.splice(0, listTagArray.length); //配列の要素をすべて削除

  initial();
});
