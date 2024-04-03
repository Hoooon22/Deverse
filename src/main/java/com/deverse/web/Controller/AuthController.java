package com.deverse.web.Controller;

import com.deverse.web.Dto.ResponseDto;
import com.deverse.web.Dto.SignUpDto;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/auth")
public class AuthController {
    @PostMapping("/signUp")
    public ResponseDto<SignUpDto> signUp(@RequestBody SignUpDto requestBody) {
        System.out.println(requestBody.toString());
        return null;
    }
}
