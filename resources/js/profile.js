$(document).ready(()=>
{
    Set_Container_height();
}) 

$(window).resize(()=>
{
    Set_Container_height();
})

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
        text.css("height",`${height*0.7}px`);
        if(height >= max)
        {
            max = height;
            console.log(max);
        }
    });
    container.css("height",`${max+100}px`);

}