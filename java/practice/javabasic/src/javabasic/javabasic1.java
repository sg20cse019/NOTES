package javabasic;
import java.util.Scanner;

public class javabasic1 {
    public static void main(String[] args) {
        System.out.println("Enter the number of terms: ");
        Scanner scanner = new Scanner(System.in);
        int n = scanner.nextInt();
        
        int a = 0, b = 1;
        System.out.println("Fibonacci Series up to " + n + " terms:");
        
        for (int i = 1; i <= n; ++i) {
            System.out.print(a + " ");
            int next = a + b;
            a = b;
            b = next;
        }

        scanner.close();
    }
}
