import './style.scss'

const main = document.querySelector(".container-fluid")
const name = document.getElementById("name")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const age = document.getElementById("age")
const btnUpload = document.querySelector(".upload")
const btnDownload = document.querySelector(".download")

btnUpload.addEventListener("click", function () {
    uploadInformationLocalStorage()
})

btnDownload.addEventListener("click", function () {
    downloadInformationLocalStorage()
})

function uploadInformationLocalStorage() {
    localStorage.setItem("name", name.value)
    localStorage.setItem("lastName", lastName.value)
    localStorage.setItem("email", email.value)
    localStorage.setItem("age", age.value)
}

function downloadInformationLocalStorage() {
    let name = localStorage.getItem("name")
    let lastName = localStorage.getItem("lastName")
    let email = localStorage.getItem("email")
    let age = localStorage.getItem("age")
    main.innerHTML += `
    <table class="table">
        <thead>
            <tr>
            <th scope="col">Name</th>
            <th scope="col">LastFirst</th>
            <th scope="col">Email</th>
            <th scope="col">Age</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            <th>${name}</th>
            <td>${lastName}</td>
            <td>${email}</td>
            <td>${age}</td>
            </tr>
        </tbody>
    </table>
    `
}

