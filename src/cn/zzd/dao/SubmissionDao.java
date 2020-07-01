package cn.zzd.dao;

import cn.zzd.domain.Submission;

import java.util.List;

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */
public interface SubmissionDao {
	public Submission save(Submission submission);
	public Submission delete(Submission submission);
	public List<Submission> findAll();
	public List<Submission> findBy(String type, String value);
}
