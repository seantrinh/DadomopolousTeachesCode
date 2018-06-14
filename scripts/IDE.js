var firepad;
function init() {
    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyBcGbIzKy8Q60t3Oy0MAzLwpHMy9N4VsZ8",
        authDomain: "cs-347.firebaseapp.com",
        databaseURL: "https://cs-347.firebaseio.com",
        projectId: "cs-347",
        storageBucket: "cs-347.appspot.com",
        messagingSenderId: "778537980824"
    };
    firebase.initializeApp(config);
    //// Get Firebase Database reference.
    var firepadRef = getExampleRef();
    //// Create CodeMirror (with line numbers and the JavaScript mode).
    var codeMirror = CodeMirror(document.getElementById('firepad-container'), {
        lineNumbers: true,
        mode: 'python'
    });
    //// Create Firepad.
    firepad = Firepad.fromCodeMirror(firepadRef, codeMirror, {
        defaultText: '# Python Editing with Dadamapolous!\nprint ("Hello World!")'
    });
}
// Function to upload file 
function loadFileAsText(){
    var fileToLoad = document.getElementById("fileToLoad").files[0];

    var fileReader = new FileReader();
    fileReader.onload = function(fileLoadedEvent){
        var textFromFileLoaded = fileLoadedEvent.target.result; //String of the text
        //document.getElementById("inputTextToSave").value = textFromFileLoaded;
        //alert(textFromFileLoaded); //Will just print the string in an alert box
        firepad.setText(textFromFileLoaded);
        //Will have to take this string and upload it to Firebase to display
        //   on the screen
        // Will work on merging with the rest of the team next
    };

    fileReader.readAsText(fileToLoad, "UTF-8");
}



// Helper to get hash from end of URL or generate a random one.
function getExampleRef() {
    var ref = firebase.database().ref();
    var hash = window.location.hash.replace(/#/g, '');
    if (hash) {
        ref = ref.child(hash);
    } else {
        ref = ref.push(); // generate unique location.
        window.location = window.location + '#' + ref.key; // add it as a hash to the URL.
    }
    if (typeof console !== 'undefined') {
        console.log('Firebase data: ', ref.toString());
    }
    return ref;
}

// output functions are configurable.  This one just appends some text
// to a pre element.
function outf(text) {
    var mypre = document.getElementById("output");
    mypre.innerHTML = mypre.innerHTML + text;
}
function builtinRead(x) {
    if (Sk.builtinFiles === undefined || Sk.builtinFiles["files"][x] === undefined)
        throw "File not found: '" + x + "'";
    return Sk.builtinFiles["files"][x];
}
// Here's everything you need to run a python program in skulpt
// grab the code from your textarea
// get a reference to your pre element for output
// configure the output function
// call Sk.importMainWithBody()
function runit() {
    var prog = firepad.getText();
    var mypre = document.getElementById("output");
    mypre.innerHTML = '';
    Sk.pre = "output";
    Sk.configure({output:outf, read:builtinRead});
    (Sk.TurtleGraphics || (Sk.TurtleGraphics = {})).target = 'mycanvas';
    var myPromise = Sk.misceval.asyncToPromise(function() {
        return Sk.importMainWithBody("<stdin>", false, prog, true);
    });
    myPromise.then(function(mod) {
        console.log('success');
    },
		   function(err) {
                       mypre.innerHTML = err.toString();
		       console.log(err.toString());
		   });
}

function download() {
    var content=firepad.getText();
    //dl.href="data:text/plain,"+encodeURIComponent(content);
    var element = document.createElement('a');
    var nameOfFile = "file.py";
    element.setAttribute('href','data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download',nameOfFile);

    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
}
