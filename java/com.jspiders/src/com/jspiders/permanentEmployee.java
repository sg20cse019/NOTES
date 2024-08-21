package com.jspiders;

public class permanentEmployee extends employee{
		private int stocks;
		
		public permanentEmployee(int i, String string, double d, double e, int j, double salary, int id, String name, double exp) {
			super( id, name, salary,exp);
			this.stocks = stocks;
		}


		public int getStocks() {
			return stocks;
		}

		public void setStocks(int stocks) {
			this.stocks = stocks;
		}
		
	public void details() {
		super.details();
		System.out.println("stocks: " this.Stocks);
	}
}
