package com.deverse.web.Dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpDto {
    private String id;
    private String name;
    private String password;
    private LocalDateTime regDate;
    private String fk_teamID;
    private String fk_teamName;
}
