package miniproject;

public class Account {
		private final int accNum = 0;
		private double accBaal;
		private String custname;
		private String accType;
		private boolean active;
		
		public Account(double accBaal, String custname, 
				String accType, boolean active) {
			
			super();
			this.accBaal = accBaal;
			this.custname = custname;
			this.accType = accType;
			this.active = active;
		}
		public double getAccBaal() {
			return accBaal;
		}
		public void setAccBaal(double accBaal) {
			this.accBaal = accBaal;
		}
		public String getCustname() {
			return custname;
		}
		public void setCustname(String custname) {
			this.custname = custname;
		}
		public String getAccType() {
			return accType;
		}
		public void setAccType(String accType) {
			this.accType = accType;
		}
		public boolean isActive() {
			return active;
		}
		public void setActive(boolean active) {
			this.active = active;
		}
		public int getAccNum() {
			return accNum;
		}
		
		
		
	}

