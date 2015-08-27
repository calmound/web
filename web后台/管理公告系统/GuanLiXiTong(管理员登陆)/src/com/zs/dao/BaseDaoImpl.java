package com.zs.dao;

import java.util.List;

import org.hibernate.Query;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;

public class BaseDaoImpl implements IBaseDao {

	private  SessionFactory sessionFactory;
	private  Session session;
	private  Transaction transaction;
	
	public void init(){
		Configuration configuration = new Configuration().configure();
    	ServiceRegistry serviceRegistry = new ServiceRegistryBuilder().applySettings(configuration.getProperties())
    			                  .buildServiceRegistry();
    	sessionFactory = configuration.buildSessionFactory(serviceRegistry);
    	
    	session = sessionFactory.openSession();
    	transaction = session.beginTransaction();
	}
	@Override
	public Session getSession() {
		init();
		return session;
	}

	@Override
	public void closeSession() {
		session.close();

	}

	@Override
	public List search(String hql) {
		Session session = null;
		session = getSession();
		List alist = null;
		alist = session.createQuery(hql).list();
		session.close();
		return alist;
	}

}
