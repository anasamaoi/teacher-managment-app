
document.getElementById("teacherForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const subject = document.getElementById("subject").value;
  const school = document.getElementById("school").value;
  const phone = document.getElementById("phone").value;
  const notes = document.getElementById("notes").value;

  const teacher = { name, subject, school, phone, notes, date: new Date().toLocaleString("ar") };

  let teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  teachers.push(teacher);
  localStorage.setItem("teachers", JSON.stringify(teachers));

  this.reset();
  renderTeachers();
});

function renderTeachers() {
  const list = document.getElementById("teacherList");
  list.innerHTML = "";
  const teachers = JSON.parse(localStorage.getItem("teachers")) || [];
  teachers.forEach(t => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${t.name}</strong> - ${t.subject} - ${t.school}<br/>📞 ${t.phone}<br/>📝 ${t.notes}<br/>📅 ${t.date}`;
    list.appendChild(li);
  });
}

renderTeachers();
