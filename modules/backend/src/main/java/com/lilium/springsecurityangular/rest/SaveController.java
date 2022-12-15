package com.lilium.springsecurityangular.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lilium.springsecurityangular.dto.ResponseDTO;
import com.lilium.springsecurityangular.dto.UserDTO;
import com.lilium.springsecurityangular.user.CurrentUser;
import com.lilium.springsecurityangular.user.SaveRespository;
import com.lilium.springsecurityangular.user.User;
import com.lilium.springsecurityangular.user.UserRepository;
import com.lilium.springsecurityangular.user.UserSave;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
import net.minidev.json.JSONObject;

@RestController
@RequestMapping("/api")
public class SaveController {

    @Autowired
    private SaveRespository saveRepository;

    @Autowired
    private UserRepository userRepository;

    private CurrentUser user;

    @GetMapping("/save/{id}")
    public String getSave(@PathVariable("id") int id) {
        // long id = uRepository.findByUsername(user.getUsername()).getId();
        // return "repository.findByUserEntityId(id)";
        // uRepository.findByUsername("user1").getPassword()

        // long id = userRepository.findByUsername("user1").getId();
        // User user = uRepository.findByUsername("user1");
        // UserSave ans = repository.findByUserId(0);
        String res = "Server had an issue: ";
        try {
            res = String.valueOf(saveRepository.findByUserid(id).getSave());
        } catch (Exception e) {
            res = res + "    " + e;
        }

        return res;
    }

}
