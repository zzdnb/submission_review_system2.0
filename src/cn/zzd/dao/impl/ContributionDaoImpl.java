package cn.zzd.dao.impl;

import cn.zzd.dao.ContributionDao;
import cn.zzd.domain.Contribution;
import cn.zzd.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.UUID;

public class ContributionDaoImpl implements ContributionDao {
	private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDs());

	// insert and update
	@Override
	public Contribution save(Contribution contribution) {
		if (findBy("id", contribution.getId()).size() != 0) {
			String sql = "UPDATE `submission_review_system`.`author_submission_mapping` t SET t.`author_id` = ?, t.`submission_id` = ? WHERE t.`id` LIKE ? ESCAPE '#'";
			template.update(sql,
					contribution.getAuthorId(),
					contribution.getSubmissionId(),contribution.getId());
			return contribution;
		}
		String sql = "INSERT INTO `submission_review_system`.`author_submission_mapping` (`id`, `author_id`, `submission_id`) VALUES (?, ?, ?)";
		template.update(sql,UUID.randomUUID().toString(),
				contribution.getAuthorId(),
				contribution.getSubmissionId());
		return contribution;
	}

	// delete
	@Override
	public Contribution delete(Contribution contribution) {
		String sql = "DELETE FROM `submission_review_system`.`author_submission_mapping` WHERE `id` LIKE ? ESCAPE '#'";
		template.update(sql,contribution.getId());
		return contribution;
	}

	// find
	@Override
	public List<Contribution> findAll() {
		String sql = "SELECT t.* FROM `submission_review_system`.`author_submission_mapping` t LIMIT 501";
		List<Contribution> contributions;
		contributions = template.query(sql, new BeanPropertyRowMapper<Contribution>(Contribution.class));

		return contributions;
	}

	@Override
	public List<Contribution> findBy(String type, String value) {
		String sql = "SELECT t.* FROM `submission_review_system`.`author_submission_mapping` t WHERE `" + type + "` = ? LIMIT 501";

		List<Contribution> authors ;
	authors= template.query(sql,new BeanPropertyRowMapper<Contribution>(Contribution.class),value);
		return authors;
	}

	@Override
	public List<Contribution> findUni(String value1, String value2) {
		String sql = "SELECT t.* FROM submission_review_system.author_submission_mapping t WHERE author_id=? AND submission_id=? LIMIT 501";

		List<Contribution> authors;
		authors = template.query(sql, new BeanPropertyRowMapper<Contribution>(Contribution.class), value1, value2);
		return authors;
	}

}
