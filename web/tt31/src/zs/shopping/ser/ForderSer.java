package zs.shopping.ser;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zs.shopping.pojo.Forder;
import zs.shopping.pojo.Sorder;

/**
 * Servlet implementation class ForderSer
 */
@WebServlet("/ForderSer")
public class ForderSer extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ForderSer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		//从Session中拿出Forder，吧购物项添加到Forder,然后把Forder重新放入到Session中去
	    Forder forder=(Forder)request.getSession().getAttribute("forder");
	    //要买的商品信息
	    Sorder sorder = new Sorder();
	    sorder.setSname(request.getParameter("gname"));
	    sorder.setSnumber(1);
	    sorder.setSprice(Double.parseDouble(request.getParameter("gprice")));
	    forder.getSorders().add(sorder);
	    request.getSession().setAttribute("forder", forder);
	    response.sendRedirect("/tt31/users/showCar.jsp");
	}

}
