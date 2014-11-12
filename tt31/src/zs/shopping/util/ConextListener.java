package zs.shopping.util;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import zs.shopping.impl.CategoryImpl;

public class ConextListener implements ServletContextListener {

	private CategoryImpl categoryImpl = new CategoryImpl();
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
         System.out.println("destroy");
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
         event.getServletContext().setAttribute("categorys", categoryImpl.queryCategory(""));//得到application
	}
}
