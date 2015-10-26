package zs.shopping.dao;

import java.util.List;

import zs.shopping.pojo.Goods;


public interface IGoods {
   public List<Goods> queryGiscommendGoods(int cid);
}
