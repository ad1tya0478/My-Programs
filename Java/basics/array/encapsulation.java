class Human {
    private int age = 11;
    private String name = "Aditya";

    public int getage(){
        return age;
    }
    public String getname(){
        return name;
    }
}
public class encapsulation {
    public static void main(String a[]){

        Human obj = new Human();
        // obj.age = 11;
        // obj.name = "Aditya";

        System.out.println(obj.getname() + " : " + obj.getage());

    }
}