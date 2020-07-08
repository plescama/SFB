    PennController.ResetPrefix(null); // Initiates PennController  
    PennController.AddHost("https://amor.cms.hu-berlin.de/~plescama/Pretest2/")                                                      
        // "https://amor.cms.hu-berlin.de/~plescama/Bild/")
    PennController.Sequence("welcome", "practice",rshuffle("experiment"), "send", "final")
   // PennController.DebugOff()
  
   

    PennController("welcome",
        defaultText
            .print()
       
        ,
        newText("text1", "<h2>Willkommen zum Experiment!</h2>")
        .settings.center()
        .settings.css("font-size", "large")

        ,
        newText("text3", "Danke, dass Du Dir die Zeit nimmst, an unserem Experiment teilzunehmen. Bevor es losgeht, brauchen wir noch ein paar Informationen von Dir.")
        .settings.center()
        .settings.css("font-size", "large")

        ,
         newText("please", "Wir bitten Dich darum, das Experiment nur in <b>Mozilla Firefox</b> oder <b>Google Chrome</b> auszuf&uuml;hren.")
        .settings.center()
        .settings.css("font-size", "large")
        ,

        newText("text2", "<p>Humboldt Universit&auml;t zu Berlin, Insitut f&uuml;r Deutsche Sprache und Linguistik </p>")
        .settings.center()
        .settings.css("font-style","italic")
        ,
        newButton("button1", "Fortsetzen")
            .settings.center()
            .print()
            .wait()
        ,
        getText("text1")
            .remove()
        ,
        getText("text3")
            .remove()
        ,
        getText("please")
        .remove()
        ,
        getText("text2")
        .remove()
        ,
        getButton("button1")
            .remove()
        
        ,
        newHtml("consentInfo", "consentInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button2", "Fortsetzen")
            .print()
            //.settings.center()
            .wait(getHtml("consentInfo").test.complete()
                .failure( getHtml("consentInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("consentInfo")
            .remove()
        ,
        getButton("button2")
            .remove()
        ,
        newHtml("VPInfo", "VPInfo.html")
            .settings.log()
            .print()
        ,
        newButton("button3", "Fortsetzen")
            .print()
            .wait(getHtml("VPInfo").test.complete()
                .failure( getHtml("VPInfo").warn() ) // wait and display  warning message if not all the obligatory fields in the html document are filled
             )   
        ,
        getHtml("VPInfo")
            .remove()
        ,
        getButton("button3")
            .remove()
        ,
        newHtml("instructions", "instructions.html")
            .settings.log() // log inputs in html
            .print()
        ,
        newButton("start", "&Uuml;bung starten")
            .print()
            .wait(
              getHtml("instructions").test.complete()
                .failure( getHtml("instructions").warn() )
            )
    )
        
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Practice trials /////////////////////////////////////////////////////////////////////////
     PennController("practice",
        newText("begin", "Beginn der &Uuml;bungsphase.")
        .settings.css("font-size", "xx-large")
        .settings.italic()
        .settings.center()
        .print()
        ,
        newText("intr", "<br><br>Bitte immer schnellstm&ouml;glich ein Bild ausw&auml;hlen. Sobald Du ein Bild ausgew&auml;hlt hast, kannst Du Deine Wahl nicht mehr &auml;ndern. <br><br> Bitte dr&uuml;cke auf die <b> Leertaste </b> um fortzufahren.")
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
        newKey("okay", " ")
        .wait()
        ,
        getText("begin")
        .remove()
        ,
        getText("intr")
        .remove()
        ,
        
        
        //////////////////////////////////////////Practice round 1
        
        newText("Satz1", "Welches Bild beschreibt am besten das Wort ")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("pr1", 500)
        .start()
        .wait()
        ,
        newText("word1", "<br><strong>Teller</strong> ?")
        .settings.css("font-size", "x-large")
        .settings.css("font-weight", "bold")
        .settings.center()
        .print()
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newImage("Teller2", "Teller2 .jpg")
         .settings.size(200, 200)
        ,
        newImage("Teller3", "Teller3 .jpg")
         .settings.size(200, 200)
        ,
        newCanvas("canvas3", 700, 500)
         .settings.add(53, 74, getImage("Teller2"))
         .settings.add( 439, 76, getImage("Teller3"))
         .settings.log() // the time is logged at the moment when the canvas is printed
         .print()
        ,
        newSelector("pickme1")
         .settings.add(getImage("Teller2"), getImage("Teller3"))
         .shuffle()
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()

        ,
        getText("Satz1")
        .remove()
        ,
        getText("word1")
        .remove()
        ,
        getCanvas("canvas3")
        .remove()
        ,
        getSelector("pickme1")
        .remove()
        ,
     //   getButton("confirm1")
      //  .remove()
     //   ,
        newTimer(500)
        .start()
        .wait()
        ,
  
             
        ///////////////////////////Practice round 2
        
        newText("Satz2", "Welches Bild beschreibt am besten das Wort")
         .settings.css("font-size", "x-large")
         .settings.center()
         .print()
        ,
        newTimer("pr2", 500)
        .start()
        .wait()
        ,
        newText("word2", "<br><strong>Kuchen</strong> ?" )
        .settings.css("font-size", "x-large")
        .settings.css("font-weight", "bold")
        .settings.center()
        .print()
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newImage('Kuchen1' , 'Kuchen1.jpg' )
        .settings.size(200, 200)
       
        ,
        newImage('Kuchen3' , 'Kuchen3.jpg' )
        .settings.size(200, 200)
        ,
        newCanvas( 'canvas2', 700, 544)
        .settings.add( 53, 74, getImage('Kuchen1'), 0 )
        .settings.add( 439, 76, getImage('Kuchen3'), 2 )
        .settings.log()
        .print()
        ,
        newSelector("pickme2")
         .settings.add(getImage("Kuchen1"),getImage("Kuchen3"))
         .shuffle()
         .settings.log() // time is logged for the moment when a decision has been made
         .settings.once()
         .wait()
        ,
        getText("Satz2")
        .remove()
        ,
        getText("word2")
        .remove()
        ,
        getCanvas("canvas2")
        .remove()
        ,
        getSelector("pickme2")
        .remove()
        ,
        newTimer(500)
        .start()
        .wait()
        ,
        newText("end", "Ende der &Uuml;bungsphase. Bitte dr&uuml;cke auf die <strong>Leertaste</strong> um das Experiment zu beginnen.")
        .settings.css("font-size", "x-large")
        .print()
        ,
        newKey(" ")
          .settings.log() // Anfang des Experiments
          .wait()
        ,
        getText("end")
         .remove()
       

        )     
 
       
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Experiment starts with Template /////////////////////////////////////////////////////////
        
   PennController.Template(
     variable => PennController("experiment",
        
        newTimer(500)
        .start()
        .wait()
        ,
        newText("Satz", variable.Satz)
        .settings.css("font-size", "x-large")
        .settings.center()
        .print()
        ,
       // newTimer("preword",500)
       // .start()
      //  .wait()
      //  ,
        newText("blanky", "<br>")
        .print()
        ,
        newText("Wort", variable.Wort)
        .settings.css("font-size", "x-large")
       
       .settings.center()
       .print()
        ,
        newTimer(1000)
       .start()
       .wait()
        ,
        newButton("Start").print("center at 50vw","middle at 50vh").wait().settings.log().remove()
        ,
        newImage("Bild1",variable.Bild1)
        .settings.size(250,200)
        ,
        newImage("Bild2",variable.Bild2)
        .settings.size(250,200)
        ,
        newCanvas("imagecanvas",700,500)
        .settings.add( 53, 74, getImage("Bild1"))
        .settings.add(439, 76, getImage("Bild2"))
        .print()
        .settings.log()
        ,
        newSelector("select_once")
        .settings.add(getImage("Bild1"), getImage("Bild2"))
        .shuffle()
        .settings.once()
        .settings.log() // time is logged for the moment when a decision has been made
        .wait()
        ,
        newTimer(300)
        .start()
        .wait()

        
        )// PC experiment bracket
        .log("ItemNum",variable.Item)
        .log("List",variable.List)
        .log("Listtype",variable.Type)
        .log("Wort", variable.Wort)
   
        ) // template bracket
        
    

//////////////////////////////////////////////////////////////////////////////////////////////////     
//////// Send Results Screen  ///////////////////////////////////////////////////////////////////
        
   PennController.SendResults("send")
        
//////////////////////////////////////////////////////////////////////////////////////////////////
//////// Final Screen  ///////////////////////////////////////////////////////////////////////////
        
   PennController("final",
    newText("<h2> Das ist das Ende des Experimentes. Vielen Dank f&uuml;r Deine Teilnahme!</h2>")
    .print()
     ,   
    newCanvas("empty6", 1, 10)
    .print()
    ,
    newText("Code", " <p><font size = '4'><b>Wichtiger Hinweis:</b></font></p> <p><font size = '4'> Bitte kopiere den folgenden Code und f&uuml;ge ihn in das daf&uuml;r vorgesehene Feld innerhalb Deines Clickworker-Aufgabenformulars ein.</font></p> <p><font size = '4'> Ohne die Eingabe dieses Codes kann eine Gutschrift Deines Honorars nicht erfolgen!</font></p>")
    .print()
    ,
    newCanvas("empty7", 1, 5)
    .print()   
    ,
    newText("Code2", "<b><font size = '4'> Code: BILDVERGL20 </font></b>")
    .print()
    ,
    newButton("void")
    .wait()  
     )   
   
        
        
        
        
       
        
          
        
        
       
        
          
