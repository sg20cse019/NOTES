package miniproject;

public class MainClass1 {

	public static void main(String[] args) {
		AccountCreation ac = new AccountCreation();
		AccountClose acl = new AccountClose();
		
		Account a1 = ac.createAccount("ramesh","savings",20000.0);
		System.out.println(a1.getAccNum());
		
		Account a2 = ac.createAccount("himesh", "savings", 100000.0);
		System.out.println(a2.getAccNum());
		
		System.out.println(a1.isActive());
		System.out.println(a2.isActive());
		
		
	}

}
