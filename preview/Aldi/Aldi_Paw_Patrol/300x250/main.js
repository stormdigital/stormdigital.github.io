function init(){var e=[],a=document.querySelector("#pawWrapper");for(let r=1;r<66;r++){var t=document.createElement("div");t.style.backgroundImage="url('paw"+r+".png')",a.appendChild(t),e.push(t)}shuffle(e),document.querySelector("#mainExit").addEventListener("click",function(){masterTL.progress(1)}),getAnimation(e)}function getAnimation(e){(masterTL=gsap.timeline({paused:!0})).add(introTL()),masterTL.add(frame3TL()),masterTL.add(frame4TL()),masterTL.add(endTL()),masterTL.play();var a=0;(pawTL=gsap.timeline({paused:!0})).add("animatePaws");for(let r=0;r<e.length;r++)pawTL.from(e[r],.1,{opacity:0,ease:Sine.easeOut},"animatePaws+="+a),a+=.2}function introTL(){return(tl=gsap.timeline({})).to("#loaderWrapper",.2,{opacity:0,ease:Sine.easeInOut},0),tl.from("#dogs",2.5,{scale:2,ease:Sine.easeOut},0),tl.from("#bg",2.5,{scale:1.1,ease:Sine.easeOut},0),tl.from(["#bgFront","#tower"],2.5,{scale:1.5,ease:Sine.easeOut},0),tl.from("#logoPP",1,{y:-150,ease:Sine.easeOut},.5),tl.from(["#footerWrapper","#text1"],1.5,{y:130,ease:"back.out(1.4)",onStart:function(){pawTL.play()}},"-=1"),tl.from("#highlight1Wrapper",.5,{width:0,ease:Sine.easeInOut},"-=0"),tl.to(["#highlight1Wrapper","#text1","#dogs","#tower","#logoPP"],.3,{opacity:0,ease:Sine.easeInOut},"+=1"),tl}function frame3TL(){return(tl=gsap.timeline({})).from("#text2",.5,{opacity:0,ease:Sine.easeOut},"+=0"),tl.from("#date",.5,{x:100,ease:Sine.easeOut},"-=0.5"),tl.to("#footerWrapper",2,{y:-14,ease:Sine.easeInOut},"-=0.5"),tl.from("#card1Wrapper",1,{x:-280,y:-40,rotation:-200,ease:Sine.easeOut},"-=1.5"),tl.from("#card2Wrapper",1,{x:-30,y:-140,rotation:-200,ease:Sine.easeOut},"-=1"),tl.from("#card3Wrapper",1,{x:150,y:20,rotation:200,ease:Sine.easeOut},"-=0.85"),tl.from("#highlight2Wrapper",.5,{width:0,ease:Sine.easeInOut},"-=0.1"),tl.to("#card1Wrapper .gradient",1,{y:230,ease:Sine.easeInOut},"-=1.5"),tl.to("#card2Wrapper .gradient",1,{y:230,ease:Sine.easeInOut},"-=0.7"),tl.to("#card3Wrapper .gradient",1,{y:230,ease:Sine.easeInOut},"-=0"),tl}function frame4TL(){return(tl=gsap.timeline({})).to("#card1Wrapper",.5,{rotationY:180,ease:Sine.easeInOut},"+=0"),tl.set("#card1Wrapper .cardDog",{opacity:1,ease:Sine.easeInOut},"-=0.25"),tl.to("#card2Wrapper",.5,{rotationY:180,ease:Sine.easeInOut},"-=0.4"),tl.set("#card2Wrapper .cardDog",{opacity:1,ease:Sine.easeInOut},"-=0.25"),tl.to("#card3Wrapper",.5,{rotationY:180,ease:Sine.easeInOut},"-=0.4"),tl.set(["#card3Wrapper .cardDog",".cardCorner"],{opacity:1,ease:Sine.easeInOut},"-=0.25"),tl.from("#cornerWrapper",1,{x:50,ease:Sine.easeOut},"+=0.3"),tl.from(["#cornerWrapper .card","#cornerWrapper .cardDog"],1,{x:-35,y:35,ease:Sine.easeOut},"-=1"),tl.from(".cardCorner",1,{x:7,y:35,ease:Sine.easeOut},"-=1"),tl.to(["#highlight2Wrapper","#text2"],.3,{opacity:0,ease:Sine.easeInOut},"+=1"),tl.to("#card1Wrapper",1,{x:-280,y:-40,rotation:-200,ease:Sine.easeIn},"-=0.3"),tl.to("#card2Wrapper",1,{x:-30,y:-140,rotation:-200,ease:Sine.easeIn},"-=0.9"),tl.to("#card3Wrapper",1,{x:150,y:20,rotation:200,ease:Sine.easeIn},"-=0.9"),tl}function endTL(){return(tl=gsap.timeline({})).from("#text3",.5,{opacity:0,ease:Sine.easeOut},"+=0"),tl.from("#logoExtra",.5,{opacity:0,ease:Sine.easeOut},"-=0.5"),tl.from("#poster",1,{scale:0,rotation:-180,transformOrigin:"45% 33%",ease:Back.easeOut},"-=0"),tl.set("#priceBlock",{opacity:1}),tl.from("#priceBlock",.5,{x:-98,ease:Sine.easeOut},"+=0"),tl.from("#highlight3Wrapper",.5,{width:0,ease:Sine.easeInOut},"-=0.1"),tl.from("#cta",.5,{scale:0,ease:Back.easeOut},"+=0.2"),tl}function shuffle(e){let a=e.length;for(;0!=a;){let r=Math.floor(Math.random()*a);a--,[e[a],e[r]]=[e[r],e[a]]}}myFT.on("ready",init);