package zs.shopping.ser;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zs.shopping.dao.IUsers;
import zs.shopping.impl.UsersImpl;
import zs.shopping.pojo.Forder;
import zs.shopping.pojo.Users;

/**
 * Servlet implementation class UsersSer
 */
@WebServlet("/UsersSer")
public class UsersSer extends HttpServlet {
	private static final long serialVersionUID = 1L;
    
	private IUsers useresImpl = new UsersImpl();

    /**
     * @see HttpServlet#HttpServlet()
     */
    public UsersSer() {
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
		String status = request.getParameter("status");
		if(status.equals("login")){
			Users users = new Users();
			users.setUlogin(request.getParameter("ulogin"));
			users.setUpass(request.getParameter("upass"));
System.out.println(users.getUlogin());
			users = useresImpl.queryUsers(users);
			if(users == null){
				request.setAttribute("error", "用户名和密码错误");
				request.getRequestDispatcher("/ulogin.jsp").forward(request, response);
			}else{
				//客户登陆成功，就给他新建一个购物车
				Forder forder = new Forder();
				request.getSession().setAttribute("forder", forder);
				request.getSession().setAttribute("users", users);
				if(request.getSession().getAttribute("goUrl") != null){
System.out.println(request.getSession().getAttribute("goUrl").toString());				
					response.sendRedirect(request.getSession().getAttribute("goUrl").toString());

				}else {
					response.sendRedirect("/tt31/index.jsp");
				}
			}
		}
	}

}
