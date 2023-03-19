function updateDom(n) {
    let paths = "";
    
    let minY = -100 * Math.tan(Math.PI / 6) - 30;
    
    let delta = 1;
    let deltaDelta = 0.25
    
    for (let y = minY; y < 100; y += (delta += (deltaDelta += 0.01))) {
        let pA = [100, y];
        let pB = [0, y + 100 * Math.tan(Math.PI / 6)];
        let rA = 100 / 1.5;
        let thetaA = Math.PI * (-0.15 + 0.3 + 0.3 * Math.sin(y / 150 + 0.6 + n / 100));
        let rB = 100 / 2;
        let thetaB = Math.PI * (-0.2 + 0.3 + 0.3 * Math.sin(y / 150 + 1.3 + n / 110));
        let d = "M" + pA[0] + "," + pA[1] +
                "C" +
                (pA[0] - rA * Math.cos(thetaA)) + "," +
                (pA[1] + rA * Math.sin(thetaA)) + "," +
                (pB[0] + rB * Math.cos(thetaB)) + "," +
                (pB[1] - rB * Math.sin(thetaB)) + "," +
                pB[0] + "," + pB[1]
        
        paths += "<path d='" + d + "' class='net'></path>"
    }
    
    let maxX = 100 + 100 * Math.tan(Math.PI / 6);
    
    delta = 1;
    deltaDelta = 0.3;
    
    for (let x = 0; x < maxX; x += (delta += (deltaDelta += 0.01))) {
        let pA = [x, 0];
        let pB = [x - 100 * Math.tan(Math.PI / 6), 100];
        let rA = 100 / 3;
        let thetaA = Math.PI * (0.6 + 0.15 * Math.sin(x / 150 + 0.3 + n / 120));
        let rB = 100 / 3;
        let thetaB = Math.PI * (0.5 + 0.15 * Math.sin(x / 150 + 1.9 + n / 200));
        let d = "M" + (100 - pA[0]) + "," + pA[1] +
                "C" +
                ((100 - pA[0]) - rA * Math.cos(thetaA)) + "," +
                (pA[1] + rA * Math.sin(thetaA)) + "," +
                ((100 - pB[0]) + rB * Math.cos(thetaB)) + "," +
                (pB[1] - rB * Math.sin(thetaB)) + "," +
                (100 - pB[0]) + "," + pB[1]
        
        paths += "<path d='" + d + "' class='net'></path>"
    }
 
    document.getElementById("svg-net").innerHTML = paths;
    setTimeout(updateDom, 100, n + 1);
}

updateDom(18000)

window.onresize = () => {
    let heightProbe = document.getElementById("height-probe");
    let titleRect = document.getElementById("title-bounds");
    let titleCutRect = document.getElementById("title-out-rect");
    let titleCutText = document.getElementById("title-out-text");
    let scale = titleRect.getBoundingClientRect().width / 703.81;
    titleCutText.setAttribute(
        "transform",
        "translate(" + (window.innerWidth - titleRect.getBoundingClientRect().width) / 2 + ", " +
        (heightProbe.offsetHeight - titleRect.getBoundingClientRect().height)/2 + ")" +
        "scale(" + scale + "," + scale + ") "
    )
    titleCutRect.setAttribute("width", window.innerWidth + "");
    titleCutRect.setAttribute("height", heightProbe.offsetHeight + "");
}

window.onload = () => {
    window.onresize();
}