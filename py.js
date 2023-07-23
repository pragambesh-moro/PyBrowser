let ed = ace.edit("editor", {
	value: (null === localStorage.getItem("py_thing_code")) ? "print('Hello')":localStorage.py_thing_code,
	mode: "ace/mode/python",
	theme: "ace/theme/terminal",
	fontSize: 16
})
ed.on("change",()=>{localStorage.py_thing_code = ed.getValue()})

function run(){
	pydiv.innerHTML = ed.getValue();
	res.innerText = ""
	brython({
		ids: ["pydiv"]
	})
}

console.log = (text) => {
	let p = document.createElement('pre')
	p.innerText = text;
	res.appendChild(p)
}
console.error = (text) => {
	let p = document.createElement('pre')
	p.className = "err"
	p.innerText = text;
	res.appendChild(p)
}

document.onkeydown = e=>{
	if(e.key == "Enter" && (e.ctrlKey || e.metaKey)){
		run()
	}
}

if (ed.getValue().startsWith("##a")) {
    overlay.style.display="block"
}