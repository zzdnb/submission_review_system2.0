package cn.zzd.dao.impl;

import cn.zzd.dao.SubmissionDao;
import cn.zzd.domain.Submission;
import cn.zzd.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.UUID;

public class SubmissionDaoImpl implements SubmissionDao {
	private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDs());

	// insert and update
	@Override
	public Submission save(Submission submission) {

		if (findBy("id", submission.getId()).size() != 0) {
			String sql = "UPDATE `submission_review_system`.`submission` t SET t.`name_` = ?, t.`content` = ?, t.`state` = ? WHERE t.`id` LIKE ? ESCAPE '#'";

			template.update(sql, submission.getName_(), submission.getContent(), submission.getState(), submission.getId());
			return submission;
		}
		String sql = "INSERT INTO `submission_review_system`.`submission` (`id`,`name_`, `content`, `state`) VALUES (?, ?, ?, ?)";
		submission.setId(UUID.randomUUID().toString());
		template.update(sql,
				submission.getId(),
				submission.getName_(),
				submission.getContent(),
				submission.getState());
		return submission;
	}

	// delete
	@Override
	public Submission delete(Submission submission) {
		String sql = "DELETE FROM `submission_review_system`.`submission` WHERE `id` LIKE ? ESCAPE '#'";
		template.update(sql, submission.getId());
		return submission;
	}

	// find
	@Override
	public List<Submission> findAll() {
		String sql = "SELECT t.* FROM `submission_review_system`.`submission` t LIMIT 501";
		List<Submission> submissions;

		submissions = template.query(sql, new BeanPropertyRowMapper<Submission>(Submission.class));
		return submissions;
	}

	@Override
    public List<Submission> findBy(String type, String value)  {
		String sql = "SELECT t.* FROM `submission_review_system`.`submission` t WHERE `" + type + "` = ?  LIMIT 501";

		List<Submission> submissions ;
		submissions =template.query(sql,new BeanPropertyRowMapper<Submission>(Submission.class),value);
		return submissions;
	}

}
