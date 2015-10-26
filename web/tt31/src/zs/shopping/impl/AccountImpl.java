package zs.shopping.impl;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.SQLException;

import java.sql.ResultSet;

import zs.shopping.dao.IAccount;
import zs.shopping.pojo.Account;
import zs.shopping.util.DBConn;

public class AccountImpl implements IAccount {
	public Account queryAccount(Account account) {
		Account temp = null;
		Connection connection = null;
		java.sql.PreparedStatement pre = null;
		String sql = "SELECT * FROM account WHERE alogin=? AND apass = ?";
		DBConn conns = new DBConn();
		connection = conns.getConnection();
		try {
			pre = connection.prepareStatement(sql);
			pre.setString(1, account.getAlogin());
			pre.setString(2, account.getApass());
			ResultSet rs = pre.executeQuery();
			if (rs.next()) {
	//System.out.println(rs.getInt("aid"));
				temp = new Account();
				temp.setAid(rs.getInt("aid"));
				temp.setAlogin(rs.getString("alogin"));
				temp.setApass(rs.getString("apass"));
				temp.setAname(rs.getString("aname"));
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
		return temp;

	}
}
