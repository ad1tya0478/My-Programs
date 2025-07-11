// class Human {
//     private int age = 11;
//     private String name = "Aditya";

//     public int getage(){
//         return age;
//     }
//     public String getname(){
//         return name;
//     }
// }
// public class encapsulation {
//     public static void main(String a[]){

//         Human obj = new Human();
//         // obj.age = 11;
//         // obj.name = "Aditya";

//         System.out.println(obj.getname() + " : " + obj.getage());

//     }
// }

// getSomething() → returns the value of a private variable
// setSomething(value) → sets the value of that private variable


/////// .this() ///// -- points to the current object, the one that called the method 
class Human {
    private int age = 11;
    private String name = "Aditya";

    public int getage(){
        return age;
    }
    public void setAge(int age){
        this.age = age;
    }
    public String getname(){
        return name;
    }
    public void setName(String name){
        this.name = name;
    }
}
public class encapsulation {
    public static void main(String a[]){

        Human obj = new Human();
        obj.setAge(90);
        obj.setName("Aditya"); 

        System.out.println(obj.getname() + " : " + obj.getage());

    }
}