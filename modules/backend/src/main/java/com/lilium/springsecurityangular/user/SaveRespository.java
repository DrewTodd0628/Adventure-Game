package com.lilium.springsecurityangular.user;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import net.minidev.json.JSONObject;

@Repository
public interface SaveRespository extends JpaRepository<UserSave, Long> {

    // @Query(value = "SELECT u.save from `user_save` u WHERE u.id = 0", nativeQuery
    // = true)
    // UserSave findByFK(long fk);

    UserSave findByUserid(long id);

}
