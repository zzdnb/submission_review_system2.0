package cn.zzd.dao.impl;

import cn.zzd.dao.ReviewerDao;
import cn.zzd.domain.Reviewer;
import cn.zzd.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

/**
 * @author 张振东
 */
public class ReviewerDaoImpl implements ReviewerDao {
	private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDs());

	// insert and update
	@Override
	public Reviewer save(Reviewer reviewer) {
		if (findBy("id", reviewer.getId()).size() != 0) {
			String sql = "UPDATE `submission_review_system`.`reviewer` t SET t.`account_` = ?, t.`password_` = ?, t.`name_` = ?, t.`contact` = ?, t.`total` = ? WHERE t.`id` LIKE ? ESCAPE '#'";
			template.update(sql, reviewer.getAccount_(),
					reviewer.getPassword_(),
					reviewer.getName_(),
					reviewer.getContact()
					, reviewer.getTotal(),
					reviewer.getId());
			return reviewer;
		}
		String sql = "INSERT INTO `submission_review_system`.`reviewer` (`id`, `account_`, `password_`, `name_`, `contact`, `total`) VALUES (?, ?, ?, ?, ?, ?)";
		template.update(sql, UUID.randomUUID().toString(),
				reviewer.getAccount_(), reviewer.getPassword_(),
				reviewer.getName_(),
				reviewer.getContact(),
				reviewer.getTotal());
		return reviewer;
	}

	// delete
	@Override
    public Reviewer delete(Reviewer reviewer) {
		String sql = "DELETE FROM `submission_review_system`.`reviewer` WHERE `id` LIKE ? ESCAPE '#'";
		template.update(sql,reviewer.getId());
		return reviewer;
	}

	// find
	@Override
    public List<Reviewer> findAll() {
		String sql = "SELECT t.* FROM `submission_review_system`.`reviewer` t LIMIT 501";
		List<Reviewer> reviewers =new ArrayList<Reviewer>();

		reviewers = template.query(sql,new BeanPropertyRowMapper<Reviewer>(Reviewer.class));
		return reviewers;
	}

	@Override
    public List<Reviewer> findBy(String type, String value) {
		String sql = "SELECT t.* FROM `submission_review_system`.`reviewer` t WHERE `" + type + "` = ? LIMIT 501";

		List<Reviewer> reviewers = new ArrayList<>();
		reviewers = template.query(sql,new BeanPropertyRowMapper<Reviewer>(Reviewer.class),value);
		return reviewers;
	}

}
