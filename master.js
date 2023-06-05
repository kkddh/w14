var Body = {
    setColor: function(color){
        $('body').css('color', color);
    //   document.querySelector('body').style.color=color;  
    },
    setBackgroundColor: function(color){
        $('body').css('background-color', color);
    //   document.querySelector('body').style.backgroundColor=color;  
    }
  }
  
  var Links = {
    setColor: function(color){
    //   var alist = document.querySelectorAll('a');
    //   var i = 0;
    //   while (i < alist.length) {
    //     alist[i].style.color = color;
    //     i = i + 1;
    //   }
    $('a').css('color',color);
    }
  }
  
  function nightDayHandler(self){
    if(self.value == 'night'){
      Body.setBackgroundColor('black');
      Body.setColor('white');   
      Links.setColor('purple')   
      self.value = 'day';
    } else {
      Body.setBackgroundColor('white')
      Body.setColor('black');   
      Links.setColor('red');
      self.value = 'night';  
    } 
  }