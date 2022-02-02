var xaraSwidgets_imageGallerySimple_v11Templates = {


entry:          '<li class="{com_id}_col"><a classname="highslide" class="{com_id}_a" href="{image}"><img class="{com_id}_image {com_id}_imagepulse" src="{image}" alt=""></a></li>', 
myimages:       '<img src="{image}" >', 



        
        main:   '<div class= "{component_id}_pag holder"></div> '
            +   '<div id="{component_id}OuterDiv" class="" style=" margin:0 auto; " >'
            +   '<ul id="{component_id}_gallery" class="{component_id}_gallery xgallery">'
            +   '{entryhtml}'
            +   '</ul>'
            +   '</div>'
};

    
function xsw_cs_htmlbr(str) {
    if (str == undefined)
        return '';
    var lines = str.split("\n");
    for (var t = 0; t < lines.length; t++) {
        lines[t] = $("<p>").text(lines[t]).html();
    }
    return lines.join("<br/>");
}

function xaraSwidgets_imageGallerySimple_v11GetConfig(value, d)
{
    var ret = parseInt(value);
    
    if(!isNaN(ret))
    {
        return ret;
    }
    else
    {
        return d;
    }
}



// this is the constructor for a component
// it loops through each 'entry' in the array of data and compiles the entry template for it
// it then applies the resulting HTML to the main template before writing the whole lot to the div on the page
// it then initialises the actual jquery plugin for the div (that now contains the required HTML as a result of writing the template to it)
function xaraSwidgets_imageGallerySimple_v11Constructor(divID, data)
{
    var entryHTML = '';
    var cachedImage = '';  // image caching
    
//  var entryHTML2 = '';


    
//  timeout = (data[0].pause);
//  speed = (data[0].speed);
//  panelTrans = (data[0].trans);
    myCols = (data[0].cols);
    myBorder = (data[0].border);
    myShadowTrans = (data[0].trans);
    myShadowDim = (data[0].shadowdim);
    myShadowBlur = (data[0].shadowblur);
    myRotation = (data[0].rotation);
    myPopupSize = (data[0].popupsize);
    var config = data[0];


// set the effect to be applied when hovering over the thumbs

var useTransition = xaraSwidgets_imageGallerySimple_v11GetConfig(config.effect, 0);
    
    var effects = [
        
    'popup',
    'scale', 
    'rotate', 
    'shake', 
    'swing', 
    'tada'
    
    ];

    var effectName = effects[useTransition];
    
    //console.log(effectName)


var fileFolder = 'index_htm_files';
    
    $('script').each(function() {
        
        var src = $(this).attr('src');
        
        if(src)
        {
            var parts = src.split('/');
        
            if(parts[1]=='imageGallerySimple_v11_conf.js')
            {
                fileFolder = parts[0];
            }
        }
        
    });
    
    //window.hs = window.simpleGalleryHighslide;
    
    window.hs2.outlineType=fileFolder + "/sgcustoms";
    window.hs2.addSlideshow({slideshowGroup: divID, interval: 5000,repeat: true,useControls: true,fixedControls: 'fit',overlayOptions: {className: 'controls-in-heading',opacity: '0.75',position: 'bottom center',offsetX: '0',offsetY: '-10',hideOnMouseOut: true}});
    
//  xaraSwidgets_simpleGalleryInit(divID, data);

     // loop through each entry in the array and compile the entry template for it
 

 for(var i=1; i<data.length; i++)
 {
 
 entryHTML += xaraSwidgets_compileTemplate(xaraSwidgets_imageGallerySimple_v11Templates.entry, data[i]);
  cachedImage += xaraSwidgets_compileTemplate(xaraSwidgets_imageGallerySimple_v11Templates.myimages, data[i]); 
 }


 
    function preload(arrayOfImages) {
    //  console.dir(arrayOfImages)
        $(arrayOfImages).each(function () {
          $('<img />').attr('src',this.src).appendTo('body').css('display','none').addClass('preload');
        
    });
}
    preload(cachedImage); // enable image caching
    
    var com1_id=divID;
    // now lets compile the 'main' template which acts as a wrapper for each entry

    
        // get the number of columns
        var enteredCols = myCols;
        var defaultCols = '3';
        var cols = isNaN(enteredCols) ? defaultCols : enteredCols
        if (cols==0)
            {
                var cols =1;
            }

        var enteredPopupSize = myPopupSize;
        var defaultPopupSize = '500';
        var popupSize = isNaN(enteredPopupSize) ? defaultPopupSize : enteredPopupSize       
        // alert (popupSize)    
    
        // get the border size
        var enteredBorder = myBorder;
        var defaultBorder = '2';
        var border = isNaN(enteredBorder) ? defaultBorder : enteredBorder
        

        // get the opacity value for the shadows
        var enteredTrans = parseFloat(myShadowTrans);
        var defaultTrans = '0.3';
        var shadowTrans = isNaN(enteredTrans) ? defaultTrans : enteredTrans
        var ieShadowTrans = shadowTrans*100;

        // get the H and V value for the shadows
        var enteredDim = parseInt(myShadowDim);
        var defaultDim = '4';
        var shadowDim = isNaN(enteredDim) ? defaultDim : enteredDim
        
        // get the blur value for the shadows
        var enteredBlur = parseInt(myShadowBlur);
        var defaultBlur = '4';
        var shadowBlur = isNaN(enteredBlur) ? defaultBlur : enteredBlur
        // create the box shadow        
        var shadowCSS = shadowDim + 'px ' + shadowDim + 'px ' + shadowBlur + 'px 0px rgba(0,0,0,'+shadowTrans+')';

        // get rotation for the images
        var enteredRotation = (myRotation);
        var defaultRotation = '360';
        var rotation = isNaN(enteredRotation) ? defaultRotation : enteredRotation

        

    
    var mainData = {
        component_id:divID,
        entryhtml:entryHTML,
        com_id:com1_id
    };
    
    


    var mainTemplate = xaraSwidgets_compileTemplate(xaraSwidgets_imageGallerySimple_v11Templates.main, mainData);
    
    
    
    
    // now lets apply the resulting HTML for the whole component to the main DIV that was exported by XARA
    
    $('#' + divID).html(mainTemplate);
    
    
    // get the dimensions of the parent div  
    
    var width = $('#' + divID).parent('div').width();
    var height = $('#' + divID).parent('div').height();
    $('#' + divID).css('width',width);
    $('#' + divID+'OuterDiv').css('width',width);
    $('#' + divID).css('height',height);
    $('#' + divID).parent('div').css('overflow', 'visible');
//  console.log(height)
    $('.' + divID +'_gallery li').css('display', 'none')

    
        var gutters = parseInt(cols) +1;
        var gutterWidth = Math.floor(width * 0.025); // the gutters are 2.5%

function columnWidth(n)
    {
        
        var workingSpace = width -(gutters*gutterWidth)
        var colWidthPx = Math.floor(workingSpace/cols);
        var colWidth = workingSpace/cols/width*100;

    //  return colWidth;
        return colWidthPx;


    }

    var colWidth = columnWidth(cols); //calc width for each li 
    

    //set col width and margins
        $('.' + divID +'_col').css({
        
        'width': colWidth+'px',
         'margin':''+gutterWidth+'px 0 0 '+gutterWidth+'px'
            
        }); 

    // set the popup value
        // right the onlick event as an attribute of the href to allow the maxWidth and height to be passed 
     

    $('.' + divID +'_a').attr("onclick", "return hs2.expand(this,{slideshowGroup: '"+divID+"', maxWidth: '"+ popupSize +"', maxHeight: '"+popupSize+"' } )")
    


    // set the max width value.     
        $('.' + divID +'_image').css({
        'max-width': '100%',
        'border': ''+border+'px solid #eee'

        }); 


    // set ul padding value
    var ulPadding = Math.floor(height * 0.025); // the bottom padding is 2.5%
    $('.' + divID +'_gallery').css({
        'padding': '0 0 '+ulPadding+'px 0'
        }); 


// setting the shadow direction blur and transparency, will not affect ie 9 and below
//if(!$.browser.msie || ($.browser.msie && document.documentMode>=10))  
if (document.createElement("detect").style.textShadow === "") 

//if($.browser.msie && document.documentMode && document.documentMode <=9)  
{


$('.' + divID +'_image').css({
                                '-webkit-box-shadow': shadowCSS,
                                '-moz-box-shadow': shadowCSS,
                                'box-shadow': shadowCSS,
                                'opacity':'0.99'

                                });
    

if (effectName !='popup')
{
                    //      $('.' + divID +'_image').click(function () {return false;});
                    //      $('.' + divID +'_image').css('cursor','default');

}

if (effectName=='rotate')
    {



        $('.' + divID +'_gallery li').hover(



            function(){
                $(this).css({
                
                    '-moz-transform':'scale(1.4) rotate('+rotation+'deg)',
                    '-webkit-transform':'scale(1.4) rotate('+rotation+'deg)',
                    '-o-transform':'scale(1.4) rotate('+rotation+'deg)',
                   // '-ms-transform':'scale(1.4) rotate('+rotation+'deg)',
                    'transform':'scale(1.4) rotate('+rotation+'deg)',
                    'z-index':'2' ,
                    'opacity':'1'
                    });


                },
                function(){
                $(this).css({
                
                    '-moz-transform':'scale(1) rotate(0deg)',
                    '-webkit-transform':'scale(1) rotate(0deg)',
                    '-o-transform':'scale(1) rotate(0deg)',
                    '-ms-transform':'scale(1) rotate(0deg)',
                    'transform':'',
                    'z-index':'0' ,
                    'opacity':'1'
                    });


                }                       

        
    
    );




    }
else 
    {   
    $('.' + divID +'_gallery li').hover(

        function(){
            $(this).css({
                'z-index':'1' ,
                'opacity':'1'
                });


            },
            function(){
            $(this).css({
            
                'z-index':'0' ,
                'opacity':'1'
                });


            }


        );
    };
};
    



    // invoke the effect 
                



        

                var $container  = $('.' + divID +'_gallery'),
                $articles   = $('.' + divID +'_col'),
                timeout;
             
            $('.' + divID +'_col').hover(


    
                function() {
                    

                    var $article    = $(this);
                    clearTimeout( timeout );
                    timeout = setTimeout( function() {
    

                    if( $article.hasClass('animated'+ effectName) ) return false;
                     
                        $articles.not($article).removeClass('animated ' + effectName);
                        $article.addClass(' animated ' + effectName);
                     
                    }, 5 );
                 
                    },function(){

                    clearTimeout( timeout );
                    $articles.removeClass(' animated ' + effectName);
               
                    }); 


                

                //  $('.' + divID +'_gallery li:first').css({'display':'list-item'});
                    

                     $('.' + divID +'_image:first').load(function(){
                     /* var setHeight = $('.' + divID +'_col:first').height();
            //          console.log(setHeight)
                        $('.' + divID +'_col').css('height', setHeight);
                        $('.' + divID +'_gallery li:first').css({'display':'none', 'z-index' : '0'});
                     */  
                
                     
                function imageOrientation(arrayOfImages ,imgWidth)
                
                {
                     

                     firstImg = $(arrayOfImages)[0]
                 
                     firstImgH = firstImg.naturalHeight
                     firstImgW = firstImg.naturalWidth
                 
                   if (firstImgH > firstImgW){
                       return imgHeight = Math.round( imgWidth * 1.33 ) 
                   }
                   if (firstImgH < firstImgW){
                       return imgHeight = imgWidth * 0.76 
                   }

                   if (firstImgH == 0)
                        {    
                            var imgHeight = $('.' + divID +'_col').height();
                      
                            return imgHeight     
                           // added as the above statements fail on sites published to TP when browsing on safari
                         }       


                }

                var imgWidth = $('.' + divID +'_col').width();

                  if(document.all && !document.addEventListener)  // better check for <=IE8
                        {
                            var containera = $('#' + divID).parent();
                            var animatedcontainer = containera.parent();
                            
                            if (animatedcontainer.hasClass('xr_ac')) {
                                var imgHeight = $('.' + divID +'_col').height();
                              //  console.log ("IE8" +imgHeight)
                            }
                            else 
                            {
                                var imgHeight = $('.' + divID +'_col').height();
                            //    console.log ("IE8" + imgHeight)
                            }
                            
                        }
                   else 
                        {
                            var imgHeight = imageOrientation(cachedImage,imgWidth)
                        }     


             
           
                var myRows = Math.floor(height / imgHeight) * cols;
           
                var myRowsPerPage = Math.floor(height / imgHeight) 
           
                var defaultRows = 1 * cols;
                
                var rows = myRows ==0 ? defaultRows : myRows;
                
                    
                    $('.' + divID +'_pag').jPages({
                    containerID : divID +"_gallery",
                    perPage : rows,
                    first       : "&lt;&lt;",
                    previous    : "&lt;",
                    next        : "&gt;",
                    last        : "&gt;&gt;",
                //  pause       : 5000,
                //  clickStop   : true,
                    addedBR     : false,
                    custom      : myRowsPerPage,
                    callback    : function( items ){

                    if (items.count >1)
                        {
                            
                            $('.' + divID +'_pag').css('display', 'block')  
                         
                             if (this.addedBR === false) {
                                $('.' + divID +'_pag').after('<br>')
                            this.addedBR = true;
                             }

                        }
                    
                    }

                    },$('.' + divID +'_gallery li').css('display', 'list-item'));

                    if (document.createElement("detect").style.textShadow === "")  // check to see if text shadow is supported
                    //if(!$.browser.msie || ($.browser.msie && document.documentMode>=10))  
                        //if($.browser.msie && document.documentMode && document.documentMode <=9)  
                        {
                            
                            $('.' + divID +'_gallery li').css({
                            '-moz-transition':'all 0.6s ease',
                            '-webkit-transition':'all 0.6s ease',
                            '-o-transition':'all 0.6s ease',
                            'transition':'all 0.6s ease',
                            'opacity':'1'

                            });
                        };      
                            

                                $('.jp-first').css('font-weight','bold')
                                $('.jp-previous').css('font-weight','bold')
                                $('.jp-next').css('font-weight','bold')
                                $('.jp-last').css('font-weight','bold')
                    })          


            //if($.browser.msie && document.documentMode && document.documentMode ==9)
            // detecting ie9
            if (document.all && document.querySelector && document.addEventListener && !window.atob)    
            
                

            { // ie 9

                $('.' + divID +'_gallery li').css({
        
                'opacity':'1'

                });
    

                    if (effectName !='popup')
                        {
                    //      $('.' + divID +'_image').click(function () {return false;});
                    //      $('.' + divID +'_image').css('cursor','default');
                        }

                if (effectName =='popup') 
                {

                }
        

                else if (effectName =='rotate') 

                    {


                        //  $('.' + divID +'_image').css('cursor','default');               
                            $('.' + divID +'_image').hover(
                         function () {
                            $(this).animate({scale: '+=0.4', rotate: ''+rotation+'deg'}, {queue: true, duration: 600});
                            $(this).closest('li').animate({opacity:1});
                            $(this).closest('li').css({'z-index':'2'});
                         }, 
                         function () {
                            $(this).animate({scale: '-=0.4', rotate: '0deg'}, {queue: true, duration: 600});
                            $(this).closest('li').animate({opacity:1});
                            $(this).closest('li').css({'z-index':'0'});

                         }
                     );

                    }

                else

                    {


                    //  $('.' + divID +'_image').css('cursor','default');
                         $('.' + divID +'_image').hover(
                         function () {
                            $(this).animate({scale: '+=0.4'}, {queue: true, duration: 600});
                            $(this).closest('li').animate({opacity:1});
                            $(this).closest('li').css({'z-index':'2'});
                         }, 
                         function () {
                            $(this).animate({scale: '-=0.4'}, {queue: true, duration: 600});
                            $(this).closest('li').animate({opacity:1});
                            $(this).closest('li').css({'z-index':'0'});

                         }
                     );

                    }   

                         
                $('.' + divID +'_image').css({
                '-webkit-box-shadow': shadowCSS,
                '-moz-box-shadow': shadowCSS,
                'box-shadow': shadowCSS
                }); 
 
                }


//if($.browser.msie && document.documentMode && document.documentMode <=8)
if(document.all && !document.addEventListener)  // better check for <=IE8
    
        { // Test if CSS transitions are supported
            $(window).load(function() {
            
                var imgWidth = $('.' + divID +'_col').width();
                var imgHeight = $('.' + divID +'_col').height();



            $('.' + divID +'_imagepulse').css({
                'height': ''+imgHeight+'px',
                'width': ''+imgWidth+'px'
            });         



            $('.' + divID +'_col').css({'height': ''+imgHeight+'px'}) // set height
         
                // set the height to see if it fixes camelot preview
            

           //   console.log('dimension inside ' +imgWidth +'&'+imgHeight);



           //   $('.' + divID +'_col').css('padding-bottom', ''+imgHeight+'px') // set space between each row
                $('.' + divID +'_image').css('max-width','' ); // remove the max-width as this breaks the fallback


                    if (effectName!='popup')
                    {
                //      $('.' + divID +'_image').css('cursor','default');
                        $('.' + divID +'_image').hoverpulse({speed: 600}); // call js fallback pulse
                //      $('.' + divID +'_image').click(function () {return false;});
    
                    }

                
                //   set shadows for <=ie8   

                $('head').append("<style> body:last-child ."+divID+"_image {filter: none;}"  // only affects ie9 so following lines can be applied to <ie9
                + "."+divID+"_image {filter: progid:DXImageTransform.Microsoft.dropshadow(OffX="+shadowDim+", OffY="+shadowDim+", Color='#"+ieShadowTrans+"000000') }"
                +"</style>" );


                });
        }


        
        
        

    


 
                    
}
            
