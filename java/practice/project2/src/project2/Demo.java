package project2;

public class Demo {
    public static void main(String[] args) {
        int startingBal = 500;
        int endingBal = 0;
        int[] itemPrices = {12, 400, 32, 34, 87, 90};
        int i = 0;

        System.out.println("Starting balance: " + startingBal);

        while (i < itemPrices.length && startingBal >= endingBal) {
            startingBal -= itemPrices[i];
            i++;
            System.out.println("Remaining balance after purchase " + i + ": " + startingBal);
        }

        System.out.println("Insufficient balance.");
        System.out.println("Total number of items purchased: " + (i - 1)); // Subtract 1 to exclude the last failed purchase
    }
}

