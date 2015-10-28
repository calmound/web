package zs.shopping.util;

import java.util.ArrayList;
import java.util.List;
import java.util.Timer;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

import zs.shopping.dao.IGoods;
import zs.shopping.impl.CategoryImpl;
import zs.shopping.impl.GoodsImpl;
import zs.shopping.pojo.Category;
import zs.shopping.pojo.Goods;

public class ConextListener implements ServletContextListener {

	private CategoryImpl categoryImpl = new CategoryImpl();
	private IGoods goodsImpl = new GoodsImpl();
	@Override
	public void contextDestroyed(ServletContextEvent arg0) {
         System.out.println("destroy");
	}

	@Override
	public void contextInitialized(ServletContextEvent event) {
         event.getServletContext().setAttribute("categorys", categoryImpl.queryCategory(""));//得到application
	     
         ShoppingTimerTask shoppingTimer = new ShoppingTimerTask();
         shoppingTimer.setApplication(event.getServletContext());
         new Timer().schedule(shoppingTimer, 0L, 1000*5);
	}
}
