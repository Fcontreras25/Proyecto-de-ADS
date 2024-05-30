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

public class Editar extends HttpServlet {

    private PrintWriter out;


    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        out = response.getWriter();
        String id=request.getParameter("id");
        String pre=request.getParameter("pregunta");
        String res=request.getParameter("respuesta");
        String ima11=request.getParameter("ima11");
        String val11=request.getParameter("val11");
        String ima12=request.getParameter("ima12");
        String val12=request.getParameter("val12");
        String ima13=request.getParameter("ima13");
        String val13=request.getParameter("val13");
        String ima14=request.getParameter("ima14");
        String val14=request.getParameter("val14");
        String ima21=request.getParameter("ima21");
        String val21=request.getParameter("val21");
        String ima22=request.getParameter("ima22");
        String val22=request.getParameter("val22");
        String ima23=request.getParameter("ima23");
        String val23=request.getParameter("val23");
        String ima24=request.getParameter("ima24");
        String val24=request.getParameter("val24");
    try
    {
    Class.forName("com.mysql.cj.jdbc.Driver");
    Connection enlace = DriverManager.getConnection("jdbc:mysql://localhost/crudjson","root", "1234");
    Statement consulta = enlace.createStatement();
    
    /*Editar pregunta */
    int rs = consulta.executeUpdate("update tablajson set columnajson = json_replace(columnajson,'$.pregunta','"+pre+"','$.respuesta','"+res+"','$.drags[0].valor','"+val11+"','$.drags[0].imagen','"+ima11+"',"+
            "'$.drags[1].valor','"+val12+"','$.drags[1].imagen','"+ima12+"','$.drags[2].valor','"+val13+"','$.drags[2].imagen','"+ima13+"','$.drags[3].valor','"+val14+"','$.drags[3].imagen','"+ima14+"',"+
            "'$.targets[0].valor','"+val21+"','$.targets[0].imagen','"+ima21+"','$.targets[1].valor','"+val22+"','$.targets[1].imagen','"+ima22+"','$.targets[2].valor','"+val23+"','$.targets[2].imagen','"+ima23+"',"+
            "'$.targets[3].valor','"+val24+"','$.targets[3].imagen','"+ima24+"') where idEjercicio = "+id+";");
   
        
    if(rs != 0){
          System.out.println("Se edito la pregunta");
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
