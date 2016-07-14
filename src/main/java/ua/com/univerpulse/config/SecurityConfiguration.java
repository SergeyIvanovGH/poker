package ua.com.univerpulse.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import ua.com.univerpulse.service.UserDetailsServiceImpl;


@Configuration
@EnableWebSecurity
public class SecurityConfiguration extends WebSecurityConfigurerAdapter {

    @Autowired
    private UserDetailsService userDetailsService;

    @Bean
    public PasswordEncoder getPasswordEncoder() {
        return new PasswordEncoder() {
            @Override
            public String encode(CharSequence rawPassword) {
                return rawPassword.toString();
            }

            @Override
            public boolean matches(CharSequence rawPassword, String encodedPassword) {
                return rawPassword.toString().equals(encodedPassword);
            }
        };
    }

    @Autowired
    public void registerGlobalAuthentication(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(userDetailsService);
    }

    @Bean
    public UserDetailsService getUserDetailsService(){
        return new UserDetailsServiceImpl();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
//            http.authorizeRequests().antMatchers("/").permitAll();
//            http.csrf().disable();  // Disable cross request

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

        http
            .httpBasic()
            .and()
            .authorizeRequests()
            .antMatchers("/index.html", "/home.html").permitAll()
            .antMatchers("/css/**").permitAll()
            .antMatchers("/images/**").permitAll()
            .antMatchers("/js/**").permitAll()
            .antMatchers("/service/**").permitAll()
            .anyRequest().authenticated();
    }
}
