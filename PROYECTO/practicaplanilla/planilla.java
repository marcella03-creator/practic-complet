
import java.util.Scanner; 

public class planilla
{
    int fil, col=4;
    double n_final=0;
    Object [][] lista;
    Scanner in=new Scanner (System.in);
    //Reutilizable
    private void crearMatriz (int f, int c)
    {
        lista= new Object [f][c];
    }


    //Parte de la IU
    private void llenaMatriz()
    {
        System.out.println("Proceso de Registro:\n---------------\n");
        for (int f=0; f<fil; f++){
          System.out.println("Registro numero" + (f+1)+ "\n");
          System.out.println("Ingrese el nombre:");
          lista [f][0]= in.next();
          System.out.println("Ingrese la nota1:");
          lista [f][1]= in.next();
          System.out.println("Ingrese la nota2:");
          lista [f][2]= in.next();
          System.out.println("Ingrese la nota3:");
          lista [f][3]= in.next();
        }
    }  
    
    private double promedio (Object x, Object y, Object z)
    {
        double xx,yy,zz;
        xx= Double.parseDouble(x+ " ");
        yy= Double.parseDouble(y+ " ");
        zz= Double.parseDouble(z+ " ");
        return ( (xx + yy + zz) /3);
    }
    private void mostrarMatriz()
    {
        System.out.println("Planilla de notas :\n---------------\n");
        System.out.println("NOMBRE\tNOTA1\tNOTA2\tNOTA3\tFINAL");
        for (int f=0; f<fil; f++){
            System.out.println(lista[f][0]+"\t"+lista [f][1]+"\t"+lista[f][2]+"\t"+lista [f][3]+"\t"+n_final); 
        }
    
    }
    
    public void main()
    {
       System.out.println("Ingrese cantidad de registros : ");
       fil=in.nextInt();
       crearMatriz (fil,col);
       llenaMatriz();
       mostrarMatriz();
    }
}   