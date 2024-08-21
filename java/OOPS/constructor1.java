class Playlist {
    String name;
    int totalsongs;

    // Constructor
    public Playlist(String name, int totalsongs) {
        this.name = name;
        this.totalsongs = totalsongs;
    }

    public static void main(String[] args) {
        System.out.println("Playlist calling");
        Playlist p1 = new Playlist("Eminem", 21);
        System.out.println("Name: " + p1.name);
        System.out.println("Total Songs: " + p1.totalsongs);
    }
}
