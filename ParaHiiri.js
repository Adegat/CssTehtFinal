
const wrapper = document.querySelector('.space');
const layerOne = document.querySelector('.lentomassina');
const layerTwo = document.querySelector('.avaruusmies');
const mouse = document.getElementById('mouse');
const mouse_center = document.getElementById('mouse-center');

// Find page center
const cx = wrapper.clientWidth/2;
const cy = wrapper.clientHeight/2;

document.addEventListener('mousemove', (evt) => {

    let mouseX = evt.pageX;
    let mouseY = evt.pageY;

    mouse.innerHTML = "From the top left<br> X: " + mouseX + ", Y: " + mouseY;

    let from_center_x = cx - mouseX;
    let from_center_y = cy - mouseY;
    console.log(from_center_x+from_center_y);
    mouse_center.innerHTML = "From the center<br> X: " + from_center_x + ", Y: " + from_center_y;


    layerTwo.style.transform = 'translateX(' + from_center_x/100 + '%) translateY(' + from_center_y/100 + '%)';
    layerOne.style.transform = 'translateX(' + from_center_x/350 + '%) translateY(' + from_center_y/350 + '%)';


});
