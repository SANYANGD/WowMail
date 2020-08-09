package net.suncaper.wowmall.wowmall.service.impl;

import org.springframework.stereotype.Service;

import javax.annotation.Resource;

import net.suncaper.wowmall.wowmall.mapper.UmsSmsMemberMapper;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMember;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMemberExample;
import net.suncaper.wowmall.wowmall.service.UmsSmsMemberService;

import java.util.List;
import java.util.Random;
import java.util.Date;
import java.util.Properties;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;
import javax.servlet.http.HttpServletResponse;


/**
 * @Author: Mr风语恺撒
 * @version: 1.0
 */
@Service
public class UmsSmsMemberServiceImpl implements UmsSmsMemberService {

    @Resource
    private UmsSmsMemberMapper umsSmsMemberMapper;

    @Override
    public int deleteByPrimaryKey(String id) {
        return umsSmsMemberMapper.deleteByPrimaryKey(id);
    }

    @Override
    public int insert(UmsSmsMember record) {
        return umsSmsMemberMapper.insert(record);
    }

    @Override
    public int insertSelective(UmsSmsMember record) {
        return umsSmsMemberMapper.insertSelective(record);
    }

    @Override
    public UmsSmsMember selectByPrimaryKey(String id) {
        return umsSmsMemberMapper.selectByPrimaryKey(id);
    }

    @Override
    public int updateByPrimaryKeySelective(UmsSmsMember record) {
        return umsSmsMemberMapper.updateByPrimaryKeySelective(record);
    }

    @Override
    public int updateByPrimaryKey(UmsSmsMember record) {
        return umsSmsMemberMapper.updateByPrimaryKey(record);
    }

