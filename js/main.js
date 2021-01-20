document.addEventListener("DOMContentLoaded", function(){
	let open = document.querySelector('.fas.fa-bars.menu__collapse');
	let close = document.querySelector('.mobile-menu__close');
	let menu = document.querySelector('.mobile-menu');
	let body = document.querySelector('body');
	let slide_quote = document.querySelectorAll('.quote__item') , control = document.querySelectorAll('.quotes__control li');
	/*collapse menu*/
	open.onclick = function(){
		menu.classList.add('active');
		body.classList.add('fixedBody');

	}
	close.onclick = function(){
		menu.classList.remove('active');
		body.classList.remove('fixedBody');
	}
	/***/

	/*Slide Quote*/
	/*Handle Click*/
	for(let i = 0 ; i < control.length ; i++){
		control[i].onclick = function(){
			for(let j = 0 ; j < control.length ; j++){
				control[j].classList.remove('active');
				slide_quote[j].classList.remove('active')
			}
			let index = 0;
			let target = this;
			for(;target = target.previousElementSibling;index++){}
			this.classList.add('active');
			slide_quote[index].classList.add('active')
		}
	}


	/*auto slide*/
	function auto(){
		let timer = setInterval(function(){
			let active_slide = document.querySelectorAll('.quote__item.active')[0];
			let index = 0;
			for(let j = 0 ; j < control.length ; j++){
				control[j].classList.remove('active');
				slide_quote[j].classList.remove('active')
			}
			for(;active_slide = active_slide.previousElementSibling;index++){}
			if(index === slide_quote.length -1){
				control[0].classList.add('active');
				slide_quote[0].classList.add('active');
			}
			else{
				control[index].nextElementSibling.classList.add('active');
				slide_quote[index].nextElementSibling.classList.add('active');
			}
		}, 5000)
		for(let k = 0 ; k < control.length ; k++){
			// control[k].addEventListener("click", function(){
			// 	clearInterval(timer)
			// })
			control[k].addEventListener('click', () =>{
				clearInterval(timer)
			})
		}
	}
	auto()

},false)