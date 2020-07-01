package cn.zzd.dao;

import cn.zzd.domain.Author;

import java.util.List;

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */
public interface AuthorDao {
	public Author save(Author author) ;
	public Author delete(Author author);
	public List<Author> findAll();
	public List<Author> findBy(String type, String value);
}
