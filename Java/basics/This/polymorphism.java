// class Computer {

// }
// class Laptop extends Computer {

// }

class a{
    public void show(){
        System.out.println("In A Show");
    }
}
class b extends a{
    public void show(){
        System.out.println("In B Show");
    }
}


public class polymorphism {
    public static void main(String[] args) {
        
//  Polymorphism:-  poly means many and morphism means behaviour, and there are two types - 1). Compile Time 2). Run time Polymorphism
//                  OverLoading is the part of compile time, and OverRiding is the part of Run time, 
//                  an object can take many forms, it allows one interface to be used for a general class of actions.
// OverLoading - same class, different method signatures or it can be parameters
// OverRiding - subclass modifies parent class method 
// this polymorphism will only work with inheritance  


        a obj = new a();
        obj.show();

// Computer lap = new Laptop();  // Laptop is a child class and computer is a parent class, We are creating a Laptop object 
        // but referencing it with a computer type this is called upcasting.
        // It allows runtime polymorphism, if laptop overRides a method from computer, the child's version runs. You can treat many subclasses as one type(parent)
        // Actual method depends on the object, not the reference type

        obj = new b();
        obj.show();


    }
}
