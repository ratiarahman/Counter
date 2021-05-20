const counters = document.querySelectorAll('.counter');
// console.log(counter);
const speed = 300;

counters.forEach(counter => {
	const update = () => {
		const target = +counter.getAttribute('data-target');	
		// console.log(typeof target);	
		let count = +counter.innerHTML;
		// console.log(typeof count);
		const increment = target / speed;
		// console.log(increment);
		// console.log(count);

		if(count < target){
			counter.innerHTML = Math.ceil(count + increment);
			setTimeout(update, 1);
		}else{
			count.innerHTML = target;
		}
	}
	update();
})

