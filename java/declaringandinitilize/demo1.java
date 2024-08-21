class demo3 {
    int s = 20;
}

class demo2 {
    static int z = 6;

    static void hello() {
        System.out.println("demo2 is running");
    }
}

class demo1 {

    public static void main(String[] args) {
        System.out.println("starting point ");
        System.out.println(demo2.z);
        System.out.println("ending point");
        System.out.println("demo2 calling");
        demo2.hello();
        System.out.println("non static is running ");
        
        System.out.println(new demo3().s);

    }
}