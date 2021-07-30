import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class TicTacToe {
    //global - all the methods know it, static - accessible directly, no needs to make an object everytime access to it
    static ArrayList <Integer> playerPositions = new ArrayList<>();
    static ArrayList <Integer> cpuPositions = new ArrayList<>();

    public static void main(String[] args) {

        char[][] gameBoard = {     //2D array  - 3 x 3 with 2 spaces for symbols
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '},
                {'-', '+', '-', '+', '-'},
                {' ', '|', ' ', '|', ' '}};

        printGameBoard(gameBoard);

        while(true){        //while true just keep looping
            //Player
            Scanner scan = new Scanner(System.in);
            System.out.println("Enter your placement (1-9): ");
            int playerPos = scan.nextInt();       //position

            while(playerPositions.contains(playerPos) || cpuPositions.contains(playerPositions)) {   //keep asking until a correct position
                System.out.println("Position taken! Enter a correct position.");
                playerPos = scan.nextInt();
            }

            placePiece(gameBoard, playerPos, "player");

            String result = checkWinner();      //check the winner after each move
            if(result.length() > 0) {
                System.out.println(result);
                break;
            }

            //CPU
            Random rand = new Random();
            int cpuPos = rand.nextInt(9) + 1;

            while(playerPositions.contains(cpuPos) || cpuPositions.contains(cpuPositions)) {   //keep asking until a correct position
                cpuPos = rand.nextInt(9) + 1;
            }

            placePiece(gameBoard, cpuPos, "cpu");

            printGameBoard(gameBoard);

            result = checkWinner();      //print out the string as the return string value
            if(result.length() > 0) {
                System.out.println(result);
                break;
            }
        }
    }

    public static void printGameBoard(char[][] gameBoard) {   //print the gameBoard
        for(char[] row : gameBoard) {       //for each row inside the gameBoard
            for (char c : row) {     //for each column inside the row
                System.out.print(c);    //print for in-line. It does not add any new line
            }
            System.out.println();   //adds new line after the message gets displayed
        }
    }

    public static void placePiece(char[][] gameBoard, int pos, String user) {     //passing in a position and an user

        char symbol = ' ';      //initial symbol set as a space

        if(user.equals("player")) {       //since it is string so we use equals instead of ==
            symbol = 'X';
            playerPositions.add(pos);
        } else if (user.equals("cpu")) {
            symbol = 'O';
            cpuPositions.add(pos);
        }

        switch(pos) {
            case 1:
                gameBoard[0][0] = symbol;
                break;
            case 2:
                gameBoard[0][2] = symbol;
                break;
            case 3:
                gameBoard[0][4] = symbol;
                break;
            case 4:
                gameBoard[2][0] = symbol;
                break;
            case 5:
                gameBoard[2][2] = symbol;
                break;
            case 6:
                gameBoard[2][4] = symbol;
                break;
            case 7:
                gameBoard[4][0] = symbol;
                break;
            case 8:
                gameBoard[4][2] = symbol;
                break;
            case 9:
                gameBoard[4][4] = symbol;
                break;
        }
    }

    public static String checkWinner() {        //all the winning conditions

        List topRow = Arrays.asList(1, 2, 3);
        List midRow = Arrays.asList(4, 5, 6);
        List botRow = Arrays.asList(7, 8, 9);
        List leftCol = Arrays.asList(1, 4, 7);
        List midCol = Arrays.asList(2, 5, 8);
        List rightCol = Arrays.asList(3, 6, 9);
        List cross1 = Arrays.asList(1, 5, 9);
        List cross2 = Arrays.asList(7, 5, 3);

        List<List> winning = new ArrayList<List>();     //list relates to the collection
        winning.add(topRow);
        winning.add(midRow);
        winning.add(botRow);
        winning.add(leftCol);
        winning.add(midCol);
        winning.add(rightCol);
        winning.add(cross1);
        winning.add(cross2);

        for (List l : winning) {
            if(playerPositions.containsAll(l)) {
                return "Congradulations you won!";
            } else if (cpuPositions.containsAll(l)) {
                return "CPU wins! Sorry :( ";
            } else if (playerPositions.size() + cpuPositions.size() == 9) {
                return "CAT!";
            }
        }

        return "";
    }
}
