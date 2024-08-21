package com.jspiders;

public class employee {

	public employee(int id, String name, double salary, double exp) {
		
	}

	public static void main(String[] args) {
		System.out.println("===================");
		
		objectarray[] emparr = new objectarray[5];
		
		emparr[0] = new objectarray(123, "bheem",250000,1.5);
		emparr[1] = new objectarray(153, "hem",550000,5.5);
		emparr[2] = new objectarray(173, "neem",750000,7.5);
		emparr[3] = new objectarray(923, "jim",950000,9.5);
		emparr[4] = new objectarray(23, "kim",50000,0.5);
		
		System.out.println("emp details");
		System.out.println("====================");
		
		for(int i = 0;i<emparr.length;i++) {
			System.out.println("ID: " +emparr[i].getID());
			System.out.println("Name: "+emparr[i].getName());
			System.out.println("Salary: "+emparr[i].getSalary());
			System.out.println("experience: "+emparr[i].getExp());
			System.out.println();
		}
		
		
	}

	public void details() {
	
		
	}

}
