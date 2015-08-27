package zs.shopping.ser;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zs.shopping.dao.IAccount;
import zs.shopping.impl.AccountImpl;
import zs.shopping.pojo.Account;

/**
 * Servlet implementation class AccountSer
 */
@WebServlet("/AccountSer")
public class AccountSer extends HttpServlet {
	private static final long serialVersionUID = 1L;

	private IAccount accountImpl = new AccountImpl();

	/**
	 * Default constructor.
	 */
	public AccountSer() {
		// TODO Auto-generated constructor stub
	}

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doGet(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse
	 *      response)
	 */
	protected void doPost(HttpServletRequest request,
			HttpServletResponse response) throws ServletException, IOException {
		String status = request.getParameter("status");
		if (status.equals("login")) {
			Account account = new Account();
			account.setAlogin(request.getParameter("alogin"));
			account.setApass(request.getParameter("apass"));
			account = accountImpl.queryAccount(account);
			if (account == null) {// 登陆失败
				request.setAttribute("error", "对不起登陆失败");
				request.getRequestDispatcher("/alogin.jsp").forward(request,
						response);
			} else {
				request.getSession().setAttribute("account", account);
				response.sendRedirect("/tt31/admin/index.jsp");
			}
		}
	}
}
