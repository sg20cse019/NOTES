class register {
    boolean registeration = true;

    void check() {
        if (registeration == false) {
            System.out.println("can continue");
        } else {
            System.out.println("cannot continue");
        }
    }
}

public class regi {
    public static void main(String[] args) {
        System.out.println("main method started");
        register r1 = new register();
        r1.check( );
    }
}
