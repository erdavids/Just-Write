var commandprompt = document.getElementById("cp");
commandprompt.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        executeCommand(e);
    }
});

function executeCommand(e) {
    var test = document.getElementById('cp').value.split(' ')
    document.getElementById('cp').value = ""
    
    if (test[0].toLowerCase() === 'save' ) {
        download(test[1])
    } else if (test[0].toLowerCase() === 'reset') {
        reset()
    } else if (test[0].toLowerCase() === 'contribute') {
        window.open('https://github.com/erdavids/Just-Write','_blank','noopener')
    } else if (test[0].toLowerCase() === 'help') {
        window.open('https://github.com/erdavids/Just-Write/blob/master/GUIDE.md','_blank','noopener')
    }
}

var updateMetrics = setInterval(updateMetrics, 4000);

function updateMetrics() {
    var text = document.getElementById("page").value;
    console.log(text);
    
    if (text) {
        var len = text.split(' ').length

        document.getElementById("wordcount").textContent = len + ' words'

        var minutes = String(parseInt(len/240.0))
     
        document.getElementById("readtime").textContent = minutes + ' min read'
    } else {
        document.getElementById("wordcount").textContent = "0 words"
    }
}

function download(filename){
    var text = document.getElementById("page").value;
    text = text.replace(/\n/g, "\r\n"); // To retain the Line breaks.
    var blob = new Blob([text], { type: "text/plain"});
    var anchor = document.createElement("a");
    if (filename) {
        anchor.download = filename;
    } else {
        anchor.download = "justwritefile.txt"
    }
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