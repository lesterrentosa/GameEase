const time_el = document.querySelector('.watch .time');
const start_btn = document.getElementById('start');
const stop_btn = document.getElementById('pause');
const reset_btn = document.getElementById('reset');
const save_btn = document.getElementById('save');

let seconds = 0;
let interval ;

//Event listeners
start_btn.addEventListener('click', () =>{
	clearInterval(interval);
	interval = setInterval(timer, 1000);
	start.style.display = "none";
	pause.style.display = "block";
})
stop_btn.addEventListener('click', () =>{
	clearInterval(interval);
	start.style.display = "block";
	pause.style.display = "none";

})
reset_btn.addEventListener('click', () =>{
	 clearInterval(interval);
	 seconds = 0;
	 time_el.innerText = '00:00:00';
	 pause.style.display = "none";
     start.style.display = "block";
});
//timer function

function timer(){
	seconds++;

	let hrs = Math.floor(seconds / 3600);
	let mins = Math.floor((seconds-(hrs*3600))/ 60);
	let secs = seconds % 60;

	if(secs < 10) secs = '0' + secs;
	if(mins < 10) mins = '0' + mins;
	if(hrs < 10) hrs = '0' + hrs;

	time_el.innerText = `${hrs}:${mins}:${secs}`;
}
