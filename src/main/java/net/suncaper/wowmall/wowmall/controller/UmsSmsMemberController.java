package net.suncaper.wowmall.wowmall.controller;

import net.suncaper.wowmall.wowmall.entity.UmsSmsMember;
import net.suncaper.wowmall.wowmall.entity.UmsSmsMemberExample;
import net.suncaper.wowmall.wowmall.mapper.UmsSmsMemberMapper;
import net.suncaper.wowmall.wowmall.service.UmsSmsMemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;
import java.util.List;

@Controller
@RequestMapping("/usm")
public class UmsSmsMemberController<loginTime> {

    //控制层注入服务层
    @Autowired
    private UmsSmsMemberService umsSmsMemberService;
    @Autowired
    private UmsSmsMemberMapper umsSmsMemberMapper;

    @RequestMapping("/login")
    public String login(){
        System.out.println("tologin");
        return "/user/login-register";
    }
    @RequestMapping("/register")
    public String register(){
        return "/user/register";
    }
    @RequestMapping("/verifycode")
    public String verifycode(){
        return "/user/registerverifycode";
    }
    @RequestMapping("/findpassword")
    public String findpassword(){
        return "/user/findpassword";
    }



    /**
     * 登录
     * @param id
     * @param password
     * @param response
     * @param session
     * @param redirectAttributes
     * @return
     */
    @RequestMapping(value = "Login",method = RequestMethod.GET)
    //@ResponseBody
    public String login(@RequestParam("userid") String id,
                        @RequestParam("userpassword") String password,
                        HttpServletResponse response,
                        HttpSession session,
                        RedirectAttributes redirectAttributes){

        //UmsSmsMember umsSmsMember = new UmsSmsMember();umsSmsMember.setId(id);umsSmsMember.setPassword(password);
        //根据id检索数据库
        UmsSmsMember umsSmsMemberInDB = umsSmsMemberService.selectByPrimaryKey(id);
        String passwordInDB = umsSmsMemberInDB.getPassword();

        if(umsSmsMemberInDB==null){
            return "/user/login-register";
        }
        if(passwordInDB.equals(password) && umsSmsMemberInDB!=null){
            System.out.println("登录成功");

            // 设置格式
            response.setHeader("Access-Control-Allow-Origin", "*");
            response.setHeader("Access-Control-Allow-Methods", "POST");
            response.setHeader("Access-Control-Allow-Headers","x-requested-with,content-type");
            response.setContentType("text/html;charset=utf-8");
            response.setCharacterEncoding("utf-8");
            // 创建Cookie
            Cookie idcookie = new Cookie("wowmailid", id);
            Cookie pwcookie = new Cookie("wowmailpw",password);
            // 有效期,秒为单位
            idcookie.setMaxAge(180*60);
            pwcookie.setMaxAge(180*60);
            // 设置cookie
            response.addCookie(idcookie);
            response.addCookie(pwcookie);
            /*try {
                response.getWriter().print("cookie创建成功");
            } catch (IOException e) {
                e.printStackTrace();
            }*/
            /*对应后台操作
            // 获取客户端cookie
            request.setCharacterEncoding("utf-8");
            Cookie[] cookies = request.getCookies();
            if (cookies != null) {
                for (Cookie c : cookies) {
                    System.out.println(c.getName() + "--->" + c.getValue());
                }
            }
             */

            //网页提示信息弹窗
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('登录成功');</script>");
                response.getWriter().flush();
            }catch (Exception e){
                e.printStackTrace();
            }
            return "/user/index";

        }else {

            System.out.println("登录失败");
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('用户ID密码错误');</script>");
                response.getWriter().flush();
            } catch (Exception e) {
                e.printStackTrace();
            }
            return "/user/register";
        }
        //return "/user/register";

    }

    /**
     * 注销登录
     * @param session
     * @param request
     * @param response
     * @return
     */
    @RequestMapping("/logout")
    public String logout(HttpSession session, HttpServletRequest request, HttpServletResponse response){

        //session.removeAttribute("loginname"); 消耗session
        Cookie[] cookies = request.getCookies();
        for(Cookie cookie:cookies ) {
            if (cookie.getName().equals("wowmailid") || cookie.getName().equals("wowmailpw")) {
                cookie.setValue(null);
                cookie.setMaxAge(0);// 立即销毁cookie
                System.out.println("被删除的cookie名字为:" + cookie.getName());
                response.addCookie(cookie);
            }
        }
        return "/user/login-register";
    }

    /**
     * 注册
     * @param username
     * @param email
     * @param password
     * @param model
     * @param response
     * @return
     */
    @RequestMapping(value = "Register",method = RequestMethod.GET)
    //@ResponseBody
    public String register(
            @RequestParam(value = "username", required = true) String username,
            @RequestParam(value = "useremail", required = true) String email,
            @RequestParam(value = "userpassword", required = false) String password,
            Model model, HttpServletResponse response){

        UmsSmsMember umsSmsMember = new UmsSmsMember();

        //当邮箱存在时，注册失败
        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andEmailEqualTo(email);
        List<UmsSmsMember> umsSmsMemberTemps = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);//查询所有
        String emailT = umsSmsMemberTemps.size() > 0 ? umsSmsMemberTemps.get(0).getEmail() : null ;

        if(email.equals(emailT)){//注册失败，邮箱已存在

            //System.out.println("注册失败");
            //网页提示信息弹窗
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('注册失败，邮箱已存在');</script>");
                response.getWriter().flush();
            }catch (Exception e){
                e.printStackTrace();
            }

        }else if(!umsSmsMemberService.isEmail(email)) {//注册失败，邮箱格式错误

            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('注册失败，邮箱格式错误');</script>");
                response.getWriter().flush();
            } catch (Exception e) {
                e.printStackTrace();
            }

        } else if(!umsSmsMemberService.isPassword(password)){//注册失败,密码包含大小写字母及数字且在6-20位

            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('注册失败,密码包含大小写字母及数字且在6-20位');</script>");
                response.getWriter().flush();
            } catch (Exception e) {
                e.printStackTrace();
            }

        }else{

            //当邮箱不是已存在的时，发送验证码
            String id = umsSmsMemberService.autoId(true);
            umsSmsMember.setUsername(username); umsSmsMember.setId(id);
            umsSmsMember.setEmail(email); umsSmsMember.setPassword(password);
            umsSmsMember.setMemberLevelId((long) 0);//设置用户未激活
            String code = umsSmsMemberService.verifyCode(8);
            //讲验证码存入数据库中的nickname
            //我也知道这样做不好，实在能力有限，试了半天没把code传递出去
            //无奈出此下策
            umsSmsMember.setNickname(code);
            umsSmsMemberService.insert(umsSmsMember);
            //System.out.println(code);
            try {
                umsSmsMemberService.sendEmail(id,email,code,true);
            } catch (Exception e) {
                e.printStackTrace();
            }
            //网页提示信息弹窗
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('注册成功，请验证邮箱');</script>");
                response.getWriter().flush();
            }catch (Exception e){
                e.printStackTrace();
            }
            return "/user/registerverifycode";

        }
        return "/user/register";
    }

    /**
     * 邮箱验证码验证
     * @param verifycode
     * @param response
     * @return
     */
    @RequestMapping(value = "Verifycode",method = RequestMethod.GET)
    //@ResponseBody
    public String verifycode(
            @RequestParam(value = "verifycode", required = true) String verifycode,
            HttpServletResponse response){

        //在生成验证码时，已确保了验证码的唯一性
        //所以相当于把verifycode当主键了，能查到就验证成功
        //......
        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andNicknameEqualTo(verifycode);
        List<UmsSmsMember> umsSmsMemberTemps = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);//查询所有
        String codeT = umsSmsMemberTemps.size() > 0 ? umsSmsMemberTemps.get(0).getNickname() : null ;

        if(verifycode.equals(codeT)){
            //删除存在nickname中的验证码，但好像可以不删
            //nickname辛苦了！！！
            //umsSmsMember.setNickname(null);

            umsSmsMemberTemps.get(0).setMemberLevelId((long) 1);
            System.out.println("验证成功");

            //网页提示信息弹窗
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('邮箱验证成功');</script>");
                response.getWriter().flush();
            }catch (Exception e){
                e.printStackTrace();
            }

            return "/user/login-register";
        }
        System.out.println("验证失败");

        try {
            response.setContentType("text/html;charset=utf-8");
            response.getWriter().write("<script>alert('邮箱验证失败');</script>");
            /*response.getWriter().write("<script>alert('网页将跳转到test.do'); "
                    "window.location='test.do';" +
                    "window.close();</script>");*/
            response.getWriter().flush();
        }catch (Exception e){
            e.printStackTrace();
        }

        return "/user/register";
    }


    /**
     * 查找密码
     * @param findemail
     * @param model
     * @param response
     * @return
     */
    @RequestMapping(value = "Findpassword",method = RequestMethod.GET)
    //@ResponseBody
    public String register(
            @RequestParam(value = "findemail", required = true) String findemail,
            Model model, HttpServletResponse response){

        UmsSmsMemberExample umsSmsMemberExample = new UmsSmsMemberExample();
        umsSmsMemberExample.createCriteria().andEmailEqualTo(findemail);
        List<UmsSmsMember> umsSmsMemberTemps = umsSmsMemberMapper.selectByExample(umsSmsMemberExample);//查询所有
        String pw = umsSmsMemberTemps.size() > 0 ? umsSmsMemberTemps.get(0).getPassword() : null ;
        String id = umsSmsMemberTemps.size() > 0 ? umsSmsMemberTemps.get(0).getId() : null ;

        if(pw != null){
            try {
                umsSmsMemberService.sendEmail(id,findemail,pw,false);
            } catch (Exception e) {
                e.printStackTrace();
            }

            //网页提示信息弹窗
            try {
                response.setContentType("text/html;charset=utf-8");
                response.getWriter().write("<script>alert('找回密码成功，请查收邮件');</script>");
                response.getWriter().flush();
            }catch (Exception e){
                e.printStackTrace();
            }
            return "/user/login-register";
        }

        try {
            response.setContentType("text/html;charset=utf-8");
            response.getWriter().write("<script>alert('此邮箱未注册');</script>");
            response.getWriter().flush();
        }catch (Exception e){
            e.printStackTrace();
        }
        return "/user/findpassword";
    }
}
