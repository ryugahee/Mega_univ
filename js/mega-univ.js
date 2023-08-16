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
/*
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

});*/

// 설정 버튼
const setBtn = document.getElementsByClassName("setBtn")[0];
// const radioForm = document.getElementsByClassName("radioForm")[0];
const as = document.getElementsByClassName("as")[0];

setBtn.addEventListener("click", () => {
  as.style.display = "block";
});

/*
GET    /subjects    // 모든 수강 과목 읽기 요청
GET    /subjects/1  // 1번 수강 과목 읽기 요청
POST   /subjects    // 수강 과목 생성 요청
PUT    /subjects/1  // 1번 수강 과목 수정 요청
DELETE /posts/1     // 1번 수강 과목 삭제 요청
*/

// 수강 과목 생성 GET
/*
const plusNew = document.getElementById("plusNew");

plusNew.addEventListener("click", () => {
  getData();
  plusModal.style.display = "none";
});

function getData() {
  fetch("http://localhost:5000/subjects")
    .then((res) => res.json())
    .then((data) => {
      const arr = [];
      for (const subjects of data) {
        arr.push(`<tr>`);
        arr.push(`<td>${subjects.title}</td>`);
        arr.push(`<td>${subjects.professor} 교수</td>`);
        arr.push(`<td>${subjects.credit}</td>`);
        arr.push(`<td>${subjects.type}</td>`);
        arr.push(`<td><button class="setBtn">설정</button></td>`);
        arr.push(`</tr>`);
      }

      document.getElementById("subjectJ").innerHTML = arr.join("");
    });
}
*/

// 수강 과목 POST
const plusNew = document.getElementById("plusNew");

plusNew.addEventListener("click", () => {
  const subjectId = document.getElementsByClassName("subject-id")[0].value;
  const professor = document.getElementsByClassName("professor")[0].value;
  const grade = document.getElementsByClassName("grade")[0].value;
  const classType = document.getElementsByClassName("classType")[0].value;

  let subjects = {
    subjectId: subjectId,
    professor: professor,
    grade: grade,
    classType: classType,
  };

  fetch("http://localhost:5000/subjects", {
    method: "POST",
    body: JSON.stringify(subjects),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  // 수강 과목 생성 GET
  fetch("http://localhost:5000/subjects")
    .then((res) => res.json())
    .then((data) => {
      const arr = [];
      for (const subjects of data) {
        arr.push(`<tr>`);
        arr.push(`<td>${subjects.title}</td>`);
        arr.push(`<td>${subjects.professor} 교수</td>`);
        arr.push(`<td>${subjects.credit}</td>`);
        arr.push(`<td>${subjects.type}</td>`);
        arr.push(`<td><button class="setBtn">설정</button></td>`);
        arr.push(`</tr>`);
      }

      document.getElementById("subjectJ").innerHTML = arr.join("");
    });
});

// 수강 과목 생성 PUT
/*
function putData() {
  fetch("http://localhost:5000/subjects", {
    method: "PUT",
    body: JSON.stringify(subjects),
    headers: { "content-type": "application/json" },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
*/

// 수강 과목 생성 DELETE
/*
function deleteData() {
  fetch("http://localhost:5000/subjects", {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
}
*/
