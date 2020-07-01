package cn.zzd.test;

import cn.zzd.dao.impl.ReviewerDaoImpl;
import org.junit.Test;//junit单元测试

/**
 * @author 张振东
 * @version V1.0
 * @Title:
 * @Package
 * @Description: (用一句话描述该文件做什么)
 * @date：
 */
public class JdbcTest {
	@Test
	public void test(){
		System.out.println(new ReviewerDaoImpl().findAll());
	}
}
