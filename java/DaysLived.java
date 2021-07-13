import java.util.Scanner;

class DaysLived {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        int day;
        int year;
        int month;
        int day2; //today
        int year2; //today's year
        int month2; //today's month
        do {
            System.out.print("Enter the year of birth: ");
            year = scanner.nextInt();
        } while (year < 1000 || year > 2019);

        do {
            System.out.print("Enter the month of birth: ");
            month = scanner.nextInt();
        } while (month < 1 || month > 12);

        do {
            System.out.print("Enter the day of birth: ");
            day = scanner.nextInt();
        } while (day < 1 || day > 31);


        do {
            System.out.print("Enter today's year: ");
            year2 = scanner.nextInt();
        } while (year2 < 1000 || year2 > 2050);

        do {
            System.out.print("Enter today's month: ");
            month2 = scanner.nextInt();
        } while (month2 < 1 || month2 > 12);

        do {
            System.out.print("Enter today: ");
            day2 = scanner.nextInt();
        } while (day2 < 1 || day2 > 31);


        int year_leap;
        int[] month_day = {31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

        if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
            year_leap = 366;
            month_day[1] = 29;
        } else {
            month_day[1] = 28;
            year_leap = 365;
        }


        int userYear = 0;
        int userMonth;
        int userDay;

        if (year <= year2) {
            userYear = year2 - year;
        } else System.out.printf("Error!!! %n");

        if (month > month2) {
            userYear--;
            userMonth = month2 + 12 - month;
        } else userMonth = month2 - month;

        if (day > day2) {
            userMonth--;
            userDay = day2 + month_day[userMonth] - day;
        } else userDay = day2 - day;


        int day_year = 0;
        int day_month = 0;
        int day_age = 0;


        while (year < year2 - 1) {

            if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
                year_leap = 366;
                month_day[1] = 29;
            } else {
                year_leap = 365;
                month_day[1] = 28;

            }
            year++;
            day_year = day_year + year_leap;
        } 

        day_month = month_day[1] * userMonth + userDay; // 31 days in a month
        day_age = day_year + day_month;

        System.out.printf("------------------------------------ %n");
        System.out.println("Your age is " + userYear + " with " + userMonth + " months and " + userDay + " days.");
        System.out.println("You have lived in the world for " + day_age + " days.");

    } 
}
