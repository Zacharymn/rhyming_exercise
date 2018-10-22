const frames = document.querySelectorAll(".frame");
const covers = document.querySelectorAll(".cover");
const mainContent = document.querySelector(".content");
const rhymeWords = document.querySelectorAll(".word_to_rhyme");
const hiddenWords = document.querySelectorAll(".word_behind");

frames.forEach((frame, index) => {
	frame.addEventListener("click", (event) => {
		covers[index].classList.toggle("clicked");
		// covers[index].firstElementChild.classList.toggle(".clicked")
		// console.log(covers[index].firstElementChild);
		let rhymeIndex = Math.floor(index/4);
		// console.log(rhymeWords[rhymeIndex]);
		// console.log(hiddenWords[index]);
			if(hiddenWords[index].textContent === rhymeWords[rhymeIndex].textContent) {
				covers[index].parentElement.style.background = "#33FF33";
			}else {covers[index].parentElement.style.background = "#FF3333";}
	});
});

// rhymeWords.forEach((word) => {
// 	console.log(word.textContent);
// });

// hiddenWords.forEach((word) => {
// 	console.log(word.textContent);
// })

// frames.forEach((frame) => {
// 	console.log(frame);
// })