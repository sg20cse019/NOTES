package oopsnew;

class mobile{
	String disp;
	double rate;
	String net;
	mobile(String s1,double s2,String s3,String s4){
		s1 = disp;
		s2 = rate;
		s3 = net;
	}
}
public class practice {
	public static void main(String args[]) {
		mobile m1 = new mobile("amoled", 15000, "5g", null);
		System.out.println(m1.disp+m1.net+m1.rate);
	}
}
