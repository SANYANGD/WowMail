package net.suncaper.wowmall;

import net.suncaper.wowmall.wowmall.entity.UmsSmsMember;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMemberExample;
import net.suncaper.wowmall.wowmall.mapper.UmsSmsMemberMapper;
import net.suncaper.wowmall.wowmall.service.UmsSmsMemberService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.mail.Message;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import java.util.List;

//@SpringBootTest
public class WowmallApplicationTests {

    //@Autowired
    UmsSmsMemberMapper umsSmsMemberMapper;

    //忽略自动注入报错
    //@Autowired
    UmsSmsMemberService umsSmsMemberService;


    //@Test
    void Test(){
        //System.out.println("hello");

        //logindemo 表：UmsSmsMemberMapper
        //自动注入接口
        UmsSmsMember umsSmsMember = umsSmsMemberMapper.selectByPrimaryKey("0");
        System.out.println(umsSmsMember.getPassword());

        //模拟登录测试
        /*UmsSmsMember umsSmsMember1 = new UmsSmsMember();
        umsSmsMember1.setPassword("0");umsSmsMember1.setId("0");
        UmsSmsMember umsSmsMembers =  umsSmsMemberMapper.selectByPrimaryKey(umsSmsMember1.getId());
        if(umsSmsMembers == null){
            System.out.println("用户名不存在");
        }else {
            String passwordInDB = umsSmsMembers.getPassword();
            if(passwordInDB.equals("0")){
                System.out.println("登录成功");
            }else{
                System.out.println("登录失败");
            }
        }*/

    }

   // @Test
    void testid(){
        UmsSmsMember umsSmsMember = new UmsSmsMember();
        umsSmsMember.setId(umsSmsMemberService.autoId(true));
        System.out.println(umsSmsMember.getId());
        System.out.println(umsSmsMember.getId().substring(0,1));

        //String id = umsSmsMemberService.autoId(true);
        //System.out.println(id);

    }

    //@Test
    void testcode(){

        System.out.println(umsSmsMemberService.verifyCode(4));

    }

    //@Test
    void testmail() throws Exception {

        String code = umsSmsMemberService.verifyCode(6);
        System.out.println(code);
        try {
            umsSmsMemberService.sendEmail("1","1723978165@qq.com",code,true);
        } catch (Exception e) {
            e.printStackTrace();
        }


    }

    //@Test
    void testselete(){
        UmsSmsMember umsSmsMember = new UmsSmsMember();
        umsSmsMember.setUsername("111");

        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andUsernameEqualTo(umsSmsMember.getUsername().trim());
        List<UmsSmsMember> umsSmsMemberTemps = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);//查询所有

        System.out.println(umsSmsMemberTemps.get(0).getUsername());
    }
}
