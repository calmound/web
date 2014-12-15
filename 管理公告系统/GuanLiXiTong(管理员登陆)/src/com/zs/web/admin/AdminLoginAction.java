package com.zs.web.admin;

import java.util.Map;

import org.apache.struts2.interceptor.SessionAware;

import com.opensymphony.xwork2.ActionSupport;
import com.zs.dao.UserDao;
import com.zs.dao.impl.UserDaoImpl;
import com.zs.model.User;

public class AdminLoginAction extends ActionSupport implements SessionAware {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	UserDao dao = new UserDaoImpl();
	private String username;
	private String password;
	private Map<String,Object> session;
    
	public String execute(){
	    	User user = dao.isValidAdmin(username, password);
	    	if(user!=null){
	    		session.put("user", user);
	    		return SUCCESS;
	    	}else{
	    		addActionError("你没有管理权限");
	    		return INPUT;
	    	}
	}
	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public Map getSession() {
		return session;
	}

	public void setSession(Map session) {
		this.session = session;
	}

}
