Let’s convert a temperature from Fahrenheit (F) to Celsius (C).

The formula is the following:

C = (F - 32) / 1.8C=(F−32)/1.8



#include <iostream>

int main() {
  
  double tempf = 83.0;
  double tempc;
  
  tempc = (tempf - 32) / 1.8;
  
  std::cout << "The temp is " << tempc << " degrees Celsius.\n";
  
}
