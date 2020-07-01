package cn.zzd.dao;

import cn.zzd.domain.Order;

import java.util.List;

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */
public interface OrderDao {
	public Order save(Order order);
	public Order delete(Order author);
	public List<Order> findAll();
	public List<Order> findBy(String type, String value);
}
