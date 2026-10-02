// ===============================
// STUDENT HUB - SHARED JAVASCRIPT
// ===============================


// ===============================
// DASHBOARD - ADD TASK
// ===============================

const addTaskBtn = document.getElementById("addTaskBtn");
const taskForm = document.getElementById("taskForm");

if (addTaskBtn && taskForm) {

    addTaskBtn.addEventListener("click", function () {
        taskForm.style.display = "flex";
    });

}


// ===============================
// DASHBOARD - SAVE TASK
// ===============================

const saveTaskBtn = document.getElementById("saveTaskBtn");

const taskTitle = document.getElementById("taskTitle");
const taskCourse = document.getElementById("taskCourse");
const taskDeadline = document.getElementById("taskDeadline");

const tasksSection = document.querySelector(".tasks-section");

if (
    saveTaskBtn &&
    taskTitle &&
    taskCourse &&
    taskDeadline &&
    tasksSection
) {

    saveTaskBtn.addEventListener("click", function () {

        if (
            taskTitle.value === "" ||
            taskCourse.value === "" ||
            taskDeadline.value === ""
        ) {
            alert("Please fill in all task details.");
            return;
        }

        const newTask = document.createElement("div");

        newTask.classList.add("task");

        newTask.innerHTML = `
            <div>
                <h3>${taskTitle.value}</h3>
                <p>${taskCourse.value}</p>
                <span>Deadline: ${taskDeadline.value}</span>
            </div>

            <div class="task-actions">
                <button class="complete-btn">✓ Complete</button>
                <button class="delete-btn">Delete</button>
            </div>
        `;

        tasksSection.appendChild(newTask);

        taskTitle.value = "";
        taskCourse.value = "";
        taskDeadline.value = "";

        taskForm.style.display = "none";
    });

}


// ===============================
// DASHBOARD - COMPLETE TASK
// ===============================

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("complete-btn")) {

        const task = event.target.closest(".task");

        task.classList.toggle("completed");

        if (task.classList.contains("completed")) {

            event.target.textContent = "✓ Completed";

        } else {

            event.target.textContent = "✓ Complete";

        }

    }

});


// ===============================
// DASHBOARD - DELETE TASK
// ===============================

document.addEventListener("click", function (event) {

    if (event.target.classList.contains("delete-btn")) {

        const task = event.target.closest(".task");

        task.remove();

    }

});


// ===============================
// REGISTRATION FORM
// ===============================

const registerForm = document.getElementById("registerForm");

if (registerForm) {
    registerForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        const fullName = document.getElementById("fullName").value;
        const email = document.getElementById("registerEmail").value;
        const password = document.getElementById("registerPassword").value;
        const confirmPassword = document.getElementById("confirmPassword").value;

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        try {
            const response = await fetch(
                "http://localhost:8080/api/auth/register",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        fullName: fullName,
                        email: email,
                        password: password
                    })
                }
            );

            const message = await response.text();

            if (response.ok) {
                alert(message);
                window.location.href = "index.html";
            } else {
                alert("Registration failed: " + message);
            }

        } catch (error) {
            console.error("Registration error:", error);
            alert("Unable to connect to the server.");
        }
    });
}


// ===============================
// LOGIN FORM
// ===============================

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();

        alert("Login successful!");

        window.location.href = "dashboard.html";

    });

}