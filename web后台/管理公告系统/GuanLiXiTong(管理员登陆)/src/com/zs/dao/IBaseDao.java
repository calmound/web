package com.zs.dao;

import java.util.List;

import org.hibernate.Session;

public interface IBaseDao {
	public Session getSession();
	public void closeSession();
	public List search(String hql);
}
