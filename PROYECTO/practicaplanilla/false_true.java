import java.util.*;
public class false_true 
{
    public static void verificar (int e,g)
    {
        if (e>=18)
       
         System.out.println("Puedes ingresar a la puerta electrica");
        else 
        System.out.println("No puedes ingresar a la puerta electrica");
        
        
    
     }
    public static void main(String []args)
    {
       Scanner in= new Scanner (System.in);
       int resp, e,g;
       System.out.println("Podrias entrar a la puerta electrica?");
       System.out.println("Que edad tienes?");
       e= in.nextInt();
       System.out.println("Cual es tu genero?");
       g= in.nextInt();
       
       verificar (e,g);
    }   
       
}       
    
       
    