package test1;

class Mobile1 {
    boolean batterycapacity;
    boolean currency;

    Mobile1(boolean batterycapacity, boolean currency) {
        this.batterycapacity = batterycapacity;
        this.currency = currency;
    }
}

public class mobile {
    public static void main(String[] args) {
        Mobile1 m1 = new Mobile1(true, true);

        if (m1.batterycapacity == true&& m1.currency==true) {
            boolean voicecalls = true;
            boolean playgames = true;
            boolean sms = true;
            System.out.println("Can be used");
        } else {
            boolean voicecalls = false;
            boolean playgames = false;
            boolean sms = false;
            System.out.println("Cannot be used");
        }
    }
}
