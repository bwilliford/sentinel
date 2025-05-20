//Initializing type text
let typeCode;
const valueProps = [
    "// more consistent",
    "// more reliable",
    "// more scalable",
    "// more compliant",
];
const delay = 100;

//Run the type text when the DOM loads
document.addEventListener("DOMContentLoaded", function () {
    typeCode = document.getElementById("typeCode");
    typeStrings(valueProps, delay);

    setTimeout(() => {
        document.getElementById("loaderOverlay").classList.toggle("active");
    }, 1000);

    AOS.init();
});

//Type text functions
function typeStrings(strings, delay) {
    let index = 0;

    function typeNext() {
        // Erase
        typeCode.textContent = "";
        if (index < strings.length) {
            const string = strings[index];
            typeString(string, 0);
            index++;
        }
        else if (index == strings.length) {
            index = 0;
            typeNext();
        }
    }

    function typeString(string, charIndex) {
        if (charIndex < string.length) {
            // Output one character of the string
            typeCode.textContent += string[charIndex];
            setTimeout(() => {
                typeString(string, charIndex + 1);
            }, delay);
        } 
        else {
            
            // Move to the next string
            setTimeout(() => {
                typeNext();
            }, delay*10);
            
        }
    }

    // Start typing the first string
    typeNext();
}

//Nav
function toggleNav() {
  document.getElementById("navWrapper").classList.toggle("active");
  document.getElementById("navTrigger").classList.toggle("active");
}

//Scrollbar
let winTop = window.scrollY;
let docHeight = document.body.scrollHeight;
let winHeight = window.innerHeight;
let initialScroll = Math.floor((winHeight/docHeight)*100);
document.getElementById('main-progressbar').style.height = initialScroll+'%';

document.addEventListener('scroll', function(e) {
  winTop = window.scrollY;
  totalScroll = Math.floor(((winTop + winHeight)/docHeight)*100);
  document.getElementById('main-progressbar').style.height = totalScroll+'%';
});