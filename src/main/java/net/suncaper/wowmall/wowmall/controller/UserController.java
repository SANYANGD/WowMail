package net.suncaper.wowmall.wowmall.controller;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

/**
 * <h3>wowmall</h3>
 * <p></p>
 * 一句话描述功能信息：
 *
 * @date : 2020-07-19 00:28
 **/
@Controller
@RequestMapping("/user")
public class UserController{

    @RequestMapping("/index")
    public String userIndex(){
        return "/user/index";
    }

    @RequestMapping("/{path}")
    public String toPage1(@PathVariable("path") String p){
        return "/user/"+p;
    }

//    @Autowired
//    ProductService productService;
//
//    //默认返回试图，默认返回html
//    //如果要返回json，多加一个注解
//    @ResponseBody
//    @RequestMapping("/search")
//    public String searchProduct(){
//
//
//        return "/";
//    }
}
