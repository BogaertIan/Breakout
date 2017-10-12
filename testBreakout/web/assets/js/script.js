/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    console.log('ready');
    $.ajax({
            method:"GET",
            url:"testServlet",
            contentType: "data",

            success: function (result) {
       
        
          },
          error: function (error) {         
              console.log("error!");
              console.log(error);
          }
        });
});
