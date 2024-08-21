package jspiders;

public abstract class demo1 {
	abstract void test();
}

class Sample extends demo1{
		void test() {
			System.out.println("test() defined in sample class");
		}
	
}