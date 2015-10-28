package zs.shopping.ser;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import zs.shopping.dao.ICategory;
import zs.shopping.impl.CategoryImpl;
import zs.shopping.pojo.Account;
import zs.shopping.pojo.Category;

/**
 * Servlet implementation class CategorySer
 */
@WebServlet("/CategorySer")
public class CategorySer extends HttpServlet {
	private static final long serialVersionUID = 1L;
	private ICategory categoryImpl = new CategoryImpl();
	
    /**
     * @see HttpServlet#HttpServlet()
     */
    public CategorySer() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		String status = request.getParameter("status");
		if(status.equals("saveCategory")){
			Category category = new Category();
			category.setCtype(request.getParameter("ctype"));
//System.out.println(request.getParameter("chot"));
			category.setChot(Boolean.getBoolean(request.getParameter("chot")));
//System.out.println(category.isChot());
			category.setAccount((Account)request.getSession().getAttribute("account"));
			categoryImpl.saveCategory(category);
			response.sendRedirect("/tt31/admin/main.jsp");
			
		}else if(status.equals("queryCategory")){
			String ctype = request.getParameter("ctype");
			List<Category> cattegorys = categoryImpl.queryCategory(ctype);
		    request.setAttribute("categorys", cattegorys);
		    request.getRequestDispatcher("/admin/queryCategory.jsp").forward(request, response);
		}
	}
}
