package test1;

class product{
	String p_id;
	double price;
	String name;
	public product(String p_id,double price,String name) {
		this.p_id = p_id;
		this.price = price;
		this.name = name;
	}
}

public class Laptop {

	public static void main(String[] args) {
		System.out.println("main method started");
		product p1 = new product("DELL001",50000.00,"DELLINSPIRON");
		product p2 = new product("ACCER001",70000.00,"ACCERPROMAX");
		System.out.println("id of a product is "+p1.p_id );
		System.out.println("price of a product is "+p1.price);
		System.out.println("name of the product is "+p1.name);
		System.out.println("main method ended");
	}

}
