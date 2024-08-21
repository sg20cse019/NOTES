class superbike {
    String superbike;
    int engineCC;
    int topspeed;
    int price;

    superbike(String sb, int cc, int sp, int rs) {
        sb = superbike;
        cc = engineCC;
        sp = topspeed;
        rs = price;
    }
}

class superbike2 {
    public static void main(String[] args) {
        System.out.println("main method ");
        superbike s1 = new superbike("harley", 2000, 320, 1500000);
        System.out.println(s1.superbike + " " + s1.engineCC + " " + s1.topspeed + " " + s1.price);
        superbike s2 = new superbike("ducati", 1000, 350, 4000000);
        System.out.println(s2.superbike + " " + s2.engineCC + " " + s2.topspeed + " " + s2.price);
    }
}