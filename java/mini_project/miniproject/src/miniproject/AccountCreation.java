package miniproject;

public class AccountCreation {
	private static int initAccNUm=10001;
	
	/**
	 * used to create account based on parameters
	 * @param custname
	 * @param acctype
	 * @param accbal
	 * @return
	 */
	
	public Account createAccount (String custname, String acctype, double accbal) {
		System.out.println("creating an acccount");
		return new Account(initAccNum++, accbal,custname,acctype,true);
	}

}
