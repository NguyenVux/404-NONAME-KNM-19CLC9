$(document).ready(()=>
{
    Set_Container_height();
    setCardPosition();
}) 

$(window).resize(()=>
{
    Set_Container_height();
})

function setCardPosition()
{
    let Card  = $(".container").children();
    console.log(Card);
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
        console.log(height)
        text.css("height",`${height*0.7}px`);
        if(height >= max)
        {
            max = height;
            console.log(max);
        }
    });
    Array.from(User_card).forEach(element => {
        $(element).css("height",`${max+50}px`);
        //console.log($(element).css("height"));
    });
    container.css("height",`${max+100}px`);
    //console.log(container.css("height"));

}