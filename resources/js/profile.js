$(document).ready(()=>
{
    Set_Container_height();
    setCardPosition();
}) 

$(window).resize(()=>
{
    Set_Container_height();
    setCardPosition();
    //console.log(ElementNumber);
})

function setCardPosition()
{
    let container = $($(".container")[0]);
    let width_con = container.width();
    let Card  = $(".container").children();
    let width = $(Card[0]).width();
    //console.log(width);
    for(let i  = 0; i < Array.from(Card).length;i++)
    {
        let element = $(Card[i]);
        let offset = (i !== 0) ? width_con-width : (width_con-width)/2;
        element.css("left",`${width*i+offset}px`);
        if(i === index)
        {
            element.css("box-shadow","0 4px 12px 0px rgba(0,0,0,.25)");
        }
        else{
            element.css("box-shadow","none");
        }
        console.log(width*i+offset);
    }
}

function Set_Container_height()
{
    /*
    Get the largest Height of image and set container height to it
    */
    let container = $($(".container")[0]);
    let User_card = $(container.children());
    let max = User_card[0].children[0].clientHeight;
    
    Array.from(User_card).forEach(element => {
        let image = element.children[0];
        let text = $(element.children[1]);
        let height = image.clientHeight;
        //console.log(height)
        text.css("height",`${height*0.7}px`);
        if(height >= max)
        {
            max = height;
            //console.log(max);
        }
    });
    Array.from(User_card).forEach(element => {
        $(element).css("height",`${max+50}px`);
        //console.log($(element).css("height"));
    });
    container.css("height",`${max+100}px`);
    //console.log(container.css("height"));

}

let index = 0;
let ElementNumber = Array.from($($(".container")[0]).children()).length;
$(".left").click(()=>
{
    index --;
    if(index < 0) 
    {
        index = ElementNumber + index;
    }
   // console.log(index);
    Update_POS(index);
});

$(".right").click(()=>
{
    index ++;
    index %= ElementNumber;
   // console.log(index);
    Update_POS(index);
});

function Update_POS(index)
{
    let Card  = $(".container").children();
    let container = $($(".container")[0]);
    let width_con = container.width();
    let width = $(Card[0]).width();
    for(let i  = 0; i < Array.from(Card).length;i++)
    {
        let element = $(Card[i]);
        let offset = (i > index) ? width_con-width : (width_con-width)/2;
        let current_pos =parseFloat($(Card[index]).css("left"));
        console.log(parseFloat(element.css("left"))- current_pos);
        element.animate({scale: "0.9"},200);
        element.animate({left:`${parseFloat(element.css("left"))- current_pos+offset}px`},1000);
        element.animate({scale: "1"},200);
        if(i === index)
        {
            element.css("box-shadow","0 4px 12px 0px rgba(0,0,0,.25)");
        }
        else{
            element.css("box-shadow","none");
        }
    }
}
