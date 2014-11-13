package zs.shopping.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import zs.shopping.dao.ICategory;
import zs.shopping.pojo.Account;
import zs.shopping.pojo.Category;
import zs.shopping.util.DBConn;

public class CategoryImpl implements ICategory {
	public void saveCategory(Category category) {
		Category temp = null;
		Connection connection = null;
		PreparedStatement pre = null;
		String sql = "INSERT INTO category(ctype,chot,aid) VALUES(?,?,?)";
		DBConn conns = new DBConn();
		connection = conns.getConnection();
		try {
			pre = connection.prepareStatement(sql);
//System.out.println(category.getCtype());
			pre.setString(1, category.getCtype());
//System.err.println(category.isChot());
			pre.setBoolean(2, category.isChot());
			pre.setInt(3, category.getAccount().getAid());
			pre.executeUpdate();
		} catch (SQLException e) {
			e.printStackTrace();
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}

	}

	public List<Category> queryCategory(String ctype) {
		List<Category> categorys = new ArrayList<Category>();

		Connection connection = null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		String sql = "SELECT * FROM category c INNER JOIN account a  on c.aid=a.aid WHERE ctype LIKE ?";
		DBConn conns = new DBConn();
		connection = conns.getConnection();
		try {
			pre = connection.prepareStatement(sql);
//System.out.print(ctype);
			pre.setString(1, "%" + ctype + "%");
			rs = pre.executeQuery();
			while (rs.next()) {
				Category category = new Category();
				category.setCid(rs.getInt("cid"));
				category.setCtype(rs.getString("ctype"));
//System.out.println(category.getCtype());
				category.setChot(rs.getBoolean("chot"));
//System.err.println(rs.getBoolean("chot"));
				Account account = new Account();
				account.setAid(rs.getInt("aid"));
				account.setAlogin(rs.getString("alogin"));
				category.setAccount(account);
				categorys.add(category);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return categorys;
	}

	public List<Category> queryCategory(boolean isChot) {
		List<Category> categorys = new ArrayList<Category>();
		Connection connection = null;
		PreparedStatement pre = null;
		ResultSet rs = null;
		String sql = "SELECT * FROM category WHERE chot = ? ";
		DBConn conns = new DBConn();
		connection = conns.getConnection();
		try {
			pre = connection.prepareStatement(sql);
			pre.setBoolean(1, isChot);
			rs = pre.executeQuery();
			while (rs.next()) {
				Category category = new Category();
				category.setCid(rs.getInt("cid"));
				category.setCtype(rs.getString("ctype"));
				category.setChot(rs.getBoolean("chot"));
				categorys.add(category);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} finally {
			try {
				connection.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
		return categorys;
	}
}
