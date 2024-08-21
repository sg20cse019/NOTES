package jspiders;

public class Mainclass {

	public static void main(String[] args) {
		System.out.println("main method started ");
		
		Sample d1 = new Sample();
		d1.test();
		System.out.println("====================");
		demo1 d2 ;
		d2 = new Sample();
		
		d2.test();
		System.out.println("main method ended");
		
		System.out.println("main method new ");
		demo2 d3;
		
		d3 = new Sample2();
		
		d3.test();
		d3.disp();
		System.out.println("main new mthod ended");
	}

}
