package com.jspiders;

public class MainClass1 {


		public void employee(int id, String name, double salary, double exp) {
			
		}

		public static void main(String[] args) {
			System.out.println("===================");
			int permanentEmployeeCount=0;
			int contractEmployeeCount=0;
			int totalEmployeeCount=0;
			objectarray[] emparr = new objectarray[5];
			
			emparr[0] = new objectarray(123, "bheem",250000,1.5);
			emparr[1] = new objectarray(153, "hem",550000,5.5);
			emparr[2] = new objectarray(173, "neem",750000,7.5);
			emparr[3] = new objectarray(923, "jim",950000,9.5);
			emparr[4] = new objectarray(23, "kim",50000,0.5);
			
			System.out.println("Employee details ");
			System.out.println("=========================");
			
			for(objectarray employee:emparr) {
				if(employee != null)
					totalEmployeeCount++;
				int contratEmployeeCount;
				if(employee  contractEmployee)
					contratEmployeeCount++;
			}
			
			
			
	}

}
