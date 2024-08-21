public class gps {
    public static void main(String[] args) {
        gpsnew1 g1 = new gpsnew1();
        g1.longitude = 36;
        g1.latitude = 60;
        g1.direction = "north";
        g1.altitude = 80;
        System.out.println(g1.longitude);
    }
}

class gpsnew1 {
    int longitude;
    int latitude;
    String direction;
    int altitude;
}
