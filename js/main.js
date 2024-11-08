(() => {
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
  
  const infoBoxes = [ 
    {
      title: "LED Indicator",
      text: "Smart glow for instant updates.",
      image: "images/light.jpg"
    },
    {
      title: "Asthetic Design",
      text: "Striking aesthetics, seamless",
      image: "images/text.svg"
    },
    {
      title: "Speaker",
      text: "Precision-tuned for immersive audio",
      image: "images/speaker.jpg"
    },
    {
      title: "Charging Pins",
      text: "Snap-in convenience, fast power flow",
      image: "images/elec.jpg"
    }
  
  ]
  
  function loadInfo() {
    infoBoxes.forEach((infoBox, index)=>{
  
      let selected = document.querySelector(`#hotspot-${index+1}`);
  
      const title = document.createElement("h2");
      title.textContent= infoBox.title;
  
      const text = document.createElement("p");
      text.textContent = infoBox.text;
  
      image = document.createElement('img');
        image.src = infoBox.image;
        image.style.width = "100%"
  
      selected.appendChild(image);
      selected.appendChild(title);
      selected.appendChild(text);
    })
  }
  

  function modelLoaded() {
    loadInfo();
  }
  
  
    function showInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 1 });
    }
  
    function hideInfo() {
      let selected = document.querySelector(`#${this.slot}`);
      gsap.to(selected, 1, { autoAlpha: 0 });
    }
  
    
    model.addEventListener("load", modelLoaded);
  
    hotspots.forEach(function (hotspot) {
      hotspot.addEventListener("mouseenter", showInfo);
      hotspot.addEventListener("mouseleave", hideInfo);
    });
  
  })();
  
  