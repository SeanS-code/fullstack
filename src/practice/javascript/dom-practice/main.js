const container = document.querySelector("#container")

const content = document.createElement("div")
content.classList.add("content")

content.textContent = "This is the text-content"

const para = document.createElement("p")
para.textContent = "Hey I'm red!"
para.style.color = "red"

const header = document.createElement("h3")
header.textContent = "I'm a blue h3!"
header.style.color = "blue"

const newdiv = document.createElement("div")
newdiv.style.border = "1px solid black"
newdiv.style.backgroundColor = "pink"

const newheader = document.createElement("h1")
newheader.textContent = "I'm in a div!"

const newpara = document.createElement("p")
newpara.textContent = "ME TOO"

newdiv.appendChild(newheader)
newdiv.appendChild(newpara)

container.appendChild(content)
container.appendChild(para)
container.appendChild(header)
container.appendChild(newdiv)