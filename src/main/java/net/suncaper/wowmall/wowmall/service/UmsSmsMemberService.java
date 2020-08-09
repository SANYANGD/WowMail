package net.suncaper.wowmall.wowmall.service;

import net.suncaper.wowmall.wowmall.entity.UmsSmsMember;
import org.springframework.stereotype.Service;

import javax.mail.Session;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletResponse;


/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
@Service
public interface UmsSmsMemberService{



    int deleteByPrimaryKey(String id);

    int insert(UmsSmsMember record);

    int insertSelective(UmsSmsMember record);

    UmsSmsMember selectByPrimaryKey(String id);

    int updateByPrimaryKeySelective(UmsSmsMember record);

    int updateByPrimaryKey(UmsSmsMember record);

    //
    UmsSmsMember login(UmsSmsMember admin);

    String autoId(boolean uOrs);

    String verifyCode(int n);

    //kind为true发送验证码，false发送密码
    MimeMessage createMessage(Session session, String sendMail, String id, String receiveMail, String code, boolean kind) throws Exception;

    void sendEmail(String id, String receiveMailAccount, String code, boolean kind) throws Exception;

    boolean isEmail(String string);

    boolean isPassword(String str);
}
