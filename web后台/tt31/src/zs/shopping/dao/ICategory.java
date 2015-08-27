package zs.shopping.dao;

import java.util.List;

import zs.shopping.pojo.Category;

public interface ICategory {
   public void saveCategory(Category category);
   
   public List<Category> queryCategory(String ctype);
   
   public List<Category> queryCategory(boolean isChot);
}
