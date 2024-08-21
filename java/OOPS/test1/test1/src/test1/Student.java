package test1;

class JSpidersRegistration {

    public void register(String name, long contactNumber, String courseName) {
        System.out.println("Registration successful!");
        System.out.println("Name: " + name);
        System.out.println("Contact Number: " + contactNumber);
        System.out.println("Course Name: " + courseName);
    }

    
    public void register(String name, String email, String courseName) {
        System.out.println("Registration successful!");
        System.out.println("Name: " + name);
        System.out.println("Email: " + email);
        System.out.println("Course Name: " + courseName);
    }

    public void register(String name, long contactNumber, String email, String courseName) {
        System.out.println("Registration successful!");
        System.out.println("Name: " + name);
        System.out.println("Contact Number: " + contactNumber);
        System.out.println("Email: " + email);
        System.out.println("Course Name: " + courseName);
    }
}

public class Student {
    public static void main(String[] args) {
     
        String name = "alok";
        long contactNumber = 889067567;
        String email = "alokkumar77954@gmail.com";
        String courseName = "full-stack";

        
        JSpidersRegistration registration = new JSpidersRegistration();

      
        if (contactNumber != 0 && !email.isEmpty()) {
            registration.register(name, contactNumber, email, courseName);
        } else if (contactNumber != 0) {
            registration.register(name, contactNumber, courseName);
        } else if (!email.isEmpty()) {
            registration.register(name, email, courseName);
        } else {
            System.out.println("Please provide either contact number or email.");
        }

    }
}
