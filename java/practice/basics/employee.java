class Employees {
    int salary;
    String e_id;
    String e_name;
    int con_no;
}
void updatecon_no(long arg){
    System.out.println("updating con_no");
    con_no = arg;
}
void updatesalary(int arg){
    System.out.println("updating salary");
    salary = arg;
}
class employee{
    public static void main(String[] args) {
        System.out.println("main method started");
        Employees e1 = new Emplyees();
        e1.salary = 10000;
        e1.e_id = "e178io";
        e1.e_name = "alok";
        e1.con_no = 897654765;

        System.out.println(e1.salary+"\t"+e1.e_id+"\t"+e1.e_name+"\t"+e1.con_no);
        e1.updatecon_no = 89866489;
        e1.updatesalary = 9999;
        //updating the values
        System.out.println(e1.salary+"\t"+e1.e_id+"\t"+e1.e_name+"\t"+e1.con_no);
        System.out.println("--------------------------");
        e2 Employees = new Employees();
        e1.salary = 10000;
        e1.e_id = "e178io";
        e1.e_name = "alok";
        e1.con_no = 897654765;
    }
}