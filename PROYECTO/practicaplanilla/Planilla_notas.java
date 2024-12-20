
import java.util.*;
public class Planilla_notas 
{
    public static void main (String []args)
    {
        Scanner in= new Scanner (System.in);
        int matriz [][]= new int [4][4];
        int fila,columna,not;
        String cadena;
        int notafinal=0;
        System.out.println("Ingrese cuantas notas seran ingresadas");
        not=in.nextInt();
        System.out.println("Ingrese tamaño de las filas de la matriz");
        fila=in.nextInt();
        System.out.println("Ingrese tamaño de las columnas de la matriz");
        columna=in.nextInt();
        for (int i=0; i<not; i++)
        {
        
        System.out.println("Ingrese nombre del estudiante");
        cadena=in.next();
          for (int fm=0;fm<fila ; fm++)
         {
          for (int cm=0; cm<columna; cm++)
          {
           System.out.print("Ingrese notas ["+ fm +"] [" + cm +"]:"); 
           matriz [fm][cm]=in.nextInt();
           notafinal= matriz [fm][cm]% 100;
           
        }
       }
       
       int fm,cm;
       System.out.println("NOTA ORDENADA");
       for (fm=0; fm<fila; fm++)
       { 
           for (cm=0; cm<columna; cm++)
           {
               System.out.print (matriz [fm][cm] + "  ");
           }
        
           System.out.println();
           }   
           System.out.println("La nota final es"  + notafinal);
    
    
   }  
} 
}