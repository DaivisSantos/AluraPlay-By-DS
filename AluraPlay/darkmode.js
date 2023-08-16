const darkmodebnt = document.getElementById('btnDark')
const body = document.body

let clicou = darkmodebnt.addEventListener("click", (clicou) => {
    body.classList.toggle('darkmode')
})