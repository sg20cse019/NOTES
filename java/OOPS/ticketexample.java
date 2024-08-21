class ticketcounter {
    int counternumber;
    int availabletickets;

    ticketcounter(int x, int y) {
        counternumber = x;
        availabletickets = y;
    }

    void buyTickets(int n) {
        System.out.println("buying " + n + " tickets");
        if (n < availabletickets) {
            availabletickets = availabletickets - n;
            System.out.println("tickets can be buyed , tickets avilable ");
        } else {
            System.out.println("failed to buy tickets , tickets unavilable ");
        }
    }

    void canceltickets(int n) {
        System.out.println("cancelling" + "ticket");
        availabletickets = availabletickets + n;
    }

    class main8 {
        public static void main(String[] args) {
            System.out.println("main method started ");
            ticketcounter tc1 = new ticketcounter(1, 100);
            ticketcounter tc2 = new ticketcounter(2, 200);

            tc1.buyTickets(20);
            tc2.canceltickets(10);
        }
    }
}