window.onload = () => {
    let str = `
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    *::after,
    ::before {
        margin: 0;
        padding: 0;
    }
    
    body {
        background: relative;
        background-color: #FCE54D;
    }
    
    .nose {
        width: 0px;
        height: 0px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 200px;
        border: 10px solid;
        border-color: black transparent transparent transparent;
    }
    
    .nose2 {
        width: 18px;
        height: 6px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: -15px;
        border-radius: 12px 12px 0 0;
        background-color: black;
        border-color: black transparent transparent transparent;
    
    }
    
    .lefteye {
        border: 3px solid;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 160px;
        background-color: rgb(46, 46, 46);
        margin-left: -150px;
        animation: closeeye 3s ease infinite;
    }
    
    .lefteye-white,
    .righteye-white {
        width: 30px;
        height: 25px;
        background-color: white;
        border-radius: 50%;
        position: absolute;
        left: 20%;
        top: 10%;
    }
    
    .righteye {
        border: 3px solid;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        top: 160px;
        background-color: black;
        margin-left: 92px;
        background-color: rgb(46, 46, 46);
        animation: closeeye 3s ease infinite;
    }
    @keyframes closeeye {
        0% {
            transform: rotateX(89deg);
        }
    
        10% {
            transform: rotateX(0deg);
        }
    
        20% {
            transform: rotateX(0deg);
        }
    
        30% {
            transform: rotateX(0deg);
        }
    
        40% {
            transform: rotateX(0deg);
        }
    
        50% {
            transform: rotateX(0deg);
        }
    
        60% {
            transform: rotateX(0deg);
        }
    
        70% {
            transform: rotateX(0deg);
        }
    
        80% {
            transform: rotateX(0deg);
        }
        90% {
            transform: rotateX(0deg);
        }
        100% {
            transform: rotateX(89deg);
        }
    }

    .leftface {
        width: 80px;
        height: 80px;
        background-color: #EB3223;
        border-radius: 50%;
        border: 2px solid black;
        position: absolute;
        top: 260px;
        left: 50%;
        transform: translateX(-210px);
    }
    
    .rightface {
        width: 80px;
        height: 80px;
        background-color: #EB3223;
        border-radius: 50%;
        border: 2px solid black;
        position: absolute;
        top: 260px;
        left: 50%;
        transform: translateX(127px);
    }
    
    .mouth {
        width: 180px;
        height: 180px;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 239px;
        overflow: hidden;
    }
    
    .mouth1 {
        border: 3px solid black;
        width: 150px;
        height: 1000px;
        position: absolute;
        bottom: 0%;
        border-radius: 80px/300px;
        left: 50%;
        transform: translateX(-50%);
        overflow: hidden;
        background-color: #8E1B17;
    }
    
    .mouth2 {
        background-color: #EC5763;
        height: 150px;
        width: 180px;
        position: absolute;
        bottom: 0px;
        left: -15px;
        border-radius: 200px 200px 0 0;
    }
    
    .topmouth-r {
        top: 230px;
        position: absolute;
        width: 90px;
        height: 25px;
        border: 3px solid black;
        border-radius: 0px 0px 25px 0px;
        border-top: none;
        border-left: none;
        left: 50%;
        transform: rotate(20deg);
        background-color: rgb(252, 229, 77);
        z-index: 1;
    }
    
    .topmouth-l {
        top: 230px;
        position: absolute;
        width: 90px;
        height: 25px;
        border: 3px solid black;
        border-radius: 0px 25px 0px 0px;
        border-left: none;
        border-bottom: none;
        left: 50%;
        transform: translateX(-100%) rotate(160deg);
        background-color: rgb(252, 229, 77);
        z-index: 1;
    }
    
    
    .circle {
        width: 120px;
        height: 120px;
        position: absolute;
        left: 50%;
        top: 550px;
        margin-left: -60px;
        border-radius: 30px;
        background: rgb(221, 80, 75);
        background: linear-gradient(90deg, rgba(221, 80, 75, 1) 45%, rgba(0, 0, 0, 1) 45%, rgba(0, 0, 0, 1) 55%, rgba(255, 255, 255, 1) 55%);
        transform: rotate(90deg);
        display: flex;
        align-items: center;
    }
    
    .circle-2 {
        width: 40px;
        height: 40px;
        background-color: black;
        border-radius: 50%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    .circle-2::after {
        content: "";
        display: block;
        width: 20px;
        height: 20px;
        background-color: white;
        border-radius: 50%;
    }`

    let style = document.createElement('style')
    document.head.append(style)
    let str2 = ''
    let n = 0

    function write() {
        if (str[n] === '\n') {
            str2 += '</br>'
        } else {
            str2 += str[n]
        }
        style.innerHTML = str.substring(0, n)
        window.scroll(0, 99999)
        if (n >= str.length - 1) {
            return
        } else {
            setTimeout(() => {
                write()
            }, 2)
        }
        n++
    }
    write()
}