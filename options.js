var commandprompt = document.getElementById("commandprompt");
commandprompt.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        executeCommand(e);
    }
});

function executeCommand(e) {
    var test = document.getElementById('commandprompt').value
    document.getElementById('commandprompt').value = ""
        
    if (test === 'save') {
        download()
    } else if (test === 'reset') {
        reset()
    } else if (test === 'source') {
        window.open('https://github.com/erdavids/Just-Write','_blank','noopener')
    }
}

var updateMetrics = setInterval(updateMetrics, 4000);

function updateMetrics() {
    var text = document.getElementById("page").value;
    console.log(text);
    
    if (text) {
        document.getElementById("wordcount").textContent = text.split(' ').length + ' words'
    } else {
        document.getElementById("wordcount").textContent = "0 words"
    }
}

function download(){
    var text = document.getElementById("page").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    anchor.download = "my-filename.txt";
    anchor.href = window.URL.createObjectURL(blob);
    anchor.target ="_blank";
    anchor.style.display = "none"; // just to be safe!
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
}

function reset() {
    document.getElementById("page").value = ""
}