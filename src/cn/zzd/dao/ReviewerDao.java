package cn.zzd.dao;

import cn.zzd.domain.Reviewer;

import java.util.List;

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */
public interface ReviewerDao {
	public Reviewer save(Reviewer reviewer);
	public Reviewer delete(Reviewer reviewer);
	public List<Reviewer> findAll();
	public List<Reviewer> findBy(String type, String value);
}
