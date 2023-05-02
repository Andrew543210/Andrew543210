// // 1
// for (let elem of document.body.children) {
//     if (elem.matches('a[href$="zip"]')) {
//     alert("Посилання на архів: " + elem.href );
//     }
//     }
// // 2    
// let chapter = document.querySelector('.chapter'); // LI
// alert(chapter.closest('.book')); // UL
// // 3
// elem.hidden = true;
// // 4
// <script>
// alert(document.body.dataset.about); // Elephants
// </script>
// // 5
// let div2 = div.cloneNode(true); // клонувати елемент
// div2.querySelector('strong').innerHTML = 'Bye there!'
// // 5
// elem.classList.add("class")
// elem.classList.remove("class")
// elem.classList.toggle("class")
// elem.classList.contains("class")
// // 6
// div.style.cssText=`color: red !important;
// background-color: yellow;
// width: 100px;
// text-align: center;
// `;
// // 7
// // expand the element to the full content height
// element.style.height = `${element.scrollHeight}px`;
// // 8
// window.scrollBy(0,10)
// window.scrollTo(0,0)
// // 9
// setTimeout(sayHi, 1000, "Привіт", "Джон"); // Привіт, Джон
// setTimeout("alert('Привіт')", 1000); 
// let timerId = setInterval(func|code, [delay], [arg1], [arg2], ...)

let seconds = 0;
let minutes = 0;
let hours = 0;
let interval;

function startTimer() {
  interval = setInterval(function() {
    seconds++;
    if (seconds == 60) {
      seconds = 0;
      minutes++;
      if (minutes == 60) {
        minutes = 0;
        hours++;
      }
    }
    displayTimer();
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
}

function clearTimer() {
  clearInterval(interval);
  seconds = 0;
  minutes = 0;
  hours = 0;
  displayTimer();
}

function displayTimer() {
  let sec = seconds < 10 ? "0" + seconds : seconds;
  let min = minutes < 10 ? "0" + minutes : minutes;
  let hrs = hours < 10 ? "0" + hours : hours;
  document.getElementById("timer").innerHTML = hrs + ":" + min + ":" + sec;
}
