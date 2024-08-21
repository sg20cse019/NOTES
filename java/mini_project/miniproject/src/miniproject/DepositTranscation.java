package miniproject;

public class DepositTranscation {
	
	public void deposit(Account toAcc, double amount) {
		if(toAcc.isActive()) {
			System.out.println("depositing Rs"+ amount + 
					"into the account having accnum"+toAcc.getAccNum());
			toAcc.setAccBaal(toAcc.getAccBaal()+amount);
		} else {
			System.out.println("Account is not active, cannot do any transcations");
		}
	}
}
