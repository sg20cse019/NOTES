package student;

public class student {
	public static void main(String[] args) {
		float phy = 75;
		float chem = 88;
		float mat = 76;
		float opt = 86;
		float perc = (phy + chem + mat + opt / 400)*100; 
		if (phy<35 || chem<35 || mat < 35 || opt <35 ) {
			System.out.println("student has failed ");
			if(phy < 35) {
				System.out.println(phy);
		}
		else {
			if(perc <= 60) {
				System.out.println("student has secured 2nd class ");
				System.out.println(perc); 
			}
			if(perc <= 80) {
				System.out.println("student has secured 1st class ");
				System.out.println(perc); 
			}if(perc > 80) {
				System.out.println("student has secured distinction ");
				System.out.println(perc); 
			}
		}
		}
	}
}
