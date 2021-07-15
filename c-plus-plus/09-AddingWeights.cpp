#include <iostream>

using namespace std;

const int OUNCES_IN_A_POUND = 16;
int main() {
    int item1Pounds, item1Ounces;
    int item2Pounds, item2Ounces;
    int combinedWeightPounds, combinedWeightOunces;
    int tempSumOfOunces, carriedOverPounds;


    cout << "Please enter the weight of two items" << endl;
    cout << "For each item, give its weight in pounds ";
    cout << "and ounces, seperated by a space: " <<endl;
    cout << "Item #1: ";
    cin>>item1Pounds>>item1Ounces;
    cout << "Item #2: ";
    cin>>item2Pounds>>item2Ounces;

    tempSumOfOunces = item1Ounces + item2Ounces;
    combinedWeightOunces = tempSumOfOunces % OUNCES_IN_A_POUND;
    carriedOverPounds = tempSumOfOunces / OUNCES_IN_A_POUND;
    combinedWeightOunces = item1Pounds + item2Pounds + carriedOverPounds;

    cout<<"The combined weight is "<<combinedWeightPounds<<" pounds";
    cout<<"and "<<combinedWeightOunces<<" ounces."<<endl;

    return 0;
}
 
