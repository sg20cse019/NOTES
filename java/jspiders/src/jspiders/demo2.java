package jspiders;

public interface demo2 {
		void test();
		void disp ();
		
}

class Sample2 implements demo2 {

	@Override
	public void test() {
		System.out.println("test() implemented in sample2");
		
	}

	@Override
	public void disp() {
		System.out.println("disp() implemented in Sample2");
		
	}
	
}