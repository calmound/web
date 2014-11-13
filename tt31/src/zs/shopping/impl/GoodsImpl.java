package zs.shopping.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import zs.shopping.dao.IGoods;
import zs.shopping.pojo.Category;
import zs.shopping.pojo.Goods;
import zs.shopping.util.DBConn;

public class GoodsImpl implements IGoods {

	@Override
	public List<Goods> queryGiscommendGoods(int cid) {
		List<Goods> goodss = new ArrayList<Goods>();
		Connection connection = null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		String sql = "SELECT * FROM goods g INNER JOIN category c ON  g.cid=c.cid WHERE giscommend=1 AND gisopen=1 AND g.cid=? ORDER by gdate DESC";
	    DBConn conns = new DBConn();
	    connection = conns.getConnection();
	    try {
			pre = connection.prepareStatement(sql);
			pre.setInt(1, cid);
			rs = pre.executeQuery();
			while(rs.next()){
				Goods goods = new Goods();
				goods.setGid(rs.getInt("gid"));
				goods.setGname(rs.getString("gname"));
				goods.setGdate(rs.getDate("gdate"));
				goods.setGiscommend(rs.getBoolean("giscommend"));
				goods.setGisopen(rs.getBoolean("gisopen"));
				goods.setGprice(rs.getDouble("gprice"));
				goods.setGremark(rs.getString("gremark"));
				goods.setGxremark(rs.getString("gxremark"));
				goods.setGpic(rs.getString("gpic"));
				Category category  = new Category();
				category.setCid(rs.getInt("cid"));
				category.setCtype(rs.getString("ctype"));
				category.setChot(rs.getBoolean("chot"));
				goods.setCategory(category);
				goodss.add(goods);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return goodss;
	}
}
