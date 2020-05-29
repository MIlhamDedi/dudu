
(function ($) {
    "use strict";


    /*==================================================================
    [ Focus Contact2 ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = false;

        // for(var i=0; i<input.length; i++) {
        //     if(validate(input[i]) == false){
        //         showValidate(input[i]);
        //         check=false;
        //     }
        // }

        updateMessage(input[0].value,input[1].value)

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    const encMsg = {
        Dela: "U2FsdGVkX1979OE0ABgS8JAK2hryD4YhqPs4KA2yXhZBxL/BxNCtJl3JGF1KxM3Cw5FFDK4EOCnc3uFGclO8p8W1YKXLN9ac4AGx3OiCLqhf1aTwhMSDmcCUtCwP1lZTV4w8lRuH4i1T4cHAdtjS60euTj9+6DbWRAmAel9duTT6m/a8Qt/BS9hUQ0MWTBiDPyeqCUD5POn8pi3eumH6TFo0S8jtKFjdmpIoyvH/iWm1BPtNKOAeuKsIfakGnYWpY4DXEws21f5zzC0gHvFvzFu66d2CsLIBVQKWQM8K9sB0XdO3KbON46v7FOXvy0enKRKzB04ox+ma0ZdUiaYwdK499SsWmgag4vQgU4zHNY5I7NdjjTm71QLJfFSKq2ZSg+PVRdLRoP2PwEu94Q8X5LpkvnIMC1ZIyRLYJASbuyhTt50ylwTde9UCa9qWpeDlhIiA4SHXjDrFmNJxLk2VhB0gNCLgUar3Sv7H+YeCBTZrwrz1eF/Tqz2/w7kS3a0DDmSxEStMdIfniiY2O7oUHf5+Q8sTCuqEw/ZPRe19CMRJ4zhxZhHEcRe0ASsvoBC0pjU2gnhPNH70enITZlULRbNEKS4StinysKoDf1an9GdaIveIyAPwYOs0+Pw6KhBMD2pT0X6uKQeJsLzjlMFRJuC9WFArPqrj5a6MtjBEqYzEPIjKJqamm2n2xKOtAr4nmT6utlQCWkBemVBDPCOGzRYu05n48mJnsSvLy2SI48zDyz8PW7bTBYyJ5ib4VjdLT34lvz4j6TvhfQGmfRiobwtVu27YUqOA/ntYMOb2urFW9GQEK79XewjsM/e2ARKL/UvEAaQaBIDCYI4dVM81LZ4fIRLukJjqQQXmjF3rHj32lXR2H6zuqebzLyCiP3o/E5DXoslC4jydT/y1reRMSO0wFrFoMDhnjw2UQUV2P4knDb2T5Toj2i3hOHXiJt0Slf4GdQBehA0qBoBfYsWvsRYXsIhWpxikNAcZsvcLZsIFdZyBi/nJolOEaYWmY5PBhDRLlAO8oq5hiUc0S6PaOmRS3FQzxX3cgZuwdSh5DJXTu+VF5OhtFUg/v9errXHSvI6GuqGkHOKn5DFC7Q8/wexBZQBptwvSSPTSmnmf7hCRtX9HE4HOZAtKdEf331pj2k6NbIwM90lKa+5qfzaGcPcmj25/an3kFfncYK8c1NI0t7p9YJQ6NV661YTrHZlZ2HFvHImxvQeMrT4G+Mj1I92B9/wvCM2Toq0A8+On6/P0fCt54FeNtSnyakhjbrV4nhaUMx36LDD4KcBV9fQNQQ==",
        Sarah: "U2FsdGVkX1+BqJNiXbPeHL3C4oYtj7Xu09e+oklF2OnTZGD0WuptfC0TXB6EK2q2Hldqhu2j/ERi0MN7ItUSXXqQpFLjUw+ejE66GW26Q/3cBRuHrLo7sfDJfj++4nYrDVNdf7UG28aMYqN3FWD0xAkHpmWnNPck4ARG1gSUm7o44cRCg7+KG6atarsJFu2Up/DLD1lO+z3RMkP2rVU/eqNYmHk4AWXkqJe4zAcJTT4=", 
        Sharon: "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"
    }

    function updateMessage (key, secret) {
        console.log("key:" + key)
        console.log("secret:" + secret)
        $('#dec-msg')[0].innerText = "Hi, Fake " + key + "! " + secret + " is not the password, you idiot sandwich!"
        if (key in encMsg) {
            $('#dec-msg')[0].innerText = CryptoJS.AES.decrypt(encMsg[key], secret).toString(CryptoJS.enc.Utf8);
            $('#bg-pic')[0].style.backgroundImage = "url(\"images/" + key + ".png\")"
        }
        return false
    }

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    

})(jQuery);