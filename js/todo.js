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
const form = document.createElement("form");
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
  if (!document.getElementById("form")) {
    div.appendChild(form);
  }

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", "checkbox" + (form.length + 1).toString());
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "todoList");
  checkbox.value = input.value;
  form.appendChild(checkbox);

  //labelタグを使うことでinputタグと関連付けができる
  const label = document.createElement("label");
  label.setAttribute("for", "checkbox" + form.length.toString());
  label.innerText = input.value;
  form.appendChild(label);

  initial();
});
//チェックボックスがついている要素だけ削除
RemoveButton.addEventListener("click", () => {});
//リストをすべてクリアにする
allClearButton.addEventListener("click", () => {
  if (!form.hasChildNodes()) {
    alert("ToDoリストがありません");
    return;
  }

  while (form.firstChild) {
    form.removeChild(form.firstChild);
  }
  form.remove();

  initial();
});
