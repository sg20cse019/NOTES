package oopsnew;

public class mainclass6 {
	public static void main(String args[]) {
		
		System.out.println("main method started ");
		
		login l1 = new login(12345,"alok",245);
		System.out.println("emp id "+l1.getId());
		System.out.println("emp name "+l1.getName());
		System.out.println("emp sal "+l1.getSalary());
		
		System.out.println("updating emp sal");
		l1.setSalary(343628);
		
		System.out.println("emp sal "+l1.getSalary());
		
		System.out.println("main method ended");
	}
}
