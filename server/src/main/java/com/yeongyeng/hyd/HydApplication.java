package com.yeongyeng.hyd;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication(exclude = { SecurityAutoConfiguration.class })
@PropertySource(value = { "classpath:jdbc.properties" })
public class HydApplication {

	public static void main(String[] args) {
		SpringApplication.run(HydApplication.class, args);
	}

}
