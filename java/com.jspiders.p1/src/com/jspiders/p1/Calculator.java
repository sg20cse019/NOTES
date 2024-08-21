package com.jspiders.p1;

public interface Calculator {
		int square (int n);
}

class BasicCalculator implements Calculator{

	@Override
	public int square(int n) {
		
		return n*n;
	}
	
}
