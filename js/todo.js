/*
ボタンを押すとテキストボックスに書かれた内容を取得し,
リストを作成する.
*/

const div = document.querySelector("div");
const input = document.querySelector("input");
//const input=document.getElementById("input"); //  こちらでもよい
const toDoListCreateButton = document.getElementById("toDoListCreateButton");
const removeButton = document.getElementById("removeButton");
const allClearButton = document.getElementById("allClearButton");
const form = document.createElement("form");
const listTagArray = [];
const listTagDictionary = {}; //Todoリストの内容:チェックボックスの状態

let count = 0;

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

  count++;
  //<form>タグが存在しないときにタグを作成する
  if (!document.getElementById("form")) {
    div.appendChild(form);
    form.setAttribute("class", "checkbox");
  }

  const checkbox = document.createElement("input");
  checkbox.setAttribute("id", "checkbox" + count.toString());
  checkbox.setAttribute("type", "checkbox");
  checkbox.setAttribute("name", "todoList");
  checkbox.value = input.value;
  form.appendChild(checkbox);

  //labelタグを使うことでinputタグと関連付けができる
  const label = document.createElement("label");
  label.setAttribute("class", "todoList");
  label.setAttribute("for", "checkbox" + count.toString());
  label.innerText = input.value;
  form.appendChild(label);

  initial();
});
//チェックボックスがついている要素だけ削除
removeButton.addEventListener("click", () => {
  const todoLists = document.getElementsByName("todoList");

  todoLists.forEach((todoList) => {
    if (todoList.checked) {
      const todoLabel = todoList.nextSibling; //ラベル要素
      todoList.remove();
      todoLabel.remove();
    }
  });
});
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
  count = 0;
});
