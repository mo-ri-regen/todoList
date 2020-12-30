/*
ボタンを押すとテキストボックスに書かれた内容を取得し,
リストを作成する.
*/

const body=document.querySelector("body");
const input=document.querySelector("input");
//const input=document.getElementById("input"); //  こちらでもよい
const button=document.querySelector("button");

button.addEventListener("click",function(){

    //テキストデータ取得
    const text=input.value;
    
    //<ul>...</ul>作成
    const ul=document.createElement("ul");
    body.appendChild(ul);

    //<ul>
    //  <li>{テキストデータ}</li>
    //</ul>
    //を作成
    const li=document.createElement('li');
    li.innerText=text;
    const list=ul.appendChild(li);
    
});