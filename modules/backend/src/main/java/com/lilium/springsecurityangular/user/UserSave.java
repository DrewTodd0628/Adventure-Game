package com.lilium.springsecurityangular.user;

import javax.persistence.*;

import net.minidev.json.JSONObject;

@Entity
public class UserSave {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String save;

    // @OneToOne(cascade = CascadeType.ALL)
    // @JoinColumn(name = "idk")
    // private User user;

    private long userid;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSave() {
        return save;
    }

    public void setSave(String save) {
        this.save = save;
    }

    public long getUserid() {
        return userid;
    }

    public void setUserid(long userid) {
        this.userid = userid;
    }

    @Override
    public String toString() {
        return "UserSave [id=" + id + ", save=" + save + ", userid=" + userid + "]";
    }
}
