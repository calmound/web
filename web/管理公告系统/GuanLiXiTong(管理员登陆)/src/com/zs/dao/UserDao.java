package com.zs.dao;

import java.util.List;

import com.zs.model.User;

public interface UserDao {
   public void saveUser(User user);
   public List<User> getAll(Class clazz);
   public User isValidUser(String username,String password);
   public User isValidAdmin(String username,String password);
}
