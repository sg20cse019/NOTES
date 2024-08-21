package inheritance;

class jio {
	static int tower = 100;
	void installation(){
		this.tower = 200;
		System.out.println(tower);
		System.out.println(this.tower);
	}
}
class airtel {
	int tower = 300;
	void installation() {
		this.tower = 400;
		System.out.println(tower);
		System.out.println(this.tower);
	}
}
class Mainclass1 {
	public static void main(String args[]) {
		System.out.println(jio.tower);
		jio jio = new jio();
		jio.installation();
		airtel airtel = new airtel();
		airtel.installation();
	}
}
