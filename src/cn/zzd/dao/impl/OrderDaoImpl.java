package cn.zzd.dao.impl;

import cn.zzd.dao.OrderDao;
import cn.zzd.domain.Order;
import cn.zzd.util.JdbcUtils;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;
import java.util.UUID;

/**
 * @author 张振东
 */
public class OrderDaoImpl implements OrderDao {
	private JdbcTemplate template = new JdbcTemplate(JdbcUtils.getDs());

	// insert and update
	@Override
    public Order save(Order order) {
		if (findBy("id", order.getId()).size() != 0) {
			String sql = "UPDATE `submission_review_system`.`review_submission_mapping` t SET t.`state` = ?, t.`payment` = ?, t.`fee` = ?, t.`charge` = ?, t.`reviewer_id` = ?, t.`submission_id` = ? WHERE t.`id` LIKE ? ESCAPE '#'";

			template.update(sql, order.getState(), order.getPayment(),
					order.getFee(), order.getCharge(), order.getReviewer_id(), order.getSubmission_id(), order.getId());
			return order;
		}
		String sql = "INSERT INTO `submission_review_system`.`review_submission_mapping` (`id`, `state`, `payment`, `fee`, `charge`, `reviewer_id`, `submission_id`) VALUES (?, ? , ?, ?, ?, ?, ?)";
		template.update(sql, UUID.randomUUID().toString(), order.getState(), order.getPayment(), order.getFee(), order.getCharge(),
				order.getReviewer_id()
				, order.getSubmission_id());
		return order;
	}

	// delete
	@Override
    public Order delete(Order author) {
		String sql = "DELETE FROM `submission_review_system`.`review_submission_mapping` WHERE `id` LIKE ? ESCAPE '#'";
		template.update(sql, author.getId());
		return author;
	}

	// find
	@Override
    public List<Order> findAll()  {
		String sql = "SELECT t.* FROM `submission_review_system`.`review_submission_mapping` t LIMIT 501";
		List<Order> authors;
		authors = template.query(sql, new BeanPropertyRowMapper<Order>(Order.class));


		return authors;
	}

	@Override
    public List<Order> findBy(String type, String value)  {
		String sql = "SELECT t.* FROM `submission_review_system`.`review_submission_mapping` t WHERE `" + type + "` = ? LIMIT 501";

		List<Order> authors ;
	authors = template.query(sql, new BeanPropertyRowMapper<Order>(Order.class),value);
		return authors;
	}

}
