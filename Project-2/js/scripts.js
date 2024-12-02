// Array to store cars
const carArray = [];

// Select elements
const carForm = document.getElementById("car-form");
const carNameInput = document.getElementById("car-name");
const carCategoryInput = document.getElementById("car-category");
const carList = document.getElementById("cars");

// Add car to array and update UI
function addCar(event) {
  event.preventDefault();

  // Get car details
  const carName = carNameInput.value.trim();
  const carCategory = carCategoryInput.value;

  // Validate input
  if (carName === "") {
    alert("Please enter a car name.");
    return;
  }

  carArray.push({ name: carName, category: carCategory });

  carForm.reset();

  displayCars();
}

// Display cars in the list
function displayCars() {
  // Clear current list
  carList.innerHTML = "";

  // Loop through cars and display them
  carArray.forEach((car, index) => {
    const li = document.createElement("li");
    li.textContent = `${car.name} (${car.category})`;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px";
    
    // Delete car on button click
    deleteButton.addEventListener("click", () => deleteCar(index));
    li.appendChild(deleteButton);

    carList.appendChild(li);
  });
}
// Delete car from array and update UI
function deleteCar(index) {
  carArray.splice(index, 1);
  displayCars();
}
// Event listener for form submission
carForm.addEventListener("submit", addCar);