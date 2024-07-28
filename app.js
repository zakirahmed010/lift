// // Clousre in ECMA Script
// function parent(){
//     let name="Atish";
//     //return console.log("Name is : ", name);
//     return ()=>{
//         name="Raza";
//         console.log("Name is : ", name);
//     }
// }

// const clousre= parent();
// console.log(clousre);
// console.log(clousre());

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a, b); 


// const student={
//     firstName: "ALi",
//     lastName: "Raza",
//     rollNo: 179522,
//     age: 19,
// }

// const {
//     firstName: fName,
//     lastName: lName,
//     rollNo,
//     age
//  }= student;

//  console.log(`Student name is ${fName} ${lName}`, Roll No is ${rollNo} and age is ${age}.);



// const emptySum = (...rest) =>{
//     console.log(rest)
// }
// emptySum(2+4+5+10)
// emptySum(2+4+5+10)
// emptySum(5+3+2+10)


// function sum(...rest) {
//     let total = 0;
//     for (const rests of rest) {
//       total += rests;
//     }
//     return total;
//   }
  
//   console.log(sum(7, 5, 4));
//   console.log(sum(6, 4, 5, 2));
//   console.log(sum(3,2,5,3));


//   console.log("=================")
//   function findMinValue(arr) {
//     // Using Math.min with spread operator to find minimum value in array
//     return Math.min(...arr);
// }

// // Example usage:
// const numbers = [5, 3, 9, 1, 7];
// console.log("Minimum value:", findMinValue(numbers)); // Output: Minimum value: 1

// function concatenateArrays(arr1, arr2) {
//     // Concatenating arrays using spread operator
//     return [...arr1, ...arr2];
// }

// // Example usage:
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const concatenatedArray = concatenateArrays(arr1, arr2);
// console.log("Concatenated array:", concatenatedArray); 


// Array of image URLs
// const images = [
//     "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/206359/pexels-photo-206359.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=600",
//     "https://images.pexels.com/photos/531602/pexels-photo-531602.jpeg?auto=compress&cs=tinysrgb&w=600"
// ];

// let currentIndex = 0;
// const totalImages = images.length;
// const galleryImage = document.getElementById('galleryImage');
// const prevBtn = document.getElementById('prevBtn');
// const nextBtn = document.getElementById('nextBtn');

// function showImage() {
//     galleryImage.src = images[currentIndex];
// }
// nextBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//     showImage();
// });
// prevBtn.addEventListener('click', function() {
//     currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//     showImage();
// });





const lift = document.getElementById('lift');
const floorIndicator = document.getElementById('floor-indicator');

const floors = {
    0: 'Ground Floor',
    1: 'Floor 1',
    2: 'Floor 2',
    3: 'Floor 3',
    4: 'Floor 4',
    5: 'Floor 5',
    6: 'Floor 6'
};

const positions = {
    0: 'translateY(600px)',
    1: 'translateY(500px)',
    2: 'translateY(400px)',
    3: 'translateY(300px)',
    4: 'translateY(200px)',
    5: 'translateY(100px)',
    6: 'translateY(0px)'
};

function goToFloor(floor) {
    lift.style.transform = positions[floor];
    floorIndicator.textContent = floors[floor];
}

function goToGround() {
    lift.style.transform = positions[0];
    floorIndicator.textContent = floors[0];
}