    /**
     * 登录时的信息查询
     *
     * @param umsSmsMember
     * @return
     */
    @Override
    public UmsSmsMember login(UmsSmsMember umsSmsMember) {
        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andNicknameEqualTo(umsSmsMember.getNickname().trim());
        List<UmsSmsMember> umsSmsMemberList = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);
        return umsSmsMemberList.size() > 0 ? umsSmsMemberList.get(0) : null;
    }


    /**
     * id自动生成,
     * true为user,false为system admin
     *
     * @param uOrs
     * @return id
     */
    @Override
    public String autoId(boolean uOrs) {
        int autoid = (int) (1 + (Math.random() * ((1999999999 - 1000000000) + 1)));

        String id = uOrs ? "u" + autoid : "s" + autoid;

//        if(uOrs){
//                id = "u"+autoid;
//            }else{
//                id = "s"+autoid;
//            }

        UmsSmsMember umsSmsMember = umsSmsMemberMapper.selectByPrimaryKey(id);

        if (umsSmsMember != null) {
            id = autoId(uOrs);
        }
        return id;

    }


    /**
     * 生成n位随机验证码，包括数字和大小写字母
     * @param n 验证码长度
     * @return n位验证码
     */
    @Override
    public String verifyCode(int n) {
        StringBuilder strB = new StringBuilder();
        Random rand = new Random();
        for (int i = 0; i < n; i++) {
            int r1 = rand.nextInt(3);
            int r2 = 0;
            switch (r1) {  // r2为ascii码值
                case 0: // 数字
                    r2 = rand.nextInt(10) + 48;  // 数字：48-57的随机数
                    break;
                case 1:
                    r2 = rand.nextInt(26) + 65;  // 大写字母
                    break;
                case 2:
                    r2 = rand.nextInt(26) + 97;  // 小写字母
                    break;
                default:
                    break;
            }
            strB.append((char) r2);
        }
        String code = strB.toString();

        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andNicknameEqualTo(code);
        List<UmsSmsMember> umsSmsMemberTemps = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);//查询所有
        String codeT = umsSmsMemberTemps.size() > 0 ? umsSmsMemberTemps.get(0).getNickname() : null ;
        if (codeT!=null){
            code = verifyCode(n);
        }

        return code;
    }


    /**
     * 构建邮件内容
     * @param session, sendMail, receiveMail, info
     * @return message
     */
    @Override
    public  MimeMessage createMessage(Session session, String sendMail, String id, String receiveMail, String code, boolean kind) throws Exception {
        // 1. 创建一封邮件
        MimeMessage message = new MimeMessage(session);
        if(kind){
            // 2. From: 发件人（昵称有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改昵称）
            message.setFrom(new InternetAddress(sendMail, "邮箱验证码", "UTF-8"));
            // 3. To: 收件人（可以增加多个收件人、抄送、密送）
            message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receiveMail, "xx用户", "UTF-8"));
            // 4. Subject: 邮件主题（标题有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改标题）
            message.setSubject("验证码", "UTF-8");
            // 5. Content: 邮件正文（可以使用html标签）（内容有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改发送内容）
            message.setContent("【用户ID】:"+id+"\n\r【注册邮箱】："+receiveMail+"\n\r【验证码】:"+code, "text/html;charset=UTF-8");
            // 6. 设置发件时间
        }else{
            // 2. From: 发件人（昵称有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改昵称）
            message.setFrom(new InternetAddress(sendMail, "找回密码", "UTF-8"));
            // 3. To: 收件人（可以增加多个收件人、抄送、密送）
            message.setRecipient(MimeMessage.RecipientType.TO, new InternetAddress(receiveMail, "xx用户", "UTF-8"));
            // 4. Subject: 邮件主题（标题有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改标题）
            message.setSubject("找回密码", "UTF-8");
            // 5. Content: 邮件正文（可以使用html标签）（内容有广告嫌疑，避免被邮件服务器误认为是滥发广告以至返回失败，请修改发送内容）
            message.setContent("密码:"+code, "text/html;charset=UTF-8");
            // 6. 设置发件时间
        }

        message.setSentDate(new Date());
        // 7. 保存设置
        message.saveChanges();

        return message;
    }

    /**
     * 发送邮件
     * kind为true发送验证码，false发送密码
     * @param receiveMailAccount code
     */
    @Override
    public void sendEmail(String id, String receiveMailAccount, String code, boolean kind) throws Exception {
        // 1. 创建参数配置, 用于连接邮件服务器的参数配置
        Properties props = new Properties();                    // 参数配置
        props.setProperty("mail.transport.protocol", "smtp");   // 使用的协议（JavaMail规范要求）
        props.setProperty("mail.smtp.host", "smtp.qq.com");   // 发件人的邮箱的 SMTP 服务器地址
        props.setProperty("mail.smtp.auth", "true");            // 需要请求认证
        // PS: 某些邮箱服务器要求 SMTP 连接需要使用 SSL 安全认证 (为了提高安全性, 邮箱支持SSL连接, 也可以自己开启),
        //     如果无法连接邮件服务器, 仔细查看控制台打印的 log, 如果有有类似 “连接失败, 要求 SSL 安全连接” 等错误,
        //     打开下面 /* ... */ 之间的注释代码, 开启 SSL 安全连接。

        // SMTP 服务器的端口 (非 SSL 连接的端口一般默认为 25, 可以不添加, 如果开启了 SSL 连接,
        //                  需要改为对应邮箱的 SMTP 服务器的端口, 具体可查看对应邮箱服务的帮助,
        //                  QQ邮箱的SMTP(SLL)端口为465或587, 其他邮箱自行去查看)
        final String smtpPort = "465";
        props.setProperty("mail.smtp.port", smtpPort);
        props.setProperty("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        props.setProperty("mail.smtp.socketFactory.fallback", "false");
        props.setProperty("mail.smtp.socketFactory.port", smtpPort);


        // 2. 根据配置创建会话对象, 用于和邮件服务器交互
        Session session = Session.getDefaultInstance(props);
        session.setDebug(true);                                 // 设置为debug模式, 可以查看详细的发送 log

        // 3. 创建一封邮件
        MimeMessage message = createMessage(session, "1723978165@qq.com",id,receiveMailAccount,code,kind);

        // 4. 根据 Session 获取邮件传输对象
        Transport transport = session.getTransport();

        // 5. 使用 邮箱账号 和 密码 连接邮件服务器, 这里认证的邮箱必须与 message 中的发件人邮箱一致, 否则报错
        //
        //    PS_01: 成败的判断关键在此一句, 如果连接服务器失败, 都会在控制台输出相应失败原因的 log,
        //           仔细查看失败原因, 有些邮箱服务器会返回错误码或查看错误类型的链接, 根据给出的错误
        //           类型到对应邮件服务器的帮助网站上查看具体失败原因。
        //
        //    PS_02: 连接失败的原因通常为以下几点, 仔细检查代码:
        //           (1) 邮箱没有开启 SMTP 服务;
        //           (2) 邮箱密码错误, 例如某些邮箱开启了独立密码;
        //           (3) 邮箱服务器要求必须要使用 SSL 安全连接;
        //           (4) 请求过于频繁或其他原因, 被邮件服务器拒绝服务;
        //           (5) 如果以上几点都确定无误, 到邮件服务器网站查找帮助。
        //
        //    PS_03: 仔细看log, 认真看log, 看懂log, 错误原因都在log已说明。
        transport.connect("1723978165@qq.com", "rusmzfvbsgjecbch");

        // 6. 发送邮件, 发到所有的收件地址, message.getAllRecipients() 获取到的是在创建邮件对象时添加的所有收件人, 抄送人, 密送人
        transport.sendMessage(message, message.getAllRecipients());

        // 7. 关闭连接
        transport.close();
    }

    /**
     * 邮箱格式校验
     */
    @Override
    public boolean isEmail(String string) {
        if (string == null)
            return false;
        String regEx1 = "^([a-z0-9A-Z]+[-|\\.]?)+[a-z0-9A-Z]@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-zA-Z]{2,}$";
        Pattern p;
        Matcher m;
        p = Pattern.compile(regEx1);
        m = p.matcher(string);
        if (m.matches())
            return true;
        else
            return false;
    }

    /**
     * 包含大小写字母及数字且在6-20位
     * 是否包含
     * @param str
     * @return
     */
    @Override
    public boolean isPassword(String str) {
        boolean isDigit = false;//定义一个boolean值，用来表示是否包含数字
        boolean isLetter = false;//定义一个boolean值，用来表示是否包含字母
        for (int i = 0; i < str.length(); i++) {
            if (Character.isDigit(str.charAt(i))) { //用char包装类中的判断数字的方法判断每一个字符
                isDigit = true;
            } else if (Character.isLetter(str.charAt(i))) { //用char包装类中的判断字母的方法判断每一个字符
                isLetter = true;
            }
        }
        String regex = "^[a-zA-Z0-9]{6,20}$";
        boolean isRight = isDigit && isLetter && str.matches(regex);
        return isRight;
        //return true;
    }

}
