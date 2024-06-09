import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const buyBtn = document.querySelector(".hero-btn");
const orderForm = document.querySelector(".backdrop");
const closeForm = document.querySelector(".close_form");
const sendForm = document.querySelector(".modal-send-btn")
const formField = document.querySelectorAll(".modal-field")

buyBtn.addEventListener("click", (event) => {
    event.preventDefault;
    orderForm.classList.add("is-open");
})

closeForm.addEventListener("click", (event) => {
    event.preventDefault;
    orderForm.classList.remove("is-open");
})

sendForm.addEventListener("click", (event) => {
    event.preventDefault;
    if(formField.values){
        iziToast.success({
            title: 'Success!',
            position: 'center',
            message: 'Thank you! We will call you back within 15min.',
        }); 
        orderForm.classList.remove("is-open");
        formField.values = "";
    } else {
        iziToast.warning({
            title: 'Caution',
            position: 'center',
            message: 'You should fill in all fields!',
        });
    }
})