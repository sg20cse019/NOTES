// public class product {
//     public static void main(String[] args) {
//         product p1 = new product();
//         p1.brand = "supra";
//         p1.price = 10000000;
//         p1.quality = "2nd hand";
//         p1.purchase = "yes";
//         p1.ratings = 5;
//         System.out.println("enter the brand name" + p1.brand);
//         System.out.println("enter the price" + p1.price);
//         System.out.println("enter the quality" + p1.quality);
//         System.out.println("interested to purchase" + p1.purchase);
//         System.out.println("give the ratings" + p1.ratings);
//     }
// }

// class product {
//     String brand;
//     double price;
//     String quality;
//     boolean purchase;
//     float ratings;
// }

public class Product {
    public static void main(String[] args) {
        Product p1 = new Product();
        p1.brand = "supra";
        p1.price = 10000000;
        p1.quality = "2nd hand";
        p1.purchase = true;
        p1.ratings = 5;
        System.out.println("Brand: " + p1.brand);
        System.out.println("Price: " + p1.price);
        System.out.println("Quality: " + p1.quality);
        System.out.println("Interested to purchase: " + p1.purchase);
        System.out.println("Ratings: " + p1.ratings);
    }
}

// class Product {
// String brand;
// double price;
// String quality;
// boolean purchase;
// float ratings;
// }
public class Product {
    private String brand;
    private double price;
    private int quality;
    private int purchase;
    private double ratings;
}