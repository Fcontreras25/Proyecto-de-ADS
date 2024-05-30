package API;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

public class Eliminar extends HttpServlet {

    private PrintWriter out;


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        out = response.getWriter();
        String id=request.getParameter("id");
        
    try
    {
    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection enlace = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","root", "1234");
    Statement consulta = enlace.createStatement();
        
    int rs = consulta.executeUpdate("delete from tablajson where idEjercicio = "+id+";");
   
        
    if(rs != 0){
        System.out.println("Se elimino");
        out.println("yes");
    }
    else{
            out.println("no");            
    }    
        
    }
    catch(Exception e)
    {
    e.printStackTrace();
    }

} 
}
