$(document).ready(function() {
    $("#login-form").validate({
      rules: {
        
        password:{
            required: true,
          minlength: 6
        },
       
        phoneNumber:{
            required:true,
            length:11,
            minlength:11
            
        }
      },
      messages : {
    
    phoneNumber: {
      required: "شماره تلفن خود را وارد کنید",
      number: "عدد وارد کنید",
      length:"شماره تلفن اشتباه است"
    },
    password:{
        required:"رمز عبور خود را وارد کنید",
        minlength:"رمز عبور کوتاه است"

        
    }
  }
    });
    $("#Register-form").validate({
        rules: {
          name : {
            required: true,

          },
           phoneNumber:{
              required:true,
              length:11,
              minlength:11
              
          },
          password:{
              required: true,
          
          },
         
          ConfirmPassword:{
              required:true,
            
          },
         
        },
        messages : {
      name: {
          required : 'نام و نام خانوادگی خود  را وارد کنید',
          
      },
      phoneNumber: {
        required: "شماره تلفن خود را وارد کنید",
        number: "عدد وارد کنید",
        length:"شماره تلفن اشتباه است"
      },
      
      email: {
        email: "The email should be in the format: abc@domain.tld"
      },

      password:{
          required:"رمز عبور خود را وارد کنید",
          minlength:"رمز عبور کوتاه است"
  
          
      },
      ConfirmPassword:{
           required:"رمز عبور صحیح نیست",
      }
    }
      });
  
  });
//   ----


  