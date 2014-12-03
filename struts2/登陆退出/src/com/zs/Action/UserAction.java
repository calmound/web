package com.zs.Action;

import java.util.Map;

import org.apache.struts2.dispatcher.SessionMap;
import org.apache.struts2.interceptor.ApplicationAware;
import org.apache.struts2.interceptor.SessionAware;

public class UserAction implements SessionAware,ApplicationAware{

	private Map<String,Object> session;
	private Map<String,Object> application;
	private String username;
	
	public String execute(){
		session.put("username", username);
		Integer count = (Integer) application.get("count");
		if(count==null){
			count =0;
		}
		count++;
		application.put("count", count);
		
		return "success";
	}
	
	public String logout(){
		Integer count = (Integer) application.get("count");
		if(count!=0){
			count--;
		}
		application.put("count", count);
		((SessionMap)session).invalidate();
		
		return "logout";
	}
	
	@Override
	public void setApplication(Map<String, Object> application) {
		// TODO Auto-generated method stub
		this.application = application;
	}

	@Override
	public void setSession(Map<String, Object> session) {
		// TODO Auto-generated method stub
		this.session = session;
	}
	
	public void setUsername(String username) {
		this.username = username;
	}

    
}
