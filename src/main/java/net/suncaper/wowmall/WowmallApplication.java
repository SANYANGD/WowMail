package net.suncaper.wowmall;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * @author Mr风语恺撒
 */
@SpringBootApplication
@MapperScan({"net.suncaper.wowmall.wowmall.mapper"})
public class WowmallApplication {

    public static void main(String[] args) {
        SpringApplication.run(WowmallApplication.class, args);
    }

}
