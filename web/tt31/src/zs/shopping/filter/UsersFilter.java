package zs.shopping.filter;

import java.io.IOException;



import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 * Servlet Filter implementation class UserFilter
 */
@WebFilter("/UserFilter")
public class UsersFilter implements Filter {

    /**
     * Default constructor. 
     */
    public UsersFilter() {
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see Filter#destroy()
	 */
	public void destroy() {
		// TODO Auto-generated method stub
	}

	/**
	 * @see Filter#doFilter(ServletRequest, ServletResponse, FilterChain)
	 */
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain) throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest)request;
	    if(req.getSession().getAttribute("users")==null){
	    	 req.setAttribute("error", "购买商品请先登录");
	    	 req.getSession().setAttribute("goUrl", req.getRequestURI()+"?"+req.getQueryString());
	    	 req.getRequestDispatcher("/ulogin.jsp").forward(request, response);
	    }else {
	    	HttpServletResponse res = (HttpServletResponse) response;
	    	chain.doFilter(request,response);
	    }
	}

	/**
	 * @see Filter#init(FilterConfig)
	 */
	public void init(FilterConfig fConfig) throws ServletException {
		// TODO Auto-generated method stub
	}

}
