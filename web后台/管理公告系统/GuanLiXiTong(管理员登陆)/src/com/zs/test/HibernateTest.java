package com.zs.test;

import static org.junit.Assert.*;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;
import org.hibernate.service.ServiceRegistryBuilder;
import org.junit.Test;

public class HibernateTest {

	@Test
	public void test() {
		SessionFactory sessionFactory = null;
		Configuration configuration = new Configuration().configure();
		ServiceRegistry serviceRegistry = 
				new ServiceRegistryBuilder().applySettings(configuration.getProperties())
				              .buildServiceRegistry();
		
		sessionFactory = configuration.buildSessionFactory(serviceRegistry);
		
		Session session = sessionFactory.openSession();
		
		Transaction transaction = session.beginTransaction();
		
		transaction.commit();
		session.close();
		sessionFactory.close();
		
	}

}
