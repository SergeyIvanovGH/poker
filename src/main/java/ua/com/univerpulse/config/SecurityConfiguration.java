package ua.com.univerpulse.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

//    @Bean
//    public PasswordEncoder

        @Override
        protected void configure(HttpSecurity http) throws Exception {
            http.authorizeRequests().antMatchers("/").permitAll();
            http.csrf().disable();  // Disable cross request

//                    .antMatchers("/", "/welcome", "/login").permitAll()
//                    .antMatchers("/", "/welcome", "/registration").permitAll()
//                    .antMatchers("/dist/**").permitAll()
//                    .antMatchers("/assets/**").permitAll()
//                    .antMatchers("/profile").permitAll()
//                    .anyRequest().authenticated()
//                    .and()
//                    .formLogin()
//                    .loginPage("/login")
//                    .permitAll()
//                    .and()
//                    .logout()
//                    .permitAll();
        }
}
