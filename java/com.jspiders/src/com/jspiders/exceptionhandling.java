package com.jspiders;

public class exceptionhandling implements Cloneable {
	int hiScore = 1000;
	public static void main(String[] args) {
		System.out.println("program startts");
//		
//		try {
//			System.out.println(10/0);
//		}
//		catch(ArithmeticException e) {
//			System.out.println("programmmer divided by zero");
//		}
		
		exceptionhandling original = new exceptionhandling();
		original.hiScore = 5000;
		 
		try {
			exceptionhandling copy = (exceptionhandling)original.clone();
			System.out.println(copy.hiScore);
		}
		catch(CloneNotSupportedException e){
			System.out.println("clone failed");
		}
		
	System.out.println("executed");
	}
}
