var count=0
function change(){
	var image=document.getElementById("imagechange");
	if(count % 2=== 0){
		image.src="images/image2.jpg"
		count++
	}else if(count % 3 === 0){
		image.src="images/image3.jpg"
		count++
	}else if(count % 2 !== 0){
		image.src="images/image4.jpg"
		count++
	}
}
var timer=setInterval('change()',2500);

var activities=[]
$(document).ready(function(){
	
	$('#add').click(function(){
	

  var Activity= $('<div class="Activity"><li class="item"><img class="img" src="'+$('select#act').children("option:selected").val()+'"><h4 class="text">'+$('select#act').children("option:selected").text()+'</h4><i class="fas fa-check"></i><i class="fas fa-trash-alt"></i></li></div>')
           

         $('#notcomp').append(Activity);

         var obj={}
         obj.pic=$('select#act').children("option:selected").val();
         obj.Activity=$('select#act').children("option:selected").text();
           activities.push(obj);
            $('.fa-trash-alt').click(function(){
         	var p=$(this).parent();
         	p.fadeOut(function(){
         		p.remove();
 
            	})
         	  
     
     })
            $('.fa-check').click(function(){
         	  	console.log($(this).parent())
              var p=$(this).parent();
              p.fadeOut(function(){
              	$('#comp').append(p)
              	p.fadeIn();
              })
              $(this).remove();
         	})


	
         })
      $('#All').click(function(){
      	for(var i=0;i<activities.length;i++){
      	$('#show').append('<li class="elem"><img class="imgelem" src="'+activities[i].pic+'"><h4 class="text">'+activities[i].Activity+'</h4>')

      	}
      })
})