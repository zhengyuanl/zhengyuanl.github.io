$("#searchText").hide();


$("#searchButton").on("mouseenter", 
    function () {
        if(flag == 0)
        {
            let handleElement = $(this);

            let rotation = 0;
            let thisInterval = setInterval(
                function() {
                    if(rotation == 90) {
                        clearInterval(thisInterval);
                    }

                    handleElement.css("transform", `rotate(${rotation}deg)`);
                    rotation += 5;
                }
            , 10);
        }
    }
)

let flag = 0;
$("#searchButton").on("mouseleave", 
    function () {
        if(flag == 0)
        {
            let handleElement = $(this);
            let rotation = 90;
            let thisInterval = setInterval(
                function() {
                    if(rotation == 0) {
                        clearInterval(thisInterval);
                    }

                    handleElement.css("transform", `rotate(${rotation}deg)`);
                    rotation -= 5;
                }
            , 10);
        }
    }
)


$("#searchButton").click (
    function() {
        if(flag == 0)
        {
            $("#searchText").show();

            $("#markLine").css("width", 0);
            $("#markLine").animate({width: 180}, "slow");
            $("#searchText").focus();
            flag = 1;
        }
        else {
            $("#markLine").animate({width: 0}, "slow");
            $("#searchText").hide();
            flag = 0;
        }
    }
)