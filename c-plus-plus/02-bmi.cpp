It is computed by taking the individual’s weight in kilograms (kg) and dividing it by the square of their height in meters (m²)
bmi= weight^2/height 


#include <iostream>

int main() {
  
  double height, weight, bmi;
  
  // Ask user for their height
  
  std::cout << "Type in your height (m): ";
  std::cin >> height;
  
  // Now ask the user for their weight and calculate BMI
  
  std::cout << "Type in your weight (kg): ";
  std::cin >> weight;
 
  bmi = weight / (height * height);
 
  std::cout << "Your BMI is " << bmi << "\n";
 
}
