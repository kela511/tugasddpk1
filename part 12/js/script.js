//geteelement
//const el = document.getElementsByTagName('div')
//const el= document.getElementById('idv-1')
//const el = document.getElementsByClassName('div-2')
// const el = document.querySelector('#div-1')

//merubah html
//  const p = document.getElementById('div-1')
// p.innerHTML ="<p>Hello Word</p>"

// console.log(p);

// const input = document.getElementById('input')
// //input.setAttribute('type', 'checkbox')
// input.style.borderColor = 'red'
// console.log(input);

//enambah dan menghapus html

// const el = document.createElement("p")
// el.innerHTML = 'hello owrd dari tag p'
// const elid = document.getElementById('div-1')
// elid.appendChild(el)
// console.log(elid);

// elid.removeChild(el)

//dom event
let halo = document.getElementById('halo')
halo.addEventListener("mouseenter", () =>{
    halo.style.color = "yellow"},

    
halo.addEventListener("mouseleave", () =>{
    halo.style.color="black"
})
)
let lampu= document.getElementById('lampu')
let saklar = document.getElementById('saklar')
let menyala = false
saklar.addEventListener('click', () => {
    menyala = !menyala
    lampu.style.color = menyala ? "yellow" : "black"
})

let btn = document.getElementById('btn')
let tampil = false
btn.addEventListener('click', () => {
    tampil = !tampil
    document.getElementById('boom').innerHTML = tampil ? "BOOM" : ""
})
