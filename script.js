
// const student =[];
// student.push( "walter","francis");
// console.log(student);

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".mastercard");

    products.forEach((product) => {
        const image = product.querySelector("img");

        product.addEventListener("mouseover", () => {
            image.style.display = "block";
            image.style.opacity = "1";
        });

        product.addEventListener("mouseout", () => {
            image.style.opacity = "0";
            setTimeout(() => {
                image.style.display = "none";
            }, 300);
        });
    });
});


  
  