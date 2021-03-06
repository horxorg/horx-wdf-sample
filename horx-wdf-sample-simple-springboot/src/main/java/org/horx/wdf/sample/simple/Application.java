package org.horx.wdf.sample.simple;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.ServletComponentScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.session.config.annotation.web.http.EnableSpringHttpSession;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@SpringBootApplication
@ComponentScan({"org.horx.wdf"})
@MapperScan(basePackages = {"org.horx.wdf.sys.mapper", "org.horx.wdf.sample.simple.mapper"})
@EnableTransactionManagement(order = 2)
//@EnableCaching(order = 1)
@ServletComponentScan(basePackages = {"org.horx.wdf.sample.simple.config"})
@EnableScheduling
public class Application {

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

}
