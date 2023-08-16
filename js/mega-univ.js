// 수강 과목 추가 이벤트
const plusModal = document.getElementsByClassName("plusModal")[0];
const plusContents = document.getElementsByClassName("plusContents")[0];
const plusBtn = document.getElementsByClassName("plus")[0];
const plusClose = document.getElementById("plusClose");

plusBtn.addEventListener("click", () => {
  plusModal.style.display = "block";
});

plusClose.addEventListener("click", () => {
  plusModal.style.display = "none";
});

// 로그아웃-취소 이벤트
const logoutModal = document.getElementsByClassName("logoutModal")[0];
const logoutContents = document.getElementsByClassName("logoutContents")[0];
const logoutBtn = document.getElementsByClassName("logout")[0];
const logoutClose = document.getElementById("logoutClose");

logoutBtn.addEventListener("click", () => {
  logoutModal.style.display = "block";
});

logoutClose.addEventListener("click", () => {
  logoutModal.style.display = "none";
});

//수상 과목 생성 버튼
const plusNew = document.getElementById("plusNew");
const table = document.getElementsByClassName("subject-name")[0];

plusNew.addEventListener("click", () => {
  const subjectId = document.getElementsByClassName("subject-id")[0].value;
  const professor = document.getElementsByClassName("professor")[0].value;
  const grade = document.getElementsByClassName("grade")[0].value;
  const classType = document.getElementsByClassName("classType")[0].value;

  const newRow = table.insertRow();
  const newCell0 = newRow.insertCell(0);
  const newCell1 = newRow.insertCell(1);
  const newCell2 = newRow.insertCell(2);
  const newCell3 = newRow.insertCell(3);
  const newCell4 = newRow.insertCell(4);

  let button = document.createElement("button");
  let buttonText = document.createTextNode("설정");
  button.appendChild(buttonText);

  newCell0.innerText = subjectId;
  newCell1.innerText = professor;
  newCell2.innerText = grade;
  newCell3.innerText = classType;
  newCell4.appendChild(button);
  newRow.style = "border-bottom : 1px solid rgb(0, 0, 0, 0.1)";

  plusModal.style.display = "none";

  // const newRow = table.insertRow();
  // const cells = [];
  // for (let i = 0; i < 5; i++) {
  //   cells.push(newRow.insertCell(i));
  //   cells[i].innerText;
  // }
  // cells[0] = subjectId;
  // cells[1] = professor;
  // cells[2] = grade;
  // cells[3] = classType;
  // cells[4].appendChild(button);
  // newRow.style = "border-bottom : 1px solid rgb(0, 0, 0, 0.1)";
});

//   // 테이블에서 행 삭제
//   function deleteRow() {
//     var table = document.getElementById("myTable").getElementsByTagName('tbody')[0];
//     var lastRow = table.rows.length - 1;
//     table.deleteRow(lastRow);
//   }

// 설정 버튼
const setBtn = document.getElementsByClassName("setBtn")[0];
// const radioForm = document.getElementsByClassName("radioForm")[0];
const as = document.getElementsByClassName("as")[0];

setBtn.addEventListener("click", () => {
  as.style.display = "block";
});
