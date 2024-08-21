// class page {
//     String type;
//     int pages;
//     String brand;
//     int price;
// }

// public class notebook {
//     public static void main(String[] args) {
//         page p1 = new page();
//         System.out.println(p1.type = "ruled");
//         System.out.println(p1.pages = 300);
//         System.out.println(p1.brand = "papergrid");
// }    

// }
void updateprice(double arg) {
    price = arg;
}

void updatecolor(String arg) {
    color = arg;
}

class notebook {
    public static void main(String[] args) {
        System.out.println("main method started");
        pen p1 = new pen();
        p1.brand = "cello";
        p1.color = 25.00;
        p1.type = "ballpen";

        System.out.println(p1.brand + "\t" + p1.color + "\t" + p1.type + "\t" + p1.price);
        // updating the attribute of pen
        p1.updatecolor("blue");
        p1.updateprice("30.00");
        System.out.println(p1.brand + "\t" + p1.color + "\t" + p1.type + "\t" + p1.price);
        System.out.println("--------------------------");
        pen p2 = new pen();
        p2.brand = "reynolds";
        p2.color = "red";
        p2.type = "gelpen";
        System.out.println(p2.brand + "\t" + p2.color + "\t" + p2.type + "t" + p2.price);
        p2.updatecolor("green");
        p2.updateprice(50.00);
        System.out.println(p2.brand + "\t" + p2.color + "\t" + p2.type + "t" + p2.price);
        System.out.println("main program ended");

    }
}
