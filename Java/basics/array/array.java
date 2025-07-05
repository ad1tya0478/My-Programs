public class array {
    public static void main(String a[]){
        // int num[] = {1,2,3,4,5};
        
        // for(int i = 0;i<num.length;i++){
        //     System.out.println(num[i]);
        // }


        // Q.1 
        // int num[] = {1,2,3,56,6};
        // int max = num[0];
        // for(int i = 1;i<num.length;i++){
        //     if(num[i] > max){
        //         max = num[i];
        //     }
        // }
        // System.out.println("Max element: " + max);


        // Q.2 
        // int num[] = {2,4,6,8};
        // int counteven = 0;
        // int countodd = 0;
        // for(int i = 0; i<num.length;i++){
        //     if(num[i]%2 == 0){
        //         counteven++;
        //     } else 
        //      countodd++;
        // } 
        // System.out.println("Even count: " + counteven);
        // System.out.println("Odd count: " + countodd);


        // Q.3 
        // int num[] = {2,3,4,5,6,7};
        // boolean sort = true;

        // for(int i = 0;i<num.length - 1;i++){
        //     if(num[i] > num[i + 1]){
        //         sort = false;
        //         break;
        //     }
        // }
        // if(sort)
        //     System.out.println("Array sorted");
        // else 
        //     System.out.println("Array is not sorted");

        // Q.4
        // int num[] = {2,4,5,6,77,8};
        // int max = Integer.MIN_VALUE;
        // int secmax = Integer.MIN_VALUE;

        // for(int i = 0;i<num.length;i++){
        //     if(num[i] > max){
        //         secmax = max;
        //         max = num[i];
        //     } else if (num[i] > secmax && num[i] != max ){
        //         secmax = num[i];
        //     }
        // }
        // System.out.println("Second largest: " + secmax);


        ////// Multidimensional Array /////
        
        // int num[][] = {{1,2,3,4,5}, {6,7,8,9,0}};
        // System.out.println(num[0][4]);

        int num[][] = new int[3][4];
        int random  = (int)Math.random() * 100;
        for(int i = 0; i < 3;i++){
            for(int j = 0; j< 4;j++){
                System.out.print(num[i][j] + " ");
            }
            System.out.println();
        }
    }
}
