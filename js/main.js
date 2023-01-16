const swiper = new Swiper('.swiper', {
	loop: true,
	slidesPerView: 2,
	spaceBetween: 20,
	navigation: {
		nextEl: '.swiper-button-right',
		prevEl: '.swiper-button-left',
	},
});


let map;
function initMap() {
	map = new google.maps.Map(document.getElementById("map"), {
		center: { lat: 37.231469756285684, lng: -8.628402703988792 },
		zoom: 13,
	});
}

window.initMap = initMap;