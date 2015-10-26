package zs.shopping.util;

import java.util.ArrayList;
import java.util.TimerTask;

import javax.servlet.ServletContext;

import zs.shopping.dao.ICategory;
import zs.shopping.dao.IGoods;
import zs.shopping.impl.CategoryImpl;
import zs.shopping.impl.GoodsImpl;
import zs.shopping.pojo.Category;
import zs.shopping.pojo.Goods;

import java.util.List;
public class ShoppingTimerTask extends TimerTask {

	private ICategory categoryImpl = new CategoryImpl();
	private IGoods goodsImpl = new GoodsImpl();
	private ServletContext application = null;
	
	public ServletContext getApplication() {
		return application;
	}

	public void setApplication(ServletContext application) {
		this.application = application;
	}

	@Override
	public void run() {
		 List<List<Goods>> bigList = new ArrayList<List<Goods>>();
		 
		 for(Category category : categoryImpl.queryCategory(true)){
			 List<Goods> goodss = goodsImpl.queryGiscommendGoods(category.getCid());
System.out.println(category.getCid());
			 bigList.add(goodss);	  
		 }
		 application.setAttribute("bigList", bigList);
	}

}
